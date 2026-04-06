import Image from "next/image";
import { useTranslations } from "next-intl";
import GreetingBanner from "../../components/greeting-banner";
import GreenOverlay from "../../components/green-overlay";
import GreenBg from "../../components/green-bg";
import ProcessTimeline from "../../components/process-timeline";

export default function HomePage() {
  const t = useTranslations();

  const services = t.raw("services.items") as { title: string; desc: string }[];
  const industries = t.raw("industries.items") as string[];
  const whyUs = t.raw("whyUs.items") as { title: string; desc: string }[];
  const projects = t.raw("projects.items") as { title: string; desc: string }[];
  const process = t.raw("process.steps") as { step: string; title: string; desc: string }[];
  const faqs = t.raw("faq.items") as { q: string; a: string }[];

  const clients = [
    { name: "Yazaki Group", image: "/images/logos/clients/sai.png" },
    { name: "Sreeya", image: "/images/logos/clients/sreeya.png" },
    { name: "Indococonut", image: "/images/logos/clients/indococonut.png" },
    { name: "Charoen Pokphand", image: "/images/logos/clients/cpp.png" },
    { name: "Ecco", image: "/images/logos/clients/ecco.png" },
  ];

  const projectImages = [
    "/images/projects/project-1.webp",
    "/images/projects/project-2_ok.webp",
    "/images/projects/project-3.webp",
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* ─────────────── HERO ─────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1f1720] to-[#3b0d0d] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(127,29,29,0.35),transparent_35%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.15),transparent_40%)]" />
        <GreenOverlay variant="full" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28 lg:py-32">
          <div>
            {/* Greeting Banner */}
            <GreetingBanner />

            {/* Slogan */}
            <p className="mt-4 text-sm font-bold uppercase tracking-[0.35em] text-gradient-gold md:text-base" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Your Reliable Partner
            </p>

            <p className="mb-4 mt-3 inline-block rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm text-slate-200 shadow-sm backdrop-blur-sm">
              {t("hero.badge")}
            </p>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl" style={{ fontFamily: "'Outfit', sans-serif" }}>
              {t("hero.title")}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              {t("hero.subtitle")}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/628113643846?text=Halo%20MK%20Technindo,%20saya%20ingin%20konsultasi%20terkait%20kebutuhan%20conveyor%20dan%20industrial%20equipment."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-7 py-3.5 font-semibold text-slate-950 shadow-lg shadow-amber-900/30 transition hover:bg-amber-400 hover:shadow-amber-900/50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-5 w-5 fill-current" aria-hidden="true">
                  <path d="M19.11 17.21c-.29-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.64.15-.19.29-.74.93-.91 1.12-.17.19-.33.22-.62.07-.29-.15-1.21-.45-2.31-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.14-.14.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.15-.64-1.54-.88-2.12-.23-.56-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.29-.99.97-.99 2.37 0 1.4 1.02 2.75 1.16 2.94.15.19 2 3.06 4.84 4.28.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.11.55-.08 1.7-.69 1.94-1.35.24-.66.24-1.22.17-1.35-.07-.12-.26-.19-.55-.33Z" />
                  <path d="M16.03 3C8.84 3 3 8.73 3 15.81c0 2.28.61 4.42 1.67 6.28L3 29l7.15-1.86a13.1 13.1 0 0 0 5.88 1.41h.01c7.19 0 13.03-5.73 13.03-12.81C29.07 8.73 23.22 3 16.03 3Zm0 23.4h-.01a10.7 10.7 0 0 1-5.45-1.49l-.39-.23-4.24 1.1 1.13-4.11-.25-.42a10.47 10.47 0 0 1-1.62-5.44c0-5.88 4.85-10.66 10.82-10.66 5.96 0 10.81 4.78 10.81 10.66S22 26.4 16.03 26.4Z" />
                </svg>
                <span>{t("hero.ctaPrimary")}</span>
              </a>
              <a
                href="/layanan"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-3.5 font-semibold text-white transition hover:border-white/50 hover:bg-white/10"
              >
                {t("hero.ctaSecondary")}
              </a>
            </div>

            <div className="mt-10 grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
              {[t("hero.tag1"), t("hero.tag2"), t("hero.tag3")].map((tag) => (
                <div key={tag} className="flex items-start gap-2 rounded-2xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-sm">
                  <span className="mt-0.5 text-amber-400">✦</span>
                  <span>{tag}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div>
            <div className="group rounded-[28px] border border-white/10 bg-white/5 p-3.5 shadow-2xl backdrop-blur-sm transition duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.40)]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[20px]">
                <Image
                  src="/images/hero/conveyor-main.webp"
                  alt="Conveyor system dan proses fabrikasi MK Technindo"
                  fill
                  className="object-cover transition duration-700 ease-out group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                {/* Badge on image */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-black/60 px-3 py-1.5 backdrop-blur-sm">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="text-xs font-medium text-white">Sidoarjo, Jawa Timur</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── CLIENTS ──────────────────── */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        {/* Subtle Grid Pattern instead of GreenBg for smoother transition */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 39h39V0h1v40H0v-1z' fill='%23000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E\")" }} />
        <div className="relative mx-auto max-w-7xl px-6 py-14">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
            {t("clients.title")}
          </p>
          <div className="mt-8 grid gap-3 md:grid-cols-5">
            {clients.map((client) => (
              <div
                key={client.name}
                className="card-lift flex items-center justify-center rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-5 shadow-sm"
              >
                <div className="relative h-12 w-full">
                  <Image src={client.image} alt={client.name} fill className="object-contain" />
                </div>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-7 text-slate-500">
            {t("clients.description")}
          </p>
        </div>
      </section>

      {/* ─────────────── ABOUT ────────────────────── */}
      <section id="about" className="relative overflow-hidden border-b border-slate-200 bg-slate-50">
        <GreenBg index={1} />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">{t("about.badge")}</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl" style={{ fontFamily: "'Outfit', sans-serif" }}>
              {t("about.title")}
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">{t("about.description")}</p>
          </div>
          <div className="grid gap-4">
            {[
              { title: t("about.card1Title"), desc: t("about.card1Desc") },
              { title: t("about.card2Title"), desc: t("about.card2Desc") },
              { title: t("about.card3Title"), desc: t("about.card3Desc") },
            ].map((card) => (
              <div key={card.title} className="card-lift rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900" style={{ fontFamily: "'Outfit', sans-serif" }}>{card.title}</h3>
                <p className="mt-2 leading-7 text-slate-600">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── SERVICES ─────────────────── */}
      <section id="services" className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 39h39V0h1v40H0v-1z' fill='%23000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E\")" }} />
        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">{t("services.badge")}</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl" style={{ fontFamily: "'Outfit', sans-serif" }}>
              {t("services.title")}
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">{t("services.description")}</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((s, i) => (
              <div key={i} className="card-lift group rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-7 shadow-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-100 text-amber-600 transition group-hover:bg-amber-500 group-hover:text-white">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900" style={{ fontFamily: "'Outfit', sans-serif" }}>{s.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── INDUSTRIES ───────────────── */}
      <section id="industries" className="relative border-b border-slate-200 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 39h39V0h1v40H0v-1z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E\")" }} />
        <GreenOverlay variant="right" />
        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">{t("industries.badge")}</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl" style={{ fontFamily: "'Outfit', sans-serif" }}>
              {t("industries.title")}
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">{t("industries.description")}</p>
          </div>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((ind, i) => (
              <div key={i} className="card-lift group rounded-2xl border border-white/10 bg-white/5 p-5 text-center font-medium text-slate-100 backdrop-blur-sm transition hover:border-amber-500/40 hover:bg-amber-500/5">
                <span className="text-lg">{["🍔","❄️","🐾","🚛","👟","🔧","🛍️","⚙️"][i % 8]}</span>
                <p className="mt-2 text-sm">{ind}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── WHY US ───────────────────── */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <GreenBg index={3} />
        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">{t("whyUs.badge")}</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl" style={{ fontFamily: "'Outfit', sans-serif" }}>
              {t("whyUs.title")}
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">{t("whyUs.description")}</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {whyUs.map((item, i) => (
              <div key={i} className="card-lift rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm">
                <span className="inline-block rounded-full bg-amber-100 px-3 py-0.5 text-xs font-bold tracking-widest text-amber-700">0{i+1}</span>
                <h3 className="mt-4 text-lg font-semibold text-slate-900" style={{ fontFamily: "'Outfit', sans-serif" }}>{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── PROJECTS ─────────────────── */}
      <section id="projects" className="relative overflow-hidden border-b border-slate-200 bg-slate-50">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 39h39V0h1v40H0v-1z' fill='%23000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E\")" }} />
        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">{t("projects.badge")}</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl" style={{ fontFamily: "'Outfit', sans-serif" }}>
              {t("projects.title")}
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {projects.map((p, i) => (
              <div key={i} className="card-lift overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={projectImages[i]} alt={p.title} fill className="object-cover transition duration-500 hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900" style={{ fontFamily: "'Outfit', sans-serif" }}>{p.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── PROCESS ──────────────────── */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <GreenBg index={1} />
        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">{t("process.badge")}</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-5xl" style={{ fontFamily: "'Outfit', sans-serif" }}>
              {t("process.title")}
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600 uppercase tracking-widest text-xs">{t("process.description")}</p>
          </div>
          
          <ProcessTimeline steps={process} />

        </div>
      </section>

      {/* ─────────────── FAQ ──────────────────────── */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 39h39V0h1v40H0v-1z' fill='%23000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E\")" }} />
        <div className="relative mx-auto max-w-5xl px-6 py-20">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">{t("faq.badge")}</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl" style={{ fontFamily: "'Outfit', sans-serif" }}>
              {t("faq.title")}
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">{t("faq.description")}</p>
          </div>
          <div className="mt-12 space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="card-lift rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="flex items-start gap-3 text-base font-semibold text-slate-900" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-600">{i+1}</span>
                  {faq.q}
                </h3>
                <p className="mt-3 pl-9 leading-7 text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── CTA ──────────────────────── */}
      <section id="contact" className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-[#1a0a0a] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(245,158,11,0.08),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(127,29,29,0.25),transparent_45%)]" />
        <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 39h39V0h1v40H0v-1z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E\")" }} />
        <GreenOverlay variant="bottom" />
        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">{t("cta.badge")}</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl" style={{ fontFamily: "'Outfit', sans-serif" }}>
              {t("cta.title")}
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">{t("cta.description")}</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/628113643846"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-7 py-4 font-semibold text-slate-950 shadow-lg transition hover:bg-amber-400"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-5 w-5 fill-current"><path d="M19.11 17.21c-.29-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.64.15-.19.29-.74.93-.91 1.12-.17.19-.33.22-.62.07-.29-.15-1.21-.45-2.31-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.14-.14.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.15-.64-1.54-.88-2.12-.23-.56-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.29-.99.97-.99 2.37 0 1.4 1.02 2.75 1.16 2.94.15.19 2 3.06 4.84 4.28.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.11.55-.08 1.7-.69 1.94-1.35.24-.66.24-1.22.17-1.35-.07-.12-.26-.19-.55-.33Z" /><path d="M16.03 3C8.84 3 3 8.73 3 15.81c0 2.28.61 4.42 1.67 6.28L3 29l7.15-1.86a13.1 13.1 0 0 0 5.88 1.41h.01c7.19 0 13.03-5.73 13.03-12.81C29.07 8.73 23.22 3 16.03 3Zm0 23.4h-.01a10.7 10.7 0 0 1-5.45-1.49l-.39-.23-4.24 1.1 1.13-4.11-.25-.42a10.47 10.47 0 0 1-1.62-5.44c0-5.88 4.85-10.66 10.82-10.66 5.96 0 10.81 4.78 10.81 10.66S22 26.4 16.03 26.4Z" /></svg>
                {t("cta.whatsapp")}
              </a>
              <a
                href="mailto:project@mktechnindo.co.id"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                {t("cta.email")}
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
