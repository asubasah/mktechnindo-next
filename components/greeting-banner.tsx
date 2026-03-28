"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

type LocaleKey = "id" | "en" | "ja" | "ko" | "zh" | "jv";

const ORDER: LocaleKey[] = ["id", "en", "ja", "ko", "zh", "jv"];

export default function GreetingBanner() {
  const t = useTranslations("greetings");
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % ORDER.length);
        setVisible(true);
      }, 350);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  const key = ORDER[index];
  const text = t(`${key}.text`);
  const sub = t(`${key}.sub`);

  return (
    <div className="mb-3 flex items-center gap-3">
      <div
        className={`transition-all duration-350 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
        }`}
      >
        <div className="flex items-baseline gap-2.5">
          <span
            className="text-2xl font-bold tracking-tight md:text-3xl"
            style={{
              fontFamily: "'Outfit', sans-serif",
              background: "linear-gradient(135deg, #fbbf24, #f59e0b, #d97706)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {text}
          </span>
          <span className="text-sm text-slate-400 italic">{sub}</span>
        </div>
        <div className="mt-1.5 flex gap-1">
          {ORDER.map((_, i) => (
            <span
              key={i}
              className={`block h-0.5 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-amber-400" : "w-1.5 bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
