import { redirect } from "next/navigation";

// Root / redirects to the default locale (Indonesian) handled by middleware
// This file exists only as a fallback
export default function RootPage() {
  redirect("/");
}
