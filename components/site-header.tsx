"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { useState, useEffect, useRef } from "react";
import { locales, type Locale } from "../i18n";

const LANG_LABELS: Record<Locale, { flag: string; label: string }> = {
  id: { flag: "🇮🇩", label: "ID" },
  en: { flag: "🇬🇧", label: "EN" },
  ja: { flag: "🇯🇵", label: "JA" },
  ko: { flag: "🇰🇷", label: "KO" },
  zh: { flag: "🇨🇳", label: "ZH" },
  jv: { flag: "☕", label: "JV" },
};

export default function SiteHeader({ locale }: { locale: string }) {
  const t = useTranslations("nav");
  const th = useTranslations("header");
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  // Scrolled shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close lang dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Build locale-aware href
  const localePath = (href: string) => {
    if (locale === "id") return href;
    return `/${locale}${href === "/" ? "" : href}`;
  };

  // Switch language
  const switchLocale = (next: Locale) => {
    setLangOpen(false);
    // Strip current locale prefix from pathname
    const segments = pathname.split("/");
    const hasLocalePrefix = locales.includes(segments[1] as Locale);
    const cleanPath = hasLocalePrefix ? "/" + segments.slice(2).join("/") : pathname;
    const newPath = next === "id" ? cleanPath || "/" : `/${next}${cleanPath === "/" ? "" : cleanPath}`;
    router.push(newPath);
  };

  const currentLang = LANG_LABELS[locale as Locale] ?? LANG_LABELS.id;

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/tentang", label: t("about") },
    { href: "/layanan", label: t("services") },
    { href: "/industri", label: t("industries") },
    { href: "/proyek", label: t("projects") },
    { href: "/kontak", label: t("contact") },
  ];

  return (
    <>
      {/* ── Top Bar ─────────────────────────────────── */}
      <div className="topbar-shimmer relative overflow-hidden border-b border-[#5a1717] bg-gradient-to-r from-[#7f1d1d] via-[#8b1e1e] to-[#6b1f1f] text-white">
        <div className="absolute inset-0 pointer-events-none topbar-shimmer-sweep" />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-1.5 px-6 py-2.5 text-xs md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-1 text-red-100/85 md:flex-row md:items-center md:gap-6">
            <span className="flex items-center gap-1.5">
              <svg className="h-3 w-3 opacity-60" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
              031 866 5800
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="h-3 w-3 opacity-60" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
              project@mktechnindo.co.id
            </span>
            <span className="hidden items-center gap-1.5 lg:flex">
              <svg className="h-3 w-3 opacity-60" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
              Pergudangan Grand Tambak Sawah No. B7, Waru, Sidoarjo, Jawa Timur
            </span>
          </div>
          <div className="hidden text-red-200/70 md:flex md:items-center md:gap-4">
            <a href="tel:+628113643846" className="flex items-center gap-1.5 transition hover:text-white">
              <svg className="h-3 w-3 opacity-60" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Senin – Jumat, 08:00 – 17:00 WIB
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Header ─────────────────────────────── */}
      <header
        className={`sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 transition-all duration-300 ${
          scrolled ? "shadow-[0_4px_24px_rgba(0,0,0,0.08)] backdrop-blur-xl" : "backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
          {/* Logo */}
          <Link href={localePath("/")} className="flex shrink-0 items-center">
            <Image
              src="/images/logos/logo_mktech.png"
              alt="Logo MK Technindo"
              width={180}
              height={79}
              className="h-auto w-[135px] md:w-[158px]"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-6 text-[14.5px] font-semibold text-slate-700 md:flex">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={localePath(href)}
                className="relative py-1 transition-colors hover:text-amber-600 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-amber-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Right side: lang + CTA + hamburger */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div ref={langRef} className="relative">
              <button
                onClick={() => setLangOpen((v) => !v)}
                className="hidden items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[13px] font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-white md:flex"
              >
                <span>{currentLang.flag}</span>
                <span>{currentLang.label}</span>
                <svg className={`h-3 w-3 text-slate-400 transition-transform ${langOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {langOpen && (
                <div className="absolute right-0 top-full mt-2 w-36 overflow-hidden rounded-2xl border border-slate-200 bg-white py-1.5 shadow-xl shadow-slate-200/60">
                  {locales.map((loc) => {
                    const l = LANG_LABELS[loc];
                    return (
                      <button
                        key={loc}
                        onClick={() => switchLocale(loc)}
                        className={`flex w-full items-center gap-2.5 px-4 py-2.5 text-sm font-medium transition hover:bg-slate-50 ${
                          loc === locale ? "text-amber-600" : "text-slate-700"
                        }`}
                      >
                        <span className="text-base">{l.flag}</span>
                        <span>{l.label}</span>
                        {loc === locale && (
                          <svg className="ml-auto h-3.5 w-3.5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* CTA — desktop */}
            <a
              href="https://wa.me/628113643846?text=Halo%20MK%20Technindo,%20saya%20ingin%20konsultasi%20terkait%20kebutuhan%20conveyor%20dan%20industrial%20equipment."
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-amber-400 md:inline-flex"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-4 w-4 fill-current" aria-hidden="true">
                <path d="M19.11 17.21c-.29-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.64.15-.19.29-.74.93-.91 1.12-.17.19-.33.22-.62.07-.29-.15-1.21-.45-2.31-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.14-.14.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.15-.64-1.54-.88-2.12-.23-.56-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.29-.99.97-.99 2.37 0 1.4 1.02 2.75 1.16 2.94.15.19 2 3.06 4.84 4.28.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.11.55-.08 1.7-.69 1.94-1.35.24-.66.24-1.22.17-1.35-.07-.12-.26-.19-.55-.33Z" />
                <path d="M16.03 3C8.84 3 3 8.73 3 15.81c0 2.28.61 4.42 1.67 6.28L3 29l7.15-1.86a13.1 13.1 0 0 0 5.88 1.41h.01c7.19 0 13.03-5.73 13.03-12.81C29.07 8.73 23.22 3 16.03 3Zm0 23.4h-.01a10.7 10.7 0 0 1-5.45-1.49l-.39-.23-4.24 1.1 1.13-4.11-.25-.42a10.47 10.47 0 0 1-1.62-5.44c0-5.88 4.85-10.66 10.82-10.66 5.96 0 10.81 4.78 10.81 10.66S22 26.4 16.03 26.4Z" />
              </svg>
              <span>{th("cta")}</span>
            </a>

            {/* Hamburger — mobile */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 transition hover:bg-slate-100 md:hidden"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="border-t border-slate-100 bg-white px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-1">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={localePath(href)}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-amber-600"
                >
                  {label}
                </Link>
              ))}
            </nav>
            {/* Mobile language switcher */}
            <div className="mt-4 border-t border-slate-100 pt-4">
              <p className="mb-2 px-4 text-xs font-semibold uppercase tracking-widest text-slate-400">Language</p>
              <div className="flex flex-wrap gap-2 px-4">
                {locales.map((loc) => {
                  const l = LANG_LABELS[loc];
                  return (
                    <button
                      key={loc}
                      onClick={() => { switchLocale(loc); setMenuOpen(false); }}
                      className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium transition ${
                        loc === locale
                          ? "bg-amber-100 text-amber-700 ring-1 ring-amber-300"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      {l.flag} {l.label}
                    </button>
                  );
                })}
              </div>
            </div>
            <a
              href="https://wa.me/628113643846"
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-amber-400"
            >
              {th("cta")}
            </a>
          </div>
        )}
      </header>
    </>
  );
}
