"use client";

import { useState } from "react";
import { Phone, Calendar, MessageCircle, Loader2, CheckCircle2 } from "lucide-react";

interface FormErrors {
  name?: string;
  phone?: string;
  age?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    age: "",
    level: "Beginner",
    session: "Morning batch (6:00 AM – 8:30 AM)",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    const cleanPhone = formData.phone.replace(/[\s-]/g, "");
    if (!cleanPhone) {
      newErrors.phone = "Please enter your mobile number.";
    } else if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      newErrors.phone = "Please enter a valid 10-digit mobile number.";
    }

    const ageNum = parseInt(formData.age, 10);
    if (!formData.age.trim()) {
      newErrors.age = "Please enter skater age.";
    } else if (isNaN(ageNum) || ageNum < 3 || ageNum > 80) {
      newErrors.age = "Please enter an age between 3 and 80.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setServerError("");

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey || accessKey === "your_access_key_here") {
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 500);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Admission Inquiry: ${formData.name}`,
          from_name: "Brilliant Speed Skating Academy",
          name: formData.name,
          phone: formData.phone,
          age: formData.age,
          level: formData.level,
          session: formData.session,
          message: formData.message || "Not specified",
        }),
      });

      const data = await response.json();
      setIsSubmitting(false);

      if (data.success) {
        setIsSubmitted(true);
      } else {
        setServerError(data.message || "Submission failed. Please call or message us on WhatsApp.");
      }
    } catch {
      setIsSubmitting(false);
      setServerError("Network error. Please message us directly on WhatsApp or call.");
    }
  };

  const getWhatsAppUrl = () => {
    const text = [
      `Hello Brilliant Speed Skating Academy,`,
      `I would like to book a trial class:`,
      `Name: ${formData.name || "Interested Parent"}`,
      `Phone: ${formData.phone || "Not provided"}`,
      `Skater Age: ${formData.age || "Not specified"}`,
      `Level: ${formData.level}`,
      `Batch: ${formData.session}`,
      formData.message ? `Notes: ${formData.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    return `https://wa.me/919553393769?text=${encodeURIComponent(text)}`;
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-[14px] border border-[#E4E7EC] border-t-[3px] border-t-amber-600 p-8 sm:p-10 shadow-[0_1px_2px_rgba(16,24,40,0.04),0_8px_24px_rgba(16,24,40,0.06)] text-left">
        <div className="w-10 h-10 rounded-full border border-emerald-200 bg-emerald-50 flex items-center justify-center text-emerald-600 mb-4">
          <CheckCircle2 className="w-5 h-5" strokeWidth={2} />
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-2">
          Inquiry received
        </h2>
        <p className="text-sm sm:text-base text-slate-600 mb-8 leading-relaxed max-w-md">
          Thank you. Our coaching team will call or message you to confirm batch availability and trial timings.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="h-12 px-6 inline-flex items-center justify-center gap-2 rounded-[10px] border border-[#E4E7EC] bg-white hover:bg-slate-50 text-slate-900 text-sm font-semibold transition-all duration-150 hover:-translate-y-[1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 shadow-xs"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" strokeWidth={2} />
            <span>Chat on WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: "",
                phone: "",
                age: "",
                level: "Beginner",
                session: "Morning batch (6:00 AM – 8:30 AM)",
                message: "",
              });
            }}
            className="h-12 px-6 inline-flex items-center justify-center rounded-[10px] text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors"
          >
            Submit another inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      id="inquiry-form"
      onSubmit={handleSubmit}
      noValidate
      className="bg-white rounded-[14px] border border-[#E4E7EC] border-t-[3px] border-t-amber-600 p-6 sm:p-8 lg:p-10 shadow-[0_1px_2px_rgba(16,24,40,0.04),0_8px_24px_rgba(16,24,40,0.06)]"
    >
      <div className="mb-8">
        <h2 className="text-2xl sm:text-[26px] font-bold tracking-tight text-slate-900 mb-2">
          Book a trial class
        </h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          Fill out this form and our coaches will reach out to confirm your slot.
        </p>
      </div>

      {/* Hidden honeypot to block spam bots */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="space-y-5">
        {/* Full Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
            Full name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={`w-full h-12 px-4 bg-white rounded-[10px] border text-sm text-slate-900 placeholder:text-slate-400 transition-all duration-150 focus:outline-none focus:ring-[3px] focus:ring-amber-500/20 focus:border-amber-600 shadow-[inset_0_1px_2px_rgba(16,24,40,0.04)] ${
              errors.name ? "border-red-500" : "border-[#E4E7EC]"
            }`}
          />
          {errors.name && (
            <p id="name-error" className="text-xs text-red-600 mt-1.5">
              {errors.name}
            </p>
          )}
        </div>

        {/* Phone Number with Left Icon */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
            Phone number
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
              <Phone className="w-4 h-4" strokeWidth={1.75} />
            </div>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="10-digit mobile number"
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              className={`w-full h-12 pl-10 pr-4 bg-white rounded-[10px] border text-sm text-slate-900 placeholder:text-slate-400 transition-all duration-150 focus:outline-none focus:ring-[3px] focus:ring-amber-500/20 focus:border-amber-600 shadow-[inset_0_1px_2px_rgba(16,24,40,0.04)] ${
                errors.phone ? "border-red-500" : "border-[#E4E7EC]"
              }`}
            />
          </div>
          {errors.phone && (
            <p id="phone-error" className="text-xs text-red-600 mt-1.5">
              {errors.phone}
            </p>
          )}
        </div>

        {/* Skater Age and Level Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="age" className="block text-sm font-medium text-slate-700 mb-2">
              Skater age
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                <Calendar className="w-4 h-4" strokeWidth={1.75} />
              </div>
              <input
                type="number"
                id="age"
                name="age"
                min={3}
                max={80}
                value={formData.age}
                onChange={handleChange}
                placeholder="Age in years"
                aria-invalid={Boolean(errors.age)}
                aria-describedby={errors.age ? "age-error" : undefined}
                className={`w-full h-12 pl-10 pr-4 bg-white rounded-[10px] border text-sm text-slate-900 placeholder:text-slate-400 transition-all duration-150 focus:outline-none focus:ring-[3px] focus:ring-amber-500/20 focus:border-amber-600 shadow-[inset_0_1px_2px_rgba(16,24,40,0.04)] ${
                  errors.age ? "border-red-500" : "border-[#E4E7EC]"
                }`}
              />
            </div>
            {errors.age && (
              <p id="age-error" className="text-xs text-red-600 mt-1.5">
                {errors.age}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="level" className="block text-sm font-medium text-slate-700 mb-2">
              Experience level
            </label>
            <div className="relative">
              <select
                id="level"
                name="level"
                value={formData.level}
                onChange={handleChange}
                className="w-full h-12 px-4 pr-9 bg-white rounded-[10px] border border-[#E4E7EC] text-sm text-slate-900 appearance-none transition-all duration-150 focus:outline-none focus:ring-[3px] focus:ring-amber-500/20 focus:border-amber-600 shadow-[inset_0_1px_2px_rgba(16,24,40,0.04)]"
              >
                <option value="Beginner">Beginner (first time)</option>
                <option value="Basic">Basic (can balance &amp; roll)</option>
                <option value="Intermediate">Intermediate (speed drills)</option>
                <option value="Competitive">Competitive squad</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-500">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Preferred Batch */}
        <div>
          <label htmlFor="session" className="block text-sm font-medium text-slate-700 mb-2">
            Preferred batch
          </label>
          <div className="relative">
            <select
              id="session"
              name="session"
              value={formData.session}
              onChange={handleChange}
              className="w-full h-12 px-4 pr-9 bg-white rounded-[10px] border border-[#E4E7EC] text-sm text-slate-900 appearance-none transition-all duration-150 focus:outline-none focus:ring-[3px] focus:ring-amber-500/20 focus:border-amber-600 shadow-[inset_0_1px_2px_rgba(16,24,40,0.04)]"
            >
              <option value="Morning batch (6:00 AM – 8:30 AM)">Morning batch (6:00 AM – 8:30 AM)</option>
              <option value="Evening batch (4:30 PM – 7:00 PM)">Evening batch (4:30 PM – 7:00 PM)</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-500">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Message / Notes */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
            Questions or gear notes (optional)
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            placeholder="Anything you'd like to ask (optional)"
            className="w-full px-4 py-3 bg-white rounded-[10px] border border-[#E4E7EC] text-sm text-slate-900 placeholder:text-slate-400 transition-all duration-150 focus:outline-none focus:ring-[3px] focus:ring-amber-500/20 focus:border-amber-600 shadow-[inset_0_1px_2px_rgba(16,24,40,0.04)] resize-none"
          />
        </div>

        {serverError && (
          <p className="text-xs text-red-600 bg-red-50 border border-red-200 p-3 rounded-[8px]">
            {serverError}
          </p>
        )}

        {/* Buttons: Primary Submit + Secondary Outline WhatsApp */}
        <div className="pt-3 flex flex-col sm:flex-row gap-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 h-12 px-6 rounded-[10px] bg-amber-600 hover:bg-amber-700 active:translate-y-0 text-white text-sm font-semibold transition-all duration-150 hover:-translate-y-[1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 shadow-xs flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Submitting...</span>
              </>
            ) : (
              <span>Submit inquiry</span>
            )}
          </button>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="h-12 px-6 inline-flex items-center justify-center gap-2 rounded-[10px] border border-[#E4E7EC] bg-white hover:bg-slate-50 text-slate-800 text-sm font-semibold transition-all duration-150 hover:-translate-y-[1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 shadow-xs"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" strokeWidth={2} />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Privacy Footnote */}
        <p className="text-xs text-slate-500 pt-1">
          We only use your details to contact you about admissions.
        </p>
      </div>
    </form>
  );
}
