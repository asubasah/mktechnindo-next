export default function IndustriPage() {
return (
<main className="min-h-screen bg-white text-slate-900">
{/* HERO */}
<section className="border-b border-slate-200 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
<div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
<p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
Industri
</p>
<h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
Sektor Industri yang Dilayani MK Technindo
</h1>
<p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
MK Technindo melayani kebutuhan conveyor system dan industrial
equipment untuk berbagai sektor manufaktur dan operasional industri
yang membutuhkan solusi custom dan relevan dengan kebutuhan lapangan.
</p>
</div>
</section>

{/* INDUSTRIES LIST */}
<section className="border-b border-slate-200 bg-white">
<div className="mx-auto max-w-7xl px-6 py-20">
<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
{[
{
title: "Food Processing",
desc: "Solusi conveyor dan fabrikasi untuk mendukung proses pengolahan makanan secara lebih efisien dan terstruktur.",
},
{
title: "Frozen Food",
desc: "Mendukung kebutuhan perpindahan produk dan operasional produksi yang membutuhkan alur kerja yang rapi.",
},
{
title: "Pet Food",
desc: "Melayani kebutuhan sistem conveyor dan equipment pendukung untuk operasional industri pakan hewan.",
},
{
title: "Logistics & Warehousing",
desc: "Solusi material handling dan perpindahan barang untuk mendukung kegiatan logistik dan pergudangan.",
},
{
title: "Footwear Manufacturing",
desc: "Mendukung proses produksi industri alas kaki dengan solusi yang disesuaikan dengan kebutuhan operasional.",
},
{
title: "Automotive Component",
desc: "Solusi untuk kebutuhan handling, support equipment, dan pekerjaan fabrikasi di sektor komponen otomotif.",
},
{
title: "Consumer Goods Manufacturing",
desc: "Melayani kebutuhan operasional industri barang konsumsi dengan pendekatan yang relevan dan fleksibel.",
},
{
title: "Custom Industrial Operation",
desc: "Untuk kebutuhan industri spesifik lainnya, MK Technindo siap menyesuaikan solusi sesuai requirement proyek.",
},
].map((industry) => (
<div
key={industry.title}
className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
>
<h2 className="text-2xl font-semibold text-slate-900">
{industry.title}
</h2>
<p className="mt-4 leading-7 text-slate-600">
{industry.desc}
</p>
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
Pendekatan Industri
</p>
<h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
Solusi Tidak Dibuat Seragam untuk Semua Industri
</h2>
</div>

<div className="space-y-6 text-lg leading-8 text-slate-600">
<p>
Setiap sektor industri memiliki kebutuhan yang berbeda, baik dari
sisi alur operasional, kapasitas produksi, lingkungan kerja,
maupun target penggunaan equipment.
</p>
<p>
MK Technindo memahami perbedaan ini dan berusaha menghadirkan
solusi yang lebih sesuai dengan karakter masing-masing industri,
bukan sekadar pendekatan umum yang dipaksakan sama rata.
</p>
</div>
</div>
</section>

{/* CTA */}
<section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
<div className="mx-auto max-w-7xl px-6 py-20">
<div className="max-w-4xl">
<p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
Diskusi Kebutuhan Industri
</p>
<h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
Diskusikan Kebutuhan Conveyor dan Industrial Equipment Sesuai
Industri Anda
</h2>
<p className="mt-6 text-lg leading-8 text-slate-300">
Tim MK Technindo siap membantu Anda memahami kebutuhan proyek dan
menentukan solusi yang sesuai dengan ritme operasional di lapangan.
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

