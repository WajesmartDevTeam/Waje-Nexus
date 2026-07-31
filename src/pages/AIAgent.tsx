import { Container } from '@/components/layout/Container';
import { CTABanner } from '@/components/sections/CTABanner';
import { IntelligenceLayer } from '@/components/sections/IntelligenceLayer';
import { BestAgentSection } from '@/components/sections/BestAgentSection';
import { Link } from 'react-router-dom';
import aivector from '@/assets/Vector-ai.png';

export function AIAgent() {
  return (
    <>
      {/* Hero */}
      <section className="pt-10 pb-8">
        <Container size="md">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-200 bg-white text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-6 shadow-sm">
              <img src={aivector} alt="" /> WAJENEXUS AI
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 leading-[1.1] mb-6">
              WajeNexusAI Makes Your
              <br />
              Agents Unstoppable.
            </h1>
            <p className="text-lg text-neutral-500 mb-8 max-w-2xl mx-auto">
              An intelligent engine powering every layer so your team spends less time on routine work and more time
              on the interactions that actually matter.
            </p>
            <Link
              to="/contact"
              className="inline-block px-7 py-3.5 text-base font-semibold text-white bg-neutral-900 rounded-xl hover:bg-[#016734] transition-colors"
            >
              Book a Demo
            </Link>
          </div>
        </Container>
      </section>

      {/* Three pillars */}
      <section className="py-10">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                title: 'Always Informed',
                desc: 'It surfaces the full customer history, previous interactions, and relevant context before your agent responds so every conversation starts from a position of knowledge, not catch-up.',
              },
              {
                title: 'Always Anticipating',
                desc: 'From predicting peak call volumes to flagging at risk deals and forecasting resolution times, which keeps your team one step ahead of demand not scrambling to keep up with it.',
              },
              {
                title: 'Always Working',
                desc: 'It keeps the operation moving handling routine queries via chatbot, routing incoming interactions, and ensuring no customer request goes unacknowledged.',
              },
            ].map((p) => (
              <div key={p.title} className="p-6 rounded-2xl border border-neutral-100 bg-white">
                <h3 className="font-bold text-neutral-900 mb-2">{p.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <BestAgentSection />
      <IntelligenceLayer />

      <CTABanner
        heading="See what your operation looks like when intelligence is built in."
        subheading="Book a demo to see the difference a truly intelligent platform makes. One conversation could change how your entire customer operation runs."
        primaryCTA={{ label: 'Book a Demo', href: '/contact' }}
        secondaryCTA={{ label: 'Watch 2-min Demo', href: '#' }}
      />
    </>
  );
}
