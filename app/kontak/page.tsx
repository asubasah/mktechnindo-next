export default function KontakPage() {
return (
<main className="min-h-screen bg-white text-slate-900">
{/* HERO */}
<section className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-br from-[#0f172a] via-[#1f1720] to-[#3b0d0d] text-white">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(127,29,29,0.36),transparent_28%)]" />
<div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(153,27,27,0.20),transparent_32%)]" />
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_36%)]" />

<div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">

<p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
Kontak
</p>
<h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
Hubungi MK Technindo untuk Diskusi Kebutuhan Conveyor dan Industrial
Equipment
</h1>
<p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
Tim MK Technindo siap membantu Anda memahami kebutuhan proyek dan
mendiskusikan solusi fabrikasi yang sesuai dengan operasional
industri Anda.
</p>
</div>
</section>

{/* CONTACT INFO */}
<section className="border-b border-slate-200 bg-white">
<div className="mx-auto grid max-w-7xl gap-6 px-6 py-20 md:grid-cols-2 xl:grid-cols-4">
<div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
<h2 className="text-xl font-semibold text-slate-900">Telepon</h2>
<p className="mt-4 leading-7 text-slate-600">031 866 5800</p>
</div>

<div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
<h2 className="text-xl font-semibold text-slate-900">Email</h2>
<p className="mt-4 leading-7 text-slate-600">
project@mktechnindo.co.id
</p>
</div>

<div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
<h2 className="text-xl font-semibold text-slate-900">Lokasi</h2>
<p className="mt-4 leading-7 text-slate-600">
Waru, Sidoarjo, Jawa Timur
</p>
</div>

<div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
<h2 className="text-xl font-semibold text-slate-900">
Jam Operasional
</h2>
<p className="mt-4 leading-7 text-slate-600">
Senin - Sabtu, 08:00 - 16:00
</p>
</div>
</div>
</section>

{/* CONTACT CTA */}
<section className="border-b border-slate-200 bg-slate-50">
<div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-start">
<div>
<p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-500">
Diskusi Proyek
</p>
<h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
Pilih Cara Kontak yang Paling Nyaman untuk Anda
</h2>
<p className="mt-6 text-lg leading-8 text-slate-600">
Anda dapat menghubungi MK Technindo melalui WhatsApp atau email
untuk mendiskusikan kebutuhan conveyor system, industrial
equipment, maupun pekerjaan fabrikasi lainnya.
</p>
</div>

<div className="grid gap-6">
<a
href="https://wa.me/628113643846"
target="_blank"
rel="noreferrer"
className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
>
<h3 className="text-xl font-semibold text-slate-900">
Hubungi via WhatsApp
</h3>
<p className="mt-4 leading-7 text-slate-600">
Cocok untuk konsultasi cepat, tanya kebutuhan proyek, atau
diskusi awal.
</p>
</a>

<a
href="mailto:project@mktechnindo.co.id"
className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
>
<h3 className="text-xl font-semibold text-slate-900">
Kirim Pertanyaan via Email
</h3>
<p className="mt-4 leading-7 text-slate-600">
Cocok untuk kebutuhan penjelasan proyek yang lebih formal atau
detail.
</p>
</a>
</div>
</div>
</section>

{/* FINAL CTA */}
<section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
<div className="mx-auto max-w-7xl px-6 py-20">
<div className="max-w-4xl">
<p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
MK Technindo
</p>
<h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
Siap Mendukung Kebutuhan Fabrikasi dan Conveyor System untuk
Operasional Industri Anda
</h2>
<p className="mt-6 text-lg leading-8 text-slate-300">
Jika Anda membutuhkan solusi yang lebih sesuai dengan kebutuhan di
lapangan, tim MK Technindo siap membantu dari tahap diskusi hingga
implementasi.
</p>
</div>
</div>
</section>
</main>
);
}

