import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "What is MLM Software?",
    answer:
      "MLM Software is a complete business management solution that automates distributor management, genealogy tracking, commission calculation, payouts, e-wallet, reports, and overall network marketing operations.",
  },
  {
    question: "How does MLM Software help grow my business?",
    answer:
      "MLM Software simplifies daily operations by automating commissions, managing distributors, generating reports, and improving overall efficiency, allowing businesses to focus on growth.",
  },
  {
    question: "Which MLM compensation plans are supported?",
    answer:
      "Our MLM Software supports Binary, Matrix, Unilevel, Board, Generation, Monoline, Gift, Hybrid, Party, Australian Binary, Stair Step, and many custom compensation plans.",
  },
  {
    question: "Can I customize the MLM compensation plan?",
    answer:
      "Yes. The software is fully customizable. We can modify commission rules, bonuses, ranks, matching bonuses, and payout structures according to your business requirements.",
  },
  {
    question: "Is the MLM Software secure?",
    answer:
      "Yes. We use advanced security practices including SSL encryption, secure authentication, database protection, role-based access control, and regular backups.",
  },
  {
    question: "Does the software support e-wallet functionality?",
    answer:
      "Yes. Members can securely manage income, transfers, withdrawals, fund requests, and wallet balances through the integrated e-wallet system.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(null);

  return (
    <section className="section-pad bg-surface-base">
      <div className="container-app">
        <div className="mb-14 text-center">
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink-100 md:text-4xl text-balance">
            Frequently Asked <span className="text-gradient-orange">Questions</span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-ink-400 text-pretty">
            Find answers to the most commonly asked questions about our MLM
            Software, compensation plans, commissions, security, customization,
            payment gateways, and business management solutions.
          </p>
        </div>

        <div className="mx-auto max-w-4xl space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = active === index;
            return (
              <div
                key={index}
                className={`overflow-hidden rounded-2xl glass-panel transition-colors duration-300 ${
                  isOpen ? "bg-white/[0.07]" : "hover:bg-white/[0.06]"
                }`}
              >
                <button
                  onClick={() => setActive(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-lg font-semibold text-primary-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-base font-medium text-ink-100 md:text-lg">
                      {faq.question}
                    </h3>
                  </div>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-primary-500">
                    {isOpen ? <FiMinus size={18} /> : <FiPlus size={18} />}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-500 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-white/[0.06] px-6 pb-6 pt-5 leading-8 text-ink-400 md:pl-[4.5rem]">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
