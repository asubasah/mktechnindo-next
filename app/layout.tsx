// This root layout is required by Next.js but all routing is handled by
// the [locale] layout via next-intl middleware.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
