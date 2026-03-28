import type { Metadata } from "next";
import "../globals.css";

// Dashboard has its own layout — no site header/footer, no locale routing
export const metadata: Metadata = {
  title: "Dashboard — MK Technindo",
  robots: "noindex, nofollow",
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="antialiased">{children}</body>
    </html>
  );
}
