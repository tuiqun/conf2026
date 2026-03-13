"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";

export default function ArchivePage() {
  const { t } = useLanguage();

  const editions = [
    {
      title: t.archive.edition_2025,
      summary: t.archive.edition_2025_summary,
      venue: t.archive.edition_2025_venue,
      date: t.archive.edition_2025_date,
      submissions: t.archive.edition_2025_submissions,
      topics: t.archive.edition_2025_topics,
    },
    {
      title: t.archive.edition_2023,
      summary: t.archive.edition_2023_summary,
      venue: t.archive.edition_2023_venue,
      date: t.archive.edition_2023_date,
      submissions: t.archive.edition_2023_submissions,
      topics: t.archive.edition_2023_topics,
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <h1 className="text-2xl sm:text-3xl font-bold font-serif text-[#2C2C2C] dark:text-gray-100 mb-2">
        {t.archive.title}
      </h1>
      <p className="text-sm text-[#999] dark:text-gray-500 mb-10">
        {t.archive.description}
      </p>

      <div className="space-y-6">
        {editions.map((ed) => (
          <div key={ed.title} className="card p-6">
            <h2 className="text-lg font-semibold font-serif text-[#2C2C2C] dark:text-gray-200 mb-3">
              {ed.title}
            </h2>
            <p className="text-[15px] leading-relaxed text-[#666] dark:text-gray-400 mb-4">
              {ed.summary}
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-md bg-[#F5F5F5] dark:bg-[#111114] border border-gray-100 dark:border-gray-800">
                <span className="text-[11px] font-medium text-[#999] dark:text-gray-500 uppercase tracking-wider">
                  {t.archive.venue}
                </span>
                <p className="text-sm font-medium text-[#2C2C2C] dark:text-gray-200 mt-1">
                  {ed.venue}
                </p>
              </div>
              <div className="p-3 rounded-md bg-[#F5F5F5] dark:bg-[#111114] border border-gray-100 dark:border-gray-800">
                <span className="text-[11px] font-medium text-[#999] dark:text-gray-500 uppercase tracking-wider">
                  {t.archive.conference_date}
                </span>
                <p className="text-sm font-medium text-[#2C2C2C] dark:text-gray-200 mt-1">
                  {ed.date}
                </p>
              </div>
              <div className="p-3 rounded-md bg-[#F5F5F5] dark:bg-[#111114] border border-gray-100 dark:border-gray-800">
                <span className="text-[11px] font-medium text-[#999] dark:text-gray-500 uppercase tracking-wider">
                  {t.archive.submissions}
                </span>
                <p className="text-xl font-bold text-[#2C2C2C] dark:text-gray-200 mt-1 font-serif">
                  {ed.submissions}
                </p>
              </div>
              <div className="p-3 rounded-md bg-[#F5F5F5] dark:bg-[#111114] border border-gray-100 dark:border-gray-800">
                <span className="text-[11px] font-medium text-[#999] dark:text-gray-500 uppercase tracking-wider">
                  {t.archive.topics}
                </span>
                <p className="text-sm font-medium text-[#2C2C2C] dark:text-gray-200 mt-1">
                  {ed.topics}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/"
          className="text-sm text-[#666] dark:text-gray-400 hover:text-[#2C2C2C] dark:hover:text-gray-200 transition-colors"
        >
          &larr; {t.nav.home}
        </Link>
      </div>
    </div>
  );
}
