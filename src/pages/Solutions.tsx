import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { CTABanner } from '@/components/sections/CTABanner';
import { Link } from 'react-router-dom';
import vector from '@/assets/Vector.png';

const INDUSTRIES = [
  {
    id: 'finance',
    label: 'Financial Services',
    heading: 'Built for the speed and compliance demands of financial services.',
    description:
      'Banks, insurance companies, and fintech platforms face unique challenges: high call volumes, strict compliance requirements, and customers who expect instant, accurate responses. WajeNexus is designed for exactly these conditions.',
    capabilities: [
      'Omnichannel customer support with full audit trails',
      'AI-powered fraud alert handling and escalation',
      'Compliance-ready call recording and reporting',
      'CSAT tracking across every touchpoint',
      'Seamless integration with core banking systems',
    ],
    clients: ['AIICO Insurance', 'ProvidusBank'],
  },
  {
    id: 'telecoms',
    label: 'Telecoms',
    heading: 'Serve millions of subscribers without missing a single interaction.',
    description:
      'Telecoms need a contact center that can handle massive inbound volumes, route accurately, and resolve tier-1 issues without escalation. WajeNexus delivers that at scale.',
    capabilities: [
      'High-volume inbound handling with intelligent routing',
      'Automated SIM swap, plan upgrade, and billing queries',
      'Real-time agent performance monitoring',
      'Customer journey tracking across all touchpoints',
      'Integration with BSS/OSS systems',
    ],
    clients: ['TotalEnergies'],
  },
  {
    id: 'ecommerce',
    label: 'E-Commerce',
    heading: 'Keep customers happy from checkout to delivery.',
    description:
      'E-commerce customers want instant answers about orders, returns, and payments. WajeNexus connects your commerce stack to your support operations so agents always have the context they need.',
    capabilities: [
      'Order status and tracking queries automated via AI',
      'Returns and refund workflow management',
      'WhatsApp-first customer communication',
      'Customer lifetime value tracking in the CRM',
      'Seamless integration with e-commerce platforms',
    ],
    clients: ['Sundry Markets'],
  },
  {
    id: 'healthcare',
    label: 'Healthcare',
    heading: 'Patient-centered communication that actually scales.',
    description:
      'Healthcare providers need to manage appointment booking, patient inquiries, and care coordination efficiently — while maintaining the highest standards of data privacy and compliance.',
    capabilities: [
      'Appointment booking and reminder automation',
      'Multi-channel patient communication management',
      'HIPAA-aligned data handling and audit trails',
      'Escalation workflows for urgent patient cases',
      'Integration with EMR and hospital management systems',
    ],
    clients: [],
  },
];

export function Solutions() {
  return (
    <>
      {/* Hero */}
      <section className="pt-10 pb-8">
        <Container size="md">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-200 bg-white text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-6 shadow-sm">
              <img src={vector} alt="" className="w-3.5 h-3.5" /> SOLUTIONS
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 leading-tight mb-6">
              Built for your industry.<br />
              <span className="text-green-700">Designed for your team.</span>
            </h1>
            <p className="text-lg text-neutral-500 mb-8 max-w-2xl mx-auto">
              WajeNexus adapts to the specific needs of your sector — delivering the right workflows, integrations, and
              AI capabilities for your customer operation.
            </p>
          </div>
        </Container>
      </section>

      {/* Industry solutions */}
      <section className="py-8">
        <Container>
          <div className="space-y-6">
            {INDUSTRIES.map((industry, i) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-2xl border border-neutral-100 bg-white p-8 sm:p-10"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
                  {/* Text */}
                  <div className="flex flex-col">
                    <p className="text-xs font-bold tracking-widest text-green-700 uppercase mb-3">{industry.label}</p>
                    <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4 leading-tight">{industry.heading}</h2>
                    <p className="text-neutral-600 leading-relaxed mb-6">{industry.description}</p>
                    {industry.clients.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-8">
                        {industry.clients.map((client) => (
                          <span
                            key={client}
                            className="px-3 py-1 rounded-full bg-green-50 text-green-800 text-xs font-semibold border border-green-100"
                          >
                            {client}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="mt-auto pt-2">
                      <Link
                        to="/contact"
                        className="inline-block px-5 py-2.5 text-sm font-semibold text-white bg-neutral-900 rounded-xl hover:bg-[#016734] transition-colors"
                      >
                        Talk to a specialist
                      </Link>
                    </div>
                  </div>

                  {/* Capabilities panel */}
                  <div className="rounded-2xl bg-[#F4FBF1] p-6 sm:p-8">
                    <p className="text-sm font-semibold text-neutral-900 mb-4">What you get</p>
                    <ul className="space-y-3">
                      {industry.capabilities.map((cap) => (
                        <li key={cap} className="flex items-start gap-3 text-sm text-neutral-700">
                          <CheckCircle size={16} className="text-green-700 mt-0.5 shrink-0" />
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner
        heading="Not sure which solution fits your business?"
        subheading="Our team will walk you through the right configuration for your industry and team size."
        primaryCTA={{ label: 'Book a Demo', href: '/contact' }}
        secondaryCTA={{ label: 'Talk to Our Team', href: '/contact' }}
      />
    </>
  );
}
