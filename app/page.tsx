import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
{/* HERO */}
<section
id="home"
className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1f1720] to-[#3b0d0d] text-white"
>
{/* stronger dark red corporate glow */}
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(127,29,29,0.42),transparent_28%)]" />
<div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(153,27,27,0.26),transparent_32%)]" />
<div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,23,42,0.88)_0%,rgba(31,23,32,0.78)_45%,rgba(59,13,13,0.72)_100%)]" />

{/* subtle light balance */}
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_36%)]" />

<div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
<div>
<p className="mb-4 inline-block rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-slate-200 shadow-sm backdrop-blur-sm">
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
<span>Konsultasi Proyek</span>
</a>


<a
href="/layanan"
className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
>
Lihat Layanan
</a>
</div>

<div className="mt-10 grid gap-4 text-sm text-slate-300 sm:grid-cols-3">
<div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
Custom sesuai kebutuhan industri
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
Berpengalaman di berbagai sektor manufaktur
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
Berbasis di Sidoarjo, melayani Indonesia
</div>
</div>
</div>

<div>
<div className="group rounded-[28px] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-sm transition duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(0,0,0,0.35)]">

<div className="group relative aspect-[4/3] overflow-hidden rounded-[20px]">
<Image
src="/images/hero/conveyor-main.webp"
alt="Conveyor system dan proses fabrikasi MK Technindo"
fill
className="object-cover transition duration-700 ease-out group-hover:scale-110 group-hover:rotate-[0.2deg]"
priority
/>

<div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
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
{
name: "Yazaki Group",
image: "/images/logos/clients/sai.png",
},
{
name: "Sreeya",
image: "/images/logos/clients/sreeya.png",
},
{
name: "Indococonut",
image: "/images/logos/clients/indococonut.png",
},
{
name: "Charoen Pokphand",
image: "/images/logos/clients/cpp.png",
},
{
name: "Ecco",
image: "/images/logos/clients/ecco.png",
},
].map((client) => (
<div
key={client.name}
className="flex items-center justify-center rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"

>
<div className="relative h-14 w-full">
<Image
src={client.image}
alt={client.name}
fill
className="object-contain"
/>
</div>
</div>
))}
</div>


<p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-7 text-slate-500">
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
className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"

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
className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"

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
className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"

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





