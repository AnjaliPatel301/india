import { Link } from 'react-router-dom';
import { ArrowRight, CalendarCheck } from 'lucide-react';
import Reveal from '@components/common/Reveal';

export default function DemoCta() {
  return (
    <section className="section-pad bg-surface-base">
      <div className="container-app">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-primary-500/20 bg-surface-raised px-6 py-14 text-center md:px-12 md:py-20">
            {/* Ambient glow */}
            <div
              className="pointer-events-none absolute inset-0 bg-grid-glow opacity-70"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary-500/20 blur-[120px]"
              aria-hidden="true"
            />

            <div className="relative mx-auto max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full glass-panel px-4 py-2 text-xs font-medium text-ink-200">
                <CalendarCheck size={14} className="text-primary-500" />
                Book a free personalized demo
              </span>

              <h2 className="mt-6 font-display text-3xl font-bold text-ink-100 md:text-5xl text-balance">
                Ready to launch your MLM platform?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-ink-400 text-pretty">
                See exactly how your compensation plan runs on our software. Our team will walk you
                through a live demo tailored to your business model.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link to="/live_demo" className="btn-primary w-full sm:w-auto">
                  Book Free Demo
                  <ArrowRight size={16} />
                </Link>
                <Link to="/Contact" className="btn-secondary w-full sm:w-auto">
                  Talk to Sales
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
