import { MongoClient, type MongoClientOptions } from 'mongodb';

const uri = process.env.MONGODB_URI;

const options: MongoClientOptions = {
  serverSelectionTimeoutMS: 10000,
  connectTimeoutMS: 10000,
};

const globalWithMongo = global as typeof globalThis & {
  _mongoClient?: MongoClient;
  _mongoClientPromise?: Promise<MongoClient>;
};

function createClientPromise(): Promise<MongoClient> {
  if (!uri) {
    return Promise.reject(new Error('MONGODB_URI is not configured'));
  }

  const client = new MongoClient(uri, options);
  return client.connect().then((connectedClient) => {
    globalWithMongo._mongoClient = connectedClient;
    return connectedClient;
  });
}

export default function getMongoClient(): Promise<MongoClient> {
  if (globalWithMongo._mongoClientPromise) {
    return globalWithMongo._mongoClientPromise;
  }

  globalWithMongo._mongoClientPromise = createClientPromise().catch((error) => {
    // Clear cached promise so the next request can retry after a transient failure.
    globalWithMongo._mongoClientPromise = undefined;
    globalWithMongo._mongoClient = undefined;
    throw error;
  });

  return globalWithMongo._mongoClientPromise;
}
