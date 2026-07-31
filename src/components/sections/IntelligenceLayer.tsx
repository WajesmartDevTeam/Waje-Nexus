import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CircleDot } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import type { AICapability } from '@/types';
import aivector from '@/assets/Vector-ai.png';
import smartRouting from '@/assets/smart-routing.png';
import aigentImg from '@/assets/aigent.png';
import omnichannelImg from '@/assets/omnichannel.png';
import analyticsImg from '@/assets/analytics.png';
import salesPipelineImg from '@/assets/salespipeline.png';
import automationEngineImg from '@/assets/automationEngine.png';

const CAPABILITY_IMAGES: Record<string, string> = {
  routing: smartRouting,
  assist: aigentImg,
  chatbot: omnichannelImg,
  analytics: analyticsImg,
  campaigns: salesPipelineImg,
  workflows: automationEngineImg,
};

const CAPABILITIES: AICapability[] = [
  {
    id: 'routing',
    label: 'Smart Routing & Triage',
    tag: 'SMART ROUTING & TRIAGE',
    heading: 'The right agent, at the right moment, every time.',
    description:
      'The moment a customer interaction arrives whether it\'s a call, an email, a WhatsApp message, or a social media DM NexusAI reads the context, understands the intent, and routes it to the agent best placed to resolve it. No manual queues. No misrouted tickets. No frustrated customers waiting while your team figures out who should respond.',
    bullets: [
      'Intent detection across all inbound channels',
      'Skill-based and priority-based agent routing',
      'Automatic escalation triggers for high-urgency cases',
      'Real-time queue balancing to reduce wait times',
    ],
  },
  {
    id: 'assist',
    label: 'Agent Assist',
    tag: 'AGENT ASSIST',
    heading: 'Give every agent the knowledge of your best agent.',
    description:
      'NexusAI surfaces relevant knowledge base articles, past case resolutions, and suggested responses in real time — right inside the agent workspace. As a customer explains their issue, your agent already has the answer. Faster resolution. Higher confidence. Better CSAT.',
    bullets: [
      'Real-time suggested responses and knowledge surfacing',
      'Sentiment analysis with escalation alerts',
      'Automatic call/conversation summarization',
      'Post-interaction coaching recommendations',
    ],
  },
  {
    id: 'chatbot',
    label: 'AI Chatbot & Self-Service',
    tag: 'AI CHATBOT & SELF-SERVICE',
    heading: 'Handle tier-1 conversations at scale, automatically.',
    description:
      'Deploy NexusAI chatbots across WhatsApp, web chat, email, and social to resolve routine queries instantly — account inquiries, order status, appointment booking — without involving a human agent. When a query exceeds the bot\'s scope, it hands off seamlessly with full context preserved.',
    bullets: [
      'Natural language understanding for fluid conversations',
      'Handles FAQs, account lookups, status checks autonomously',
      'Seamless human handoff with full conversation context',
      'Available 24/7 across all configured channels',
    ],
  },
  {
    id: 'analytics',
    label: 'Predictive Analytics & Forecasting',
    tag: 'PREDICTIVE ANALYTICS & FORECASTING',
    heading: 'See what\'s coming before it arrives.',
    description:
      'NexusAI analyses historical interaction patterns to predict peak call volumes, flag at-risk deals, forecast resolution times, and identify agents who need coaching. Your supervisors stop reacting and start anticipating.',
    bullets: [
      'Volume forecasting for intelligent staffing decisions',
      'At-risk account detection and proactive outreach triggers',
      'Resolution time predictions per ticket category',
      'Agent performance trajectory analysis',
    ],
  },
  {
    id: 'campaigns',
    label: 'Intelligent Campaign Targeting',
    tag: 'INTELLIGENT CAMPAIGN TARGETING',
    heading: 'Send the right message to the right customer at the right time.',
    description:
      'NexusAI segments your customer base using behavioral signals, interaction history, and predictive scoring. Instead of blasting, you\'re targeting — and instead of guessing, you\'re predicting. Campaign engagement goes up. Opt-outs go down.',
    bullets: [
      'AI-powered customer segmentation and scoring',
      'Optimal send-time predictions per customer',
      'Dynamic campaign personalization at scale',
      'A/B testing with automatic winner selection',
    ],
  },
  {
    id: 'workflows',
    label: 'Automated Workflows',
    tag: 'AUTOMATED WORKFLOWS',
    heading: 'Remove the manual steps that slow your team down.',
    description:
      'WajeNexus ships with a drag-and-drop workflow builder that lets you automate multi-step processes without writing code. Ticket routing, follow-up reminders, SLA breach alerts, escalation chains — build them once, run them forever.',
    bullets: [
      'Visual workflow builder — no code required',
      'Trigger-based automation across channels and modules',
      'Cross-team workflow coordination with role-based tasks',
      'Full audit log of every automated action taken',
    ],
  },
];

export function IntelligenceLayer() {
  const [active, setActive] = useState(CAPABILITIES[0].id);
  const current = CAPABILITIES.find((c) => c.id === active)!;

  return (
    <section className="py-16">
      <Container>
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-200 bg-white text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-4 shadow-sm">
            <img src={aivector} alt="" /> AI AGENT CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">One intelligence layer.</h2>
          <p className="mt-3 text-neutral-500 max-w-xl mx-auto">
            Our AI Agent runs across every capability in WajeNexus, making each one sharper, faster, and more effective
            than it would be without it.
          </p>
        </div>

        {/* Tab bar — single segmented pill container */}
        <div className="mb-10 overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="inline-flex items-center gap-1 p-1.5 rounded-full border border-neutral-200 bg-white mx-auto min-w-full md:min-w-0 w-max">
            {CAPABILITIES.map((cap) => (
              <button
                key={cap.id}
                onClick={() => setActive(cap.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  active === cap.id
                    ? 'bg-green-700 text-white'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                {cap.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content — heading | description+bullets | image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start"
          >
            {/* Heading */}
            <div className="lg:col-span-3">
              <p className="text-xs font-bold tracking-widest text-green-700 uppercase mb-3">{current.tag}</p>
              <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 leading-tight">{current.heading}</h3>
            </div>

            {/* Description + bullets */}
            <div className="lg:col-span-5">
              <p className="text-neutral-600 leading-relaxed mb-6">{current.description}</p>
              <ul className="space-y-4">
                {current.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-neutral-900">
                    <CircleDot size={16} className="text-neutral-400 mt-0.5 shrink-0" />
                    <span className="font-semibold">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image */}
            <div className="lg:col-span-4 w-full">
              <div className="rounded-2xl bg-neutral-50 border border-neutral-100 aspect-square flex items-center justify-center p-6">
                <img
                  src={CAPABILITY_IMAGES[current.id]}
                  alt={current.label}
                  className="w-full h-auto max-h-full object-contain"
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
