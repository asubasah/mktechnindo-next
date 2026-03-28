/**
 * GreenOverlay — Subtle tree silhouettes for Green Industry branding.
 * Placed inside dark gradient sections. Opacity is kept very low
 * (0.04–0.07) so it blends behind content without distraction.
 */
export default function GreenOverlay({ variant = "full" }: { variant?: "full" | "left" | "right" | "bottom" }) {
  // Multiple tree silhouette paths for organic, natural look
  const treeSVG = `
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320' preserveAspectRatio='none'>
      <!-- Tree cluster left -->
      <g fill='%2322c55e' opacity='0.55'>
        <!-- Pine 1 -->
        <polygon points='80,320 110,180 120,200 145,120 155,150 170,80 185,150 195,120 220,200 230,180 260,320'/>
        <!-- Pine 2 -->
        <polygon points='180,320 200,220 210,240 225,170 235,190 245,130 255,190 265,170 280,240 290,220 310,320'/>
        <!-- Pine 3 small -->
        <polygon points='30,320 45,240 55,255 65,200 75,215 80,180 85,215 95,200 105,255 115,240 130,320'/>
        <!-- Deciduous 1 -->
        <ellipse cx='340' cy='230' rx='45' ry='55'/>
        <rect x='335' y='260' width='10' height='60' rx='3'/>
        <!-- Pine 4 far -->
        <polygon points='400,320 415,250 425,265 435,210 445,230 452,185 459,230 469,210 479,265 489,250 504,320'/>
      </g>
      <!-- Tree cluster right -->
      <g fill='%2322c55e' opacity='0.45'>
        <!-- Pine right 1 -->
        <polygon points='1100,320 1125,200 1135,220 1155,140 1165,165 1175,95 1185,165 1195,140 1215,220 1225,200 1250,320'/>
        <!-- Pine right 2 -->
        <polygon points='1220,320 1240,230 1250,250 1265,180 1275,200 1282,150 1289,200 1299,180 1314,250 1324,230 1344,320'/>
        <!-- Deciduous right -->
        <ellipse cx='1050' cy='230' rx='50' ry='60'/>
        <rect x='1045' y='265' width='10' height='55' rx='3'/>
        <!-- Small bush -->
        <ellipse cx='1380' cy='290' rx='35' ry='25'/>
        <ellipse cx='1400' cy='285' rx='30' ry='20'/>
      </g>
      <!-- Center sparse trees -->
      <g fill='%2322c55e' opacity='0.3'>
        <polygon points='650,320 670,250 680,265 695,200 703,220 710,175 717,220 725,200 740,265 750,250 770,320'/>
        <ellipse cx='850' cy='260' rx='35' ry='45'/>
        <rect x='846' y='285' width='8' height='35' rx='2'/>
      </g>
    </svg>
  `;

  const encodedSVG = treeSVG.replace(/\n/g, '').replace(/\s+/g, ' ').trim();

  if (variant === "bottom") {
    return (
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[220px] opacity-[0.12]"
        style={{
          backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(encodedSVG)}")`,
          backgroundPosition: "bottom center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />
    );
  }

  if (variant === "left") {
    return (
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-[250px] w-1/2 opacity-[0.15]"
        style={{
          backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(encodedSVG)}")`,
          backgroundPosition: "bottom left",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      />
    );
  }

  if (variant === "right") {
    return (
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-[250px] w-1/2 opacity-[0.15]"
        style={{
          backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(encodedSVG)}")`,
          backgroundPosition: "bottom right",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      />
    );
  }

  // Full width bottom overlay (default)
  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[280px] opacity-[0.14]"
      style={{
        backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(encodedSVG)}")`,
        backgroundPosition: "bottom center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    />
  );
}
