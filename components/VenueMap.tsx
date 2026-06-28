"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/language-context";

// Venue: 等同 Timeless 咖啡, 龙湖唐宁ONE, 中关村东路16号院 (near 五道口)
// Coordinates are GCJ-02 (used by Amap). Adjust if needed after verifying on map.
const VENUE = {
  name: "等同 Timeless 咖啡",
  lng: 116.339,
  lat: 39.988,
  amapUrl: "https://uri.amap.com/marker?position=116.339,39.988&name=%E7%AD%89%E5%90%8CTimeless%E5%92%96%E5%95%A1&src=tuiqun",
};

export default function VenueMap() {
  const { t } = useLanguage();
  const mapRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    "loading"
  );

  const amapKey = process.env.NEXT_PUBLIC_AMAP_KEY;

  useEffect(() => {
    if (!amapKey || !mapRef.current) {
      setStatus("error");
      return;
    }

    let map: unknown;

    (async () => {
      try {
        const AMapLoader = (await import("@amap/amap-jsapi-loader")).default;
        const AMap = await AMapLoader.load({
          key: amapKey,
          version: "2.0",
        });

        map = new AMap.Map(mapRef.current!, {
          zoom: 15,
          center: [VENUE.lng, VENUE.lat],
          viewMode: "2D",
        });

        new AMap.Marker({
          position: new AMap.LngLat(VENUE.lng, VENUE.lat),
          title: VENUE.name,
          map,
        });

        setStatus("ready");
      } catch {
        setStatus("error");
      }
    })();

    return () => {
      if (map && typeof (map as { destroy?: () => void }).destroy === "function") {
        (map as { destroy: () => void }).destroy();
      }
    };
  }, [amapKey]);

  // No API key — show a static fallback card
  if (!amapKey) {
    return (
      <section className="mt-8">
        <h2 className="text-lg font-semibold font-serif text-[#2C2C2C] dark:text-gray-200 mb-3">
          {t.attend.map_title}
        </h2>
        <div className="card overflow-hidden">
          <div className="h-64 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
            <div className="text-center space-y-3">
              <svg
                className="w-10 h-10 mx-auto text-[#4c8888]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              <p className="text-sm font-medium text-[#2C2C2C] dark:text-gray-200">
                {t.attend.location_content}
              </p>
              <p className="text-xs text-[#666] dark:text-gray-400 max-w-xs">
                {t.attend.location_address}
              </p>
              <a
                href={VENUE.amapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm text-[#4c8888] hover:underline"
              >
                {t.attend.map_open_amap} &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="mt-8">
      <h2 className="text-lg font-semibold font-serif text-[#2C2C2C] dark:text-gray-200 mb-3">
        {t.attend.map_title}
      </h2>
      <div className="card overflow-hidden">
        {status === "loading" && (
          <div className="h-80 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
            <p className="text-sm text-[#666] dark:text-gray-400 animate-pulse">
              {t.attend.map_loading}
            </p>
          </div>
        )}
        <div
          ref={mapRef}
          className="w-full"
          style={{
            height: "320px",
            display: status === "loading" ? "none" : "block",
          }}
        />
        {status === "error" && (
          <div className="h-80 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
            <p className="text-sm text-[#666] dark:text-gray-400">
              {t.attend.map_error}
            </p>
          </div>
        )}
        <div className="px-5 py-3 flex items-center justify-between border-t border-gray-100 dark:border-gray-800">
          <div>
            <span className="text-sm font-medium text-[#2C2C2C] dark:text-gray-200 block">
              {t.attend.location_content}
            </span>
            <span className="text-xs text-[#666] dark:text-gray-400">
              {t.attend.location_address}
            </span>
          </div>
          <a
            href={VENUE.amapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#4c8888] hover:underline"
          >
            {t.attend.map_open_amap} &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
