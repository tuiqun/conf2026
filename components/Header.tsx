"use client";

import { useLanguage } from "@/lib/language-context";
import { useTheme } from "@/lib/theme-context";
import { useState } from "react";

export default function Header() {
  const { locale, setLocale, t } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/submit", label: t.nav.submit },
    { href: "/schedule", label: t.nav.schedule },
    { href: "/attend", label: t.nav.attend },
    { href: "/archive", label: t.nav.archive },
  ];

  const callsDropdown = [
    { href: "/cfp", label: t.nav.cfp },
    { href: "/cfh", label: t.nav.cfh },
  ];

  const nextTheme = (): void => {
    const order: Array<"light" | "dark" | "system"> = ["light", "dark", "system"];
    const idx = order.indexOf(theme);
    setTheme(order[(idx + 1) % 3]);
  };

  const themeLabel = theme === "light" ? "☀" : theme === "dark" ? "☾" : "⚙";

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800 bg-[#F5F5F5]/95 dark:bg-[#111114]/95 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          <a
            href="/"
            className="font-serif text-lg font-bold tracking-tight text-[#2C2C2C] dark:text-gray-100"
          >
            TUIQUN
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.slice(0, 2).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-sm text-[#666] dark:text-gray-400 hover:text-[#2C2C2C] dark:hover:text-gray-100 transition-colors"
              >
                {link.label}
              </a>
            ))}

            {/* Calls dropdown */}
            <div className="relative group">
              <button className="px-3 py-1.5 text-sm text-[#666] dark:text-gray-400 hover:text-[#2C2C2C] dark:hover:text-gray-100 transition-colors flex items-center gap-1">
                {t.nav.calls}
                <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 pt-1 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-150">
                <div className="bg-white dark:bg-[#1a1a1f] border border-gray-200 dark:border-gray-700 rounded-md shadow-lg py-1 min-w-[160px]">
                  {callsDropdown.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-[#666] dark:text-gray-400 hover:text-[#2C2C2C] dark:hover:text-gray-100 hover:bg-[#F5F5F5] dark:hover:bg-[#111114] transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {navLinks.slice(2).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-sm text-[#666] dark:text-gray-400 hover:text-[#2C2C2C] dark:hover:text-gray-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => setLocale(locale === "zh" ? "en" : "zh")}
              className="px-2.5 py-1 text-xs font-medium border border-gray-300 dark:border-gray-600 text-[#666] dark:text-gray-400 hover:text-[#2C2C2C] dark:hover:text-gray-200 rounded transition-colors"
            >
              {locale === "zh" ? "EN" : "中文"}
            </button>
            <button
              onClick={nextTheme}
              className="px-2.5 py-1 text-xs border border-gray-300 dark:border-gray-600 text-[#666] dark:text-gray-400 hover:text-[#2C2C2C] dark:hover:text-gray-200 rounded transition-colors"
              title={t.theme[theme]}
            >
              {themeLabel}
            </button>
          </div>

          <button
            className="md:hidden p-2 text-[#666] dark:text-gray-400"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden py-3 border-t border-gray-200 dark:border-gray-800">
            <nav className="flex flex-col gap-0.5">
              {navLinks.slice(0, 2).map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm text-[#666] dark:text-gray-400 hover:text-[#2C2C2C] dark:hover:text-gray-100 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              {/* Calls sub-items */}
              <span className="px-3 py-2 text-xs font-medium text-[#999] dark:text-gray-500 uppercase tracking-wider">
                {t.nav.calls}
              </span>
              {callsDropdown.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-6 py-2 text-sm text-[#666] dark:text-gray-400 hover:text-[#2C2C2C] dark:hover:text-gray-100 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              {navLinks.slice(2).map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm text-[#666] dark:text-gray-400 hover:text-[#2C2C2C] dark:hover:text-gray-100 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2 mt-3 px-3">
              <button
                onClick={() => setLocale(locale === "zh" ? "en" : "zh")}
                className="px-2.5 py-1 text-xs font-medium border border-gray-300 dark:border-gray-600 text-[#666] dark:text-gray-400 rounded"
              >
                {locale === "zh" ? "EN" : "中文"}
              </button>
              <button
                onClick={nextTheme}
                className="px-2.5 py-1 text-xs border border-gray-300 dark:border-gray-600 text-[#666] dark:text-gray-400 rounded"
              >
                {themeLabel}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
