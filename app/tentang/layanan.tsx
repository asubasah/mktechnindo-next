export default function LayananPage() {
return (
<main className="min-h-screen bg-white text-slate-900">
{/* HERO */}
<section className="border-b border-slate-200 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
<div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
<p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
Layanan
</p>
<h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
Layanan Fabrikasi Conveyor dan Industrial Equipment untuk Kebutuhan
Manufaktur
</h1>
<p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
MK Technindo menghadirkan layanan yang dirancang untuk mendukung
kebutuhan operasional industri secara lebih efisien, terarah, dan
sesuai dengan requirement di lapangan.
</p>
</div>
</section>

{/* SERVICES LIST */}
<section className="border-b border-slate-200 bg-white">
<div className="mx-auto max-w-7xl px-6 py-20">
<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
{[
{
title: "Custom Conveyor System",
desc: "Pembuatan conveyor system yang disesuaikan dengan alur kerja, kapasitas, dan kebutuhan operasional industri.",
},
{
title: "Industrial Equipment Fabrication",
desc: "Fabrikasi berbagai peralatan industri untuk mendukung proses produksi, handling, dan kebutuhan teknis lainnya.",
},
{
title: "Modification & Rebuild",
desc: "Penyesuaian, perbaikan, atau pengembangan ulang sistem dan equipment yang sudah ada agar lebih relevan dengan kebutuhan saat ini.",
},
{
title: "Installation Support",
desc: "Dukungan instalasi dan implementasi di lapangan agar sistem dapat berjalan sesuai rencana dan fungsi.",
},
{
title: "Technical Consultation",
desc: "Diskusi kebutuhan proyek sebelum pengerjaan untuk membantu menentukan solusi yang paling tepat.",
},
{
title: "Custom Project Request",
desc: "Kebutuhan spesifik? Tim MK Technindo siap membantu pengembangan solusi fabrikasi sesuai requirement Anda.",
},
].map((service) => (
<div
key={service.title}
className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
>
<h2 className="text-2xl font-semibold text-slate-900">
{service.title}
</h2>
<p className="mt-4 leading-7 text-slate-600">{service.desc}</p>
</div>
))}
</div>
</div>
</section>

{/* APPROACH */}
<section className="border-b border-slate-200 bg-slate-50">
<div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-start">
<div>
<p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-500">
Pendekatan Kami
</p>
<h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
Solusi yang Disesuaikan dengan Kebutuhan Aktual di Lapangan
</h2>
</div>

<div className="space-y-6 text-lg leading-8 text-slate-600">
<p>
Setiap kebutuhan industri memiliki karakter yang berbeda. Karena
itu MK Technindo tidak menggunakan pendekatan yang seragam untuk
semua proyek.
</p>
<p>
Kami memulai dari kebutuhan operasional, kondisi lapangan,
requirement teknis, serta target penggunaan, agar solusi yang
dibuat benar-benar relevan dengan pekerjaan klien.
</p>
<p>
Dengan pendekatan yang lebih terarah, proses fabrikasi dapat
menghasilkan sistem yang lebih sesuai, lebih fungsional, dan lebih
siap digunakan.
</p>
</div>
</div>
</section>

{/* CTA */}
<section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
<div className="mx-auto max-w-7xl px-6 py-20">
<div className="max-w-4xl">
<p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
Konsultasi Layanan
</p>
<h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
Diskusikan Kebutuhan Layanan yang Paling Sesuai untuk Industri
Anda
</h2>
<p className="mt-6 text-lg leading-8 text-slate-300">
Tim MK Technindo siap membantu Anda memahami kebutuhan proyek dan
menentukan solusi fabrikasi atau conveyor system yang paling
relevan.
</p>

<div className="mt-8 flex flex-col gap-4 sm:flex-row">
<a
href="https://wa.me/628113643846"
target="_blank"
rel="noreferrer"
className="inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-3 font-semibold text-slate-950 hover:bg-amber-400"
>
Hubungi via WhatsApp
</a>

<a
href="mailto:project@mktechnindo.co.id"
className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 font-semibold text-white hover:bg-white/10"
>
Kirim Pertanyaan
</a>
</div>
</div>
</div>
</section>
</main>
);
}



