export default function TentangPage() {
return (
<main className="min-h-screen bg-white text-slate-900">
{/* HERO */}
<section className="border-b border-slate-200 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
<div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
<p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
Tentang Kami
</p>
<h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
MK Technindo, Partner Fabrikasi untuk Kebutuhan Conveyor dan
Industrial Equipment
</h1>
<p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
MK Technindo bergerak di bidang fabrikasi industrial equipment dengan
fokus pada pembuatan conveyor system dan solusi custom untuk
mendukung kebutuhan operasional manufaktur.
</p>
</div>
</section>

{/* COMPANY PROFILE */}
<section className="border-b border-slate-200 bg-white">
<div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-start">
<div>
<p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-500">
Profil Perusahaan
</p>
<h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
Fokus pada Solusi yang Relevan dengan Kebutuhan Industri
</h2>
</div>

<div className="space-y-6 text-lg leading-8 text-slate-600">
<p>
MK Technindo hadir untuk membantu perusahaan manufaktur dan sektor
industri yang membutuhkan conveyor system serta peralatan industri
yang dirancang sesuai kebutuhan aktual di lapangan.
</p>
<p>
Kami memahami bahwa setiap proses produksi memiliki karakter,
kapasitas, dan tantangan yang berbeda. Karena itu, pendekatan yang
kami lakukan berfokus pada fungsi, efisiensi, dan kecocokan solusi
terhadap operasional klien.
</p>
<p>
Dengan pengalaman menangani berbagai kebutuhan fabrikasi dan
conveyor system, MK Technindo berkomitmen menghadirkan hasil kerja
yang lebih terarah dan relevan untuk kebutuhan industri modern.
</p>
</div>
</div>
</section>
{/* STRENGTHS */}
<section className="border-b border-slate-200 bg-slate-50">
<div className="mx-auto max-w-7xl px-6 py-20">
<div className="max-w-3xl">
<p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-500">
Keunggulan Kami
</p>
<h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
Pendekatan yang Lebih Tepat untuk Kebutuhan Fabrikasi Industri
</h2>
<p className="mt-6 text-lg leading-8 text-slate-600">
MK Technindo tidak hanya berfokus pada pengerjaan, tetapi juga
memastikan solusi yang dibuat benar-benar relevan dengan kebutuhan
operasional klien.
</p>
</div>

<div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
{[
{
title: "Custom sesuai kebutuhan",
desc: "Setiap proyek dikerjakan berdasarkan requirement aktual, bukan pendekatan template.",
},
{
title: "Fokus pada fungsi",
desc: "Solusi yang dibuat diarahkan untuk mendukung efisiensi dan kelancaran operasional.",
},
{
title: "Komunikasi teknis yang jelas",
desc: "Diskusi proyek dijaga tetap terarah agar hasil akhir sesuai ekspektasi.",
},
{
title: "Siap untuk berbagai sektor industri",
desc: "Berpengalaman menangani kebutuhan dari beberapa jenis industri dan manufaktur.",
},
].map((item) => (
<div
key={item.title}
className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
>
<h3 className="text-xl font-semibold text-slate-900">
{item.title}
</h3>
<p className="mt-4 leading-7 text-slate-600">{item.desc}</p>
</div>
))}
</div>
</div>
</section>

{/* CTA */}
<section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
<div className="mx-auto max-w-7xl px-6 py-20">
<div className="max-w-4xl">
<p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
Konsultasi Proyek
</p>
<h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
Diskusikan Kebutuhan Conveyor dan Industrial Equipment Anda
</h2>
<p className="mt-6 text-lg leading-8 text-slate-300">
Tim MK Technindo siap membantu Anda dari tahap konsultasi,
penyesuaian kebutuhan, hingga implementasi solusi fabrikasi yang
sesuai.
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
