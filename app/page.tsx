"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";

export default function Home() {
  const { t } = useLanguage();

  const keyDates = [
    { label: t.home.key_date_deadline, value: t.home.key_date_deadline_value },
    { label: t.home.key_date_notification, value: t.home.key_date_notification_value },
    { label: t.home.key_date_conference, value: t.home.key_date_conference_value },
  ];

  return (
    <div>
      {/* ===== Hero Banner ===== */}
      <section className="hero-banner">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-3 font-serif">
            TUIQUN 2026
          </h1>

          <p className="text-base sm:text-lg text-white/80 font-serif mb-1">
            {t.home.subtitle}
          </p>
          <p className="text-sm sm:text-base text-white/50 mb-6 max-w-xl mx-auto font-sans">
            {t.home.tagline}
          </p>

          {/* Date & Location */}
          <p className="text-xs sm:text-sm tracking-[0.15em] uppercase text-white/50 mb-10 font-sans">
            {t.home.date} · {t.home.location}
          </p>

          {/* CTA */}
          <div className="flex items-center justify-center gap-3">
            <Link
              href="/submit"
              className="px-6 py-2.5 bg-white text-[#2C2C2C] font-medium rounded-md hover:bg-gray-100 transition-colors text-sm"
            >
              {t.home.cta_submit}
            </Link>
            <Link
              href="/about"
              className="px-6 py-2.5 text-white/80 font-medium rounded-md hover:text-white transition-colors text-sm border border-white/20 hover:border-white/40"
            >
              {t.home.cta_learn}
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Main Content ===== */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-[#2C2C2C] dark:text-gray-100 font-serif mb-4">
            {t.about.what_title}
          </h2>
          <p className="text-[15px] leading-relaxed text-[#666] dark:text-gray-400">
            {t.about.what_content}
          </p>
        </section>

        {/* Key Dates */}
        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-[#2C2C2C] dark:text-gray-100 font-serif mb-6">
            {t.home.key_dates_title}
          </h2>
          <div className="card overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {keyDates.map((item, i) => (
                  <tr
                    key={item.label}
                    className={i !== keyDates.length - 1 ? "border-b border-gray-100 dark:border-gray-800" : ""}
                  >
                    <td className="px-5 py-4 text-[#666] dark:text-gray-400 font-medium">
                      {item.label}
                    </td>
                    <td className="px-5 py-4 text-right text-[#2C2C2C] dark:text-gray-200 font-semibold">
                      {item.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Highlights */}
        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-[#2C2C2C] dark:text-gray-100 font-serif mb-6">
            {t.home.highlights_title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: t.home.highlight_open_title, desc: t.home.highlight_open_desc },
              { title: t.home.highlight_flexible_title, desc: t.home.highlight_flexible_desc },
              { title: t.home.highlight_social_title, desc: t.home.highlight_social_desc },
              { title: t.home.highlight_hybrid_title, desc: t.home.highlight_hybrid_desc },
            ].map((item) => (
              <div key={item.title} className="card p-5">
                <h3 className="text-sm font-semibold text-[#2C2C2C] dark:text-gray-200 mb-1.5 font-serif">
                  {item.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-[#666] dark:text-gray-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Links */}
        <section className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <Link
            href="/archive"
            className="text-sm text-[#666] dark:text-gray-400 hover:text-[#2C2C2C] dark:hover:text-gray-200 transition-colors"
          >
            {t.home.browse_archive} →
          </Link>
          <span className="hidden sm:inline text-[#999]">·</span>
          <Link
            href="/about"
            className="text-sm text-[#666] dark:text-gray-400 hover:text-[#2C2C2C] dark:hover:text-gray-200 transition-colors"
          >
            {t.home.about_us} →
          </Link>
        </section>
      </div>
    </div>
  );
}
