import { useState, useEffect, useRef, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { CircleDot, Box, Play, Pause, RotateCcw, MessageCircle, MessageSquare, Phone, Mail, Camera, Calendar, Users } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { CTABanner } from '@/components/sections/CTABanner';
import { Link } from 'react-router-dom';
import type { PlatformFeature } from '@/types';
import vector from "@/assets/Vector.png";
import heroDashboard from "@/assets/heroposter.png";

const FEATURES: PlatformFeature[] = [
  {
    tag: 'OMNICHANNEL CONTACT CENTRE + CSAT',
    heading: 'Serve customers wherever they are. Handle everything from one screen.',
    description:
      'Calls, emails, WhatsApp messages, social DMs, and live chats all land in a single agent workspace. Powered by AI, WajeNexus intelligently routes interactions to agents and surfaces the full customer history before your agent says a word. Agents no longer need to ask "Can you remind me what we spoke about?" they already know.',
    bullets: [
      'Intelligent omnichannel routing across all channels',
      'Persistent conversation history synced across channels',
      'Built-in CSAT scoring after every interaction',
      'Inbound and outbound call management with agent leaderboard',
    ],
    imageRight: true,
  },
  {
    tag: 'CASE & TICKET MANAGEMENT',
    heading: 'Capture every issue. Resolve it faster. Leave nothing unaccounted for.',
    description:
      'Agentic AI captures customer issues the moment they arrive — regardless of channel — and creates structured tickets with full context attached. From there, every case follows a clear path: assigned, tracked, escalated when needed, and closed with a complete audit trail. No ticket falls through the cracks. No issue goes undocumented. And every SLA commitment is visible in real time.',
    bullets: [
      'Automatic ticket creation from any channel interaction',
      'SLA tracking with real-time compliance dashboards',
      'End-to-end audit trail for every case',
      'Escalation workflows with multi-agent collaboration',
    ],
    imageRight: false,
  },
  {
    tag: 'SALES PIPELINE MANAGEMENT',
    heading: 'Stop guessing where your deals are. Start closing them.',
    description:
      'We give your sales teams a clear, visual view of every opportunity from first contact to signed contract. Track deal stages, forecast revenue with confidence, and let AI highlight which prospects deserve your attention today. Real-time insights remove the guesswork. Automation removes the busywork. What\'s left is pure selling.',
    bullets: [
      'Visual pipeline with drag-and-drop deal management',
      'Weighted opportunity value tracking in Naira',
      'Territory and category-based lead segmentation',
      'Integrated with contact history for full customer context',
    ],
    imageRight: true,
  },
  {
    tag: 'CAMPAIGNS & MARKETING AUTOMATION',
    heading: 'Launch campaigns that actually convert.',
    description:
      'Our campaign engine connects your marketing and CRM data, so you\'re not blasting but you\'re targeting. AI-powered insights score your leads, predict deal outcomes, and tell your team exactly where to focus. Run bulk email campaigns, track open rates and conversions, and watch your pipeline fill with warm, nurtured prospects.',
    bullets: [
      'Bulk email campaign creation and scheduling',
      'Real-time campaign performance tracking',
      'Trigger-based campaign automation (e.g., birthday, renewal, onboarding)',
      'Seamless handoff from marketing leads to sales pipeline',
    ],
    imageRight: false,
  },
  {
    tag: 'WORKFORCE MANAGEMENT',
    heading: 'Always staffed. Never overstretched.',
    description:
      'Ensure your contact center team is always in the right place at the right time. WajeNexus forecasts peak periods using AI-driven demand modelling, then helps you build schedules, manage shift swaps, approve leave, and monitor attendance all from one intuitive calendar interface. For supervisors managing growing teams, it\'s the difference between reactive firefighting and confident planning.',
    bullets: [
      'AI-driven demand forecasting and shift planning',
      'Attendance overview with active shift tracking',
      'Leave and sick day request management with approval workflows',
      'Shift swap requests and peer-to-peer schedule coordination',
      'Configurable work rules — max hours, rest periods, fatigue policies',
    ],
    imageRight: true,
  },
  {
    tag: 'REPORTING, ANALYTICS & INSIGHTS',
    heading: 'See everything. Know what it means. Act on it.',
    description:
      'Turn every customer interaction into a source of intelligence. AI-driven analytics surface patterns, measure agent performance, track CSAT and FCR, and give supervisors and executives the real-time visibility they need to make decisions with confidence — not guesswork.',
    bullets: [
      'Real-time CSAT and First Contact Resolution (FCR) dashboards',
      'Average handle time, call volume, and escalation tracking',
      'Agent performance leaderboards with drill-down views',
      'Exportable reports for executive and compliance audiences',
    ],
    imageRight: false,
  },
];

const CARD_GRADIENTS = [
  'bg-linear-to-br from-violet-100 via-fuchsia-50 to-pink-100',
  'bg-linear-to-br from-fuchsia-100 via-violet-50 to-purple-100',
  'bg-linear-to-br from-indigo-100 via-violet-50 to-fuchsia-100',
  'bg-linear-to-br from-violet-100 via-indigo-50 to-purple-100',
  'bg-linear-to-br from-sky-100 via-violet-50 to-pink-100',
  'bg-linear-to-br from-indigo-100 via-purple-50 to-violet-100',
];

/* ── Playback placeholder card (stands in for the real animation) ── */
type PlayStatus = 'idle' | 'playing' | 'paused' | 'ended';

function PlaybackCard({ gradient, children }: { gradient: string; children: ReactNode }) {
  // Idle until scrolled into view, then plays through once and stops (no auto-loop, no auto-replay).
  const [status, setStatus] = useState<PlayStatus>('idle');
  const [runId, setRunId] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const playing = status === 'playing';

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatus((s) => (s === 'idle' ? 'playing' : s));
          observer.disconnect(); // start once, on first entry only
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleClick = () => {
    if (status === 'playing') setStatus('paused');
    else if (status === 'ended') {
      // replay from the start
      setRunId((n) => n + 1);
      setStatus('playing');
    } else {
      // idle or paused → play / resume
      setStatus('playing');
    }
  };

  return (
    <div ref={cardRef} className={`relative overflow-hidden rounded-3xl ${gradient} min-h-[320px] sm:min-h-[380px] flex items-center justify-center p-6 sm:p-10`}>
      {/* Shimmer sweep — only while actively playing */}
      <div className={`pointer-events-none absolute inset-0 overflow-hidden transition-opacity duration-500 ${playing ? 'opacity-100' : 'opacity-0'}`}>
        <div
          key={runId}
          className="absolute top-0 -left-1/3 h-full w-1/3 bg-white/40 blur-2xl"
          style={{ animation: 'fp-sweep 3.8s linear infinite', animationPlayState: playing ? 'running' : 'paused' }}
        />
      </div>

      {/* Mockup */}
      <div className="relative z-10 w-full flex justify-center">{children}</div>

      {/* Play / Pause / Replay with progress ring */}
      <button
        type="button"
        onClick={handleClick}
        aria-label={status === 'playing' ? 'Pause preview' : status === 'ended' ? 'Replay preview' : 'Play preview'}
        className="group absolute bottom-5 right-5 z-20 grid place-items-center w-14 h-14 rounded-full focus:outline-none focus-visible:ring-4 focus-visible:ring-white/60"
      >
        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 56 56" aria-hidden="true">
          <circle cx="28" cy="28" r="26" fill="none" stroke="rgba(255,255,255,0.65)" strokeWidth="2.5" />
          <circle
            key={runId}
            cx="28"
            cy="28"
            r="26"
            pathLength={100}
            fill="none"
            stroke="#016734"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="100"
            style={{ animation: 'fp-ring 6s linear forwards', animationPlayState: playing ? 'running' : 'paused' }}
            onAnimationEnd={() => setStatus('ended')}
          />
        </svg>
        <span className="relative w-11 h-11 rounded-full bg-white/95 shadow-lg grid place-items-center text-neutral-800 transition-transform group-hover:scale-105">
          {status === 'playing' ? (
            <Pause size={15} className="fill-current" />
          ) : status === 'ended' ? (
            <RotateCcw size={15} />
          ) : (
            <Play size={15} className="fill-current ml-0.5" />
          )}
        </span>
      </button>
    </div>
  );
}

/* ── Mockups — placeholders replicating each product surface ─────── */
function OmniMock() {
  const rows = [
    { label: 'WhatsApp', color: 'bg-green-500', icon: <MessageCircle size={13} /> },
    { label: 'Live Chats', color: 'bg-sky-500', icon: <MessageSquare size={13} /> },
    { label: 'Voice calls', color: 'bg-violet-500', icon: <Phone size={13} /> },
    { label: 'Emails', color: 'bg-red-500', icon: <Mail size={13} /> },
    { label: 'Facebook', color: 'bg-blue-600', icon: <span className="text-[11px] font-bold leading-none">f</span> },
    { label: 'Instagram', color: 'bg-pink-500', icon: <Camera size={13} /> },
  ];
  return (
    <div className="w-full max-w-[280px] space-y-2">
      {rows.map((r) => (
        <div key={r.label} className="flex items-center gap-3 rounded-xl bg-white/95 shadow-sm px-3 py-2.5">
          <span className={`w-7 h-7 rounded-full ${r.color} text-white flex items-center justify-center shrink-0`}>{r.icon}</span>
          <span className="text-xs font-semibold text-neutral-800">{r.label}</span>
          <span className="ml-auto h-1.5 w-14 rounded-full bg-neutral-200" />
        </div>
      ))}
    </div>
  );
}

function TicketMock() {
  const rows = [
    { age: '6 days 18 hours', status: 'In Progress', cls: 'bg-blue-100 text-blue-600', cat: '₦365 Issues' },
    { age: '7 days 23 hours', status: 'Escalated', cls: 'bg-red-100 text-red-500', cat: 'Billing' },
    { age: '8 days 18 hours', status: 'Open', cls: 'bg-orange-100 text-orange-500', cat: 'Billing' },
    { age: '8 days 19 hours', status: 'Closed', cls: 'bg-neutral-100 text-neutral-500', cat: 'Billing' },
    { age: '13 days 1 hour', status: 'Closed', cls: 'bg-neutral-100 text-neutral-500', cat: 'Billing' },
  ];
  return (
    <div className="w-full max-w-[330px] rounded-xl bg-white shadow-md overflow-hidden text-[11px]">
      <div className="grid grid-cols-3 gap-2 bg-neutral-900 text-white px-4 py-2.5 font-semibold">
        <span>Ticket Age</span><span>Ticket status</span><span>Category</span>
      </div>
      {rows.map((r, i) => (
        <div key={i} className="grid grid-cols-3 gap-2 items-center px-4 py-2.5 border-b border-neutral-100 last:border-0">
          <span className="text-neutral-600">{r.age}</span>
          <span><span className={`inline-block px-2 py-0.5 rounded-full font-medium ${r.cls}`}>{r.status}</span></span>
          <span className="text-neutral-600">{r.cat}</span>
        </div>
      ))}
    </div>
  );
}

function DealMock() {
  return (
    <div className="w-full max-w-[260px] rounded-xl bg-white shadow-md p-4 text-xs">
      <div className="flex items-center justify-between mb-3">
        <span className="inline-flex items-center gap-1.5 text-neutral-500"><span className="w-2 h-2 rounded-sm bg-amber-400" />Medium</span>
        <span className="font-semibold text-neutral-800">₦ 7,000,000.00</span>
      </div>
      <p className="font-bold text-neutral-900 text-sm leading-snug mb-2">Implementations of Complaint dispute portal</p>
      <p className="inline-flex items-center gap-1.5 text-neutral-400 mb-4"><Calendar size={12} /> days</p>
      <div className="border-t border-neutral-100 pt-3 space-y-2">
        <div className="flex items-center gap-2 text-neutral-700">
          <span className="w-5 h-5 rounded-full bg-neutral-800 text-white text-[8px] flex items-center justify-center">JD</span> John Doe
        </div>
        <div className="inline-flex items-center gap-1.5 text-neutral-500"><Users size={12} /> Contacts: 1</div>
      </div>
    </div>
  );
}

function CampaignMock() {
  const names = ['Welcome message', 'New members on WajeNexus', 'New To WajeNexus', 'Introducing WajeNexus', 'Introducing WajeNexus'];
  return (
    <div className="w-full max-w-[330px] rounded-xl bg-white shadow-md overflow-hidden text-[11px]">
      <div className="grid grid-cols-2 gap-2 bg-neutral-900 text-white px-4 py-2.5 font-semibold">
        <span>Campaign Name</span><span>Campaign Status</span>
      </div>
      {names.map((n, i) => (
        <div key={i} className="grid grid-cols-2 gap-2 items-center px-4 py-2.5 border-b border-neutral-100 last:border-0">
          <span className="text-neutral-600">{n}</span>
          <span><span className="inline-block px-2 py-0.5 rounded bg-green-100 text-green-700 font-medium">Completed</span></span>
        </div>
      ))}
    </div>
  );
}

function LeaveMock() {
  return (
    <div className="w-full max-w-[260px] rounded-xl bg-white shadow-md p-4 text-xs">
      <p className="font-bold text-neutral-900 text-sm mb-3">Leave Request</p>
      <div className="flex items-center gap-2 mb-2 text-neutral-700">
        <span className="w-5 h-5 rounded-full bg-neutral-800 text-white text-[8px] flex items-center justify-center">JD</span> Jane Doe
      </div>
      <div className="flex flex-wrap items-center gap-2 text-neutral-500 mb-2">
        <span className="inline-flex items-center gap-1"><Calendar size={12} /> Aug 16, 2026 To Aug 31, 2026</span>
        <span className="px-1.5 py-0.5 rounded bg-blue-100 text-blue-600 font-medium">Personal</span>
      </div>
      <p className="text-neutral-600 mb-3">Going for annual leave</p>
      <div className="flex gap-2">
        <button className="flex-1 py-1.5 rounded bg-green-500 text-white font-medium">Approve</button>
        <button className="flex-1 py-1.5 rounded bg-red-500 text-white font-medium">Reject</button>
      </div>
    </div>
  );
}

function CsatMock() {
  return (
    <div className="w-full max-w-[210px] rounded-xl bg-white shadow-md p-5">
      <p className="text-xs font-semibold text-neutral-700 mb-3">CSAT</p>
      <div className="relative w-32 h-32 mx-auto">
        <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
          <circle cx="18" cy="18" r="15.9155" fill="none" stroke="#E5E7EB" strokeWidth="3.5" />
          <circle cx="18" cy="18" r="15.9155" fill="none" stroke="#2563EB" strokeWidth="3.5" strokeLinecap="round" strokeDasharray="65 100" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-neutral-900">65%</div>
      </div>
      <p className="text-xs text-neutral-500 text-center mt-3">Target: <span className="text-blue-600 font-semibold">85%</span></p>
    </div>
  );
}

const MOCKS = [<OmniMock />, <TicketMock />, <DealMock />, <CampaignMock />, <LeaveMock />, <CsatMock />];

function FeatureBlock({ feature, index }: { feature: PlatformFeature; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-16 items-center py-16 border-b border-neutral-100 last:border-0`}
    >
      {/* Text */}
      <div className="flex-1">
        <p className="text-xs font-bold tracking-widest text-green-700 uppercase mb-4">{feature.tag}</p>
        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4 leading-tight">{feature.heading}</h2>
        <p className="text-neutral-600 leading-relaxed mb-6">{feature.description}</p>
        <ul className="space-y-3">
          {feature.bullets.map((b) => (
            <li key={b} className="flex items-start gap-3 text-sm text-neutral-700">
              <CircleDot size={16} className="text-green-700 mt-0.5 shrink-0" />
              <span className="font-medium">{b}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Visual — playback placeholder */}
      <div className="flex-1 w-full">
        <PlaybackCard gradient={CARD_GRADIENTS[index]}>{MOCKS[index]}</PlaybackCard>
      </div>
    </motion.div>
  );
}

function CommittedSection() {
  const pillars = [
    {
      title: 'Free Setup, Training & Installation',
      desc: "No surprise professional services bill. We get you live, we train your team, and we make sure you're set up for success at no additional cost.",
    },
    {
      title: '24/7 In-House Support',
      desc: 'When something needs attention, you reach a WajeNexus expert who knows your account and not a distant helpdesk queue operating in a different time zone.',
    },
    {
      title: 'One Platform, Not a Bundle',
      desc: 'Everything you see here is one product. Not three separate tools repackaged together with a shared login. One system. One team. One monthly cost.',
    },
  ];

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 mb-10">
          Committed to your success.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className={`md:px-8 md:first:pl-0 ${i > 0 ? 'md:border-l md:border-neutral-200' : ''}`}
            >
              <h3 className="text-xl font-bold text-neutral-900 mb-3">{p.title}</h3>
              <p className="text-neutral-600 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ProblemSolveSection() {
  const cards = [
    {
      title: 'Core Business Modules',
      desc: 'One system, several capabilities built to work together from the ground up, not connected after the fact.',
    },
    {
      title: 'Omnichannel from Day One',
      desc: 'Phone calls, emails, WhatsApp conversations, live chats etc. all flow into one unified workspace.',
    },
    {
      title: 'Zero Setup or Onboarding Fees',
      desc: 'Setup, installation, training, and onboarding are included at no extra charge.',
    },
  ];

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-200 bg-white text-xs font-semibold tracking-widest text-neutral-900 uppercase mb-6 shadow-sm">
            <Box size={14} /> THE PROBLEM WE SOLVE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight text-neutral-900 leading-[1.1] mb-6">
            Your current CRM doesn't fully support your unique demands.
          </h2>
          <p className="text-neutral-500 leading-relaxed mb-6 max-w-5xl text-[15px] text-center mx-auto">
            For too long, businesses have patched together tools that are expensive, poorly supported, and
            fundamentally misaligned with their market realities. Exchange rate volatility drives licensing costs
            skyward. Vendor support is slow or nonexistent. And when the tools don't fit, your teams work around them
            instead of with them.
          </p>
          <p className="text-neutral-500 leading-relaxed">
            <strong className="font-semibold text-neutral-900">WajeNexus</strong> changes that. Built with the depth of
            global enterprise software and the flexibility to adapt to the unique demands of your market. Everything
            your customer-facing teams need. Finally, in one place.
          </p>
        </div>

        <div className="bg-[#F4FBF1] rounded-3xl p-3 sm:p-4 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            {cards.map((card) => (
              <div
                key={card.title}
                className="flex gap-3 bg-white rounded-2xl border border-neutral-100 p-6"
              >
                <CircleDot size={16} className="text-neutral-900 mt-1 shrink-0" />
                <div>
                  <h3 className="font-bold text-neutral-900 mb-1.5">{card.title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function EnterpriseSection() {
  const items = [
    {
      title: 'Security & Compliance',
      desc: 'Role-based access control, end-to-end encryption, and audit-ready reporting keep your data protected and your regulators satisfied.',
    },
    {
      title: 'Customization & Configuration',
      desc: 'Tailor dashboards, workflows, pipelines, and data fields to match your exact processes — without writing a single line of code.',
    },
    {
      title: 'Customer Self-Service Portal',
      desc: 'Give customers the ability to find answers, log requests, and track their tickets 24/7 supported by AI chatbots that handle the most common queries automatically.',
    },
    {
      title: 'AI-Powered Quality & Compliance Monitoring',
      desc: 'Monitor interaction quality automatically. Surface coaching opportunities. Ensure your team consistently meets the service standards your brand promises.',
    },
  ];

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-200 bg-white text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-4 shadow-sm">
            <img src={vector} alt="vector" /> ADVANCED FEATURES
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">Built for Enterprise</h2>
          <p className="text-neutral-500 max-w-xl mx-auto text-[15px] leading-relaxed">
            WajeNexus is built to meet the security, compliance, and operational complexity demands of large organizations
            with the flexibility and local adaptability that Nigeria and African markets require.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-neutral-100 rounded-2xl overflow-hidden">
          {items.map((item) => (
            <div key={item.title} className="bg-white p-8">
              <h3 className="font-bold text-neutral-900 mb-3">{item.title}</h3>
              <p className="text-[16px] text-neutral-600 leading-relaxed max-w-md ">{item.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function Platform() {
  return (
    <>
      {/* Hero */}
      <section className="pt-10 pb-4 bg=[#FFFFFF]">
        <Container size="full">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-200 bg-white text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-6 shadow-sm">
              <img src={vector} alt="vector" /> THE WAJENEXUS PLATFORM
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 leading-[1.1] mb-6">
              One Platform.
              <br />
              Every Channel.
              <br />
              <span className="text-green-700">Zero Compromise.</span>
            </h1>
            <p className="text-lg text-neutral-500 mb-8 max-w-2xl mx-auto">
              An all-in-one CRM and Contact Centre platform built for African enterprises unifying every customer
              touchpoint into a single, intelligent workspace.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-3">
              <div className="flex flex-col items-center">
                <Link
                  to="/contact"
                  className="w-full max-w-[170px] px-4 py-3.5 text-base text-[16px] font-semibold text-white bg-neutral-900 rounded-md hover:bg-[#016734] transition-colors text-center"
                >
                  Book a Demo
                </Link>
                <div className="flex items-center justify-center gap-1.5 text-[14px] text-[#3C3B3B]">
                  <span className="text-yellow-400 text-[20px]">★★★★★</span>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2">
                <Link
                  to="#"
                  className="inline-flex items-center justify-center gap-2 w-full max-w-[220px] px-4 py-3.5 text-base font-medium text-neutral-700 border border-neutral-200 bg-white rounded-md hover:bg-[#016734] hover:text-white hover:border-[#016734] transition-colors"
                >
                  <Play size={15} className="fill-current" />
                  Watch 2-min Demo
                </Link>
                <span className="text-[14px] text-[#3C3B3B]">Trusted by Enterprise Teams</span>
              </div>
            </div>
          </div>
             {/* Dashboard screenshot */}
        <div className=" py-5 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-10 relative "
          >
            <div className="mx-auto relative">
              {/* Glowing background */}
              <div className="absolute inset-0 -top-10 rounded-3xl bg-green-50 blur-3xl opacity-50 pointer-events-none" />
              <div
                className="
                  relative
                  rounded-2xl
                  shadow-2xl shadow-neutral-200/60
                  overflow-hidden
                  bg-white
                  
                "
              >
                <img
                  src={heroDashboard}
                  alt="WajeNexus Dashboard"
                  className="w-full h-auto rounded-xl"
                  loading="eager"
                />

                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/60 to-transparent pointer-events-none" />
              </div>
            </div>
          </motion.div>
        </div>
        </Container>
      </section>

      {/* The problem we solve */}
      <ProblemSolveSection />

      {/* Feature blocks */}
      <section className="py-8 bg-[#F7F7F7]">
        <Container>
          <div className="mb-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-200 bg-white text-xs font-semibold tracking-widest text-neutral-500 uppercase shadow-sm">
              <img src={vector} alt="vector" className="w-4 h-4" />
              PRODUCT FEATURES
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-neutral-900">
              Built for every team that touches the customer.
            </h2>
            <p className="mt-3 text-neutral-500 max-w-2xl mx-auto">
              One platform, engineered to give every role from contact center agents to C-suite decision-makers exactly
              what they need to perform.
            </p>
          </div>
          {FEATURES.map((feature, i) => (
            <FeatureBlock key={feature.tag} feature={feature} index={i} />
          ))}
        </Container>
      </section>

      <EnterpriseSection />
      <CommittedSection />
      <CTABanner
        heading="Ready to Transform your Customer Operations?"
        primaryCTA={{ label: 'Book a Demo', href: '/contact' }}
        secondaryCTA={{ label: 'Watch 2-min Demo', href: '#' }}
      />
    </>
  );
}
