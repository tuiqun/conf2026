"use client";

import { useLanguage } from "@/lib/language-context";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <h1 className="text-2xl sm:text-3xl font-bold font-serif text-[#2C2C2C] dark:text-gray-100 mb-10">
        {t.about.title}
      </h1>

      <div className="space-y-10">
        <section>
          <h2 className="text-lg font-semibold font-serif text-[#2C2C2C] dark:text-gray-200 mb-3">
            {t.about.what_title}
          </h2>
          <p className="text-[15px] leading-relaxed text-[#666] dark:text-gray-400">
            {t.about.what_content}
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold font-serif text-[#2C2C2C] dark:text-gray-200 mb-3">
            {t.about.history_title}
          </h2>
          <p className="text-[15px] leading-relaxed text-[#666] dark:text-gray-400">
            {t.about.history_content}
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold font-serif text-[#2C2C2C] dark:text-gray-200 mb-3">
            {t.about.audience_title}
          </h2>
          <p className="text-[15px] leading-relaxed text-[#666] dark:text-gray-400">
            {t.about.audience_content}
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold font-serif text-[#2C2C2C] dark:text-gray-200 mb-3">
            {t.about.contact_title}
          </h2>
          <p className="text-[15px] text-[#666] dark:text-gray-400 mb-3">
            {t.about.contact_content}
          </p>
          <div className="inline-block px-4 py-2 rounded-md bg-white dark:bg-[#1a1a1f] border border-gray-200 dark:border-gray-700">
            <span className="text-sm font-mono text-[#2C2C2C] dark:text-gray-300">
              {t.about.contact_qq}
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}
