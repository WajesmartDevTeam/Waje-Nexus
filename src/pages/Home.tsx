import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Play, CheckCircle, X, Check, CircleDot } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { StatsSection } from "@/components/sections/StatsSection";
import { CTABanner } from "@/components/sections/CTABanner";
import { TrustedBy } from "@/components/sections/TrustedBy";
import heroDashboard from "@/assets/wajenexus-dashboard.png";
import aiPng from "@/assets/Group.png";
import vector from "@/assets/Vector.png";
import omnichannelImg from "@/assets/omnichannel.png";
import aiAgentImg from "@/assets/aigent.png";
import salesPipelineImg from "@/assets/salespipeline.png";
import analyticsImg from "@/assets/analytics.png";
import automationEngineImg from "@/assets/automationEngine.png";

/* ── Hero ─────────────────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="relative pt-12 pb-0 overflow-hidden">
      {/* <Container> */}
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
              className="px-7 py-3.5 text-base font-semibold text-white bg-neutral-900 rounded-xl hover:bg-neutral-800 transition-colors shadow-sm"
            >
              Start Free Trial
            </Link>
            <Link
              to="#"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-medium text-neutral-700 border border-neutral-200 bg-white rounded-xl hover:bg-neutral-50 transition-colors"
            >
              <Play size={15} className="fill-current" />
              Watch 2-min Demo
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
              <div
                className="
    relative
    rounded-2xl
    border-4 border-black
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
      </div>
      {/* </Container> */}
    </section>
  );
}

/* ── Problem Section ────────────────────────────────────────────── */
function ProblemSection() {
  const oldWays = [
    "CRM, helpdesk, and dialer are completely siloed",
    "Agents juggle 6+ browser tabs on every call",
    "No shared history between channels",
    "Manual follow-ups fall through the cracks",
    "Reporting is always a week behind",
  ];

  const newWays = [
    "CRM + Contact Centre + AI — one unified platform",
    "Full customer context in a single, clean view",
    "Omnichannel inbox: voice, WhatsApp, email, chat, SMS",
    "AI agents handle Tier-1 automatically, 24/7",
    "Live dashboards, updated in real time",
  ];

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900">
            Your customer data lives in 12
            <br />
            different tools.{" "}
            <span className="text-green-700">It shouldn't.</span>
          </h2>
          <p className="mt-4 text-neutral-500 text-lg max-w-4xl mx-auto">
            Every disconnected system is a delayed response. Every switching
            cost is a missed conversation. Every manual handoff is a customer
            who notices. WajeNexus was built to end all of that.
          </p>
        </div>

        <div className=" max-w-300 mx-auto bg-[#F4FBF1] p-4 rounded-[48px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4  p-6 border-4 rounded-[48px] border-[#FFFFFF] ">
            {/* Old ways */}
            <div className="rounded-2xl  p-6 border-4 border-[#FFFFFF]">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-6 h-6 rounded-md bg-red-500 flex items-center justify-center">
                  <X size={14} className="text-white" strokeWidth={3} />
                </div>
                <span className="font-semibold text-neutral-800">Old ways</span>
              </div>
              <ul className="space-y-3">
                {oldWays.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-neutral-600"
                  >
                    <CircleDot
                      size={14}
                      className="text-neutral-300 mt-0.5 shrink-0"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* WajeNexus ways */}
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-6 h-6 rounded-md bg-green-700 flex items-center justify-center">
                  <Check size={14} className="text-white" strokeWidth={3} />
                </div>
                <span className="font-semibold text-white">WajeNexus ways</span>
              </div>
              <ul className="space-y-3">
                {newWays.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-neutral-300"
                  >
                    <CircleDot
                      size={14}
                      className="text-neutral-600 mt-0.5 shrink-0"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ── Beyond CRM ─────────────────────────────────────────────────── */
function BeyondCRM() {
  const capabilities = [
    "Manage customer interactions with an Omnichannel Contact Center while improving CSAT",
    "Track and optimize your sales pipeline from lead to conversion",
    "Handle cases and tickets efficiently to resolve issues faster with the use of Agentic AI",
    "Optimize workforce management to ensure your teams are always aligned",
    "Leverage automation and predictive AI to act smarter and faster",
    "Access powerful reporting, analytics, and insights to make data-driven decisions",
    "Run targeted campaigns and marketing automation to engage customers effectively",
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-5 max-w-[360px]">
              Go Beyond Traditional CRM
            </h2>
            <p className="text-neutral-500 leading-relaxed mb-6">
              <strong className="text-neutral-800">WajeNexus</strong> is an
              all-in-one AI-powered CRM and contact center platform designed to
              help businesses deliver seamless, consistent, and personalized
              customer experiences across every channel. Unify your sales,
              support, and marketing teams on a single platform to eliminate
              silos, automate repetitive tasks, and gain a complete view of
              every customer interaction.
            </p>
            <p className="text-neutral-500 leading-relaxed">
              Whether you're a scaling startup or an established enterprise,
              WajeNexus empowers your team to work smarter, engage faster, and
              build stronger customer relationships all from a single unified
              platform.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-100 bg-[#F4FBF1] p-6 shadow-sm">
            <ul className="space-y-3">
              {capabilities.map((cap) => (
                <li
                  key={cap}
                  className="flex items-start gap-3 text-sm text-neutral-700"
                >
                  <CheckCircle
                    size={16}
                    className="text-green-700 mt-0.5 shrink-0"
                  />
                  {cap}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ── Feature Grid (Home Overview) ──────────────────────────────── */
function FeatureOverview() {
  return (
    <section className="py-16 sm:py-20 bg-[#F7F7F7]">
      <Container>
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-200 bg-white text-xs font-semibold tracking-widest text-[#000] uppercase mb-4 shadow-sm">
            <img src={vector} alt="vector png" /> PRODUCT FEATURES
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">
            Everything your revenue and support teams need.
          </h2>
        </div>

        {/*
          Layout (matches screenshot):
          | Omnichannel  | AI Agents         | Sales Pipeline |
          | Analytics    | Automation Engine | (spans full)   |
        */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:items-stretch">
          {/* ── Left column: Omnichannel + Analytics ── */}
          <div className="flex flex-col gap-4">
            {/* Omnichannel Inbox */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex-1 flex flex-col rounded-2xl border border-neutral-100 bg-white shadow-sm overflow-hidden"
            >
              <div className="p-6">
                <h3 className="font-bold text-neutral-900 mb-2">
                  Omnichannel Inbox
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Voice, WhatsApp, Email, SMS, and Web Chat in one unified
                  queue. Your agents never miss a conversation.
                </p>
              </div>
              <div className="flex-1 flex items-end justify-center px-4 pb-4">
                <img
                  src={omnichannelImg}
                  alt="Omnichannel channels"
                  className="w-full h-auto object-contain"
                />
              </div>
            </motion.div>

            {/* Real-Time Analytics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.08 }}
              className="flex-1 flex flex-col rounded-2xl border border-neutral-100 bg-white shadow-sm overflow-hidden"
            >
              <div className="p-6">
                <h3 className="font-bold text-neutral-900 mb-2">
                  Real-Time Analytics
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Live agent performance, SLA tracking, CSAT scores, and revenue
                  attribution — on one dashboard, in real time.
                </p>
              </div>
              <div className="flex-1 flex items-end justify-center px-4 pb-4">
                <img
                  src={analyticsImg}
                  alt="Analytics chart"
                  className="w-full h-auto object-contain"
                />
              </div>
            </motion.div>
          </div>

          {/* ── Middle column: AI Agents + Automation Engine ── */}
          <div className="flex flex-col gap-4">
            {/* AI Agents */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.12 }}
              className="flex-1 flex flex-col rounded-2xl border border-neutral-100 bg-white shadow-sm overflow-hidden"
            >
              <div className="p-6">
                <h3 className="font-bold text-neutral-900 mb-2">AI Agents</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Deploy intelligent bots that resolve 60% of tier-1 tickets
                  automatically, 24/7.
                </p>
              </div>
              <div className="flex-1 flex items-end justify-center px-4 pb-4">
                <img
                  src={aiAgentImg}
                  alt="AI Agent workflow"
                  className="w-full h-auto object-contain"
                />
              </div>
            </motion.div>

            {/* Automation Engine */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.16 }}
              className="flex-1 flex flex-col rounded-2xl border border-neutral-100 bg-white shadow-sm overflow-hidden"
            >
              <div className="p-6">
                <h3 className="font-bold text-neutral-900 mb-2">
                  Automation Engine
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Build powerful cross-channel workflows with a drag-and-drop
                  builder. No code. No IT tickets. Just results.
                </p>
              </div>
              <div className="flex-1 flex items-end justify-center px-4 pb-4">
                <img
                  src={automationEngineImg}
                  alt="Automation Engine workflow"
                  className="w-full h-auto object-contain"
                />
              </div>
            </motion.div>
          </div>

          {/* ── Right column: Sales Pipeline CRM (full height) ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-col rounded-2xl border border-neutral-100 bg-white shadow-sm overflow-hidden"
          >
            <div className="p-6">
              <h3 className="font-bold text-neutral-900 mb-2">
                Sales Pipeline CRM
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Visual deal pipeline with AI-powered lead scoring and
                next-best-action recommendations from prospect to close.
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center px-6 pb-6">
              <img
                src={salesPipelineImg}
                alt="Sales Pipeline funnel"
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

/* ── Committed Section ──────────────────────────────────────────── */
export function CommittedSection() {
  const pillars = [
    {
      title: "Free Setup, Training & Installation",
      desc: "No surprise professional services bill. We get you live, we train your team, and we make sure you're set up for success at no additional cost.",
    },
    {
      title: "24/7 In-House Support",
      desc: "When something needs attention, you reach a WajeNexus expert who knows your account and not a distant helpdesk queue operating in a different time zone.",
    },
    {
      title: "One Platform, Not a Bundle",
      desc: "Everything you see here is one product. Not three separate tools repackaged together with a shared login. One system. One team. One monthly cost.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 border-t border-neutral-100">
      <Container>
        <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-10">
          Committed to your success.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-neutral-100 rounded-2xl overflow-hidden">
          {pillars.map((p) => (
            <div key={p.title} className="bg-white p-8">
              <h3 className="font-bold text-neutral-900 mb-3">{p.title}</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
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
      <div className="relative z-20 -mt-16 sm:-mt-24 bg-white">
        <TrustedBy />
      </div>
      <BeyondCRM />
      <ProblemSection />
      <FeatureOverview />
      <StatsSection />
      {/* <CommittedSection /> */}
      <div className="bg-[#F7F7F7]">
        <CTABanner />
      </div>
    </>
  );
}
