import Image from "next/image";
import { useTranslations } from "next-intl";
import GreenOverlay from "../../../components/green-overlay";
import GreenBg from "../../../components/green-bg";

export default function ProyekPage() {
  const t = useTranslations("projects");
  const items = t.raw("items") as { title: string; desc: string }[];

  const images = [
    "/images/projects/project-1.webp",
    "/images/projects/project-2_ok.webp",
    "/images/projects/project-3.webp",
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-br from-[#0f172a] via-[#1f1720] to-[#3b0d0d] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(127,29,29,0.40),transparent_30%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(153,27,27,0.22),transparent_35%)]" />
        <GreenOverlay variant="left" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">{t("badge")}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-5xl" style={{ fontFamily: "'Outfit', sans-serif" }}>
            {t("title")}
          </h1>
        </div>
      </section>

      {/* PROJECT LIST */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50">
        <GreenBg index={10} />
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-6 md:grid-cols-3">
            {items.map((p, i) => (
              <div key={i} className="card-lift overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={images[i]} alt={p.title} fill className="object-cover transition duration-500 hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-slate-900" style={{ fontFamily: "'Outfit', sans-serif" }}>{p.title}</h2>
                  <p className="mt-3 leading-7 text-slate-600">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-[#1a0a0a] text-white">
        <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 39h39V0h1v40H0v-1z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E\")" }} />
        <GreenOverlay variant="right" />
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
