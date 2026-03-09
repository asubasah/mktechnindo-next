import Image from "next/image";

export default function SiteHeader() {
return (
<>
{/* TOP BAR */}
<section className="border-b border-[#5a1717] bg-gradient-to-r from-[#7f1d1d] via-[#8b1e1e] to-[#6b1f1f] text-white">
<div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-3 text-sm md:flex-row md:items-center md:justify-between">
<div className="flex flex-col gap-1 text-red-100/90 md:flex-row md:items-center md:gap-6">
<span>031 866 5800</span>
<span>project@mktechnindo.co.id</span>
<span>Pergudangan Grand Tambak Sawah No. B7, Jabon, Waru, Sidoarjo, Jawa Timur</span>
</div>


</div>
</section>

{/* MAIN HEADER */}
<header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
{/* LOGO */}
<a href="/" className="flex shrink-0 items-center">
<Image
src="/images/logos/logo_mktech.png"
alt="Logo MK Technindo"
width={180}
height={79}
className="h-auto w-[145px] md:w-[170px]"
priority
/>
</a>

{/* NAVIGATION */}
<nav className="hidden items-center gap-7 text-[15px] font-semibold text-slate-700 md:flex">
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
href="https://wa.me/628113643846?text=Halo%20MK%20Technindo,%20saya%20ingin%20konsultasi%20terkait%20kebutuhan%20conveyor%20dan%20industrial%20equipment."
target="_blank"
rel="noreferrer"
className="inline-flex w-fit items-center justify-center gap-2 rounded-full bg-amber-500 px-4 py-2 font-semibold text-slate-950 transition hover:bg-amber-400"
>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 32 32"
className="h-4 w-4 fill-current"
aria-hidden="true"
>
<path d="M19.11 17.21c-.29-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.64.15-.19.29-.74.93-.91 1.12-.17.19-.33.22-.62.07-.29-.15-1.21-.45-2.31-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.14-.14.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.15-.64-1.54-.88-2.12-.23-.56-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.29-.99.97-.99 2.37 0 1.4 1.02 2.75 1.16 2.94.15.19 2 3.06 4.84 4.28.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.11.55-.08 1.7-.69 1.94-1.35.24-.66.24-1.22.17-1.35-.07-.12-.26-.19-.55-.33Z" />
<path d="M16.03 3C8.84 3 3 8.73 3 15.81c0 2.28.61 4.42 1.67 6.28L3 29l7.15-1.86a13.1 13.1 0 0 0 5.88 1.41h.01c7.19 0 13.03-5.73 13.03-12.81C29.07 8.73 23.22 3 16.03 3Zm0 23.4h-.01a10.7 10.7 0 0 1-5.45-1.49l-.39-.23-4.24 1.1 1.13-4.11-.25-.42a10.47 10.47 0 0 1-1.62-5.44c0-5.88 4.85-10.66 10.82-10.66 5.96 0 10.81 4.78 10.81 10.66S22 26.4 16.03 26.4Z" />
</svg>
<span>Konsultasi Sekarang</span>
</a>

</div>
</header>
</>
);
}
