"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { locales, type Locale } from "../i18n";
import { useRouter, usePathname } from "next/navigation";

const LANG_FLAGS: Record<Locale, string> = { id: "🇮🇩", en: "🇬🇧", ja: "🇯🇵", ko: "🇰🇷", zh: "🇨🇳", jv: "☕" };

export default function SiteFooter({ locale }: { locale: string }) {
  const t = useTranslations("footer");
  const tn = useTranslations("nav");
  const router = useRouter();
  const pathname = usePathname();

  const localePath = (href: string) =>
    locale === "id" ? href : `/${locale}${href === "/" ? "" : href}`;

  const switchLocale = (next: Locale) => {
    const segments = pathname.split("/");
    const hasPrefix = locales.includes(segments[1] as Locale);
    const clean = hasPrefix ? "/" + segments.slice(2).join("/") : pathname;
    const newPath = next === "id" ? clean || "/" : `/${next}${clean === "/" ? "" : clean}`;
    router.push(newPath);
  };

  return (
    <footer className="border-t border-white/5 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1f1720] text-slate-400">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">

        {/* Brand */}
        <div className="md:col-span-1">
          <div className="inline-flex rounded-2xl bg-white/95 px-4 py-3 shadow-md ring-1 ring-white/10">
            <Image src="/images/logos/logo_mktech.png" alt="Logo MK Technindo" width={180} height={79} className="h-auto w-[140px] md:w-[160px]" />
          </div>
          <p className="mt-5 max-w-xs text-sm leading-7 text-slate-400">
            {t("description")}
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">{t("contact")}</h4>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-400">
            <li><a href="tel:0318665800" className="transition hover:text-white">031 866 5800</a></li>
            <li><a href="mailto:project@mktechnindo.co.id" className="transition hover:text-white">project@mktechnindo.co.id</a></li>
            <li><a href="https://wa.me/628113643846" target="_blank" rel="noreferrer" className="transition hover:text-white">WhatsApp: +62 811 3643 846</a></li>
            <li className="text-slate-500">{t("hours")}</li>
            <li className="text-slate-500 text-xs leading-6">{t("address")}</li>
          </ul>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">{t("navigation")}</h4>
          <ul className="mt-5 space-y-2.5 text-sm">
            {[
              { href: "/", label: tn("home") },
              { href: "/tentang", label: tn("about") },
              { href: "/layanan", label: tn("services") },
              { href: "/industri", label: tn("industries") },
              { href: "/proyek", label: tn("projects") },
              { href: "/kontak", label: tn("contact") },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link href={localePath(href)} className="transition hover:text-white">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Language */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">Language</h4>
          <div className="mt-5 flex flex-wrap gap-2">
            {locales.map((loc) => (
              <button
                key={loc}
                onClick={() => switchLocale(loc)}
                className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium ring-1 transition ${
                  loc === locale
                    ? "bg-amber-500/10 text-amber-400 ring-amber-500/40"
                    : "bg-white/5 text-slate-400 ring-white/10 hover:bg-white/10 hover:text-white"
                }`}
              >
                {LANG_FLAGS[loc]} {loc.toUpperCase()}
              </button>
            ))}
          </div>
          <div className="mt-8 space-y-3 text-sm">
            <a
              href="https://wa.me/628113643846"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full bg-emerald-600/20 px-4 py-2.5 font-medium text-emerald-400 ring-1 ring-emerald-700/40 transition hover:bg-emerald-600/30"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-4 w-4 fill-current">
                <path d="M19.11 17.21c-.29-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.64.15-.19.29-.74.93-.91 1.12-.17.19-.33.22-.62.07-.29-.15-1.21-.45-2.31-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.14-.14.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.15-.64-1.54-.88-2.12-.23-.56-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.29-.99.97-.99 2.37 0 1.4 1.02 2.75 1.16 2.94.15.19 2 3.06 4.84 4.28.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.11.55-.08 1.7-.69 1.94-1.35.24-.66.24-1.22.17-1.35-.07-.12-.26-.19-.55-.33Z" />
                <path d="M16.03 3C8.84 3 3 8.73 3 15.81c0 2.28.61 4.42 1.67 6.28L3 29l7.15-1.86a13.1 13.1 0 0 0 5.88 1.41h.01c7.19 0 13.03-5.73 13.03-12.81C29.07 8.73 23.22 3 16.03 3Zm0 23.4h-.01a10.7 10.7 0 0 1-5.45-1.49l-.39-.23-4.24 1.1 1.13-4.11-.25-.42a10.47 10.47 0 0 1-1.62-5.44c0-5.88 4.85-10.66 10.82-10.66 5.96 0 10.81 4.78 10.81 10.66S22 26.4 16.03 26.4Z" />
              </svg>
              WhatsApp
            </a>
            <a
              href="mailto:project@mktechnindo.co.id"
              className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2.5 font-medium text-slate-300 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-white"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              Email
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 px-6 py-5 text-center text-xs text-slate-600">
        {t("copyright")}
      </div>
    </footer>
  );
}
