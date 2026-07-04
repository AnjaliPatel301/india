import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Quote } from 'lucide-react';
import Reveal from '@components/common/Reveal';
import { testimonials } from '@data/homeData';

import 'swiper/css';
import 'swiper/css/pagination';

export default function TestimonialsCarousel() {
  return (
    <section className="section-pad bg-surface-base">
      <div className="container-app">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Client Testimonials</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink-100 md:text-4xl text-balance">
            Trusted by network marketing leaders
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 5500, disableOnInteraction: false }}
            pagination={{ clickable: true, el: '.testimonial-pagination' }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 3 },
            }}
            aria-label="Client testimonials"
            className="!pb-2"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.name}>
                <figure className="flex h-full flex-col rounded-2xl glass-panel p-7 transition-colors duration-300 hover:bg-white/[0.07]">
                  <Quote size={22} className="text-primary-500" />
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-200">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-5 border-t border-white/[0.08] pt-4">
                    <p className="text-sm font-medium text-ink-100">{t.name}</p>
                    <p className="text-xs text-ink-400">{t.role}</p>
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="testimonial-pagination mt-6 flex justify-center gap-2" />
        </Reveal>
      </div>

      <style>{`
        .testimonial-pagination .swiper-pagination-bullet {
          background: rgba(255,255,255,0.2);
          width: 8px;
          height: 8px;
          opacity: 1;
        }
        .testimonial-pagination .swiper-pagination-bullet-active {
          background: #F97316;
          width: 22px;
          border-radius: 4px;
          transition: width 0.25s ease;
        }
      `}</style>
    </section>
  );
}
