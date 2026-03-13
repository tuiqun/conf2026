"use client";

import { useLanguage } from "@/lib/language-context";

export default function AttendPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <h1 className="text-2xl sm:text-3xl font-bold font-serif text-[#2C2C2C] dark:text-gray-100 mb-10">
        {t.attend.title}
      </h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-lg font-semibold font-serif text-[#2C2C2C] dark:text-gray-200 mb-3">
            {t.attend.register_title}
          </h2>
          <p className="text-[15px] leading-relaxed text-[#666] dark:text-gray-400">
            {t.attend.register_content}
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold font-serif text-[#2C2C2C] dark:text-gray-200 mb-3">
            {t.attend.onsite_title}
          </h2>
          <p className="text-[15px] leading-relaxed text-[#666] dark:text-gray-400">
            {t.attend.onsite_content}
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold font-serif text-[#2C2C2C] dark:text-gray-200 mb-3">
            {t.attend.online_title}
          </h2>
          <p className="text-[15px] leading-relaxed text-[#666] dark:text-gray-400">
            {t.attend.online_content}
          </p>
        </section>

        <div className="card p-6 border-l-4 border-l-[#4c8888]">
          <h2 className="text-lg font-semibold font-serif text-[#2C2C2C] dark:text-gray-200 mb-2">
            {t.attend.location_title}
          </h2>
          <p className="text-base font-medium text-[#273b3b] dark:text-[#4c8888] font-serif">
            {t.attend.location_content}
          </p>
        </div>
      </div>
    </div>
  );
}
