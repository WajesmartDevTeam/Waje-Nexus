
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}
export const LinkedinIcon = ({ size = 24, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size} {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// 2. Twitter / X
export const TwitterIcon = ({ size = 24, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size} {...props}>
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

// 3. YouTube
export const YoutubeIcon = ({ size = 24, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size} {...props}>
    <rect width="20" height="14" x="2" y="5" rx="5" ry="5" />
    <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
  </svg>
);


const productLinks = [
  { label: 'Platform', href: '/platform' },
  { label: 'AI Agents', href: '/ai-agents' },
  { label: 'Integrations', href: '/integrations' },
  { label: 'API Docs', href: '/api-docs' },
  { label: 'Changelog', href: '/changelog' },
];

const industryLinks = [
  { label: 'Financial Services', href: '/industries/financial-services' },
  { label: 'Telecoms', href: '/industries/telecoms' },
  { label: 'E-Commerce', href: '/industries/ecommerce' },
  { label: 'Healthcare', href: '/industries/healthcare' },
  { label: 'Startups', href: '/industries/startups' },
];

const policyLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Cookie Policy', href: '/cookies' },
  { label: 'Acceptable Use Policy', href: '/acceptable-use' },
];

export function Footer() {
  return (
    <footer className="bg-[#2B322C] text-white">
      <div className="max-w-[1200px] mx-auto px-8 pt-16 pb-8">

        {/* Top section */}
        <div className="grid grid-cols-4 gap-8 pb-12">

          {/* Brand column */}
          <div className="col-span-1 flex flex-col gap-6">
            <p className="text-[22px] font-bold leading-snug text-white max-w-[220px]">
              AI-powered CRM &<br />Contact Center Platform
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="X (Twitter)"
              >
                <TwitterIcon size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <YoutubeIcon size={18} />
              </a>
            </div>
          </div>

          {/* Product links */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-white mb-5">Product</h3>
            <ul className="flex flex-col gap-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries links */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-white mb-5">Industries</h3>
            <ul className="flex flex-col gap-3">
              {industryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies links */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-white mb-5">Policies</h3>
            <ul className="flex flex-col gap-3">
              {policyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10" />

        {/* Contact row */}
        <div className="grid grid-cols-3 gap-8 py-8">

          {/* Enquiries */}
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold text-white uppercase tracking-wide">
              For Enquiries
            </p>
            <div className="flex items-center gap-2 text-sm text-white/60">
              <Mail size={14} className="shrink-0" />
              <span>info@wajenexus.com</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/60">
              <Phone size={14} className="shrink-0" />
              <span>+2349098634779 | +2348029450398</span>
            </div>
          </div>

          {/* Sales & Support */}
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold text-white uppercase tracking-wide">
              Sales & Support
            </p>
            <div className="flex items-center gap-2 text-sm text-white/60">
              <Mail size={14} className="shrink-0" />
              <span>support@wajenexus.com</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/60">
              <Phone size={14} className="shrink-0" />
              <span>09135823748</span>
            </div>
          </div>

          {/* Address */}
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold text-white uppercase tracking-wide">
              Address
            </p>
            <div className="flex items-start gap-2 text-sm text-white/60">
              <MapPin size={14} className="shrink-0 mt-0.5" />
              <span>16a George Omonubi St, Maroko, Lekki 106104, Lagos</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10" />

        {/* Bottom bar */}
        <div className="flex items-center justify-between pt-6">
          <p className="text-sm text-white/50">
           © 2026 WajeNexus
          </p>
          
        </div>

      </div>
    </footer>
  );
}