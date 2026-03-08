export default function SiteHeader() {
return (
<>
<section className="border-b border-slate-200 bg-slate-950 text-white">
<div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-3 text-sm md:flex-row md:items-center md:justify-between">
<div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-6">
<span>031 866 5800</span>
<span>project@mktechnindo.co.id</span>
<span>Waru, Sidoarjo, Jawa Timur</span>
</div>
<a
href="/#contact"
className="inline-flex w-fit rounded-full bg-amber-500 px-4 py-2 font-medium text-slate-950 hover:bg-amber-400"
>
Konsultasi Sekarang
</a>
</div>
</section>

<header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
<a href="/" className="block">
<p className="text-lg font-bold tracking-wide text-slate-900">
MK Technindo
</p>
<p className="text-xs uppercase tracking-[0.3em] text-slate-500">
Industrial Fabrication
</p>
</a>

<nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
<a href="/" className="hover:text-amber-500">
Home
</a>
<a href="/tentang" className="hover:text-amber-500">
Tentang
</a>
<a href="/layanan" className="hover:text-amber-500">
Layanan
</a>
<a href="/#industries" className="hover:text-amber-500">
Industri
</a>
<a href="/proyek" className="hover:text-amber-500">
Proyek
</a>
<a href="/kontak" className="hover:text-amber-500">
Kontak
</a>
</nav>

<a
href="/#contact"
className="hidden rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-700 md:inline-flex"
>
Diskusikan Proyek
</a>
</div>
</header>
</>
);
}
