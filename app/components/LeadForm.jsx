import React from 'react';
import { ArrowRight } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

// Added bgColor prop with your original hero-level teal color as the fallback default
export default function LeadForm({ bgColor = "bg-[#09636E]" }) {
  return (
    <div className={`w-full ${bgColor} px-2 py-6 md:p-8 shadow-xl text-white transition-colors duration-300`}>
      <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col space-y-1.5">
            <label className="text-[16px] pl-2 font-medium text-gray-200">Your Name*</label>
            <input
              type="text"
              placeholder="John Doe"
              className="bg-black/15 text-white placeholder-gray-400 text-sm p-3 rounded border border-transparent focus:border-[#F9A53C] focus:outline-none transition-colors"
              required
            />
          </div>

          <div className="flex flex-col space-y-1.5">
            <label className="text-[16px] pl-2 font-medium text-gray-200">Qualification*</label>
            <Select required>
              <SelectTrigger className="w-full bg-black/15 text-white text-sm p-3 h-auto rounded border border-transparent focus:border-[#F9A53C] focus:ring-0 focus:outline-none transition-colors [&>svg]:text-gray-300">
                <SelectValue placeholder="Select your qualification" className="text-gray-400" />
              </SelectTrigger>
              <SelectContent className="bg-white text-gray-900">
                <SelectItem value="ba-economics">BA Economics</SelectItem>
                <SelectItem value="bcom">B.Com</SelectItem>
                <SelectItem value="mcom">M.Com</SelectItem>
                <SelectItem value="bba">BBA</SelectItem>
                <SelectItem value="mba">MBA</SelectItem>
                <SelectItem value="ca-cma">CA / CMA (Inter or Final)</SelectItem>
                <SelectItem value="bsc-maths">BSc Mathematics / Statistics</SelectItem>
                <SelectItem value="plus-two-commerce">Plus Two (Commerce)</SelectItem>
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
              placeholder="+91 9995 1235 4565"
              className="bg-black/15 text-white placeholder-gray-400 text-sm p-3 rounded border border-transparent focus:border-[#F9A53C] focus:outline-none transition-colors"
              required
            />
          </div>

          <div className="flex flex-col space-y-1.5">
            <label className="text-[16px] pl-2 font-medium text-gray-200">Email*</label>
            <input
              type="email"
              placeholder="Johndoe@testmail.com"
              className="bg-black/15 text-white placeholder-gray-400 text-sm p-3 rounded border border-transparent focus:border-[#F9A53C] focus:outline-none transition-colors"
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
              className="bg-black/15 text-white placeholder-gray-400 text-sm p-3 rounded border border-transparent focus:border-[#F9A53C] focus:outline-none transition-colors"
              required
            />
          </div>

          <div className="flex flex-col space-y-1.5">
            <label className="text-[16px] pl-2 font-medium text-gray-200">Reason for choosing the program*</label>
            <Select required>
              <SelectTrigger className="w-full bg-black/15 text-white text-sm p-3 h-auto rounded border border-transparent focus:border-[#F9A53C] focus:ring-0 focus:outline-none transition-colors [&>svg]:text-gray-300">
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
            className="bg-black/15 text-white text-sm p-3 rounded border border-transparent focus:border-[#F9A53C] focus:outline-none resize-none transition-colors"
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#F9A53C] to-[#BA6502] text-[20px] text-white py-3.5 px-4 font-bold flex items-center justify-center gap-2 hover:brightness-110 shadow-md active:scale-[0.99] transition-all"
          >
            Apply Now <ArrowRight size={18} />
          </button>
        </div>

      </form>
    </div>
  );
}