import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
{/* HERO */}
<section
id="home"
className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white"
>
<div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
<div>
<p className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-slate-200">
Solusi Fabrikasi untuk Kebutuhan Industri
</p>

<h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
Spesialis Fabrikasi Conveyor dan Industrial Equipment untuk
Kebutuhan Manufaktur
</h1>

<p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
MK Technindo membantu perusahaan manufaktur merancang dan
memproduksi conveyor system serta peralatan industri yang
fungsional, presisi, dan disesuaikan dengan kebutuhan operasional
di lapangan.
</p>

<div className="mt-8 flex flex-col gap-4 sm:flex-row">
<a
href="#contact"
className="inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-3 font-semibold text-slate-950 hover:bg-amber-400"
>
Konsultasi Proyek
</a>
<a
href="#services"
className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 font-semibold text-white hover:bg-white/10"
>
Lihat Layanan
</a>
</div>

<div className="mt-10 grid gap-4 text-sm text-slate-300 sm:grid-cols-3">
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
Custom sesuai kebutuhan industri
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
Berpengalaman di berbagai sektor manufaktur
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
Berbasis di Sidoarjo, melayani Indonesia
</div>
</div>
</div>

<div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl">
<div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
<Image
src="/images/hero/conveyor-main.webp"
alt="Conveyor system dan proses fabrikasi MK Technindo"
fill
className="object-cover transition duration-300 hover:scale-105"

priority
/>
</div>
</div>
</div>
</div>
</section>

{/* CLIENT TRUST */}
<section className="border-b border-slate-200 bg-white">
<div className="mx-auto max-w-7xl px-6 py-12">
<p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
Dipercaya oleh perusahaan dari berbagai sektor industri
</p>

<div className="mt-8 grid gap-4 md:grid-cols-5">
{[
"Yazaki Group",
"Sreeya",
"Indococonut",
"Charoen Pokphand",
"Ecco",
].map((client) => (
<div
key={client}
className="flex items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 px-4 py-5 text-center font-semibold text-slate-700"
>
{client}
</div>
))}
</div>

<p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-7 text-slate-600">
MK Technindo telah mendukung kebutuhan fabrikasi dan conveyor system
untuk perusahaan di sektor food processing, pet food, logistics,
automotive component, footwear, dan manufaktur lainnya.
</p>
</div>
</section>

{/* ABOUT */}
<section id="about" className="border-b border-slate-200 bg-slate-50">
<div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
<div>
<p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-500">
Tentang MK Technindo
</p>
<h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
Partner Fabrikasi yang Memahami Kebutuhan Industri
</h2>
<p className="mt-6 text-lg leading-8 text-slate-600">
MK Technindo bergerak di bidang fabrikasi industrial equipment
dengan fokus utama pada pembuatan conveyor system dan solusi
pendukung operasional pabrik. Kami membantu perusahaan yang
membutuhkan sistem kerja yang lebih efisien, rapi, dan sesuai
kebutuhan proses produksi.
</p>
</div>

<div className="grid gap-4">
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<h3 className="text-lg font-semibold text-slate-900">
Fokus pada kebutuhan aktual di lapangan
</h3>
<p className="mt-3 leading-7 text-slate-600">
Solusi yang dikerjakan disesuaikan dengan kebutuhan operasional,
alur kerja, dan tantangan nyata di area produksi.
</p>
</div>

<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<h3 className="text-lg font-semibold text-slate-900">
Custom fabrication sesuai spesifikasi
</h3>
<p className="mt-3 leading-7 text-slate-600">
Setiap proyek dirancang dengan pendekatan yang fleksibel agar
hasil akhir benar-benar relevan dengan kebutuhan klien.
</p>
</div>

<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<h3 className="text-lg font-semibold text-slate-900">
Mendukung berbagai sektor industri
</h3>
<p className="mt-3 leading-7 text-slate-600">
Berpengalaman menangani kebutuhan conveyor system dan industrial
equipment untuk berbagai jenis operasional manufaktur.
</p>
</div>
</div>
</div>
</section>

{/* SERVICES */}
<section id="services" className="border-b border-slate-200 bg-white">
<div className="mx-auto max-w-7xl px-6 py-20">
<div className="max-w-3xl">
<p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-500">
Layanan Utama
</p>
<h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
Solusi Fabrikasi dan Conveyor System untuk Kebutuhan Industri
</h2>
<p className="mt-6 text-lg leading-8 text-slate-600">
MK Technindo menghadirkan layanan yang dirancang untuk mendukung
proses kerja industri secara lebih efisien, terstruktur, dan
sesuai kebutuhan operasional.
</p>
</div>

<div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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
<h3 className="text-xl font-semibold text-slate-900">
{service.title}
</h3>
<p className="mt-4 leading-7 text-slate-600">{service.desc}</p>
</div>
))}
</div>
</div>
</section>

{/* INDUSTRIES */}
<section
id="industries"
className="border-b border-slate-200 bg-slate-950 text-white"
>
<div className="mx-auto max-w-7xl px-6 py-20">
<div className="max-w-3xl">
<p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
Industri yang Dilayani
</p>
<h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
Mendukung Berbagai Sektor Industri dan Manufaktur
</h2>
<p className="mt-6 text-lg leading-8 text-slate-300">
MK Technindo menangani kebutuhan conveyor system dan fabrikasi
peralatan industri untuk berbagai jenis operasional manufaktur,
distribusi, dan material handling.
</p>
</div>

<div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
{[
"Food Processing",
"Frozen Food",
"Pet Food",
"Logistics & Warehousing",
"Footwear Manufacturing",
"Automotive Component",
"Consumer Goods Manufacturing",
"Custom Industrial Operation",
].map((industry) => (
<div
key={industry}
className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center font-medium text-slate-100"
>
{industry}
</div>
))}
</div>
</div>
</section>
{/* WHY CHOOSE US */}
<section className="border-b border-slate-200 bg-white">
<div className="mx-auto max-w-7xl px-6 py-20">
<div className="max-w-3xl">
<p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-500">
Kenapa Memilih MK Technindo
</p>
<h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
Pendekatan yang Lebih Tepat untuk Kebutuhan Operasional Industri
</h2>
<p className="mt-6 text-lg leading-8 text-slate-600">
Kami memahami bahwa kebutuhan industri tidak bisa diselesaikan
dengan solusi generik. Karena itu setiap proyek dikerjakan dengan
fokus pada fungsi, efisiensi, dan kebutuhan nyata di lapangan.
</p>
</div>

<div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
{[
{
title: "Custom sesuai kebutuhan operasional",
desc: "Setiap proyek dirancang berdasarkan kebutuhan aktual di lapangan, bukan sekadar solusi template.",
},
{
title: "Fokus pada fungsi dan efisiensi",
desc: "Equipment industri harus bekerja stabil, relevan, dan mendukung proses produksi secara nyata.",
},
{
title: "Pendekatan teknis yang komunikatif",
desc: "Diskusi kebutuhan dilakukan dengan jelas agar solusi yang dikerjakan benar-benar sesuai target.",
},
{
title: "Berpengalaman di berbagai sektor industri",
desc: "Kami telah menangani kebutuhan dari berbagai perusahaan manufaktur dengan karakter operasional yang berbeda.",
},
{
title: "Dukungan dari awal hingga implementasi",
desc: "Mulai dari konsultasi, fabrikasi, hingga dukungan pemasangan dan penyesuaian di lapangan.",
},
{
title: "Lebih siap untuk kebutuhan custom",
desc: "Kami terbiasa menangani requirement yang spesifik sesuai ruang kerja, alur produksi, dan tujuan proyek.",
},
].map((item) => (
<div
key={item.title}
className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
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

{/* PROJECTS */}
<section
id="projects"
className="border-b border-slate-200 bg-slate-50"
>
<div className="mx-auto max-w-7xl px-6 py-20">
<div className="max-w-3xl">
<p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-500">
Contoh Kebutuhan yang Kami Tangani
</p>
<h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
Solusi yang Disesuaikan dengan Tantangan Operasional Klien
</h2>
</div>

<div className="mt-12 grid gap-6 md:grid-cols-3">
{[
{
title: "Conveyor System untuk Food Processing",
desc: "Dirancang untuk membantu alur perpindahan produk dalam proses produksi dengan kebutuhan kerja yang rapi dan efisien.",
image: "/images/projects/project-1.webp",
},
{
title: "Material Handling untuk Operasional Pabrik",
desc: "Solusi conveyor dan equipment pendukung untuk memperlancar perpindahan material dalam proses kerja industri.",
image: "/images/projects/project-2.webp",
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
<h3 className="text-xl font-semibold text-slate-900">
{project.title}
</h3>
<p className="mt-4 leading-7 text-slate-600">{project.desc}</p>
</div>
))}
</div>
</div>
</section>

{/* PROCESS */}
<section className="border-b border-slate-200 bg-white">
<div className="mx-auto max-w-7xl px-6 py-20">
<div className="max-w-3xl">
<p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-500">
Alur Kerja Kami
</p>
<h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
Proses yang Terstruktur untuk Hasil yang Lebih Tepat
</h2>
<p className="mt-6 text-lg leading-8 text-slate-600">
MK Technindo menjalankan proses kerja yang terarah agar kebutuhan
klien dapat diterjemahkan menjadi solusi fabrikasi yang tepat,
fungsional, dan siap digunakan.
</p>
</div>

<div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
{[
{
step: "01",
title: "Konsultasi Kebutuhan",
desc: "Diskusi awal mengenai kebutuhan operasional, tantangan, dan target proyek.",
},
{
step: "02",
title: "Survey & Technical Review",
desc: "Analisis kondisi lapangan dan requirement teknis untuk menentukan pendekatan yang tepat.",
},
{
step: "03",
title: "Desain & Fabrikasi",
desc: "Pengembangan solusi dan proses pengerjaan sesuai spesifikasi proyek.",
},
{
step: "04",
title: "Instalasi / Implementasi",
desc: "Dukungan pemasangan dan penyesuaian agar sistem siap digunakan.",
},
{
step: "05",
title: "Evaluasi & Support",
desc: "Pendampingan lanjutan untuk memastikan fungsi berjalan sesuai kebutuhan.",
},
].map((item) => (
<div
key={item.step}
className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
>
<p className="text-sm font-bold tracking-[0.3em] text-amber-500">
{item.step}
</p>
<h3 className="mt-4 text-lg font-semibold text-slate-900">
{item.title}
</h3>
<p className="mt-4 leading-7 text-slate-600">{item.desc}</p>
</div>
))}
</div>
</div>
</section>

{/* FAQ */}
<section className="border-b border-slate-200 bg-slate-50">
<div className="mx-auto max-w-5xl px-6 py-20">
<div className="text-center">
<p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-500">
FAQ
</p>
<h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
Pertanyaan yang Sering Ditanyakan
</h2>
<p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
Beberapa pertanyaan umum seputar layanan fabrikasi dan conveyor
system di MK Technindo.
</p>
</div>

<div className="mt-12 space-y-4">
{[
{
q: "Apakah MK Technindo bisa membuat conveyor sesuai kebutuhan custom?",
a: "Ya. Kami menangani kebutuhan custom berdasarkan spesifikasi, ruang kerja, dan tujuan operasional masing-masing klien.",
},
{
q: "Industri apa saja yang biasa dilayani?",
a: "Kami melayani berbagai sektor seperti food processing, pet food, logistics, footwear manufacturing, automotive component, dan kebutuhan industri lainnya.",
},
{
q: "Apakah bisa konsultasi sebelum proyek dimulai?",
a: "Bisa. Kami membuka diskusi awal untuk memahami kebutuhan dan membantu menentukan solusi yang paling sesuai.",
},
{
q: "Apakah melayani instalasi juga?",
a: "Tergantung kebutuhan proyek. MK Technindo dapat mendukung proses implementasi dan penyesuaian di lapangan.",
},
{
q: "Apakah bisa melayani proyek di luar Jawa Timur?",
a: "Bisa didiskusikan sesuai ruang lingkup proyek dan kebutuhan pekerjaan.",
},
].map((faq) => (
<div
key={faq.q}
className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
>
<h3 className="text-lg font-semibold text-slate-900">
{faq.q}
</h3>
<p className="mt-3 leading-7 text-slate-600">{faq.a}</p>
</div>
))}
</div>
</div>
</section>

{/* CTA */}
<section
id="contact"
className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white"
>
<div className="mx-auto max-w-7xl px-6 py-20">
<div className="max-w-4xl">
<p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
Konsultasi Proyek
</p>
<h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
Diskusikan Kebutuhan Conveyor dan Industrial Equipment Anda
Bersama MK Technindo
</h2>
<p className="mt-6 text-lg leading-8 text-slate-300">
Butuh solusi fabrikasi yang lebih sesuai dengan proses kerja
industri Anda? Tim MK Technindo siap membantu dari tahap
konsultasi hingga implementasi.
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





