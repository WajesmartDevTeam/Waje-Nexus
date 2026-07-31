import { useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react';
import { Phone, ChevronDown } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { cn } from '@/utils/cn';

const INDUSTRIES = [
  'Financial Services',
  'Telecoms',
  'E-Commerce',
  'Healthcare',
  'Retail',
  'Technology',
  'Government',
  'Other',
];

const INTERESTS = [
  'Omnichannel Contact Center',
  'AI Agents & Automation',
  'Sales Pipeline CRM',
  'Analytics & Reporting',
  'Integrations',
  'General Enquiry',
];

type FieldChange = ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;

/* In-field label with red asterisk (shown while empty & unfocused) */
function FieldLabel({ label }: { label: string }) {
  return (
    <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-neutral-400 opacity-0 transition-opacity peer-placeholder-shown:opacity-100 peer-focus:opacity-0">
      {label} <span className="text-red-500">*</span>
    </span>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  type = 'text',
  className,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: FieldChange) => void;
  type?: string;
  className?: string;
}) {
  return (
    <div className={cn('relative', className)}>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required
        placeholder=" "
        className="peer w-full px-4 py-3.5 text-sm rounded-lg border border-neutral-200 bg-white text-neutral-900 transition-colors focus:outline-none focus:ring-2 focus:ring-green-700/20 focus:border-green-700"
      />
      <FieldLabel label={label} />
    </div>
  );
}

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: FieldChange) => void;
  options: string[];
}) {
  return (
    <div className="relative">
      <select
        name={name}
        value={value}
        onChange={onChange}
        required
        className={cn(
          'w-full appearance-none px-4 py-3.5 text-sm rounded-lg border border-neutral-200 bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-green-700/20 focus:border-green-700',
          value ? 'text-neutral-900' : 'text-transparent'
        )}
      >
        <option value="" disabled hidden></option>
        {options.map((opt) => (
          <option key={opt} value={opt} className="text-neutral-900">
            {opt}
          </option>
        ))}
      </select>
      {!value && (
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-neutral-400">
          {label} <span className="text-red-500">*</span>
        </span>
      )}
      <ChevronDown size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400" />
    </div>
  );
}

/* Contact link with icon */
function ContactLink({ href, icon, children }: { href: string; icon: ReactNode; children: ReactNode }) {
  return (
    <a href={href} className="inline-flex items-center gap-2 group">
      {icon}
      <span className="text-sm font-medium text-green-700 underline decoration-green-700/40 underline-offset-2 group-hover:decoration-green-700">
        {children}
      </span>
    </a>
  );
}

const WhatsAppIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true" className="shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.892c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652a12.062 12.062 0 005.71 1.447h.006c6.585 0 11.946-5.335 11.949-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const GmailIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0">
    <path fill="#EA4335" d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-1.909V11.73L12 18.13 3.545 11.73v9.272H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L4.363 3.82 12 9.548l7.636-5.728.436-.327C21.69 2.28 24 3.434 24 5.457Z" />
  </svg>
);

export function Contact() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    businessEmail: '',
    phone: '',
    jobTitle: '',
    industry: '',
    companySize: '',
    primaryInterest: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: FieldChange) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* Left side */}
          <div className="flex flex-col">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 mb-5 leading-tight">
              Get in touch <br />with the team
            </h1>
            <p className="text-neutral-500 leading-relaxed max-w-md">
              For faster assistance, please use your business email and include a detailed note. We look forward to
              receiving your messages!
            </p>

            <div className="mt-10 lg:mt-auto">
              <p className="font-semibold text-neutral-900 mb-4">
                To make requests for further information, contact us via
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                <ContactLink
                  href="tel:+2349098634779"
                  icon={
                    <span className="w-8 h-8 rounded-md bg-neutral-100 flex items-center justify-center shrink-0">
                      <Phone size={15} className="text-neutral-800" />
                    </span>
                  }
                >
                  +2349098634779
                </ContactLink>
                <ContactLink href="https://wa.me/2348029450398" icon={WhatsAppIcon}>
                  +2348029450398
                </ContactLink>
                <ContactLink href="mailto:sales@wajesmart.com" icon={GmailIcon}>
                  sales@wajesmart.com
                </ContactLink>
              </div>
            </div>
          </div>

          {/* Right side — form */}
          <div>
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center h-full py-16">
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-4">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M8 16l5 5 11-11" stroke="#04A259" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">Message Sent!</h3>
                <p className="text-neutral-500 max-w-sm">
                  Thanks for reaching out. Our team will get back to you within 1 business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="First Name" name="firstName" value={form.firstName} onChange={handleChange} />
                  <Field label="Last Name" name="lastName" value={form.lastName} onChange={handleChange} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Business Email" name="businessEmail" type="email" value={form.businessEmail} onChange={handleChange} />
                  <Field label="Phone Number" name="phone" type="tel" value={form.phone} onChange={handleChange} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Job Title" name="jobTitle" value={form.jobTitle} onChange={handleChange} />
                  <SelectField label="Industry" name="industry" value={form.industry} onChange={handleChange} options={INDUSTRIES} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Company Size" name="companySize" value={form.companySize} onChange={handleChange} />
                  <SelectField label="Primary Interest" name="primaryInterest" value={form.primaryInterest} onChange={handleChange} options={INTERESTS} />
                </div>
                <Field label="Subject" name="subject" value={form.subject} onChange={handleChange} />
                <div className="relative">
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder=" "
                    className="peer w-full px-4 py-3.5 text-sm rounded-lg border border-neutral-200 bg-white text-neutral-900 transition-colors resize-none focus:outline-none focus:ring-2 focus:ring-green-700/20 focus:border-green-700"
                  />
                  <span className="pointer-events-none absolute left-4 top-4 text-sm text-neutral-400 opacity-0 transition-opacity peer-placeholder-shown:opacity-100 peer-focus:opacity-0">
                    Please clearly describe what you need
                  </span>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 text-sm font-semibold text-white bg-neutral-900 rounded-lg hover:bg-[#016734] transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
