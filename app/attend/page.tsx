"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import VenueMap from "@/components/VenueMap";

const LIVE_STREAM_URL = "https://live.bilibili.com/24409661";

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
          <div className="mt-5 flex flex-col sm:flex-row sm:items-center gap-5">
            <a
              href={LIVE_STREAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center justify-center rounded-md bg-[#273b3b] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#345151] dark:bg-[#4c8888] dark:hover:bg-[#5c9999]"
            >
              {t.attend.online_link_label}
            </a>
            <div className="w-fit rounded-md border border-gray-200 bg-white p-3 dark:border-gray-700">
              <Image
                src="/live-stream.svg"
                alt={t.attend.online_qr_alt}
                width={180}
                height={180}
                className="h-40 w-40 sm:h-44 sm:w-44"
              />
            </div>
          </div>
        </section>

        <div className="card p-6 border-l-4 border-l-[#4c8888]">
          <h2 className="text-lg font-semibold font-serif text-[#2C2C2C] dark:text-gray-200 mb-2">
            {t.attend.location_title}
          </h2>
          <p className="text-base font-medium text-[#273b3b] dark:text-[#4c8888] font-serif">
            {t.attend.location_content}
          </p>
          <p className="text-sm text-[#666] dark:text-gray-400 mt-1">
            {t.attend.location_address}
          </p>
        </div>

        <VenueMap />
      </div>
    </div>
  );
}
