import Reveal from '@components/common/Reveal';
import StatCounter from '@components/common/StatCounter';
import { trustHighlights, globalStats } from '@data/homeData';

export default function GlobalReach() {
  return (
    <section className="section-pad bg-surface-base">
      <div className="container-app">
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-surface-raised p-8 md:p-12">
          {/* Ambient glow */}
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary-500/15 blur-[120px]"
            aria-hidden="true"
          />

          <Reveal className="relative mx-auto max-w-2xl text-center">
            <p className="eyebrow">Global Reach</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink-100 md:text-4xl text-balance">
              Trusted by networks across the world
            </h2>
            <p className="mt-4 text-ink-400 text-pretty">
              From launch-stage startups to enterprises with millions of distributors, companies
              run their business on our platform.
            </p>
          </Reveal>

          <Reveal
            delay={0.1}
            className="relative mt-12 grid grid-cols-2 gap-8 lg:grid-cols-4"
          >
            {globalStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <StatCounter value={stat.value} suffix={stat.suffix} label={stat.label} />
              </div>
            ))}
          </Reveal>

          <Reveal
            delay={0.2}
            className="relative mt-12 flex flex-wrap items-center justify-center gap-3 border-t border-white/[0.06] pt-10"
          >
            {trustHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <span
                  key={item.label}
                  className="inline-flex items-center gap-2 rounded-full glass-panel px-4 py-2 text-sm text-ink-200"
                >
                  <Icon size={15} className="text-primary-500" />
                  {item.label}
                </span>
              );
            })}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
