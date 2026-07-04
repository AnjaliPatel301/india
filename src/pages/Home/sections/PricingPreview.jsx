import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import Reveal from '@components/common/Reveal';
import { pricingPreview } from '@data/homeData';

export default function PricingPreview() {
  return (
    <section className="section-pad bg-surface-base">
      <div className="container-app">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Pricing</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink-100 md:text-4xl text-balance">
            Simple plans that scale with your network
          </h2>
          <p className="mt-4 text-ink-400 text-pretty">
            Start small and upgrade as you grow. Every plan includes secure hosting, automated
            payouts, and dedicated onboarding.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {pricingPreview.map((tier, index) => (
            <Reveal key={tier.name} delay={index * 0.08} className="h-full">
              <div
                className={`relative flex h-full flex-col rounded-2xl p-8 transition-all duration-300 ${
                  tier.featured
                    ? 'border border-primary-500/40 bg-surface-card shadow-glow'
                    : 'glass-panel hover:bg-white/[0.06]'
                }`}
              >
                {tier.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-orange-gradient px-3 py-1 text-xs font-semibold text-white shadow-glow">
                    Most Popular
                  </span>
                )}

                <h3 className="text-lg font-semibold text-ink-100">{tier.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-400">{tier.description}</p>

                <div className="mt-6 flex items-end gap-1">
                  {tier.price !== null ? (
                    <>
                      <span className="font-display text-4xl font-bold text-ink-100">
                        ${tier.price}
                      </span>
                      <span className="mb-1 text-sm text-ink-400">{tier.period}</span>
                    </>
                  ) : (
                    <span className="font-display text-3xl font-bold text-ink-100">
                      Custom
                    </span>
                  )}
                </div>

                <ul className="mt-7 flex-1 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-ink-200">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-primary-500">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/plans_mlm"
                  className={`mt-8 ${tier.featured ? 'btn-primary' : 'btn-secondary'} w-full`}
                >
                  {tier.price !== null ? 'Get Started' : 'Contact Sales'}
                  <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
