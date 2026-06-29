import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/layout/Container';
// import { CTABanner } from '@/components/sections/CTABanner';
import { Link } from 'react-router-dom';
import type { IntegrationCategory } from '@/types';
import vector from '@/assets/integration.png';
import centerHub from '@/assets/centerintegration.png';
import messageCard from '@/assets/messageicon.png';
import mouse from '@/assets/mouse.png';
import instagramCard from '@/assets/instagram.png';
import whatsappCard from '@/assets/whatsapp.png';
import emailCard from '@/assets/email.png';
import facebookCard from '@/assets/facebook.png';
import dialerCard from '@/assets/dialer.png';

const CATEGORIES: IntegrationCategory[] = [
  {
    id: 'channels',
    label: 'Communication Channels',
    heading: 'Where your customers are and where your team needs to be.',
    subheading: 'MESSAGING & SOCIAL',
    description:
      'WajeNexus connects natively with the communication channels your customers already use every day. Every message regardless of where it comes from lands in one unified agent workspace, fully contextualized and ready to action.',
    items: [
      {
        title: 'WhatsApp Business API',
        description: 'Handle WhatsApp conversations at scale, with full conversation history and automated routing built in',
      },
      {
        title: 'Email',
        description: 'Connects via standard SMTP/IMAP protocols, compatible with all major business email providers',
      },
      {
        title: 'Social Media Channels',
        description: 'Manage inbound messages and mentions across major social platforms from a single inbox',
      },
      {
        title: 'Live Chat',
        description: 'Embed web chat directly into your website or customer portal, powered by WajeNexusAI',
      },
    ],
  },
  {
    id: 'telephony',
    label: 'Telephony Infrastructure',
    heading: 'Crystal-clear voice infrastructure built for African networks.',
    subheading: 'VOICE & TELEPHONY',
    description:
      'WajeNexus integrates with leading telephony providers to give your contact center reliable, high-quality voice calls — inbound and outbound — with full call recording, transcription, and real-time monitoring.',
    items: [
      {
        title: 'SIP Trunk Integration',
        description: 'Connect any SIP-compatible telephony provider to bring voice directly into WajeNexus',
      },
      {
        title: 'IVR & Call Flow Builder',
        description: 'Design multi-level IVR menus and intelligent call routing without writing a single line of code',
      },
      {
        title: 'Call Recording & Transcription',
        description: 'Every call is recorded and transcribed automatically for compliance, coaching, and quality review',
      },
      {
        title: 'Real-Time Call Monitoring',
        description: 'Supervisors can listen in, whisper to agents, or barge in during live calls from a single dashboard',
      },
    ],
  },
  {
    id: 'payments',
    label: 'Payment Systems',
    heading: 'Collect payments and resolve billing queries in one flow.',
    subheading: 'PAYMENT & BILLING',
    description:
      'WajeNexus connects to Nigerian and African payment gateways so your agents can initiate transactions, confirm payments, and resolve billing queries all without leaving the workspace.',
    items: [
      {
        title: 'Paystack',
        description: 'Accept cards, bank transfers, and USSD payments — initiate and verify transactions from within the platform',
      },
      {
        title: 'Flutterwave',
        description: 'Multi-currency payment processing with real-time webhook notifications to update ticket status automatically',
      },
      {
        title: 'Bank Transfer Verification',
        description: 'Reconcile bank transfers and confirm payment statuses directly in the agent workspace',
      },
      {
        title: 'Custom Payment Connectors',
        description: 'Use our API to connect any payment system your business already uses',
      },
    ],
  },
  {
    id: 'tools',
    label: 'Business Tools & Systems',
    heading: 'Connect the systems your teams already live in.',
    subheading: 'ENTERPRISE TOOLS',
    description:
      'WajeNexus integrates with the business tools your teams depend on — ERP systems, HR platforms, and custom internal tools — so data flows where it needs to without manual re-entry or system switching.',
    items: [
      {
        title: 'ERP Systems',
        description: 'Bi-directional sync with SAP, Oracle, and other enterprise resource planning systems',
      },
      {
        title: 'HR & Workforce Platforms',
        description: 'Sync employee records, shift data, and performance metrics with leading HR systems',
      },
      {
        title: 'Data Warehouses & BI Tools',
        description: 'Push WajeNexus data to your warehouse for cross-system analytics with tools like Power BI or Tableau',
      },
      {
        title: 'Custom API Integrations',
        description: 'Our RESTful API and webhook system lets your tech team connect anything that isn\'t covered out of the box',
      },
    ],
  },
];

function IntegrationChannels() {
  const [active, setActive] = useState(CATEGORIES[0].id);
  const current = CATEGORIES.find((c) => c.id === active)!;

  return (
    <section className="py-16">
      <Container>
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-200 bg-white text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-4 shadow-sm">
            <img src={vector} alt="Vector" /> WHAT WE CONNECT TO
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4 max-w-md text-center  mx-auto">
            Every channel talking to each other.
          </h2>
          <p className="text-neutral-500 max-w-2xl mx-auto">
            WajeNexus integrates across Communication Channels, Telephony Infrastructure, Payment Systems, and Business
            Tools to give your team a complete, connected view of every customer interaction regardless of where it happens.
          </p>
        </div>

        {/* Tab bar — single segmented pill container */}
        <div className="mb-12 flex justify-center">
          <div className="inline-flex items-center gap-1 p-1.5 rounded-full border border-neutral-200 bg-white max-w-full overflow-x-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  active === cat.id
                    ? 'bg-[#016734] text-white'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content — heading | description+items | layered visual */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start"
          >
            {/* Heading */}
            <div className="lg:col-span-3">
              <p className="text-xs font-bold tracking-widest text-green-700 uppercase mb-3">{current.subheading}</p>
              <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 leading-tight">{current.heading}</h3>
            </div>

            {/* Description + items */}
            <div className="lg:col-span-5">
              <p className="text-neutral-600 leading-relaxed mb-6">{current.description}</p>
              <div className="divide-y divide-neutral-200">
                {current.items.map((item) => (
                  <div key={item.title} className="py-4 first:pt-0">
                    <h4 className="font-bold text-neutral-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-neutral-500 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Layered hub visual */}
            <div className="lg:col-span-4 w-full">
              <div className="relative w-full aspect-square rounded-2xl bg-gradient-to-br from-[#F4FBF1] via-white to-neutral-50 border border-neutral-100 overflow-hidden flex items-center justify-center">
                {/* Layered floating cards */}
                <img
                  src={messageCard}
                  alt=""
                  aria-hidden="true"
                  className="absolute w-44 -left-4 top-12 -rotate-6 opacity-70 drop-shadow-lg"
                />
                <img
                  src={messageCard}
                  alt=""
                  aria-hidden="true"
                  className="absolute w-44 -right-4 bottom-12 rotate-6 opacity-70 drop-shadow-lg"
                />
                {/* Key hub icon */}
                <img
                  src={centerHub}
                  alt="WajeNexus integration hub"
                  className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 object-contain drop-shadow-xl"
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}

function APISection() {
  const features = [
    {
      title: 'Open API Access',
      desc: 'Connect any internal or third-party system to WajeNexus using our API. Pull customer data in. Push interaction records out. Build the exact data flows your operation needs.',
    },
    {
      title: 'Webhook Support',
      desc: 'Trigger real-time events in external systems the moment something happens in WajeNexus — a ticket is resolved, a deal stage changes, a CSAT score drops. Keep every connected system in sync, automatically.',
    },
    {
      title: 'Secure by Design',
      desc: 'Every integration, native or custom, operates within WajeNexus\' security framework. Role-based access control, encrypted data transfer, and full audit logging apply across all connected systems.',
    },
  ];

  return (
    <section className="py-16 bg-neutral-50">
      <Container>
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-200 bg-white text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-4 shadow-sm">
            <img src={vector} alt="" className="w-3.5 h-3.5" /> FOR YOUR IT TEAM
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">API &amp; Developer Access</h2>
          <p className="text-neutral-500 max-w-xl mx-auto">
            WajeNexus provides a clean, well-documented API layer that makes custom integration straightforward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 mb-12">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`md:px-8 md:first:pl-0 ${i > 0 ? 'md:border-l md:border-neutral-200' : ''}`}
            >
              <h3 className="text-xl font-bold text-neutral-900 mb-2">{f.title}</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="relative overflow-hidden bg-[#FFDAD6] rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-lg relative z-10">
            <h3 className="text-xl font-bold text-neutral-900 mb-2">
              Not sure if WajeNexus connects with your current stack?
            </h3>
            <p className="text-neutral-700 text-sm leading-relaxed mb-5">
              Our technical team is happy to assess your existing infrastructure and confirm exactly how WajeNexus fits
              in. No obligation. No generic sales pitch. Just a straight answer from people who know the platform inside
              out.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="px-6 py-3 text-sm font-semibold text-white bg-neutral-900 rounded-lg hover:bg-neutral-800 transition-colors"
              >
                Book a Demo
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 text-sm font-medium text-neutral-700 border border-neutral-200 bg-white rounded-lg hover:bg-neutral-50 transition-colors"
              >
                Talk to Our Team
              </Link>
            </div>
          </div>

          {/* Decorative blob */}
          <div className="absolute -right-10 top-1/2 -translate-y-1/2 opacity-90 pointer-events-none select-none hidden md:block">
            <img src={mouse} alt="" aria-hidden="true" width={420} height={420} />
          </div>
        </div>
      </Container>
    </section>
  );
}

export function Integrations() {
  return (
    <>
      {/* Hero */}
      <section className="pt-10 pb-4">
        <Container size="md">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-200 bg-white text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-6 shadow-sm">
              <img src={vector} alt="Vector" /> INTEGRATIONS
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 leading-[1.1] mb-6">
              WajeNexus Fits Into Your World
            </h1>
            <p className="text-lg text-neutral-500 mb-8 max-w-2xl mx-auto">
              Get the power of a unified CRM and contact center platform without dismantling the stack you've already built.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/contact"
                className="px-7 py-3.5 text-base font-semibold text-white bg-neutral-900 rounded-xl hover:bg-neutral-800 transition-colors"
              >
                Book a Demo
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3.5 text-base font-medium text-neutral-700 border border-neutral-200 bg-white rounded-xl hover:bg-neutral-50 transition-colors"
              >
                Talk to Our Team
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Integration visual — layered channel cards around the hub */}
      <section className="pb-12 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4">
          {/* Desktop: layered composition */}
          <div className="relative hidden lg:block h-[360px]">
            {/* Concentric glow rings + center hub */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-72 h-72 rounded-full bg-green-100/50 flex items-center justify-center">
                <div className="w-52 h-52 rounded-full bg-green-200/50 flex items-center justify-center">
                  <div className="w-36 h-36 rounded-full bg-green-300/40 flex items-center justify-center">
                    <img src={centerHub} alt="WajeNexus integration hub" className="w-20 h-20 object-contain drop-shadow-lg" />
                  </div>
                </div>
              </div>
            </div>

            {/* Surrounding channel cards */}
            <img src={instagramCard} alt="Instagram" className="absolute left-0 top-0 w-48" />
            <img src={whatsappCard} alt="WhatsApp" className="absolute left-[19%] top-16 w-56 z-20" />
            <img src={messageCard} alt="Live chat" className="absolute left-[35%] top-20 w-44 z-20" />
            <img src={dialerCard} alt="Voice calls" className="absolute right-[33%] top-16 w-44 z-20" />
            <img src={emailCard} alt="Email" className="absolute right-[17%] top-14 w-56 z-20" />
            <img src={facebookCard} alt="Facebook" className="absolute right-0 top-2 w-48" />
          </div>

          {/* Mobile / tablet: simple responsive grid */}
          <div className="lg:hidden">
            <div className="relative flex justify-center mb-6">
              <div className="w-44 h-44 rounded-full bg-green-100/50 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-green-200/50 flex items-center justify-center">
                  <img src={centerHub} alt="WajeNexus integration hub" className="w-16 h-16 object-contain drop-shadow-lg" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 items-center">
              <img src={instagramCard} alt="Instagram" className="w-full" />
              <img src={whatsappCard} alt="WhatsApp" className="w-full" />
              <img src={emailCard} alt="Email" className="w-full" />
              <img src={facebookCard} alt="Facebook" className="w-full" />
            </div>
          </div>
        </div>
      </section>

      <IntegrationChannels />
      <APISection />

      {/* <CTABanner
        heading="Ready to Connect WajeNexus to Your Stack?"
        subheading="Our integration experts are ready to help you get connected — quickly and cleanly."
        primaryCTA={{ label: 'Book a Demo', href: '/contact' }}
        secondaryCTA={{ label: 'Talk to Our Team', href: '/contact' }}
      /> */}
    </>
  );
}
