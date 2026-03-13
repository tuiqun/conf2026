"use client";

import { useLanguage } from "@/lib/language-context";

export default function SchedulePage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <h1 className="text-2xl sm:text-3xl font-bold font-serif text-[#2C2C2C] dark:text-gray-100 mb-10">
        {t.schedule.title}
      </h1>

      <div className="card p-8 text-center mb-8">
        <p className="text-[15px] text-[#999] dark:text-gray-500">
          {t.schedule.tba}
        </p>
      </div>

      <div className="space-y-3 mb-8">
        <div className="card p-4">
          <span className="text-sm font-medium text-[#666] dark:text-gray-400">
            {t.schedule.date_day1}
          </span>
        </div>
        <div className="card p-4">
          <span className="text-sm font-medium text-[#666] dark:text-gray-400">
            {t.schedule.date_day2}
          </span>
        </div>
      </div>

      <p className="text-[15px] text-[#666] dark:text-gray-400 leading-relaxed">
        {t.schedule.activities}
      </p>
    </div>
  );
}
