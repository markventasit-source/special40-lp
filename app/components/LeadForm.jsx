import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

// Added bgColor prop with your original hero-level teal color as the fallback default
export default function LeadForm({ bgColor = "bg-[#09636E]" }) {
  return (
    <div className={`w-full ${bgColor} p-6 md:p-8 shadow-xl text-white transition-colors duration-300`}>
      <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col space-y-1.5">
            <label className="text-xs font-medium text-gray-200">Your Name*</label>
            <input
              type="text"
              placeholder="John Doe"

              className="bg-black/15 text-white placeholder-gray-400 text-sm p-3 rounded border border-transparent focus:border-[#F9A53C] focus:outline-none transition-colors"
              required
            />
          </div>

          <div className="flex flex-col space-y-1.5 relative">
            <label className="text-xs font-medium text-gray-200">Qualification*</label>
            <div className="relative flex items-center">
              <select className="w-full bg-black/15 text-white text-sm p-3 rounded border border-transparent focus:border-[#F9A53C] focus:outline-none appearance-none cursor-pointer transition-colors pr-10">
                <option className="text-gray-900">BA Economics</option>
                <option className="text-gray-900">B.Com</option>
                <option className="text-gray-900">M.Com</option>
                <option className="text-gray-900">Other</option>
              </select>
              <ChevronDown size={16} className="absolute right-3 text-gray-300 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col space-y-1.5">
            <label className="text-xs font-medium text-gray-200">Phone (WhatsApp)*</label>
            <input
              type="tel"
              placeholder="+91 9995 1235 4565"
              className="bg-black/15 text-white placeholder-gray-400 text-sm p-3 rounded border border-transparent focus:border-[#F9A53C] focus:outline-none transition-colors"
              required
            />
          </div>

          <div className="flex flex-col space-y-1.5">
            <label className="text-xs font-medium text-gray-200">Email*</label>
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
            <label className="text-xs font-medium text-gray-200">Location*</label>
            <input
              type="text"
              placeholder="Ernakulam"
              className="bg-black/15 text-white placeholder-gray-400 text-sm p-3 rounded border border-transparent focus:border-[#F9A53C] focus:outline-none transition-colors"
              required
            />
          </div>

          <div className="flex flex-col space-y-1.5 relative">
            <label className="text-xs font-medium text-gray-200">Reason for choosing the program*</label>
            <div className="relative flex items-center">
              <select className="w-full bg-black/15 text-white text-sm p-3 rounded border border-transparent focus:border-[#F9A53C] focus:outline-none appearance-none cursor-pointer transition-colors pr-10">
                <option className="text-gray-900">BA Economics</option>
                <option className="text-gray-900">Career Growth</option>
                <option className="text-gray-900">Practical Placement</option>
              </select>
              <ChevronDown size={16} className="absolute right-3 text-gray-300 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-1.5">
          <label className="text-xs font-medium text-gray-200">Other</label>
          <textarea
            rows={2}
            className="bg-black/15 text-white text-sm p-3 rounded border border-transparent focus:border-[#F9A53C] focus:outline-none resize-none transition-colors"
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#F9A53C] to-[#BA6502] text-white py-3.5 px-4 font-semibold flex items-center justify-center gap-2 hover:brightness-110 shadow-md active:scale-[0.99] transition-all"
          >
            Apply Now <ArrowRight size={18} />
          </button>
        </div>

      </form>
    </div>
  );
}