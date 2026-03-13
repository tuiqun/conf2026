"use client";

import { useLanguage } from "@/lib/language-context";

export default function SubmitPage() {
  const { t } = useLanguage();

  const formats = [
    { title: t.submit.format_paper, desc: t.submit.format_paper_desc },
    { title: t.submit.format_blog, desc: t.submit.format_blog_desc },
    { title: t.submit.format_software, desc: t.submit.format_software_desc },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <h1 className="text-2xl sm:text-3xl font-bold font-serif text-[#2C2C2C] dark:text-gray-100 mb-4">
        {t.submit.title}
      </h1>
      <p className="text-[15px] leading-relaxed text-[#666] dark:text-gray-400 mb-10">
        {t.submit.intro}
      </p>

      <section className="mb-10">
        <h2 className="text-lg font-semibold font-serif text-[#2C2C2C] dark:text-gray-200 mb-4">
          {t.submit.formats_title}
        </h2>
        <div className="space-y-3">
          {formats.map((f) => (
            <div key={f.title} className="card p-4">
              <h3 className="text-sm font-semibold text-[#2C2C2C] dark:text-gray-200 mb-0.5">
                {f.title}
              </h3>
              <p className="text-[13px] text-[#666] dark:text-gray-400">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-semibold font-serif text-[#2C2C2C] dark:text-gray-200 mb-3">
          {t.submit.review_title}
        </h2>
        <p className="text-[15px] leading-relaxed text-[#666] dark:text-gray-400">
          {t.submit.review_content}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-semibold font-serif text-[#2C2C2C] dark:text-gray-200 mb-3">
          {t.submit.presentation_title}
        </h2>
        <ul className="space-y-1.5 mb-3">
          <li className="text-[15px] text-[#666] dark:text-gray-400 flex items-start gap-2">
            <span className="mt-2 w-1 h-1 rounded-full bg-[#4c8888] shrink-0" />
            {t.submit.presentation_long}
          </li>
          <li className="text-[15px] text-[#666] dark:text-gray-400 flex items-start gap-2">
            <span className="mt-2 w-1 h-1 rounded-full bg-[#4c8888] shrink-0" />
            {t.submit.presentation_short}
          </li>
        </ul>
        <p className="text-sm text-[#999] dark:text-gray-500">
          {t.submit.presentation_note}
        </p>
      </section>

      <section className="card p-6 border-l-4 border-l-[#4c8888]">
        <h2 className="text-lg font-semibold font-serif text-[#2C2C2C] dark:text-gray-200 mb-2">
          {t.submit.deadline_title}
        </h2>
        <p className="text-xl font-bold text-[#273b3b] dark:text-[#4c8888] mb-3 font-serif">
          {t.submit.deadline_date}
        </p>
        <p className="text-sm text-[#666] dark:text-gray-400">
          {t.submit.deadline_note}
        </p>
      </section>
    </div>
  );
}
