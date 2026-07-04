import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from '@components/common/Reveal';
import { featuredPlans } from '@data/homeData';

export default function FeaturedPlans() {
  return (
    <section className="section-pad bg-surface-base">
      <div className="container-app">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Featured Plans</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink-100 md:text-4xl text-balance">
            The compensation models we build most
          </h2>
          <p className="mt-4 text-ink-400 text-pretty">
            Every plan is engineered from the ground up — accurate payouts, real-time genealogy,
            and infrastructure that scales with your network.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredPlans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <Reveal key={plan.name} delay={index * 0.08}>
                <Link
                  to={plan.path}
                  className="group flex h-full flex-col rounded-2xl glass-panel p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07] hover:shadow-glow"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500/10 text-primary-500 transition-colors group-hover:bg-primary-500/20">
                    <Icon size={22} strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-ink-100">{plan.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-400">
                    {plan.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary-500">
                    Explore plan
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
