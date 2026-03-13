"use client";

import { useLanguage } from "@/lib/language-context";

export default function CfpPage() {
  const { t } = useLanguage();

  const topics = [
    { title: t.cfp.scope_cs, desc: t.cfp.scope_cs_desc },
    { title: t.cfp.scope_stem, desc: t.cfp.scope_stem_desc },
    { title: t.cfp.scope_humanities, desc: t.cfp.scope_humanities_desc },
    { title: t.cfp.scope_career, desc: t.cfp.scope_career_desc },
    { title: t.cfp.scope_other, desc: t.cfp.scope_other_desc },
  ];

  const formats = [
    { title: t.cfp.format_paper, desc: t.cfp.format_paper_desc },
    { title: t.cfp.format_blog, desc: t.cfp.format_blog_desc },
    { title: t.cfp.format_software, desc: t.cfp.format_software_desc },
  ];

  const dates = [
    { label: t.cfp.date_submission, value: t.cfp.date_submission_value },
    { label: t.cfp.date_notification, value: t.cfp.date_notification_value },
    { label: t.cfp.date_conference, value: t.cfp.date_conference_value },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      {/* Header */}
      <h1 className="text-2xl sm:text-3xl font-bold font-serif text-[#2C2C2C] dark:text-gray-100 mb-2">
        {t.cfp.title}
      </h1>
      <p className="text-sm text-[#999] dark:text-gray-500 mb-4 font-sans">
        {t.cfp.subtitle}
      </p>
      <p className="text-[15px] leading-relaxed text-[#666] dark:text-gray-400 mb-12">
        {t.cfp.intro}
      </p>

      {/* Topics of Interest */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold font-serif text-[#2C2C2C] dark:text-gray-200 mb-3">
          {t.cfp.scope_title}
        </h2>
        <p className="text-[15px] text-[#666] dark:text-gray-400 mb-4">
          {t.cfp.scope_content}
        </p>
        <div className="space-y-2">
          {topics.map((topic) => (
            <div
              key={topic.title}
              className="flex items-start gap-3 py-2.5 px-4 rounded-lg bg-white dark:bg-[#1a1a1f] border border-gray-100 dark:border-gray-800"
            >
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4c8888] shrink-0" />
              <div>
                <span className="text-sm font-semibold text-[#2C2C2C] dark:text-gray-200">
                  {topic.title}
                </span>
                <span className="text-sm text-[#999] dark:text-gray-500 ml-2">
                  {topic.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Submission Formats */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold font-serif text-[#2C2C2C] dark:text-gray-200 mb-3">
          {t.cfp.format_title}
        </h2>
        <p className="text-[15px] text-[#666] dark:text-gray-400 mb-4">
          {t.cfp.format_content}
        </p>
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

      {/* Presentation */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold font-serif text-[#2C2C2C] dark:text-gray-200 mb-3">
          {t.cfp.presentation_title}
        </h2>
        <p className="text-[15px] text-[#666] dark:text-gray-400 mb-3">
          {t.cfp.presentation_content}
        </p>
        <ul className="space-y-1.5 mb-3">
          <li className="text-[15px] text-[#666] dark:text-gray-400 flex items-start gap-2">
            <span className="mt-2 w-1 h-1 rounded-full bg-[#4c8888] shrink-0" />
            {t.cfp.presentation_long}
          </li>
          <li className="text-[15px] text-[#666] dark:text-gray-400 flex items-start gap-2">
            <span className="mt-2 w-1 h-1 rounded-full bg-[#4c8888] shrink-0" />
            {t.cfp.presentation_short}
          </li>
        </ul>
        <p className="text-sm text-[#999] dark:text-gray-500">
          {t.cfp.presentation_note}
        </p>
      </section>

      {/* Review Process */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold font-serif text-[#2C2C2C] dark:text-gray-200 mb-3">
          {t.cfp.review_title}
        </h2>
        <p className="text-[15px] leading-relaxed text-[#666] dark:text-gray-400">
          {t.cfp.review_content}
        </p>
      </section>

      {/* Important Dates */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold font-serif text-[#2C2C2C] dark:text-gray-200 mb-4">
          {t.cfp.dates_title}
        </h2>
        <div className="card overflow-hidden">
          <table className="w-full text-sm">
            <tbody>
              {dates.map((item, i) => (
                <tr
                  key={item.label}
                  className={i !== dates.length - 1 ? "border-b border-gray-100 dark:border-gray-800" : ""}
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

      {/* Contact */}
      <section className="card p-6 border-l-4 border-l-[#4c8888]">
        <h2 className="text-lg font-semibold font-serif text-[#2C2C2C] dark:text-gray-200 mb-2">
          {t.cfp.contact_title}
        </h2>
        <p className="text-sm text-[#666] dark:text-gray-400">
          {t.cfp.contact_content}
        </p>
      </section>
    </div>
  );
}
