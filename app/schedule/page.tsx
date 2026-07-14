"use client";

import { useLanguage } from "@/lib/language-context";

export default function SchedulePage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <h1 className="text-2xl sm:text-3xl font-bold font-serif text-[#2C2C2C] dark:text-gray-100 mb-10">
        {t.schedule.title}
      </h1>

      <div className="mb-8">
        <p className="text-base font-medium text-[#2C2C2C] dark:text-gray-100">
          {t.schedule.date}
        </p>
        <p className="mt-2 text-[15px] text-[#666] dark:text-gray-400">
          {t.schedule.timezone}
        </p>
      </div>

      <div className="card overflow-hidden hidden sm:block">
        <table className="w-full text-left">
          <thead className="bg-[#F5F5F5] dark:bg-[#111114]">
            <tr>
              <th className="w-32 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#666] dark:text-gray-400">
                {t.schedule.timeLabel}
              </th>
              <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#666] dark:text-gray-400">
                {t.schedule.contentLabel}
              </th>
              <th className="w-44 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#666] dark:text-gray-400">
                {t.schedule.speakerLabel}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
            {t.schedule.items.map((item) => (
              <tr key={`${item.time}-${item.title}`}>
                <td className="px-5 py-4 align-top text-sm font-medium tabular-nums text-[#2C2C2C] dark:text-gray-100">
                  {item.time}
                </td>
                <td className="px-5 py-4 align-top text-sm leading-relaxed break-words text-[#2C2C2C] dark:text-gray-100">
                  {item.title}
                </td>
                <td className="px-5 py-4 align-top text-sm break-words text-[#666] dark:text-gray-400">
                  {item.speaker}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-3 sm:hidden">
        {t.schedule.items.map((item) => (
          <div key={`${item.time}-${item.title}`} className="card p-4">
            <div className="text-sm font-semibold tabular-nums text-[#2C2C2C] dark:text-gray-100">
              {item.time}
            </div>
            <div className="mt-2 text-sm leading-relaxed break-words text-[#2C2C2C] dark:text-gray-100">
              {item.title}
            </div>
            <div className="mt-2 text-sm break-words text-[#666] dark:text-gray-400">
              {item.speaker}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
