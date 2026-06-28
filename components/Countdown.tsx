"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/language-context";

export default function Countdown() {
  const { t } = useLanguage();
  const targetDate = new Date("2026-07-18T00:00:00+08:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const update = () => {
      const now = Date.now();
      const diff = targetDate - now;
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const blocks = [
    { value: timeLeft.days, label: t.home.countdown_days },
    { value: timeLeft.hours, label: t.home.countdown_hours },
    { value: timeLeft.minutes, label: t.home.countdown_minutes },
    { value: timeLeft.seconds, label: t.home.countdown_seconds },
  ];

  return (
    <div className="flex gap-3 sm:gap-5 justify-center">
      {blocks.map((block) => (
        <div key={block.label} className="text-center">
          <div className="w-14 sm:w-18 h-14 sm:h-18 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
            <span className="text-xl sm:text-2xl font-semibold text-white tabular-nums font-sans">
              {String(block.value).padStart(2, "0")}
            </span>
          </div>
          <span className="text-[11px] sm:text-xs text-white/60 mt-1 block">
            {block.label}
          </span>
        </div>
      ))}
    </div>
  );
}
