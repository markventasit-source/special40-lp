'use client';

import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const ATTRIBUTION_STORAGE_KEY = 'lead_attribution_v1';
const ATTRIBUTION_KEYS = [
  'source',
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'fbclid',
  'gclid',
  'wbraid',
  'gbraid',
  'msclkid',
  'referrer_url',
  'landing_page',
  'first_seen_at',
];

function detectSource(data) {
  const utmSource = (data.utm_source || '').toLowerCase();
  const referrer = (data.referrer_url || '').toLowerCase();

  if (utmSource) return utmSource;
  if (data.fbclid) return 'meta';
  if (data.gclid || data.wbraid || data.gbraid) return 'google';
  if (referrer.includes('facebook.com') || referrer.includes('instagram.com')) return 'meta-organic';
  if (referrer.includes('google.')) return 'google-organic';
  if (!referrer) return 'direct';
  return 'unknown';
}

function getCurrentAttribution() {
  if (typeof window === 'undefined') return {};

  const params = new URLSearchParams(window.location.search);
  const attribution = {
    utm_source: params.get('utm_source') || '',
    utm_medium: params.get('utm_medium') || '',
    utm_campaign: params.get('utm_campaign') || '',
    utm_content: params.get('utm_content') || '',
    utm_term: params.get('utm_term') || '',
    fbclid: params.get('fbclid') || '',
    gclid: params.get('gclid') || '',
    wbraid: params.get('wbraid') || '',
    gbraid: params.get('gbraid') || '',
    msclkid: params.get('msclkid') || '',
    referrer_url: document.referrer || '',
    landing_page: window.location.href,
  };

  return attribution;
}

// Added bgColor prop with your original hero-level teal color as the fallback default
export default function LeadForm({ bgColor = "bg-[#09636E]" }) {
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    name: '',
    qualification: '',
    phone: '',
    email: '',
    location: '',
    reason: '',
    other: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [attributionData, setAttributionData] = useState({});

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let storedAttribution = {};
    try {
      const raw = window.localStorage.getItem(ATTRIBUTION_STORAGE_KEY);
      storedAttribution = raw ? JSON.parse(raw) : {};
    } catch (error) {
      console.warn('Failed to parse stored attribution data:', error);
    }

    const currentAttribution = getCurrentAttribution();
    const mergedAttribution = {
      ...storedAttribution,
      ...currentAttribution,
    };

    mergedAttribution.first_seen_at =
      storedAttribution.first_seen_at || new Date().toISOString();
    mergedAttribution.source = detectSource(mergedAttribution);

    setAttributionData(mergedAttribution);
    window.localStorage.setItem(
      ATTRIBUTION_STORAGE_KEY,
      JSON.stringify(mergedAttribution)
    );
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.qualification) {
      alert("Please select your qualification.");
      return;
    }
    if (!formData.reason) {
      alert("Please select a reason for choosing the program.");
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        ...formData,
        ...ATTRIBUTION_KEYS.reduce((acc, key) => {
          acc[key] = attributionData[key] || '';
          return acc;
        }, {}),
      };

      // Send data to our same-origin server proxy route to avoid CORS constraints
      const response = await fetch(
        '/api/submit-lead',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        console.warn('API route responded with status', response.status);
      }
    } catch (error) {
      // Gracefully catch errors
      console.error('API submission error:', error);
    } finally {
      // Fire Meta Pixel lead event (browser-side)
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'Lead', {
          em: formData.email,       // email (Meta hashes it automatically)
          ph: formData.phone,       // phone
          fn: formData.name,        // first name
          ct: formData.location,    // city
          content_name: formData.qualification,
          status: formData.reason,
        });
      }
      // Always redirect to the thankyou page to ensure optimal user experience
      const nameParam = formData.name ? `?name=${encodeURIComponent(formData.name.trim())}` : '';
      router.push(`/thankyou${nameParam}`);
    }
  };

  return (
    <div className={`w-full ${bgColor} px-2 py-6 md:p-8 shadow-xl text-white transition-colors duration-300`}>
      <form className="space-y-5" onSubmit={handleSubmit}>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col space-y-1.5">
            <label className="text-[16px] pl-2 font-medium text-gray-200">Your Name*</label>
            <input
              type="text"
              placeholder="John Doe"
              className="bg-black/15 text-white placeholder-gray-400 text-sm p-3 rounded border border-transparent focus:border-[#F9A53C] focus:outline-none transition-colors disabled:opacity-50"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              disabled={isSubmitting}
              required
            />
          </div>

          <div className="flex flex-col space-y-1.5">
            <label className="text-[16px] pl-2 font-medium text-gray-200">Qualification*</label>
            <Select
              value={formData.qualification}
              onValueChange={(val) => setFormData({ ...formData, qualification: val })}
              disabled={isSubmitting}
              required
            >
              <SelectTrigger className="w-full bg-black/15 text-white text-sm p-3 h-auto rounded border border-transparent focus:border-[#F9A53C] focus:ring-0 focus:outline-none transition-colors [&>svg]:text-gray-300 disabled:opacity-50">
                <SelectValue placeholder="Select your qualification" className="text-gray-400" />
              </SelectTrigger>
              <SelectContent className="bg-white text-gray-900">
                {/* <SelectItem value="ba-economics">BA Economics</SelectItem> */}
                <SelectItem value="bcom">B.Com</SelectItem>
                <SelectItem value="mcom">M.Com</SelectItem>
                {/* <SelectItem value="bba">BBA</SelectItem> */}
                <SelectItem value="mba">MBA</SelectItem>
                <SelectItem value="ca-cma">CA / CMA (Inter or Final)</SelectItem>
                <SelectItem value="acca">ACCA (Qualified/Semi-Qualified)</SelectItem>
                {/* <SelectItem value="bsc-maths">BSc Mathematics / Statistics</SelectItem> */}
                {/* <SelectItem value="plus-two-commerce">Plus Two (Commerce)</SelectItem> */}
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col space-y-1.5">
            <label className="text-[16px] pl-2 font-medium text-gray-200">Phone (WhatsApp)*</label>
            <input
              type="tel"
              placeholder="+91 9946271580"
              className="bg-black/15 text-white placeholder-gray-400 text-sm p-3 rounded border border-transparent focus:border-[#F9A53C] focus:outline-none transition-colors disabled:opacity-50"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              disabled={isSubmitting}
              required
            />
          </div>

          <div className="flex flex-col space-y-1.5">
            <label className="text-[16px] pl-2 font-medium text-gray-200">Email*</label>
            <input
              type="email"
              placeholder="Johndoe@testmail.com"
              className="bg-black/15 text-white placeholder-gray-400 text-sm p-3 rounded border border-transparent focus:border-[#F9A53C] focus:outline-none transition-colors disabled:opacity-50"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              disabled={isSubmitting}
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col space-y-1.5">
            <label className="text-[16px] pl-2 font-medium text-gray-200">Location*</label>
            <input
              type="text"
              placeholder="Ernakulam"
              className="bg-black/15 text-white placeholder-gray-400 text-sm p-3 rounded border border-transparent focus:border-[#F9A53C] focus:outline-none transition-colors disabled:opacity-50"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              disabled={isSubmitting}
              required
            />
          </div>

          <div className="flex flex-col space-y-1.5">
            <label className="text-[16px] pl-2 font-medium text-gray-200">Reason for choosing the program*</label>
            <Select
              value={formData.reason}
              onValueChange={(val) => setFormData({ ...formData, reason: val })}
              disabled={isSubmitting}
              required
            >
              <SelectTrigger className="w-full bg-black/15 text-white text-sm p-3 h-auto rounded border border-transparent focus:border-[#F9A53C] focus:ring-0 focus:outline-none transition-colors [&>svg]:text-gray-300 disabled:opacity-50">
                <SelectValue placeholder="Select a reason" className="text-gray-400" />
              </SelectTrigger>
              <SelectContent className="bg-white text-gray-900">
                <SelectItem value="career-switch">Looking to switch to a finance/accounting career</SelectItem>
                <SelectItem value="skill-upgrade">Want to upgrade my existing skills</SelectItem>
                <SelectItem value="placement">Seeking better placement & job opportunities</SelectItem>
                <SelectItem value="higher-studies">Preparing for higher studies (CA, MBA, etc.)</SelectItem>
                <SelectItem value="entrepreneurship">Planning to start or manage my own business</SelectItem>
                <SelectItem value="industry-relevance">Course is industry-relevant and job-ready</SelectItem>
                <SelectItem value="reputation">Reputation & quality of the institute</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex flex-col space-y-1.5">
          <label className="text-[16px] pl-2 font-medium text-gray-200">Other</label>
          <textarea
            rows={2}
            className="bg-black/15 text-white text-sm p-3 rounded border border-transparent focus:border-[#F9A53C] focus:outline-none resize-none transition-colors disabled:opacity-50"
            value={formData.other}
            onChange={(e) => setFormData({ ...formData, other: e.target.value })}
            disabled={isSubmitting}
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-[#F9A53C] to-[#BA6502] text-[20px] text-white py-3.5 px-4 font-bold flex items-center justify-center gap-2 hover:brightness-110 shadow-md active:scale-[0.99] transition-all disabled:opacity-75 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                Submitting...
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              </>
            ) : (
              <>
                Apply Now <ArrowRight size={18} />
              </>
            )}
          </button>
        </div>

      </form>
    </div>
  );
}