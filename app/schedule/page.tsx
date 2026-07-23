"use client";

import { useLanguage } from "@/lib/language-context";

type ResourceLink = {
  label: string;
  href: string;
};

const resourcesByTime: Record<string, ResourceLink[]> = {
  "14:05-14:35": [
    { label: "Slides", href: "/slides/Aberter0x3F - Hull and WAAP.pdf" },
    { label: "Online Doc", href: "https://hull.aberter0x3f.top/" },
  ],
  "14:35-14:50": [
    {
      label: "Slides",
      href: "/slides/CSL and panda_twingy - Technical Operations for Unconventional Contest Sites.pdf",
    },
  ],
  "14:50-15:05": [
    {
      label: "Slides",
      href: "/slides/teafrogsf - Pay for the Second-Best Service.pptx",
    },
    { label: "Paper", href: "https://doi.org/10.1145/3774904.3792446" },
  ],
  "15:05-15:20": [
    {
      label: "Slides",
      href: "/slides/Karshilov - Lossy Compression for Scientific Data.pdf",
    },
  ],
  "15:30-16:00": [
    {
      label: "Slides",
      href: "/slides/Wang Huai - A Fast Tour of Linux Kernel Practice.pdf",
    },
  ],
  "16:00-16:15": [
    {
      label: "Slides",
      href: "/slides/StudyingFather - Tunneling through the Hill.pptx",
    },
    { label: "Paper", href: "https://doi.org/10.1145/3763176" },
  ],
  "16:15-16:45": [
    {
      label: "Slides",
      href: "/slides/Maxmilite and yizr_cnyali - Order From Divergence.pptx",
    },
  ],
  "16:45-17:00": [
    { label: "Slides", href: "/slides/nike0good - BenchEvolver.pdf" },
    { label: "Paper", href: "https://doi.org/10.48550/arXiv.2606.01286" },
    { label: "Website", href: "https://benchevolver.github.io/" },
  ],
  "17:00-17:15": [
    { label: "Slides", href: "/slides/teafrogsf - Agents Last Exam.pptx" },
    { label: "Paper", href: "https://doi.org/10.48550/arXiv.2606.05405" },
    { label: "Website", href: "https://agents-last-exam.org/" },
  ],
};

export default function SchedulePage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
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

      <div className="card overflow-hidden hidden md:block">
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
              <th className="w-28 whitespace-nowrap px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[#666] dark:text-gray-400">
                {t.schedule.resourcesLabel}
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
                <td className="px-4 py-4 align-top text-sm">
                  {resourcesByTime[item.time] ? (
                    <div className="space-y-1">
                      {resourcesByTime[item.time].map((resource) => (
                        <a
                          key={resource.href}
                          href={resource.href}
                          target="_blank"
                          rel="noreferrer"
                          className="block whitespace-nowrap font-medium text-[#4c8888] hover:underline"
                        >
                          {resource.label}
                        </a>
                      ))}
                    </div>
                  ) : (
                    <span className="text-[#666] dark:text-gray-400">/</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-3 md:hidden">
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
            {resourcesByTime[item.time] && (
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                {resourcesByTime[item.time].map((resource) => (
                  <a
                    key={resource.href}
                    href={resource.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-[#4c8888] hover:underline"
                  >
                    {resource.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
