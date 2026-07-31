import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/layout/Container';
import connector from '@/assets/connector.png';

const LEFT_ITEMS = [
  { title: 'Omnichannel Contact Center', desc: 'Different communication Channels, One Interface' },
  { title: 'Sales Pipeline Management', desc: 'Turn More Leads into Customers' },
  { title: 'Workforce Management', desc: 'Build High-Performing Teams' },
  { title: 'Customer Satisfaction (CSAT)', desc: 'Measure Every Customer Experience' },
  { title: 'Reporting & Analytics', desc: 'Turn Data into Action' },
];

const RIGHT_ITEMS = [
  { title: 'Marketing Automation', desc: 'Engage Customers at the Right Time' },
  { title: 'AI & Automation', desc: 'Let AI Do the Heavy Lifting' },
  { title: 'Knowledge Base', desc: 'Build High-Performing Teams' },
  { title: 'SLA Management', desc: 'Never Miss a Service Commitment' },
  { title: 'Case Management', desc: 'Resolve Issues with Confidence' },
];

function SolutionCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white px-4 py-3">
      <div className="min-w-0">
        <p className="text-sm font-semibold text-neutral-900">{title}</p>
        <p className="text-xs text-neutral-500 leading-snug">{desc}</p>
      </div>
      <span className="ml-auto shrink-0 w-5 h-5 rounded-full bg-green-50 flex items-center justify-center">
        <Check size={12} strokeWidth={3} className="text-green-700" />
      </span>
    </div>
  );
}

export function UnifiedSolution() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-14">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">One Unified Solution</h2>
            <p className="text-neutral-500 leading-relaxed">
              Your customers don't experience your business in silos — your technology shouldn't either. WajeNexus
              unifies customer data, conversations, AI, and workflows into a single platform, enabling every team to
              deliver faster, smarter, and more connected customer experiences.
            </p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 self-start md:self-auto px-6 py-3 text-sm font-semibold text-white bg-neutral-900 rounded-lg hover:bg-[#016734] transition-colors"
          >
            Book a Demo
          </Link>
        </div>

        {/* Hub diagram: left cards | connector | right cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-4 items-center">
          {/* Left column */}
          <div className="flex flex-col gap-4">
            {LEFT_ITEMS.map((item) => (
              <SolutionCard key={item.title} {...item} />
            ))}
          </div>

          {/* Connector — horizontal on desktop, rotated vertical on mobile */}
          <div className="flex items-center justify-center min-h-[200px] py-2 lg:min-h-0 lg:py-0">
            <img
              src={connector}
              alt=""
              aria-hidden="true"
              className="w-48 rotate-90 lg:w-full lg:rotate-0"
            />
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-4">
            {RIGHT_ITEMS.map((item) => (
              <SolutionCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
