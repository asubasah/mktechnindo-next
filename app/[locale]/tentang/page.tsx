"use client";

import { useTranslations } from "next-intl";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import GreenOverlay from "../../../components/green-overlay";
import GreenBg from "../../../components/green-bg";

export default function TentangPage() {
  const t = useTranslations("aboutPage");
  const tGlobal = useTranslations("cta");

  const [hoveredMilestone, setHoveredMilestone] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const strengths = t.raw("strengths") as { title: string; desc: string }[];
  const milestones = t.raw("milestones.items") as { year: string; title: string; desc: string; image: string }[];

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

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
            {t("heroTitle")}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{t("heroDesc")}</p>
        </div>
      </section>

      {/* COMPANY PROFILE */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 39h39V0h1v40H0v-1z' fill='%23000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E\")" }} />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">{t("profileBadge")}</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl" style={{ fontFamily: "'Outfit', sans-serif" }}>
              {t("profileTitle")}
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-slate-600">
            <p>{t("p1")}</p>
            <p>{t("p2")}</p>
            <p>{t("p3")}</p>
          </div>
        </div>
      </section>

      {/* VISION & MISSION (MOVED UP) */}
      <section className="relative overflow-hidden bg-slate-900 py-24 text-white">
        {/* Decorative elements */}
        <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-amber-600/10 blur-[100px]" />
        <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-amber-600/10 blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 39h39V0h1v40H0v-1z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E\")" }} />
        
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/20 text-amber-500 ring-1 ring-amber-500/30">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              </div>
              <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl" style={{ fontFamily: "'Outfit', sans-serif" }}>
                {t("visionTitle")}
              </h2>
              <div className="mt-8 relative whitespace-pre-line text-xl leading-relaxed text-slate-300">
                <span className="absolute -left-6 top-0 text-6xl text-amber-500/20 font-serif">“</span>
                {t("visionDesc")}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative p-8 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-sm ring-1 ring-white/5"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-800 text-amber-500 ring-1 ring-white/10">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h2 className="mt-6 text-3xl font-bold tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
                {t("missionTitle")}
              </h2>
              <ul className="mt-8 space-y-6">
                {(t.raw("missionItems") as string[]).map((item, i) => (
                  <li key={i} className="flex gap-4 group">
                    <div className="flex-shrink-0 mt-1 h-2 w-2 rounded-full bg-amber-500 group-hover:scale-150 transition-transform duration-300" />
                    <p className="text-lg text-slate-300 leading-relaxed group-hover:text-white transition-colors">{item}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STRENGTHS */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50">
        <GreenBg index={3} />
        
        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">{t("strengthBadge")}</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl" style={{ fontFamily: "'Outfit', sans-serif" }}>
              {t("strengthTitle")}
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">{t("strengthDesc")}</p>
          </motion.div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {strengths.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-lift rounded-3xl border border-slate-200 bg-white p-6 shadow-sm ring-1 ring-slate-200/50"
              >
                <span className="inline-block rounded-full bg-amber-100 px-3 py-0.5 text-xs font-bold tracking-widest text-amber-700">0{i+1}</span>
                <h3 className="mt-4 text-lg font-semibold text-slate-900" style={{ fontFamily: "'Outfit', sans-serif" }}>{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE / MILESTONES */}
      <section className="relative overflow-hidden bg-white" onMouseMove={handleMouseMove}>
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 39h39V0h1v40H0v-1z' fill='%23000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E\")" }} />
        
        {/* Centered green10 overlay that avoids top edges */}
        <div className="absolute inset-x-0 top-[15%] bottom-[15%] pointer-events-none">
          <Image 
            src="/images/green/green10.webp" 
            alt="Green Vibe" 
            fill 
            className="object-cover object-center opacity-30 mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
        </div>

        {/* Hover Pop-up Image */}
        <AnimatePresence>
          {hoveredMilestone !== null && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{ 
                position: 'fixed',
                left: mousePos.x + 20,
                top: mousePos.y - 100,
                pointerEvents: 'none',
                zIndex: 50 
              }}
              className="hidden lg:block h-48 w-64 overflow-hidden rounded-2xl border-4 border-white bg-slate-100 shadow-2xl ring-1 ring-slate-900/10"
            >
              <Image 
                src={milestones[hoveredMilestone].image} 
                alt={milestones[hoveredMilestone].year}
                fill
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                <p className="text-xs font-bold text-white tracking-widest uppercase">{milestones[hoveredMilestone].year}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 left-1/2 -ml-[300px] -mt-[300px] h-[600px] w-[600px] bg-amber-100/30 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 py-16">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">{t("milestones.badge")}</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl" style={{ fontFamily: "'Outfit', sans-serif" }}>
              {t("milestones.title")}
            </h2>
          </div>

          <div ref={containerRef} className="relative mt-12 max-w-5xl mx-auto px-4 sm:px-0">
            {/* Background Line (static) */}
            <div className="absolute left-4 top-0 h-full w-[2px] bg-slate-100 md:left-1/2 md:-ml-[1px]" />
            
            {/* Animated Progress Line */}
            <motion.div 
              style={{ scaleY }}
              className="absolute left-4 top-0 h-full w-[2px] bg-gradient-to-b from-amber-400 via-amber-600 to-amber-700 origin-top md:left-1/2 md:-ml-[1px] shadow-[0_0_10px_rgba(245,158,11,0.3)]"
            />

            <div className="space-y-8 md:space-y-0 pb-12">
              {milestones.map((milestone, idx) => (
                <div key={idx} className={`relative ${idx !== 0 ? 'md:-mt-20 lg:-mt-28' : ''}`}>
                  {/* Dot */}
                  <div className="absolute left-[13px] top-1 z-10 -ml-[5px] h-2.5 w-2.5 rounded-full border-2 border-white bg-amber-400 shadow-sm md:left-1/2 md:-ml-[5px]" />
                  
                  <div className={`md:flex md:items-start ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="md:w-1/2" />
                    
                    <motion.div 
                      initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className={`ml-12 md:m-0 md:w-1/2 ${idx % 2 === 0 ? 'md:pr-10' : 'md:pl-10'}`}
                    >
                      {/* Year Badge */}
                      <span 
                        className={`inline-block px-3 py-1 rounded-lg bg-slate-900 text-white text-sm font-black tracking-widest shadow-lg mb-2 ${idx % 2 === 0 ? 'md:float-right md:ml-2' : ''}`}
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                      >
                        {milestone.year}
                      </span>
                      
                      <div className={`overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-md hover:shadow-lg transition duration-300 ${idx % 2 === 0 ? 'clear-both' : ''}`}>
                        {/* Inline Image */}
                        <div className="relative h-32 w-full overflow-hidden bg-slate-100">
                          <Image 
                            src={milestone.image} 
                            alt={milestone.year + ' - ' + milestone.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                        </div>
                        <div className="p-4">
                          <h3 className={`text-base font-bold text-slate-900 leading-snug ${idx % 2 === 0 ? 'md:text-right' : ''}`} style={{ fontFamily: "'Outfit', sans-serif" }}>{milestone.title}</h3>
                          <p className={`mt-1.5 text-sm leading-relaxed text-slate-600 ${idx % 2 === 0 ? 'md:text-right' : ''}`}>{milestone.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-[#1a0a0a] text-white">
        <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 39h39V0h1v40H0v-1z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E\")" }} />
        <GreenOverlay variant="bottom" />
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
              {tGlobal("badge")}
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl" style={{ fontFamily: "'Outfit', sans-serif" }}>
              {tGlobal("title")}
            </h2>
            <p className="mt-6 text-lg text-slate-300">
              {tGlobal("description")}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/628113643846"
                target="_blank" rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-7 py-4 font-semibold text-slate-950 hover:bg-amber-400"
              >
                {tGlobal("whatsapp")}
              </a>
              <a
                href={`mailto:${tGlobal("email")}`}
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 font-semibold text-white hover:bg-white/10"
              >
                {tGlobal("email")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
