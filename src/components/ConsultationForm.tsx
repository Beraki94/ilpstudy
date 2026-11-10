"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  Loader2,
  RefreshCw,
  Phone,
  Mail,
  HelpCircle,
  Check
} from 'lucide-react';

interface FormData {
  fullName: string;
  age: string;
  email: string;
  phone: string;
  programme: string;
  targetIntake: string;
  academicBackground: string;
  englishTest: string;
  testDetails: string;
  discussionTopics: string;
  agreed: boolean;
  botTrap: string;
}

const PROGRAMME_OPTIONS = [
  "Bachelor’s",
  "Chinese language",
  "Foundation",
  "Diploma",
  "Master’s",
  "PhD",
  "Not sure yet"
];

const INTAKE_OPTIONS = [
  "March 2027",
  "September 2027",
  "March 2028",
  "September 2028",
  "Other intake",
  "Not sure yet"
];

const ENGLISH_TEST_OPTIONS = [
  "IELTS",
  "PTE Academic",
  "Duolingo English Test",
  "TOEFL",
  "Other English test",
  "Not taken yet",
  "Planning to take a test"
];

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export default function ConsultationForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    age: '',
    email: '',
    phone: '',
    programme: 'Bachelor’s',
    targetIntake: 'September 2027',
    academicBackground: '',
    englishTest: 'Not taken yet',
    testDetails: '',
    discussionTopics: '',
    agreed: false,
    botTrap: ''
  });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [referenceId, setReferenceId] = useState<string>('');

  // Pre-fill discussion topics if navigated with ?university=...
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const uni = params.get('university');
      if (uni) {
        setFormData(prev => ({
          ...prev,
          discussionTopics: prev.discussionTopics 
            ? prev.discussionTopics 
            : `I am interested in admission options, requirements, and scholarships for ${uni}.`
        }));
      }
    }
  }, []);

  const validateField = (name: string, value: unknown): string => {
    switch (name) {
      case 'fullName': {
        const val = typeof value === 'string' ? value.trim() : '';
        if (!val) return 'Full name is required.';
        if (val.length < 2) return 'Full name must be at least 2 characters.';
        if (val.length > 100) return 'Full name must be under 100 characters.';
        return '';
      }
      case 'age': {
        const raw = typeof value === 'string' ? value.trim() : '';
        if (!raw) return 'Age is required.';
        const num = parseInt(raw, 10);
        if (isNaN(num) || num < 14 || num > 80) return 'Please enter a valid age between 14 and 80.';
        return '';
      }
      case 'email': {
        const val = typeof value === 'string' ? value.trim().toLowerCase() : '';
        if (!val) return 'Email address is required.';
        if (!EMAIL_REGEX.test(val)) return 'Please enter a valid email address (e.g. name@example.com).';
        return '';
      }
      case 'phone': {
        const val = typeof value === 'string' ? value.trim() : '';
        if (!val) return ''; // optional field
        const digits = val.replace(/\D/g, '');
        if (digits.length < 6 || digits.length > 20) {
          return 'Please enter a valid phone number with country/area code.';
        }
        return '';
      }
      case 'academicBackground': {
        const val = typeof value === 'string' ? value.trim() : '';
        if (!val) return 'Academic background is required.';
        if (val.length < 3) return 'Please provide more details on your results/qualification.';
        if (val.length > 500) return 'Academic background must be under 500 characters.';
        return '';
      }
      case 'discussionTopics': {
        const val = typeof value === 'string' ? value.trim() : '';
        if (!val) return 'Please let us know what you would like to discuss.';
        if (val.length < 5) return 'Please enter at least a few words about your study goals.';
        if (val.length > 2000) return 'Message must be under 2,000 characters.';
        return '';
      }
      case 'agreed': {
        if (!value) return 'You must agree to the privacy statement to continue.';
        return '';
      }
      default:
        return '';
    }
  };

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field as keyof FormData]);
    setFieldErrors(prev => ({
      ...prev,
      [field]: error
    }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const fieldValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;

    setFormData(prev => ({ ...prev, [name]: fieldValue }));

    // If already touched, validate live
    if (touched[name]) {
      const error = validateField(name, fieldValue);
      setFieldErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  const validateAll = (): boolean => {
    const errors: Record<string, string> = {};
    const touchedAll: Record<string, boolean> = {};

    const fieldsToValidate = ['fullName', 'age', 'email', 'phone', 'academicBackground', 'discussionTopics', 'agreed'];

    fieldsToValidate.forEach((field) => {
      touchedAll[field] = true;
      const error = validateField(field, formData[field as keyof FormData]);
      if (error) {
        errors[field] = error;
      }
    });

    setTouched(prev => ({ ...prev, ...touchedAll }));
    setFieldErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    const isValid = validateAll();
    if (!isValid) {
      setSubmitError('Please correct the highlighted errors before submitting.');
      return;
    }

    setIsSubmitting(true);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    try {
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });

      let data: {
        success?: boolean;
        error?: string;
        referenceId?: string;
        fields?: Record<string, string>;
      } | null = null;

      try {
        data = await response.json();
      } catch {
        data = null;
      }

      if (!response.ok || !data?.success) {
        if (data?.fields && typeof data.fields === 'object') {
          setFieldErrors(data.fields);
        }
        throw new Error(
          data?.error || 'Unable to process your request right now. Please try again or reach us via WhatsApp.'
        );
      }

      setReferenceId(data.referenceId || `ILP-${Date.now().toString(36).toUpperCase()}`);
      setSubmitted(true);
      setSubmitError(null);
    } catch (err: unknown) {
      console.error('Submission error:', err);
      if (err instanceof DOMException && err.name === 'AbortError') {
        setSubmitError('Request timed out. Please check your internet connection or contact us directly on WhatsApp.');
      } else {
        const msg = err instanceof Error ? err.message : 'A network error occurred. Please try again or use WhatsApp.';
        setSubmitError(msg);
      }
    } finally {
      clearTimeout(timeoutId);
      setIsSubmitting(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello ILP Study! I have submitted a consultation request on your website.\n\n` +
    `• Reference: ${referenceId || 'New Lead'}\n` +
    `• Name: ${formData.fullName}\n` +
    `• Target Programme: ${formData.programme}\n` +
    `• Target Intake: ${formData.targetIntake}\n` +
    `• Academic Background: ${formData.academicBackground}\n` +
    `• English Test: ${formData.englishTest} ${formData.testDetails ? `(${formData.testDetails})` : ''}\n\n` +
    `I would like to discuss: ${formData.discussionTopics || 'University selection and scholarships'}.`
  );

  // Success view
  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-white rounded-none sm:rounded-[36px] p-6 sm:p-12 border-b sm:border border-slate-100 sm:border-slate-200/90 shadow-card text-center space-y-6"
      >
        
        {/* Success badge */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto border-2 border-emerald-500/30">
          <CheckCircle2 size={42} className="stroke-[2.5]" />
        </div>

        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-extrabold uppercase tracking-wider border border-emerald-200">
            <Check size={13} />
            <span>Consultation Request Dispatched</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight">
            Thank You, {formData.fullName}!
          </h3>

          <p className="text-sm sm:text-base text-slate-600 font-medium max-w-lg mx-auto leading-relaxed">
            Your consultation request has been delivered to our Dhaka headquarters at{' '}
            <strong className="text-slate-900">info@ilpstudy.com</strong>.
            An educational counselor will review your qualifications and contact you via email (<strong>{formData.email}</strong>){formData.phone ? ` or phone/WhatsApp (${formData.phone})` : ''} within 24 hours.
          </p>
        </div>

        {/* Reference & Consultation Summary Card */}
        <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/80 text-left text-xs sm:text-sm text-slate-700 space-y-3 max-w-md mx-auto shadow-xs">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
            <span className="font-bold text-slate-400 uppercase tracking-wider text-[11px]">
              Reference ID
            </span>
            <span className="font-mono font-extrabold text-brand-dark bg-white px-2.5 py-1 rounded-md border border-slate-200">
              {referenceId}
            </span>
          </div>

          <div className="space-y-2 pt-1">
            <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
              <span className="text-slate-500">Applicant:</span>
              <span className="font-semibold text-brand-dark">{formData.fullName} ({formData.age} yrs)</span>
            </div>
            <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
              <span className="text-slate-500">Target Programme:</span>
              <span className="font-semibold text-brand-pink">{formData.programme}</span>
            </div>
            <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
              <span className="text-slate-500">Target Intake:</span>
              <span className="font-semibold text-brand-green">{formData.targetIntake}</span>
            </div>
            <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
              <span className="text-slate-500">Email:</span>
              <span className="font-semibold text-brand-dark">{formData.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">English Test:</span>
              <span className="font-semibold text-brand-dark">{formData.englishTest}</span>
            </div>
          </div>
        </div>

        {/* WhatsApp Fast-Track */}
        <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 max-w-md mx-auto space-y-2.5">
          <p className="text-xs text-emerald-950 font-bold">
            Want immediate assistance? Connect with our counselor on WhatsApp:
          </p>
          <a
            href={`https://wa.me/8801895626831?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-green text-white font-bold text-sm shadow-glow-green hover:bg-[#00a85d] transition-all"
          >
            <MessageSquare size={18} />
            <span>Chat on WhatsApp (+880 1895 626831)</span>
          </a>
        </div>

        <div className="pt-2">
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setSubmitError(null);
              setFieldErrors({});
              setTouched({});
              setFormData({
                fullName: '',
                age: '',
                email: '',
                phone: '',
                programme: 'Bachelor’s',
                targetIntake: 'September 2027',
                academicBackground: '',
                englishTest: 'Not taken yet',
                testDetails: '',
                discussionTopics: '',
                agreed: false,
                botTrap: ''
              });
            }}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-brand-pink transition-colors underline"
          >
            <RefreshCw size={12} />
            <span>Submit another consultation request</span>
          </button>
        </div>
      </motion.div>
    );
  }

  // Active form view
  return (
    <motion.div 
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="bg-white rounded-none sm:rounded-[36px] p-5 sm:p-10 md:p-12 border-b sm:border border-slate-100 sm:border-slate-200/90 shadow-card"
    >
      <div className="mb-6 sm:mb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-pink block mb-1">
          Online Appointment Request
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight">
          Consultation Request Form
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
          Complete the details below to help our counselors prepare university and scholarship options.
        </p>
      </div>

      {/* Global Error Banner */}
      {submitError && (
        <div 
          role="alert"
          className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-xs sm:text-sm text-rose-800 font-medium flex items-start gap-3 shadow-xs animate-in fade-in"
        >
          <AlertCircle size={18} className="text-rose-600 flex-shrink-0 mt-0.5" />
          <div className="flex-1 min-w-0 space-y-2">
            <div>
              <strong className="block font-bold mb-0.5">Unable to Submit Request</strong>
              <span>{submitError}</span>
            </div>
            <div>
              <a
                href={`https://wa.me/8801895626831?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-green text-white font-bold text-xs hover:bg-[#00a85d] transition-colors shadow-xs"
              >
                <MessageSquare size={13} />
                <span>Send Details on WhatsApp Instead</span>
              </a>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        
        {/* Honeypot Spam Trap (Hidden from Real Users) */}
        <div className="opacity-0 absolute -z-10 w-0 h-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <label htmlFor="botTrap">Leave this field blank</label>
          <input
            type="text"
            id="botTrap"
            name="botTrap"
            value={formData.botTrap}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Full name & Age */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="sm:col-span-2">
            <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Full name <span className="text-brand-pink">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              onBlur={() => handleBlur('fullName')}
              aria-invalid={Boolean(touched.fullName && fieldErrors.fullName)}
              placeholder="e.g. Tanvir Ahmed"
              className={`w-full px-4 py-3.5 rounded-xl bg-slate-50 border text-slate-800 focus:outline-none transition-all font-medium text-sm ${
                touched.fullName && fieldErrors.fullName
                  ? 'border-rose-400 focus:ring-2 focus:ring-rose-200 bg-rose-50/20'
                  : 'border-slate-200 focus:ring-2 focus:ring-brand-pink/40 focus:border-brand-pink'
              }`}
            />
            {touched.fullName && fieldErrors.fullName && (
              <p className="mt-1.5 text-xs text-rose-600 font-semibold flex items-center gap-1">
                <AlertCircle size={13} />
                <span>{fieldErrors.fullName}</span>
              </p>
            )}
          </div>

          <div>
            <label htmlFor="age" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Age <span className="text-brand-pink">*</span>
            </label>
            <input
              type="number"
              id="age"
              name="age"
              min={14}
              max={80}
              value={formData.age}
              onChange={handleChange}
              onBlur={() => handleBlur('age')}
              aria-invalid={Boolean(touched.age && fieldErrors.age)}
              placeholder="e.g. 21"
              className={`w-full px-4 py-3.5 rounded-xl bg-slate-50 border text-slate-800 focus:outline-none transition-all font-medium text-sm ${
                touched.age && fieldErrors.age
                  ? 'border-rose-400 focus:ring-2 focus:ring-rose-200 bg-rose-50/20'
                  : 'border-slate-200 focus:ring-2 focus:ring-brand-pink/40 focus:border-brand-pink'
              }`}
            />
            {touched.age && fieldErrors.age && (
              <p className="mt-1.5 text-xs text-rose-600 font-semibold flex items-center gap-1">
                <AlertCircle size={13} />
                <span>{fieldErrors.age}</span>
              </p>
            )}
          </div>
        </div>

        {/* Email & Phone / WhatsApp */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Email <span className="text-brand-pink">*</span>
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={() => handleBlur('email')}
                aria-invalid={Boolean(touched.email && fieldErrors.email)}
                placeholder="name@example.com"
                className={`w-full pl-4 pr-10 py-3.5 rounded-xl bg-slate-50 border text-slate-800 focus:outline-none transition-all font-medium text-sm ${
                  touched.email && fieldErrors.email
                    ? 'border-rose-400 focus:ring-2 focus:ring-rose-200 bg-rose-50/20'
                    : 'border-slate-200 focus:ring-2 focus:ring-brand-pink/40 focus:border-brand-pink'
                }`}
              />
              <Mail size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>
            {touched.email && fieldErrors.email && (
              <p className="mt-1.5 text-xs text-rose-600 font-semibold flex items-center gap-1">
                <AlertCircle size={13} />
                <span>{fieldErrors.email}</span>
              </p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Phone / WhatsApp <span className="text-xs text-slate-400 font-normal lowercase">(recommended)</span>
            </label>
            <div className="relative">
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onBlur={() => handleBlur('phone')}
                aria-invalid={Boolean(touched.phone && fieldErrors.phone)}
                placeholder="+880 1700 000000"
                className={`w-full pl-4 pr-10 py-3.5 rounded-xl bg-slate-50 border text-slate-800 focus:outline-none transition-all font-medium text-sm ${
                  touched.phone && fieldErrors.phone
                    ? 'border-rose-400 focus:ring-2 focus:ring-rose-200 bg-rose-50/20'
                    : 'border-slate-200 focus:ring-2 focus:ring-brand-pink/40 focus:border-brand-pink'
                }`}
              />
              <Phone size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>
            {touched.phone && fieldErrors.phone && (
              <p className="mt-1.5 text-xs text-rose-600 font-semibold flex items-center gap-1">
                <AlertCircle size={13} />
                <span>{fieldErrors.phone}</span>
              </p>
            )}
          </div>
        </div>

        {/* Programme & Target Intake */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="programme" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Programme <span className="text-brand-pink">*</span>
            </label>
            <select
              id="programme"
              name="programme"
              value={formData.programme}
              onChange={handleChange}
              className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-pink/40 focus:border-brand-pink transition-all font-medium text-sm"
            >
              {PROGRAMME_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="targetIntake" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Target intake <span className="text-brand-pink">*</span>
            </label>
            <select
              id="targetIntake"
              name="targetIntake"
              value={formData.targetIntake}
              onChange={handleChange}
              className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-pink/40 focus:border-brand-pink transition-all font-medium text-sm"
            >
              {INTAKE_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Academic background */}
        <div>
          <label htmlFor="academicBackground" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Academic background <span className="text-brand-pink">*</span>
          </label>
          <input
            type="text"
            id="academicBackground"
            name="academicBackground"
            value={formData.academicBackground}
            onChange={handleChange}
            onBlur={() => handleBlur('academicBackground')}
            aria-invalid={Boolean(touched.academicBackground && fieldErrors.academicBackground)}
            placeholder="e.g. HSC 2025 Science (GPA 5.0), O/A Levels, or BSc in CSE (CGPA 3.65)"
            className={`w-full px-4 py-3.5 rounded-xl bg-slate-50 border text-slate-800 focus:outline-none transition-all font-medium text-sm ${
              touched.academicBackground && fieldErrors.academicBackground
                ? 'border-rose-400 focus:ring-2 focus:ring-rose-200 bg-rose-50/20'
                : 'border-slate-200 focus:ring-2 focus:ring-brand-pink/40 focus:border-brand-pink'
            }`}
          />
          {touched.academicBackground && fieldErrors.academicBackground ? (
            <p className="mt-1.5 text-xs text-rose-600 font-semibold flex items-center gap-1">
              <AlertCircle size={13} />
              <span>{fieldErrors.academicBackground}</span>
            </p>
          ) : (
            <p className="mt-1 text-[11px] text-slate-400">
              Provide your latest degree/exam, group, passing year and grade or CGPA.
            </p>
          )}
        </div>

        {/* English proficiency test & Score / test details (optional) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="englishTest" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              English proficiency test <span className="text-brand-pink">*</span>
            </label>
            <select
              id="englishTest"
              name="englishTest"
              value={formData.englishTest}
              onChange={handleChange}
              className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-pink/40 focus:border-brand-pink transition-all font-medium text-sm"
            >
              {ENGLISH_TEST_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="testDetails" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Score / test details <span className="text-xs text-slate-400 font-normal lowercase">(optional)</span>
            </label>
            <input
              type="text"
              id="testDetails"
              name="testDetails"
              value={formData.testDetails}
              onChange={handleChange}
              placeholder="e.g. Overall 6.5, or test booked for next month"
              className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-pink/40 focus:border-brand-pink transition-all font-medium text-sm"
            />
          </div>
        </div>

        {/* What would you like to discuss? */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label htmlFor="discussionTopics" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              What would you like to discuss? <span className="text-brand-pink">*</span>
            </label>
            <span className="text-[11px] text-slate-400">
              {formData.discussionTopics.length}/2000
            </span>
          </div>
          <textarea
            id="discussionTopics"
            name="discussionTopics"
            rows={4}
            value={formData.discussionTopics}
            onChange={handleChange}
            onBlur={() => handleBlur('discussionTopics')}
            aria-invalid={Boolean(touched.discussionTopics && fieldErrors.discussionTopics)}
            placeholder="Tell us about your preferred universities, major, CSC scholarship questions, CSCA exam preparation, or general China visa inquiries..."
            className={`w-full px-4 py-3.5 rounded-xl bg-slate-50 border text-slate-800 focus:outline-none transition-all font-medium text-sm resize-none ${
              touched.discussionTopics && fieldErrors.discussionTopics
                ? 'border-rose-400 focus:ring-2 focus:ring-rose-200 bg-rose-50/20'
                : 'border-slate-200 focus:ring-2 focus:ring-brand-pink/40 focus:border-brand-pink'
            }`}
          ></textarea>
          {touched.discussionTopics && fieldErrors.discussionTopics && (
            <p className="mt-1.5 text-xs text-rose-600 font-semibold flex items-center gap-1">
              <AlertCircle size={13} />
              <span>{fieldErrors.discussionTopics}</span>
            </p>
          )}
        </div>

        {/* Consent checkbox */}
        <div className="pt-2">
          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              name="agreed"
              checked={formData.agreed}
              onChange={handleChange}
              onBlur={() => handleBlur('agreed')}
              className="mt-1 w-4 h-4 rounded border-slate-300 text-brand-pink focus:ring-brand-pink transition-colors"
            />
            <span className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed group-hover:text-slate-800">
              I agree that ILP Study may save this request and contact me regarding study options in China.{' '}
              <Link href="/privacy-policy" className="text-brand-pink font-bold hover:underline">
                Privacy policy.
              </Link>
            </span>
          </label>
          {touched.agreed && fieldErrors.agreed && (
            <p className="mt-1.5 text-xs text-rose-600 font-semibold flex items-center gap-1">
              <AlertCircle size={13} />
              <span>{fieldErrors.agreed}</span>
            </p>
          )}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 rounded-xl text-white font-bold text-base transition-all flex items-center justify-center gap-2 group shadow-glow-pink ${
            isSubmitting
              ? 'bg-brand-pink/70 cursor-not-allowed'
              : 'bg-brand-pink hover:bg-[#d10079] active:scale-[0.99]'
          }`}
        >
          {isSubmitting ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              <span>Sending your consultation request...</span>
            </>
          ) : (
            <>
              <span>Send consultation request</span>
              <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </>
          )}
        </button>

        {/* Mandatory disclaimer note */}
        <div className="flex items-start justify-center gap-2 text-xs text-slate-400 font-medium text-center leading-relaxed pt-2">
          <HelpCircle size={14} className="flex-shrink-0 mt-0.5 text-slate-400" />
          <span>
            This form requests an educational consultation only. It does not submit an official university application or guarantee visa issuance.
          </span>
        </div>

      </form>
    </motion.div>
  );
}
