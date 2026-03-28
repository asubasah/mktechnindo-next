/**
 * GreenBg — Subtle real-photo green background for white sections.
 * Uses actual nature photographs at very low opacity to give
 * a "green industry" feel without overwhelming the content.
 * Images are lazy-loaded and small (~40-127KB webp) so impact on
 * page load is minimal.
 */
import Image from "next/image";

const greenImages = [
  "/images/green/green6.webp",
  "/images/green/green7.webp",
  "/images/green/green8.webp",
  "/images/green/green9.webp",
  "/images/green/green10.webp",
];

export default function GreenBg({ index = 0 }: { index?: number }) {
  const src = greenImages[index % greenImages.length];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-[#f0f7f4]">
      {/* The actual green photo — significantly increased opacity */}
      <Image
        src={src}
        alt=""
        fill
        className="object-cover opacity-40 mix-blend-multiply"
        sizes="100vw"
        loading="lazy"
        quality={50}
      />
      {/* Subtle white-to-transparent gradient just to allow text to be readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/60" />
      {/* Extra green vibe overlay */}
      <div className="absolute inset-0 bg-emerald-600/5 mix-blend-color-burn" />
    </div>


  );
}
