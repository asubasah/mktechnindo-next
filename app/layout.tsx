import type { Metadata } from "next";
import SiteHeader from "../components/site-header";
import SiteFooter from "../components/site-footer";
import "./globals.css";

export const metadata: Metadata = {
title: "MK Technindo",
description: "MK Technindo website",
};

export default function RootLayout({
children,
}: Readonly<{
children: React.ReactNode;
}>) {
return (
<html lang="id">
<body>
<SiteHeader />
{children}
<SiteFooter />
</body>
</html>
);
}
