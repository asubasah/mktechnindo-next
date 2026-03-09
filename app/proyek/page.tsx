import Image from "next/image";

export default function ProyekPage() {
return (
<main className="min-h-screen bg-white text-slate-900">
{/* HERO */}
<section className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-br from-[#0f172a] via-[#1f1720] to-[#3b0d0d] text-white">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(127,29,29,0.36),transparent_28%)]" />
<div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(153,27,27,0.20),transparent_32%)]" />
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_36%)]" />
<div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">


<p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
Proyek
</p>
<h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
Contoh Kebutuhan dan Proyek yang Ditangani MK Technindo
</h1>
<p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
Setiap proyek memiliki karakter dan tantangan yang berbeda. MK
Technindo membantu klien menghadirkan solusi conveyor system dan
fabrikasi industrial equipment yang relevan dengan operasional
mereka.
</p>
</div>
</section>

{/* PROJECT LIST */}
<section className="border-b border-slate-200 bg-slate-50">
<div className="mx-auto max-w-7xl px-6 py-20">
<div className="grid gap-6 md:grid-cols-3">
{[
{
title: "Conveyor System untuk Food Processing",
desc: "Dirancang untuk membantu alur perpindahan produk dalam proses produksi dengan kebutuhan kerja yang rapi dan efisien.",
image: "/images/projects/project-1.webp",
},
{
title: "Material Handling untuk Operasional Pabrik",
desc: "Solusi conveyor dan equipment pendukung untuk memperlancar perpindahan material dalam proses kerja industri.",
image: "/images/projects/project-2_ok.webp",
},
{
title: "Custom Fabrication untuk Kebutuhan Produksi Spesifik",
desc: "Pengerjaan peralatan industri yang disesuaikan dengan kebutuhan teknis dan karakter operasional klien.",
image: "/images/projects/project-3.webp",
},
].map((project) => (
<div
key={project.title}
className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
>
<div className="relative mb-5 aspect-[16/10] overflow-hidden rounded-2xl">
<Image
src={project.image}
alt={project.title}
fill
className="object-cover transition duration-300 hover:scale-105"
/>
</div>
<h2 className="text-2xl font-semibold text-slate-900">
{project.title}
</h2>
<p className="mt-4 leading-7 text-slate-600">{project.desc}</p>
</div>
))}
</div>
</div>
</section>

{/* PROJECT APPROACH */}
<section className="border-b border-slate-200 bg-white">
<div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-start">
<div>
<p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-500">
Pendekatan Proyek
</p>
<h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
Solusi yang Disusun Berdasarkan Kebutuhan Aktual Klien
</h2>
</div>

<div className="space-y-6 text-lg leading-8 text-slate-600">
<p>
MK Technindo memahami bahwa setiap proyek industri membutuhkan
pendekatan yang spesifik. Karena itu setiap pengerjaan dimulai dari
pemahaman terhadap kebutuhan operasional, kondisi lapangan, dan
tujuan penggunaan.
</p>
<p>
Dengan pendekatan ini, solusi yang dihasilkan tidak hanya sesuai
secara teknis, tetapi juga lebih relevan dengan ritme kerja dan
kebutuhan produksi klien.
</p>
</div>
</div>
</section>

{/* CTA */}
<section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
<div className="mx-auto max-w-7xl px-6 py-20">
<div className="max-w-4xl">
<p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
Diskusikan Proyek Anda
</p>
<h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
Butuh Solusi Conveyor atau Fabrikasi untuk Operasional Industri?
</h2>
<p className="mt-6 text-lg leading-8 text-slate-300">
Tim MK Technindo siap membantu Anda mendiskusikan kebutuhan proyek
dan menentukan solusi yang paling sesuai dengan kondisi di lapangan.

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


