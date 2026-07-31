import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { StatsSection } from "@/components/sections/StatsSection";
import { CTABanner } from "@/components/sections/CTABanner";
import { UnifiedSolution } from "@/components/sections/UnifiedSolution";
import { IntelligenceLayer } from "@/components/sections/IntelligenceLayer";
import { BestAgentSection } from "@/components/sections/BestAgentSection";
import heroDashboard from "@/assets/heroposter.png";
import aiPng from "@/assets/Group.png";
import vector from "@/assets/Vector.png";
import omnichannelImg from "@/assets/omnichannel.png";
import aiAgentImg from "@/assets/aigent.png";
import salesPipelineImg from "@/assets/salespipeline.png";
import analyticsImg from "@/assets/analytics.png";
import automationEngineImg from "@/assets/automationEngine.png";
import workforceImg from "@/assets/workforce-management.png";
import caseTicketImg from "@/assets/case-ticket-management.png";

/* Free Pexels stock clip (direct CDN file — the page URL won't play in <video>).
   NOTE: this is the 4K source; swap for the real product demo (or a lighter file) when ready. */
const HERO_VIDEO_URL =
  "https://videos.pexels.com/video-files/7304313/7304313-uhd_4096_1974_30fps.mp4";

/* ── Hero ─────────────────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="relative pt-12 pb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-200 bg-white text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-6 shadow-sm">
            <img src={aiPng} alt="AI" className="text-green-700" />
            AI-POWERED CRM &amp; CONTACT CENTER
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 leading-[1.1] mb-6">
            The Operating System for Modern{" "}
            <span className="text-green-700"> Customer Relationships.</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-neutral-500 leading-relaxed mb-8 max-w-2xl mx-auto">
            An all-in-one omnichannel CRM and contact center platform that
            enables businesses to deliver fast, seamless, and consistent
            customer experiences across every channel.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
            <Link
              to="/contact"
              className="px-7 py-3.5 text-base font-semibold text-white bg-neutral-900 rounded-sm hover:bg-[#016734] transition-colors shadow-sm"
            >
              Book a Demo
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-medium text-neutral-700 border border-neutral-200 bg-white rounded-sm hover:bg-[#016734] hover:text-white hover:border-[#016734] transition-colors"
            >
              Talk to Our Team
            </Link>
          </div>

          {/* Stars */}
          <div className="flex items-center justify-center gap-1.5 text-[14px] text-[#3C3B3B]">
            <span className="text-yellow-400 text-[18px]">★★★★★</span>
            <span>Trusted by Enterprise Teams</span>
          </div>
        </motion.div>

        {/* Dashboard screenshot */}
        <div className="bg-[#F4FBF1] rounded-sm py-5">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-10 relative "
          >
            <div className="mx-auto max-w-5xl relative">
              {/* Glowing background */}
              <div className="absolute inset-0 -top-10 rounded-3xl bg-green-50 blur-3xl opacity-50 pointer-events-none" />
              <div className="relative rounded-2xl border-4 border-black shadow-2xl shadow-neutral-200/60 overflow-hidden bg-black">
                <video
                  src={HERO_VIDEO_URL}
                  poster={heroDashboard}
                  className="w-full h-auto"
                  controls
                  preload="metadata"
                  playsInline
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ── Feature Grid (Home Overview) ──────────────────────────────── */
const FEATURES = [
  {
    title: 'Omnichannel Contact Centre',
    desc: 'Handle calls, emails, WhatsApp, live chat, and social media from one unified agent workspace, with AI-powered routing and real-time CSAT scoring built in.',
    img: omnichannelImg,
    alt: 'Omnichannel channels',
  },
  {
    title: 'Campaigns & Marketing Automation',
    desc: 'Run targeted campaigns that reach the right customers at the right moment, and hand off qualified leads to sales automatically.',
    img: aiAgentImg,
    alt: 'Campaign automation workflow',
  },
  {
    title: 'Sales Pipeline Management',
    desc: 'Give your sales team a clear, visual pipeline from first lead to closed deal, with WajeNexus scoring the opportunities most likely to convert.',
    img: salesPipelineImg,
    alt: 'Sales pipeline funnel',
  },
  {
    title: 'Reporting, Analytics & Insights',
    desc: 'Real-time dashboards for every role from contact center supervisors to CEOs, powered by WajeNexusAI and built on unified platform data.',
    img: analyticsImg,
    alt: 'Analytics dashboard',
  },
  {
    title: 'Automation Engine',
    desc: 'The intelligence layer running across everything routing, assisting agents, handling overnight queries, and automating the tasks that slow your team down.',
    img: automationEngineImg,
    alt: 'Automation workflow',
  },
  {
    title: 'Workforce Management',
    desc: 'Forecast demand, optimize schedules, and manage leave, attendance, and shift swaps from one intelligent planning interface.',
    img: workforceImg,
    alt: 'Workforce management',
  },
];

function FeatureOverview() {
  return (
    <section id="features" className="py-16 sm:py-20 bg-[#F7F7F7] scroll-mt-24">
      <Container>
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-200 bg-white text-xs font-semibold tracking-widest text-[#000] uppercase mb-4 shadow-sm">
            <img src={vector} alt="vector png" /> PRODUCT FEATURES
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">
            Everything your revenue and support teams need.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex flex-col h-full rounded-2xl border border-neutral-100 bg-linear-to-b from-white to-[#FBEEEA]/50 shadow-sm overflow-hidden"
            >
              <div className="p-6">
                <h3 className="font-bold text-neutral-900 mb-2">{f.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{f.desc}</p>
              </div>
              <div className="flex-1 flex items-center justify-center px-6 pb-6 pt-2 min-h-[190px]">
                <img src={f.img} alt={f.alt} className="w-full h-auto max-h-56 object-contain" />
              </div>
            </motion.div>
          ))}

          {/* Case & Ticket Management — full width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="md:col-span-2 lg:col-span-3 flex flex-col md:flex-row rounded-2xl border border-neutral-100 bg-linear-to-br from-white to-[#FBEEEA]/50 shadow-sm overflow-hidden"
          >
            <div className="p-6 md:max-w-md lg:max-w-lg">
              <h3 className="font-bold text-neutral-900 mb-2">Case &amp; Ticket Management</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Capture, track, and resolve every customer issue automatically with SLA tracking, escalation
                workflows, and a complete audit trail from first contact to final resolution.
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center md:justify-end px-6 pb-6 md:pt-6">
              <img
                src={caseTicketImg}
                alt="Case and ticket management"
                className="w-full max-w-md h-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

/* ── Home Page ──────────────────────────────────────────────────── */
export function Home() {
  return (
    <>
      <HeroSection />
      <UnifiedSolution />
      <FeatureOverview />
      <IntelligenceLayer />
      <BestAgentSection />
      <StatsSection />
      <div className="bg-[#F7F7F7]">
        <CTABanner />
      </div>
    </>
  );
}
