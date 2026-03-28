import { useTranslations } from "next-intl";
import GreenOverlay from "../../../components/green-overlay";
import GreenBg from "../../../components/green-bg";

export default function IndustriPage() {
  const t = useTranslations("industries");
  const items = t.raw("items") as string[];

  const descs = [
    "Conveyor system and fabrication solutions to support more efficient and structured food processing flows.",
    "Supporting product movement and operational production flows that require an orderly workflow.",
    "Serving conveyor system and supporting equipment needs for the pet food manufacturing industry.",
    "Material handling and goods movement solutions to support logistics and warehousing activities.",
    "Supporting footwear manufacturing production processes with solutions tailored to operational requirements.",
    "Solutions for handling, support equipment, and fabrication work in the automotive components sector.",
    "Serving consumer goods industry operational needs with a relevant and flexible approach.",
    "For other specific industrial requirements, MK Technindo is ready to tailor solutions to project specifications.",
  ];

  const emojis = ["🍔","❄️","🐾","🚛","👟","🔧","🛍️","⚙️"];

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
            {t("title")}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{t("description")}</p>
        </div>
      </section>

      {/* INDUSTRIES LIST */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 39h39V0h1v40H0v-1z' fill='%23000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E\")" }} />
        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {items.map((name, i) => (
              <div key={i} className="card-lift rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <span className="text-3xl">{emojis[i]}</span>
                <h2 className="mt-3 text-xl font-semibold text-slate-900" style={{ fontFamily: "'Outfit', sans-serif" }}>{name}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{descs[i]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-[#1a0a0a] text-white">
        <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 39h39V0h1v40H0v-1z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E\")" }} />
        <GreenOverlay variant="left" />
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">MK Technindo</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl" style={{ fontFamily: "'Outfit', sans-serif" }}>
              {t("title")}
            </h2>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="https://wa.me/628113643846" target="_blank" rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-amber-500 px-7 py-4 font-semibold text-slate-950 hover:bg-amber-400">
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
