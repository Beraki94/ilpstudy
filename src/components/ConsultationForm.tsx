"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  Mail,
  ShieldCheck,
  Calendar,
  GraduationCap
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
    agreed: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreed) {
      setErrorMsg('Please agree to the privacy statement to submit your consultation request.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello ILP Study! I have submitted a consultation request on your website.\n\n` +
    `• Name: ${formData.fullName}\n` +
    `• Target Programme: ${formData.programme}\n` +
    `• Target Intake: ${formData.targetIntake}\n` +
    `• Academic Background: ${formData.academicBackground}\n` +
    `• English Test: ${formData.englishTest} ${formData.testDetails ? `(${formData.testDetails})` : ''}\n\n` +
    `I would like to discuss: ${formData.discussionTopics || 'University selection and scholarships'}.`
  );

  if (submitted) {
    return (
      <div className="bg-white rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 border border-slate-200/80 shadow-soft text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-brand-green/15 text-brand-green flex items-center justify-center mx-auto">
          <CheckCircle2 size={36} />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-green block">
            Request Received
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">
            Thank You, {formData.fullName}!
          </h3>
          <p className="text-sm sm:text-base text-slate-600 font-medium max-w-lg mx-auto leading-relaxed">
            Your request for <strong>{formData.programme}</strong> ({formData.targetIntake}) has been registered. An ILP Study counselor will review your academic goals and contact you via email (<strong>{formData.email}</strong>) or WhatsApp to schedule a consultation appointment.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-left text-xs sm:text-sm text-slate-700 space-y-2 max-w-md mx-auto">
          <div className="font-bold text-brand-dark text-xs uppercase tracking-wider">
            Consultation Summary:
          </div>
          <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
            <span className="text-slate-500">Applicant:</span>
            <span className="font-semibold text-brand-dark">{formData.fullName} ({formData.age} yrs)</span>
          </div>
          <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
            <span className="text-slate-500">Programme:</span>
            <span className="font-semibold text-brand-dark">{formData.programme}</span>
          </div>
          <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
            <span className="text-slate-500">Intake:</span>
            <span className="font-semibold text-brand-dark">{formData.targetIntake}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">English Test:</span>
            <span className="font-semibold text-brand-dark">{formData.englishTest}</span>
          </div>
        </div>

        {/* WhatsApp Fast-Track */}
        <div className="space-y-3 pt-2">
          <p className="text-xs text-slate-500 font-semibold">
            Want faster confirmation? Send your consultation summary directly to our WhatsApp counselor:
          </p>
          <a
            href={`https://wa.me/8801895626831?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-brand-green text-white font-bold text-sm shadow-glow-green hover:bg-[#00a85d] transition-all"
          >
            <MessageSquare size={18} />
            <span>Chat on WhatsApp (+880 1895 626831)</span>
          </a>
        </div>

        <div className="pt-4 border-t border-slate-100">
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
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
                agreed: false
              });
            }}
            className="text-xs font-bold text-slate-500 hover:text-brand-pink transition-colors underline"
          >
            Submit another consultation request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 md:p-12 border border-slate-200/80 shadow-soft">
      <div className="mb-8">
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

      {errorMsg && (
        <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-xs sm:text-sm text-rose-800 font-medium flex items-center gap-3">
          <AlertCircle size={18} className="text-rose-600 flex-shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        
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
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Tanvir Ahmed"
              className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink transition-all font-medium text-sm"
            />
          </div>

          <div>
            <label htmlFor="age" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Age <span className="text-brand-pink">*</span>
            </label>
            <input
              type="text"
              id="age"
              name="age"
              required
              value={formData.age}
              onChange={handleChange}
              placeholder="e.g. 21"
              className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink transition-all font-medium text-sm"
            />
          </div>
        </div>

        {/* Email & Phone / WhatsApp */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Email <span className="text-brand-pink">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="name@example.com"
              className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink transition-all font-medium text-sm"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Phone / WhatsApp <span className="text-xs text-slate-400 font-normal lowercase">(optional)</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+880 1700 000000"
              className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink transition-all font-medium text-sm"
            />
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
              required
              value={formData.programme}
              onChange={handleChange}
              className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink transition-all font-medium text-sm"
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
              required
              value={formData.targetIntake}
              onChange={handleChange}
              className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink transition-all font-medium text-sm"
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
            required
            value={formData.academicBackground}
            onChange={handleChange}
            placeholder="e.g. HSC 2025 Science (GPA 5.0), O/A Levels, or BSc in CSE (CGPA 3.65)"
            className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink transition-all font-medium text-sm"
          />
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
              required
              value={formData.englishTest}
              onChange={handleChange}
              className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink transition-all font-medium text-sm"
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
              className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink transition-all font-medium text-sm"
            />
          </div>
        </div>

        {/* What would you like to discuss? */}
        <div>
          <label htmlFor="discussionTopics" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            What would you like to discuss? <span className="text-brand-pink">*</span>
          </label>
          <textarea
            id="discussionTopics"
            name="discussionTopics"
            required
            rows={4}
            value={formData.discussionTopics}
            onChange={handleChange}
            placeholder="Tell us about your preferred universities, major, CSC scholarship questions, CSCA exam preparation, or general China visa inquiries..."
            className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink transition-all font-medium text-sm resize-none"
          ></textarea>
        </div>

        {/* Consent checkbox */}
        <div className="pt-2">
          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              name="agreed"
              checked={formData.agreed}
              onChange={handleChange}
              required
              className="mt-1 w-4 h-4 rounded border-slate-300 text-brand-pink focus:ring-brand-pink transition-colors"
            />
            <span className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed group-hover:text-slate-800">
              I agree that ILP Study may save this request and contact me about my consultation.{' '}
              <Link href="/privacy-policy" className="text-brand-pink font-bold hover:underline">
                Privacy information.
              </Link>
            </span>
          </label>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full py-4 rounded-xl text-white font-bold text-base transition-all flex items-center justify-center gap-2 group bg-brand-pink shadow-glow-pink hover:bg-[#d10079]"
        >
          <span>Send consultation request</span>
          <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>

        {/* Mandatory disclaimer note */}
        <p className="text-xs text-slate-500 font-medium text-center leading-relaxed pt-2">
          This requests consultation only. It does not register you for CSCA, submit a university application or confirm an appointment.
        </p>

      </form>
    </div>
  );
}
