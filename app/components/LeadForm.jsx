'use client';

import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

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
      // Send data to Pabbly Webhook
      const response = await fetch(
        'https://connect.pabbly.com/webhook-listener/webhook/IjU3NjMwNTZkMDYzNjA0M2Q1MjY0NTUzMSI_3D_pc/IjU3NjcwNTZlMDYzZTA0M2Q1MjZlNTUzYzUxMzEi_pc',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        console.warn('Webhook responded with status', response.status);
      }
    } catch (error) {
      // Gracefully catch errors (e.g. ad-blocker blocking the webhook request)
      console.error('Webhook submission error:', error);
    } finally {
      // Always redirect to the thankyou page to ensure optimal user experience
      router.push('/thankyou');
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