import Image from "next/image";

export default function SiteFooter() {
return (
<footer className="border-t border-white/5 bg-gradient-to-br from-[#020617] via-[#111827] to-[#1f1720] text-slate-300">

<div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
{/* BRAND */}
<div>
<div className="inline-flex rounded-2xl bg-white/95 px-4 py-3 shadow-md ring-1 ring-white/10">

<Image
src="/images/logos/logo_mktech.png"
alt="Logo MK Technindo"
width={180}
height={79}
className="h-auto w-[150px] md:w-[180px]"
/>
</div>

<p className="mt-5 max-w-md leading-7 text-slate-400">
MK Technindo adalah perusahaan fabrikasi industrial equipment
dengan fokus pada pembuatan conveyor system dan solusi custom
untuk kebutuhan manufaktur.
</p>
</div>

{/* CONTACT */}
<div>
<h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
Kontak
</h4>

<ul className="mt-5 space-y-3 leading-7 text-slate-400">
<li>031 866 5800</li>
<li>project@mktechnindo.co.id</li>
<li>Waru, Sidoarjo, Jawa Timur</li>
<li>Senin - Sabtu, 08:00 - 16:00</li>
</ul>
</div>

{/* NAVIGATION */}
<div>
<h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
Navigasi
</h4>

<ul className="mt-5 space-y-3 text-slate-400">
<li>
<a href="/" className="transition hover:text-white">
Home
</a>
</li>
<li>
<a href="/tentang" className="transition hover:text-white">
Tentang Kami
</a>
</li>
<li>
<a href="/layanan" className="transition hover:text-white">
Layanan
</a>
</li>
<li>
<a href="/industri" className="transition hover:text-white">
Industri
</a>
</li>
<li>
<a href="/proyek" className="transition hover:text-white">
Proyek
</a>
</li>
<li>
<a href="/kontak" className="transition hover:text-white">
Kontak
</a>
</li>
</ul>
</div>
</div>

<div className="border-t border-white/10 px-6 py-5 text-center text-sm text-slate-500">
© 2026 MK Technindo. All rights reserved.
</div>
</footer>
);
}
