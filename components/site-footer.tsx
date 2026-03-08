export default function SiteFooter() {
return (
<footer className="bg-slate-950 text-slate-300">
<div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
<div>
<h3 className="text-xl font-bold text-white">MK Technindo</h3>
<p className="mt-4 leading-7 text-slate-400">
MK Technindo adalah perusahaan fabrikasi industrial equipment
dengan fokus pada pembuatan conveyor system dan solusi custom
untuk kebutuhan manufaktur.
</p>
</div>

<div>
<h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
Kontak
</h4>
<ul className="mt-4 space-y-3 leading-7 text-slate-400">
<li>031 866 5800</li>
<li>project@mktechnindo.co.id</li>
<li>Waru, Sidoarjo, Jawa Timur</li>
<li>Senin - Sabtu, 08:00 - 16:00</li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
Navigasi
</h4>
<ul className="mt-4 space-y-3 text-slate-400">
<li>
<a href="/" className="hover:text-white">
Home
</a>
</li>
<li>
<a href="/tentang" className="hover:text-white">
Tentang Kami
</a>
</li>
<li>
<a href="/layanan" className="hover:text-white">
Layanan
</a>
</li>
<li>
<a href="/#industries" className="hover:text-white">
Industri
</a>
</li>
<li>
<a href="/proyek" className="hover:text-white">
Proyek
</a>
</li>
<li>
<a href="/kontak" className="hover:text-white">
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
