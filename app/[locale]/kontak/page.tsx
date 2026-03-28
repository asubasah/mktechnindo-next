import { useTranslations } from "next-intl";
import GreenOverlay from "../../../components/green-overlay";
import GreenBg from "../../../components/green-bg";

export default function KontakPage() {
  const tf = useTranslations("footer");
  const tc = useTranslations("cta");

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-br from-[#0f172a] via-[#1f1720] to-[#3b0d0d] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(127,29,29,0.40),transparent_30%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(153,27,27,0.22),transparent_35%)]" />
        <GreenOverlay variant="full" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">{tf("contact")}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-5xl" style={{ fontFamily: "'Outfit', sans-serif" }}>
            {tc("title")}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{tc("description")}</p>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <GreenBg index={11} />
        <div className="relative mx-auto grid max-w-7xl gap-5 px-6 py-20 md:grid-cols-2 xl:grid-cols-4">
          {[
            { icon: "📞", label: "Telepon", value: "031 866 5800", href: "tel:0318665800" },
            { icon: "✉️", label: "Email", value: "project@mktechnindo.co.id", href: "mailto:project@mktechnindo.co.id" },
            { icon: "💬", label: "WhatsApp", value: "+62 811 3643 846", href: "https://wa.me/628113643846" },
            { icon: "🕐", label: "Jam Operasional", value: tf("hours"), href: null },
          ].map((item) => (
            <div key={item.label} className="card-lift rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <span className="text-2xl">{item.icon}</span>
              <h2 className="mt-3 text-lg font-semibold text-slate-900" style={{ fontFamily: "'Outfit', sans-serif" }}>{item.label}</h2>
              {item.href ? (
                <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                  className="mt-2 block text-sm leading-7 text-amber-600 hover:underline">
                  {item.value}
                </a>
              ) : (
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.value}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ADDRESS */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 39h39V0h1v40H0v-1z' fill='%23000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E\")" }} />
        <div className="relative mx-auto max-w-7xl px-6 py-16">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="grid gap-8 md:grid-cols-5 md:items-center">
              <div className="flex items-start gap-4 md:col-span-2">
                <span className="text-3xl">📍</span>
                <div>
                  <h2 className="text-xl font-semibold text-slate-900" style={{ fontFamily: "'Outfit', sans-serif" }}>Alamat</h2>
                  <p className="mt-2 text-lg leading-8 text-slate-600">{tf("address")}</p>
                </div>
              </div>
              <div className="md:col-span-3 h-[250px] lg:h-[300px] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-inner">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.8867140445655!2d112.79315869999999!3d-7.366593399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e515ad828333%3A0x3ad2574006248eac!2sMaju%20Kawan%20Technindo%20-%20Spesialis%20Fabrikasi%20Conveyor!5e0!3m2!1sen!2sid!4v1774723796778!5m2!1sen!2sid" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Bengkel MK Technindo"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <GreenBg index={13} />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">{tc("badge")}</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl" style={{ fontFamily: "'Outfit', sans-serif" }}>
              {tc("title")}
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">{tc("description")}</p>
          </div>
          <div className="grid gap-5">
            <a href="https://wa.me/628113643846?text=Halo%20MK%20Technindo,%20saya%20ingin%20konsultasi."
              target="_blank" rel="noreferrer"
              className="card-lift group flex items-start gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 transition group-hover:bg-emerald-500 group-hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-6 w-6 fill-current">
                  <path d="M19.11 17.21c-.29-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.64.15-.19.29-.74.93-.91 1.12-.17.19-.33.22-.62.07-.29-.15-1.21-.45-2.31-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.14-.14.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.15-.64-1.54-.88-2.12-.23-.56-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.29-.99.97-.99 2.37 0 1.4 1.02 2.75 1.16 2.94.15.19 2 3.06 4.84 4.28.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.11.55-.08 1.7-.69 1.94-1.35.24-.66.24-1.22.17-1.35-.07-.12-.26-.19-.55-.33Z" />
                  <path d="M16.03 3C8.84 3 3 8.73 3 15.81c0 2.28.61 4.42 1.67 6.28L3 29l7.15-1.86a13.1 13.1 0 0 0 5.88 1.41h.01c7.19 0 13.03-5.73 13.03-12.81C29.07 8.73 23.22 3 16.03 3Zm0 23.4h-.01a10.7 10.7 0 0 1-5.45-1.49l-.39-.23-4.24 1.1 1.13-4.11-.25-.42a10.47 10.47 0 0 1-1.62-5.44c0-5.88 4.85-10.66 10.82-10.66 5.96 0 10.81 4.78 10.81 10.66S22 26.4 16.03 26.4Z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900" style={{ fontFamily: "'Outfit', sans-serif" }}>{tc("whatsapp")}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">+62 811 3643 846</p>
              </div>
            </a>
            <a href="mailto:project@mktechnindo.co.id"
              className="card-lift group flex items-start gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-amber-600 transition group-hover:bg-amber-500 group-hover:text-white">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900" style={{ fontFamily: "'Outfit', sans-serif" }}>{tc("email")}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">project@mktechnindo.co.id</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
