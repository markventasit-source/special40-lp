'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
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
const FORM_SUBMITTED_KEY = 'special40_form_submitted';
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
      if (trimmed.length > FIELD_LIMITS.name)
        return `Name should not exceed ${FIELD_LIMITS.name} characters.`;
      if (!NAME_REGEX.test(trimmed))
        return 'Name can include only letters, spaces, dots, hyphens, and apostrophes.';
      return '';
    case 'phone':
      if (!trimmed) return 'Please enter your WhatsApp number.';
      if (trimmed.length > FIELD_LIMITS.phone)
        return `Phone number should not exceed ${FIELD_LIMITS.phone} characters.`;
      if (!isValidPhone(trimmed))
        return 'Please enter a valid Indian mobile number, for example 9876543210 or +91 9876543210.';
      return '';
    case 'email':
      if (!trimmed) return 'Please enter your email address.';
      if (trimmed.length > FIELD_LIMITS.email)
        return `Email should not exceed ${FIELD_LIMITS.email} characters.`;
      if (!EMAIL_REGEX.test(trimmed))
        return 'Please enter a valid email address, for example name@example.com.';
      return '';
    case 'location':
      if (!trimmed) return 'Please enter your location.';
      if (trimmed.length < 2) return 'Location should be at least 2 characters.';
      if (trimmed.length > FIELD_LIMITS.location)
        return `Location should not exceed ${FIELD_LIMITS.location} characters.`;
      return '';
    case 'other':
      if (value.length > FIELD_LIMITS.other)
        return `Other details should not exceed ${FIELD_LIMITS.other} characters.`;
      return '';
    default:
      return '';
  }
}

function validateStep1(data) {
  const errors = {};
  ['name', 'phone'].forEach((field) => {
    const message = validateField(field, data[field]);
    if (message) errors[field] = message;
  });
  return errors;
}

function validateForm(data) {
  const errors = {};

  ['name', 'phone', 'email', 'location', 'other'].forEach((field) => {
    const message = validateField(field, data[field]);
    if (message) errors[field] = message;
  });

  if (!data.qualification)
    errors.qualification = 'Please select your qualification.';
  if (!data.reason)
    errors.reason = 'Please select why you are choosing this program.';

  return errors;
}

function detectSource() {
  if (typeof window === 'undefined') return 'unknown';

  const params = new URLSearchParams(window.location.search);
  const sourceParam = (params.get('source') || '').toLowerCase();

  if (VALID_SOURCES.includes(sourceParam)) return sourceParam;
  if (params.get('fbclid')) return 'facebook';
  if (params.get('gclid') || params.get('wbraid') || params.get('gbraid'))
    return 'google';

  const referrer = (document.referrer || '').toLowerCase();
  if (referrer.includes('instagram.com')) return 'instagram';
  if (referrer.includes('facebook.com')) return 'facebook';
  if (referrer.includes('google.')) return 'google';
  if (!referrer) return 'direct';

  return 'unknown';
}

function FieldError({ id, message }) {
  if (!message) return null;

  return (
    <p id={id} className="pl-1 text-xs text-red-500" role="alert">
      {message}
    </p>
  );
}

export default function MobileLeadForm() {
  const router = useRouter();
  const [step, setStep] = useState(1);
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
  const [hasSubmitted, setHasSubmitted] = useState(false);
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
    const hasExplicitSource = ['facebook', 'instagram', 'google'].includes(
      sourceParam,
    );

    const finalSource = hasExplicitSource
      ? sourceParam
      : storedSource || detectedSource;

    setSource(finalSource);
    window.localStorage.setItem(
      SOURCE_STORAGE_KEY,
      JSON.stringify({ source: finalSource }),
    );

    setHasSubmitted(
      window.sessionStorage.getItem(FORM_SUBMITTED_KEY) === 'true',
    );
  }, []);

  const handleContinue = (e) => {
    e.preventDefault();

    const validationErrors = validateStep1(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return false;
    }

    setErrors({});
    setStep(2);
    return true;
  };

  const handleSubmit = async (e, { openWhatsApp = false } = {}) => {
    if (e) e.preventDefault();

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const payload = {
        ...formData,
        source,
      };

      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        console.warn('API route responded with status', response.status);
      }

      if (typeof window !== 'undefined') {
        window.sessionStorage.setItem('special40_lead_event_sent', 'true');
        window.sessionStorage.setItem(FORM_SUBMITTED_KEY, 'true');
        setHasSubmitted(true);
        if (window.gtag) {
          window.gtag('event', 'conversion', {
            send_to: 'AW-18354990280/KMJ8CLS2-OIcEMjZq7BE',
            value: 1.0,
            currency: 'INR',
          });
          window.gtag('event', 'Special_40_lead_form_submission', {
            value: 1.0,
            currency: 'INR',
          });
          window.gtag('event', 'Special_40_Lead_track', {});
        }
      }
    } catch (error) {
      console.error('API submission error:', error);
    } finally {
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'Lead', {
          em: formData.email,
          ph: formData.phone,
          fn: formData.name,
          ct: formData.location,
          content_name: formData.qualification,
          status: formData.reason,
        });
      }

      if (openWhatsApp && typeof window !== 'undefined') {
        window.open('https://wa.me/', '_blank', 'noopener,noreferrer');
      }

      const nameParam = formData.name
        ? `?name=${encodeURIComponent(formData.name.trim())}`
        : '';
      const thankyouUrl = `/thankyou${nameParam}`;

      if (typeof window !== 'undefined' && window.gtag) {
        setTimeout(() => router.push(thankyouUrl), 300);
      } else {
        router.push(thankyouUrl);
      }
    }
  };

  const handleWhatsAppClick = (e) => {
    e.preventDefault();

    if (hasSubmitted) {
      window.open('https://wa.me/', '_blank', 'noopener,noreferrer');
      return;
    }

    if (step === 1) {
      handleContinue(e);
      return;
    }

    handleSubmit(e, { openWhatsApp: true });
  };

  const inputClass = (field) =>
    `w-full rounded-lg border bg-white px-4 py-3.5 text-[14px] text-[#242424] placeholder:text-[#B0B0B0] focus:border-[#09636E] focus:outline-none ${
      errors[field] ? 'border-red-400' : 'border-[#E2E2E2]'
    }`;

  const selectTriggerClass = (field) =>
    `w-full rounded-lg border bg-white px-4 py-3.5 text-[14px] text-[#242424] h-auto focus:border-[#09636E] focus:ring-0 focus:outline-none [&>svg]:text-[#999] ${
      errors[field] ? 'border-red-400' : 'border-[#E2E2E2]'
    }`;

  return (
    <section
      id="assessment-form"
      className="w-full px-4 pb-24 font-inter max-[499px]:block min-[500px]:hidden"
    >
      <div
        className="relative overflow-hidden rounded-2xl px-5 pb-6 pt-6 shadow-sm"
        style={{
          background:
            'linear-gradient(135deg, #FEEEB7 0%, #FFFFFF 70%, #FFFFFF 100%)',
        }}
      >
        {/* Top-right decorative image */}
        <div className="pointer-events-none absolute -right-0 -top-0">
          <Image
            src="/top.png"
            alt=""
            width={120}
            height={100}
            className="w-[150px] scale-x-[-1]"
          />
        </div>

        <div className="relative z-10">
          <h2 className="max-w-[260px] text-[26px] font-semibold leading-[29px] text-[#242424]">
            Onam Offer
            <br />
            40 seats this batch
          </h2>

          <p className="mt-3 max-w-[320px] text-[15px] font-normal leading-[23px] text-[#555454]">
            ₹35,000, all taxes included. Offer ends , 31 Aug. Start
            with two fields, we&apos;ll ask the rest after you&apos;ve applied.
          </p>

          {step === 1 ? (
            <form className="mt-6 space-y-4" onSubmit={handleContinue} noValidate>
              <div className="space-y-1.5">
                <label className="text-[14px] font-normal leading-[100%] text-[#555454]">
                  Your Name*
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className={inputClass('name')}
                  value={formData.name}
                  onChange={(e) => handleFieldChange('name', e.target.value)}
                  maxLength={FIELD_LIMITS.name}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'mobile-name-error' : undefined}
                  disabled={isSubmitting}
                  required
                />
                <FieldError id="mobile-name-error" message={errors.name} />
              </div>

              <div className="space-y-1.5">
                <label className="text-[14px] font-normal leading-[100%] text-[#555454]">
                  Phone / WhatsApp
                </label>
                <input
                  type="tel"
                  placeholder="10-Digit number"
                  className={inputClass('phone')}
                  value={formData.phone}
                  onChange={(e) => handleFieldChange('phone', e.target.value)}
                  maxLength={FIELD_LIMITS.phone}
                  inputMode="tel"
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? 'mobile-phone-error' : undefined}
                  disabled={isSubmitting}
                  required
                />
                <FieldError id="mobile-phone-error" message={errors.phone} />
              </div>

              <button
                type="submit"
                className="mt-2 flex w-full items-center justify-center gap-2 bg-[#09636E] py-4 text-[16px] font-normal leading-[100%] text-white active:scale-[0.98]"
                style={{ borderRadius: 60 }}
              >
                Continue <ArrowRight size={16} />
              </button>
            </form>
          ) : (
            <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
              <div className="space-y-1.5">
                <label className="text-[14px] font-normal leading-[100%] text-[#555454]">
                  Qualification*
                </label>
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
                  <SelectTrigger className={selectTriggerClass('qualification')}>
                    <SelectValue placeholder="Select your qualification" />
                  </SelectTrigger>
                  <SelectContent className="bg-white text-gray-900">
                    <SelectItem value="bcom">B.Com</SelectItem>
                    <SelectItem value="mcom">M.Com</SelectItem>
                    <SelectItem value="mba">MBA</SelectItem>
                    <SelectItem value="ca-cma">CA / CMA (Inter or Final)</SelectItem>
                    <SelectItem value="acca">ACCA (Qualified/Semi-Qualified)</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FieldError
                  id="mobile-qualification-error"
                  message={errors.qualification}
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[14px] font-normal leading-[100%] text-[#555454]">
                  Email*
                </label>
                <input
                  type="email"
                  placeholder="Johndoe@testmail.com"
                  className={inputClass('email')}
                  value={formData.email}
                  onChange={(e) => handleFieldChange('email', e.target.value)}
                  maxLength={FIELD_LIMITS.email}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'mobile-email-error' : undefined}
                  disabled={isSubmitting}
                  required
                />
                <FieldError id="mobile-email-error" message={errors.email} />
              </div>

              <div className="space-y-1.5">
                <label className="text-[14px] font-normal leading-[100%] text-[#555454]">
                  Location*
                </label>
                <input
                  type="text"
                  placeholder="Ernakulam"
                  className={inputClass('location')}
                  value={formData.location}
                  onChange={(e) => handleFieldChange('location', e.target.value)}
                  maxLength={FIELD_LIMITS.location}
                  aria-invalid={Boolean(errors.location)}
                  aria-describedby={errors.location ? 'mobile-location-error' : undefined}
                  disabled={isSubmitting}
                  required
                />
                <FieldError id="mobile-location-error" message={errors.location} />
              </div>

              <div className="space-y-1.5">
                <label className="text-[14px] font-normal leading-[100%] text-[#555454]">
                  Reason for choosing the program*
                </label>
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
                  <SelectTrigger className={selectTriggerClass('reason')}>
                    <SelectValue placeholder="Select a reason" />
                  </SelectTrigger>
                  <SelectContent className="bg-white text-gray-900">
                    <SelectItem value="career-switch">
                      Looking to switch to a finance/accounting career
                    </SelectItem>
                    <SelectItem value="skill-upgrade">
                      Want to upgrade my existing skills
                    </SelectItem>
                    <SelectItem value="placement">
                      Seeking better placement & job opportunities
                    </SelectItem>
                    <SelectItem value="higher-studies">
                      Preparing for higher studies (CA, MBA, etc.)
                    </SelectItem>
                    <SelectItem value="entrepreneurship">
                      Planning to start or manage my own business
                    </SelectItem>
                    <SelectItem value="industry-relevance">
                      Course is industry-relevant and job-ready
                    </SelectItem>
                    <SelectItem value="reputation">
                      Reputation & quality of the institute
                    </SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FieldError id="mobile-reason-error" message={errors.reason} />
              </div>

              <div className="space-y-1.5">
                <label className="text-[14px] font-normal leading-[100%] text-[#555454]">
                  Other
                </label>
                <textarea
                  rows={2}
                  className={`${inputClass('other')} resize-none`}
                  value={formData.other}
                  onChange={(e) => handleFieldChange('other', e.target.value)}
                  maxLength={FIELD_LIMITS.other}
                  aria-invalid={Boolean(errors.other)}
                  aria-describedby={errors.other ? 'mobile-other-error' : undefined}
                  disabled={isSubmitting}
                />
                <FieldError id="mobile-other-error" message={errors.other} />
              </div>

              <div className="flex gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  disabled={isSubmitting}
                  className="flex flex-1 items-center justify-center border border-[#09636E] py-4 text-[16px] font-semibold leading-[100%] text-[#09636E] disabled:opacity-50"
                  style={{ borderRadius: 60 }}
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex flex-[2] items-center justify-center gap-2 bg-[#09636E] py-4 text-[16px] font-normal leading-[100%] text-white disabled:opacity-75"
                  style={{ borderRadius: 60 }}
                >
                  {isSubmitting ? (
                    'Submitting...'
                  ) : (
                    <>
                      Apply Now <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

          <button
            type="button"
            onClick={handleWhatsAppClick}
            disabled={isSubmitting}
            className="mt-3 flex w-full items-center justify-center gap-2 bg-[#25D366] py-4 text-[16px] font-normal leading-[100%] text-white disabled:opacity-75"
            style={{ borderRadius: 60 }}
          >
            Chat on WhatsApp instead
            <Image
              src="/chatting-01.png"
              alt=""
              width={20}
              height={20}
              className="h-6 w-6"
            />
          </button>

          <p className="mt-4 text-center text-[12px] font-normal leading-[16px] text-[#999]">
            No spam. Used only to contact you about this application.
          </p>
        </div>
      </div>

      <p className="mt-6 pb-5 text-center text-[12px] font-normal leading-[19px] text-[#555454] max-w-[250px] mx-auto">
        2026 SPECIAL40 · Selective admission · Limited seats per batch
      </p>
    </section>
  );
}
