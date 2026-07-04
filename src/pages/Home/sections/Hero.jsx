import React from "react";

const plans = [
  "Binary",
  "Matrix",
  "Unilevel",
  "Board",
  "Investment",
  "Crowd Funding",
  "Repurchase",
  "Direct Selling",
];

const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "40+", label: "Countries Served" },
  { value: "99.9%", label: "Uptime SLA" },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-surface-base">
      {/* Ambient orange glow */}
      <div className="pointer-events-none absolute inset-0 bg-grid-glow" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary-500/20 blur-[140px]"
        aria-hidden="true"
      />

      <div className="container-app relative z-10 flex min-h-screen flex-col items-center justify-center py-28 text-center">
        {/* Eyebrow badge */}
        <div className="glass-panel mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2 animate-fade-up">
          <span className="h-2 w-2 rounded-full bg-primary-500 animate-pulse-glow" />
          <span className="text-xs font-medium tracking-wide text-ink-200">
            Enterprise MLM Software &amp; Custom Development
          </span>
        </div>

        {/* Headline */}
        <h1 className="max-w-4xl font-display text-4xl font-bold leading-[1.1] text-ink-100 text-balance sm:text-5xl md:text-6xl lg:text-7xl animate-fade-up">
          Powerful <span className="text-gradient-orange">MLM Software</span>
          <br />
          For Every Business Model
        </h1>

        {/* Sub copy */}
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-400 text-pretty sm:text-lg animate-fade-up">
          Binary, Matrix, Unilevel, Board, Investment, Crowd Funding, Repurchase,
          Direct Selling and all custom MLM plans — built to scale, secure by design.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row animate-fade-up">
          <button className="btn-primary w-full sm:w-auto">
            Free Demo
          </button>
          <button className="btn-secondary w-full sm:w-auto">
            View Plans
          </button>
        </div>

        {/* Supported plan chips */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2.5">
          {plans.map((plan) => (
            <span
              key={plan}
              className="glass-panel rounded-full px-4 py-1.5 text-xs font-medium text-ink-200"
            >
              {plan}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid w-full max-w-2xl grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="font-display text-2xl font-bold text-ink-100 sm:text-3xl">
                {stat.value}
              </span>
              <span className="mt-1 text-xs text-ink-400 sm:text-sm">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface-base to-transparent"
        aria-hidden="true"
      />
    </section>
  );
};

export default Hero;
