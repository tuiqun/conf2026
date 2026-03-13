"use client";

import { useLanguage } from "@/lib/language-context";

export default function CfhPage() {
  const { t } = useLanguage();

  const requirements = [
    { title: t.cfh.req_city, desc: t.cfh.req_city_desc },
    { title: t.cfh.req_venue, desc: t.cfh.req_venue_desc },
    { title: t.cfh.req_accommodation, desc: t.cfh.req_accommodation_desc },
    { title: t.cfh.req_activities, desc: t.cfh.req_activities_desc },
  ];

  const responsibilities = [
    t.cfh.resp_1,
    t.cfh.resp_2,
    t.cfh.resp_3,
    t.cfh.resp_4,
    t.cfh.resp_5,
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <h1 className="text-2xl sm:text-3xl font-bold font-serif text-[#2C2C2C] dark:text-gray-100 mb-2">
        {t.cfh.title}
      </h1>
      <p className="text-sm text-[#999] dark:text-gray-500 mb-4 font-sans">
        {t.cfh.subtitle}
      </p>
      <p className="text-[15px] leading-relaxed text-[#666] dark:text-gray-400 mb-12">
        {t.cfh.intro}
      </p>

      {/* What is hosting */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold font-serif text-[#2C2C2C] dark:text-gray-200 mb-3">
          {t.cfh.what_title}
        </h2>
        <p className="text-[15px] leading-relaxed text-[#666] dark:text-gray-400">
          {t.cfh.what_content}
        </p>
      </section>

      {/* Requirements */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold font-serif text-[#2C2C2C] dark:text-gray-200 mb-4">
          {t.cfh.requirements_title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {requirements.map((r) => (
            <div key={r.title} className="card p-4">
              <h3 className="text-sm font-semibold text-[#2C2C2C] dark:text-gray-200 mb-0.5">
                {r.title}
              </h3>
              <p className="text-[13px] text-[#666] dark:text-gray-400">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Responsibilities */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold font-serif text-[#2C2C2C] dark:text-gray-200 mb-4">
          {t.cfh.responsibilities_title}
        </h2>
        <ul className="space-y-2">
          {responsibilities.map((r, i) => (
            <li key={i} className="text-[15px] text-[#666] dark:text-gray-400 flex items-start gap-2">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#4c8888] shrink-0" />
              {r}
            </li>
          ))}
        </ul>
      </section>

      {/* How to apply */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold font-serif text-[#2C2C2C] dark:text-gray-200 mb-3">
          {t.cfh.apply_title}
        </h2>
        <p className="text-[15px] leading-relaxed text-[#666] dark:text-gray-400">
          {t.cfh.apply_content}
        </p>
      </section>

      {/* Deadline */}
      <section className="card p-6 border-l-4 border-l-[#4c8888]">
        <h2 className="text-lg font-semibold font-serif text-[#2C2C2C] dark:text-gray-200 mb-2">
          {t.cfh.deadline_title}
        </h2>
        <p className="text-xl font-bold text-[#273b3b] dark:text-[#4c8888] mb-3 font-serif">
          {t.cfh.deadline_value}
        </p>
        <p className="text-sm text-[#666] dark:text-gray-400">
          {t.cfh.deadline_note}
        </p>
      </section>
    </div>
  );
}
