export default function LayananPage() {
return (
<main className="min-h-screen bg-white text-slate-900">
{/* HERO */}
<section className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-br from-[#0f172a] via-[#1f1720] to-[#3b0d0d] text-white">


<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(127,29,29,0.36),transparent_28%)]" />
<div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(153,27,27,0.20),transparent_32%)]" />
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_36%)]" />

<div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">

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
<p className="mt-6
text-lg leading-8 text-slate-300">
Tim MK Technindo siap membantu Anda memahami kebutuhan proyek dan
menentukan solusi fabrikasi atau conveyor system yang paling
relevan.
</p>

<div className="mt-8 flex flex-col gap-4 sm:flex-row">
<a
href="https://wa.me/628113643846?text=Halo%20MK%20Technindo,%20saya%20ingin%20konsultasi%20terkait%20kebutuhan%20conveyor%20dan%20industrial%20equipment."
target="_blank"
rel="noreferrer"
className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-6 py-3 font-semibold text-slate-950 shadow-lg transition hover:bg-amber-400"
>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 32 32"
className="h-5 w-5 fill-current"
aria-hidden="true"
>
<path d="M19.11 17.21c-.29-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.64.15-.19.29-.74.93-.91 1.12-.17.19-.33.22-.62.07-.29-.15-1.21-.45-2.31-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.14-.14.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.15-.64-1.54-.88-2.12-.23-.56-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.29-.99.97-.99 2.37 0 1.4 1.02 2.75 1.16 2.94.15.19 2 3.06 4.84 4.28.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.11.55-.08 1.7-.69 1.94-1.35.24-.66.24-1.22.17-1.35-.07-.12-.26-.19-.55-.33Z" />
<path d="M16.03 3C8.84 3 3 8.73 3 15.81c0 2.28.61 4.42 1.67 6.28L3 29l7.15-1.86a13.1 13.1 0 0 0 5.88 1.41h.01c7.19 0 13.03-5.73 13.03-12.81C29.07 8.73 23.22 3 16.03 3Zm0 23.4h-.01a10.7 10.7 0 0 1-5.45-1.49l-.39-.23-4.24 1.1 1.13-4.11-.25-.42a10.47 10.47 0 0 1-1.62-5.44c0-5.88 4.85-10.66 10.82-10.66 5.96 0 10.81 4.78 10.81 10.66S22 26.4 16.03 26.4Z" />
</svg>
<span>Hubungi via Whatsapp</span>
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


