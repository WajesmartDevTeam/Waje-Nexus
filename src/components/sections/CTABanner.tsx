import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import mouse from '@/assets/mouse.png';

interface CTABannerProps {
  heading?: string;
  subheading?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
}

export function CTABanner({
  heading = 'Ready to Transform your Customer Operations?',
  subheading = 'One platform to replace every disconnected tool your team is working around, and the local support to make it stick.',
  primaryCTA = { label: 'Start Free Trial', href: '/contact' },
  secondaryCTA = { label: 'Watch 2-min Demo', href: '#' },
}: CTABannerProps) {
  return (
    <section className="pt-0 pb-10 px-4 sm:px-6 lg:px-8 ">
      <Container>
        <div className="relative overflow-hidden bg-[#FFDAD6] rounded-3xl px-8 py-6 sm:px-12 sm:py-8 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text */}
          <div className="max-w-lg">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-3">{heading}</h2>
            <p className="text-neutral-600 leading-relaxed">{subheading}</p>

            {/* Actions + decorative */}
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Link
              to={primaryCTA.href}
              className="px-6 py-3 text-sm font-semibold text-white bg-neutral-900 rounded-md hover:bg-neutral-800 transition-colors"
            >
              {primaryCTA.label}
            </Link>
            <Link
              to={secondaryCTA.href}
              className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-neutral-700 border border-neutral-200 bg-white rounded-md hover:bg-neutral-50 transition-colors"
            >
              <Play size={14} className="fill-current" />
              {secondaryCTA.label}
            </Link>
          </div>
          </div>

          

          {/* Decorative blob */}
          <div className="absolute -right-12 -bottom-7 opacity-20 pointer-events-none select-none hidden lg:block">
            <img src={mouse} alt="Decorative mouse illustration" width="508" height="508" />
          </div>
        </div>
      </Container>
    </section>
  );
}
