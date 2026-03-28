import { useTranslations } from "next-intl";
import GreenOverlay from "../../../components/green-overlay";
import GreenBg from "../../../components/green-bg";

export default function LayananPage() {
  const t = useTranslations("servicesPage");
  const ts = useTranslations("services");
  const services = ts.raw("items") as { title: string; desc: string }[];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-br from-[#0f172a] via-[#1f1720] to-[#3b0d0d] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(127,29,29,0.40),transparent_30%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(153,27,27,0.22),transparent_35%)]" />
        <GreenOverlay variant="right" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">{t("badge")}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-5xl" style={{ fontFamily: "'Outfit', sans-serif" }}>
            {t("heroTitle")}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{t("heroDesc")}</p>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <GreenBg index={7} />
        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((s, i) => (
              <div key={i} className="card-lift group rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-7 shadow-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-100 text-amber-600 transition group-hover:bg-amber-500 group-hover:text-white">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-slate-900" style={{ fontFamily: "'Outfit', sans-serif" }}>{s.title}</h2>
                <p className="mt-4 leading-7 text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 39h39V0h1v40H0v-1z' fill='%23000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E\")" }} />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">{t("approachBadge")}</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl" style={{ fontFamily: "'Outfit', sans-serif" }}>
              {t("approachTitle")}
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-slate-600">
            <p>{t("ap1")}</p>
            <p>{t("ap2")}</p>
            <p>{t("ap3")}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-[#1a0a0a] text-white">
        <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 39h39V0h1v40H0v-1z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E\")" }} />
        <GreenOverlay variant="bottom" />
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">{t("ctaBadge")}</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl" style={{ fontFamily: "'Outfit', sans-serif" }}>
              {t("ctaTitle")}
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">{t("ctaDesc")}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="https://wa.me/628113643846" target="_blank" rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-7 py-4 font-semibold text-slate-950 hover:bg-amber-400">
                WhatsApp
              </a>
              <a href="mailto:project@mktechnindo.co.id"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 font-semibold text-white hover:bg-white/10">
                Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
