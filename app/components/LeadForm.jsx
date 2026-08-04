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

const SOURCE_STORAGE_KEY = 'lead_source_v1';
const VALID_SOURCES = ['facebook', 'instagram', 'google', 'direct', 'unknown'];

const FIELD_LIMITS = {
  name: 80,
  phone: 15,
  email: 254,
  location: 100,
  other: 500,
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const NAME_REGEX = /^[a-zA-Z\s.'-]+$/;

function normalizePhone(phone) {
  return phone.replace(/[\s-]/g, '');
}

function isValidPhone(phone) {
  const normalized = normalizePhone(phone.trim());
  return /^(\+91)?[6-9]\d{9}$/.test(normalized);
}

function validateField(field, value) {
  const trimmed = value.trim();

  switch (field) {
    case 'name':
      if (!trimmed) return 'Please enter your name.';
      if (trimmed.length < 2) return 'Name should be at least 2 characters.';
      if (trimmed.length > FIELD_LIMITS.name) return `Name should not exceed ${FIELD_LIMITS.name} characters.`;
      if (!NAME_REGEX.test(trimmed)) return 'Name can include only letters, spaces, dots, hyphens, and apostrophes.';
      return '';
    case 'phone':
      if (!trimmed) return 'Please enter your WhatsApp number.';
      if (trimmed.length > FIELD_LIMITS.phone) return `Phone number should not exceed ${FIELD_LIMITS.phone} characters.`;
      if (!isValidPhone(trimmed)) return 'Please enter a valid Indian mobile number, for example 9876543210 or +91 9876543210.';
      return '';
    case 'email':
      if (!trimmed) return 'Please enter your email address.';
      if (trimmed.length > FIELD_LIMITS.email) return `Email should not exceed ${FIELD_LIMITS.email} characters.`;
      if (!EMAIL_REGEX.test(trimmed)) return 'Please enter a valid email address, for example name@example.com.';
      return '';
    case 'location':
      if (!trimmed) return 'Please enter your location.';
      if (trimmed.length < 2) return 'Location should be at least 2 characters.';
      if (trimmed.length > FIELD_LIMITS.location) return `Location should not exceed ${FIELD_LIMITS.location} characters.`;
      return '';
    case 'other':
      if (value.length > FIELD_LIMITS.other) return `Other details should not exceed ${FIELD_LIMITS.other} characters.`;
      return '';
    default:
      return '';
  }
}

function validateForm(data) {
  const errors = {};

  ['name', 'phone', 'email', 'location', 'other'].forEach((field) => {
    const message = validateField(field, data[field]);
    if (message) errors[field] = message;
  });

  if (!data.qualification) errors.qualification = 'Please select your qualification.';
  if (!data.reason) errors.reason = 'Please select why you are choosing this program.';

  return errors;
}

function getInputClass(hasError, multiline = false) {
  return `bg-black/15 text-white placeholder-gray-400 text-sm p-3 rounded border ${
    hasError ? 'border-red-400' : 'border-transparent'
  } focus:border-[#F9A53C] focus:outline-none transition-colors disabled:opacity-50${
    multiline ? ' resize-none' : ''
  }`;
}

function getSelectTriggerClass(hasError) {
  return `w-full bg-black/15 text-white text-sm p-3 h-auto rounded border ${
    hasError ? 'border-red-400' : 'border-transparent'
  } focus:border-[#F9A53C] focus:ring-0 focus:outline-none transition-colors [&>svg]:text-gray-300 disabled:opacity-50`;
}

function FieldError({ id, message }) {
  if (!message) return null;

  return (
    <p id={id} className="text-red-300 text-xs pl-2" role="alert">
      {message}
    </p>
  );
}

function detectSource() {
  if (typeof window === 'undefined') return 'unknown';

  const params = new URLSearchParams(window.location.search);
  const sourceParam = (params.get('source') || '').toLowerCase();

  if (VALID_SOURCES.includes(sourceParam)) return sourceParam;

  if (params.get('fbclid')) return 'facebook';
  if (params.get('gclid') || params.get('wbraid') || params.get('gbraid')) return 'google';

  const referrer = (document.referrer || '').toLowerCase();
  if (referrer.includes('instagram.com')) return 'instagram';
  if (referrer.includes('facebook.com')) return 'facebook';
  if (referrer.includes('google.')) return 'google';
  if (!referrer) return 'direct';

  return 'unknown';
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
  const [source, setSource] = useState('unknown');
  const [errors, setErrors] = useState({});

  const handleFieldChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: validateField(field, value) }));
    }
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let storedSource = '';
    try {
      const raw = window.localStorage.getItem(SOURCE_STORAGE_KEY);
      storedSource = raw ? JSON.parse(raw).source : '';
    } catch (error) {
      console.warn('Failed to parse stored source:', error);
    }

    const detectedSource = detectSource();
    const params = new URLSearchParams(window.location.search);
    const sourceParam = (params.get('source') || '').toLowerCase();
    const hasExplicitSource = ['facebook', 'instagram', 'google'].includes(sourceParam);

    const finalSource = hasExplicitSource ? sourceParam : (storedSource || detectedSource);

    setSource(finalSource);
    window.localStorage.setItem(SOURCE_STORAGE_KEY, JSON.stringify({ source: finalSource }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Fire Google Ads lead form submission event immediately (browser-side)
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'Special_40_lead_form_submission', {
        send_to: 'AW-18354990280',
        value: 1.0,
        currency: 'INR',
      });
    }

    try {
      const payload = {
        ...formData,
        source,
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
      // Small delay lets gtag.js dispatch the lead event before client-side navigation
      const nameParam = formData.name ? `?name=${encodeURIComponent(formData.name.trim())}` : '';
      const thankyouUrl = `/thankyou${nameParam}`;
      if (typeof window !== 'undefined' && window.gtag) {
        setTimeout(() => router.push(thankyouUrl), 300);
      } else {
        router.push(thankyouUrl);
      }
    }
  };

  return (
    <div className={`w-full ${bgColor} px-2 py-6 md:p-8 shadow-xl text-white transition-colors duration-300`}>
      <form className="space-y-5" onSubmit={handleSubmit} noValidate>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col space-y-1.5">
            <label className="text-[16px] pl-2 font-medium text-gray-200">Your Name*</label>
            <input
              type="text"
              placeholder="John Doe"
              className={getInputClass(errors.name)}
              value={formData.name}
              onChange={(e) => handleFieldChange('name', e.target.value)}
              maxLength={FIELD_LIMITS.name}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'name-error' : undefined}
              disabled={isSubmitting}
              required
            />
            <FieldError id="name-error" message={errors.name} />
          </div>

          <div className="flex flex-col space-y-1.5">
            <label className="text-[16px] pl-2 font-medium text-gray-200">Qualification*</label>
            <Select
              value={formData.qualification}
              onValueChange={(val) => {
                setFormData({ ...formData, qualification: val });
                if (errors.qualification) {
                  setErrors((prev) => ({ ...prev, qualification: '' }));
                }
              }}
              disabled={isSubmitting}
              required
            >
              <SelectTrigger className={getSelectTriggerClass(errors.qualification)}>
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
            <FieldError id="qualification-error" message={errors.qualification} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col space-y-1.5">
            <label className="text-[16px] pl-2 font-medium text-gray-200">Phone (WhatsApp)*</label>
            <input
              type="tel"
              placeholder="+91 9946271580"
              className={getInputClass(errors.phone)}
              value={formData.phone}
              onChange={(e) => handleFieldChange('phone', e.target.value)}
              maxLength={FIELD_LIMITS.phone}
              inputMode="tel"
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
              disabled={isSubmitting}
              required
            />
            <FieldError id="phone-error" message={errors.phone} />
          </div>

          <div className="flex flex-col space-y-1.5">
            <label className="text-[16px] pl-2 font-medium text-gray-200">Email*</label>
            <input
              type="email"
              placeholder="Johndoe@testmail.com"
              className={getInputClass(errors.email)}
              value={formData.email}
              onChange={(e) => handleFieldChange('email', e.target.value)}
              maxLength={FIELD_LIMITS.email}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
              disabled={isSubmitting}
              required
            />
            <FieldError id="email-error" message={errors.email} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col space-y-1.5">
            <label className="text-[16px] pl-2 font-medium text-gray-200">Location*</label>
            <input
              type="text"
              placeholder="Ernakulam"
              className={getInputClass(errors.location)}
              value={formData.location}
              onChange={(e) => handleFieldChange('location', e.target.value)}
              maxLength={FIELD_LIMITS.location}
              aria-invalid={Boolean(errors.location)}
              aria-describedby={errors.location ? 'location-error' : undefined}
              disabled={isSubmitting}
              required
            />
            <FieldError id="location-error" message={errors.location} />
          </div>

          <div className="flex flex-col space-y-1.5">
            <label className="text-[16px] pl-2 font-medium text-gray-200">Reason for choosing the program*</label>
            <Select
              value={formData.reason}
              onValueChange={(val) => {
                setFormData({ ...formData, reason: val });
                if (errors.reason) {
                  setErrors((prev) => ({ ...prev, reason: '' }));
                }
              }}
              disabled={isSubmitting}
              required
            >
              <SelectTrigger className={getSelectTriggerClass(errors.reason)}>
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
            <FieldError id="reason-error" message={errors.reason} />
          </div>
        </div>

        <div className="flex flex-col space-y-1.5">
          <label className="text-[16px] pl-2 font-medium text-gray-200">Other</label>
          <textarea
            rows={2}
            className={getInputClass(errors.other, true)}
            value={formData.other}
            onChange={(e) => handleFieldChange('other', e.target.value)}
            maxLength={FIELD_LIMITS.other}
            aria-invalid={Boolean(errors.other)}
            aria-describedby={errors.other ? 'other-error' : undefined}
            disabled={isSubmitting}
          />
          <FieldError id="other-error" message={errors.other} />
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