"use client";

import { useLanguage } from "@/lib/language-context";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-[#151518]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 text-center">
        <p className="text-sm text-[#999] dark:text-gray-500">
          {t.footer.copyright}
        </p>
        <p className="text-xs text-[#999] dark:text-gray-600 mt-1">
          Tuiqun Universe In Quaint Ultimate Non-summit
        </p>
      </div>
    </footer>
  );
}
