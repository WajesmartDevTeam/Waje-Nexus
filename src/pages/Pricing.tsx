import { useState } from 'react';
import { Check } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { CTABanner } from '@/components/sections/CTABanner';
import { Link } from 'react-router-dom';
import { cn } from '@/utils/cn';

const PLANS = [
  {
    name: 'Starter Tier',
    description: 'Ideal for small businesses, freelancers, or startups just beginning to manage customer relationships.',
    price: { monthly: '$29', yearly: '$23' },
    features: [
      '360° Customer Relationship Mapping for up to 1,000 contacts.',
      'Basic Visual Sales Pipelines with up to 5 custom stages.',
      'Limited Smart Workflow Automation (up to 10 rules).',
      'Basic Real-Time Analytics (standard KPIs only, no AI forecasting).',
      'Omnichannel Integration with up to 5 apps (e.g., Gmail, Slack).',
      'Up to 2 users.',
      '5GB storage.',
    ],
    highlighted: false,
  },
  {
    name: 'Professional Tier',
    description: 'Designed for growing teams needing more automation and insights.',
    price: { monthly: '$79', yearly: '$63' },
    features: [
      'All Starter features.',
      'Unlimited 360° Customer Relationship Mapping for up to 10,000 contacts.',
      'Advanced Visual Sales Pipelines with unlimited custom stages and bottleneck alerts.',
      'Full Smart Workflow Automation (unlimited rules, including lead nurturing).',
      'Real-Time Analytics & Forecasting with AI-driven insights.',
      'Omnichannel Integration with up to 50 apps (plus API access for custom integrations).',
      'Up to 10 users.',
      '50GB storage.',
      'Team collaboration tools (e.g., shared dashboards, role-based access).',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise Tier',
    description: 'Tailored for large organizations requiring infinite scalability, deep customization.',
    price: { monthly: '$149', yearly: '$119' },
    features: [
      'All Professional features.',
      'Unlimited contacts and users.',
      'Custom Visual Sales Pipelines with AI-driven optimization.',
      'Advanced Smart Workflow Automation with multi-department branching and integrations.',
      'Enterprise Real-Time Analytics & Forecasting with custom KPIs, predictive modeling, and exportable reports.',
      'Unlimited Omnichannel Integration (500+ apps, full API, and webhook support).',
      'Unlimited storage.',
      'Advanced security (e.g., audit logs, SSO, compliance certifications like GDPR/HIPAA).',
      'Dedicated account manager, priority phone support, and custom onboarding/training.',
    ],
    highlighted: false,
  },
];

const FAQ = [
  {
    id: '1',
    question: 'Is there a free trial?',
    answer:
      'Yes — all plans include a 14-day free trial with full access to the features in your chosen tier. No credit card required to start.',
  },
  {
    id: '2',
    question: 'Are there setup or onboarding fees?',
    answer:
      'No. Setup, installation, and onboarding training are included at no additional cost across all plans. We get you live.',
  },
  {
    id: '3',
    question: 'Can I change plans later?',
    answer:
      'Absolutely. You can upgrade or downgrade your plan at any time. Upgrades take effect immediately; downgrades apply at the next billing cycle.',
  },
  {
    id: '4',
    question: 'How does per-user pricing work?',
    answer:
      'You pay for active named users on your account. Supervisors and admins are included at no extra cost. You can add or remove user seats at any time.',
  },
  {
    id: '5',
    question: 'What payment methods do you accept?',
    answer:
      'We accept bank transfers, card payments, and direct debit. Enterprise customers can negotiate custom payment terms.',
  },
  {
    id: '6',
    question: 'What currency is pricing in?',
    answer:
      'Plans are listed in US dollars per user. For Nigerian customers, we bill the equivalent in Naira (₦) at checkout, shielding you from exchange rate volatility — one of the key reasons African businesses choose WajeNexus over global alternatives.',
  },
];

function FAQSection() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section className="py-16">
      <Container size="md">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-neutral-900 mb-3">Frequently Asked Questions</h2>
          <p className="text-neutral-500">Everything you need to know about WajeNexus pricing.</p>
        </div>
        <div className="divide-y divide-neutral-100 border border-neutral-100 rounded-2xl overflow-hidden">
          {FAQ.map((item) => (
            <div key={item.id} className="bg-white">
              <button
                onClick={() => setOpen(open === item.id ? null : item.id)}
                className="flex items-center justify-between w-full px-6 py-5 text-left"
              >
                <span className="font-semibold text-neutral-900">{item.question}</span>
                <span
                  className={cn(
                    'text-neutral-400 text-xl transition-transform duration-200',
                    open === item.id && 'rotate-45'
                  )}
                >
                  +
                </span>
              </button>
              {open === item.id && (
                <div className="px-6 pb-5 text-sm text-neutral-600 leading-relaxed">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="pt-12 pb-6">
        <Container size="md">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 leading-[1.1] mb-6">
              Choose a plan that&rsquo;s right for you
            </h1>

            {/* Monthly / Yearly toggle */}
            <div className="inline-flex items-center gap-1 p-1 bg-neutral-100 rounded-full">
              <button
                onClick={() => setYearly(false)}
                className={cn(
                  'px-5 py-2 rounded-full text-sm font-medium transition-colors',
                  !yearly ? 'bg-white text-neutral-900 shadow-sm' : 'text-neutral-500 hover:text-neutral-700'
                )}
              >
                Monthly
              </button>
              <button
                onClick={() => setYearly(true)}
                className={cn(
                  'px-5 py-2 rounded-full text-sm font-medium transition-colors',
                  yearly ? 'bg-white text-neutral-900 shadow-sm' : 'text-neutral-500 hover:text-neutral-700'
                )}
              >
                Yearly
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* Pricing cards */}
      <section className="pb-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={cn(
                  'rounded-3xl p-8 flex flex-col h-full',
                  plan.highlighted
                    ? 'bg-green-800 text-white shadow-2xl shadow-green-900/20'
                    : 'bg-white border border-neutral-200'
                )}
              >
                {/* Name + description */}
                <h3 className={cn('text-xl font-bold mb-2', plan.highlighted ? 'text-white' : 'text-neutral-900')}>
                  {plan.name}
                </h3>
                <p className={cn('text-sm leading-relaxed mb-6', plan.highlighted ? 'text-green-50/80' : 'text-neutral-500')}>
                  {plan.description}
                </p>

                {/* Price */}
                {/* <div className="mb-6">
                  <span className={cn('text-5xl font-extrabold', plan.highlighted ? 'text-white' : 'text-neutral-900')}>
                    {yearly ? plan.price.yearly : plan.price.monthly}
                  </span>
                  <span className={cn('text-base font-normal ml-1.5', plan.highlighted ? 'text-green-50/70' : 'text-neutral-400')}>
                    / User
                  </span>
                </div> */}

                {/* CTA — directly under price */}
                <Link
                  to="/contact"
                  className={cn(
                    'block text-center py-3.5 text-sm font-semibold rounded-full border transition-colors mb-8',
                    plan.highlighted
                      ? 'bg-white text-green-800 border-white hover:bg-[#016734] hover:text-white'
                      : 'bg-white text-green-700 border-green-600 hover:bg-[#016734] hover:text-white'
                  )}
                >
                  Get Started Now
                </Link>

                {/* Features */}
                <ul className="space-y-4">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <span
                        className={cn(
                          'mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0',
                          plan.highlighted ? 'bg-white/15' : 'bg-green-50'
                        )}
                      >
                        <Check size={12} strokeWidth={3} className={plan.highlighted ? 'text-white' : 'text-green-700'} />
                      </span>
                      <span className={plan.highlighted ? 'text-green-50/90' : 'text-neutral-600'}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FAQSection />
      <CTABanner
        heading="Still have questions about pricing?"
        subheading="Talk to our team. We'll walk you through the right plan for your business with no pressure and no surprises."
        primaryCTA={{ label: 'Talk to Sales', href: '/contact' }}
        secondaryCTA={{ label: 'Book a Demo', href: '/contact' }}
      />
    </>
  );
}
