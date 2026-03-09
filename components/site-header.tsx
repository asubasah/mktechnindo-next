import Image from "next/image";

export default function SiteHeader() {
return (
<>
{/* TOP BAR */}
<section className="border-b border-slate-800 bg-slate-950 text-white">
<div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-3 text-sm md:flex-row md:items-center md:justify-between">
<div className="flex flex-col gap-1 text-slate-300 md:flex-row md:items-center md:gap-6">
<span>031 866 5800</span>
<span>project@mktechnindo.co.id</span>
<span>Waru, Sidoarjo, Jawa Timur</span>
</div>

<a
href="/kontak"
className="inline-flex w-fit items-center justify-center rounded-full bg-amber-500 px-4 py-2 font-semibold text-slate-950 transition hover:bg-amber-400"
>
Konsultasi Sekarang
</a>
</div>
</section>

{/* MAIN HEADER */}
<header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
{/* LOGO */}
<a href="/" className="flex items-center">
<Image
src="/images/logos/logo_mktech.png"
alt="Logo MK Technindo"
width={180}
height={79}
className="h-auto w-[150px] md:w-[180px]"
priority
/>
</a>

{/* NAVIGATION */}
<nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
<a href="/" className="transition hover:text-amber-500">
Home
</a>
<a href="/tentang" className="transition hover:text-amber-500">
Tentang
</a>
<a href="/layanan" className="transition hover:text-amber-500">
Layanan
</a>
<a href="/industri" className="transition hover:text-amber-500">
Industri
</a>
<a href="/proyek" className="transition hover:text-amber-500">
Proyek
</a>
<a href="/kontak" className="transition hover:text-amber-500">
Kontak
</a>
</nav>

{/* HEADER CTA */}
<a
href="/kontak"
className="hidden items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 md:inline-flex"
>
Diskusikan Proyek
</a>
</div>
</header>
</>
);
}
