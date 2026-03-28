import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "../../i18n";
import SiteHeader from "../../components/site-header";
import SiteFooter from "../../components/site-footer";
import ChatWidget from "../../components/chat-widget";
import "../globals.css";

export const metadata: Metadata = {
  title: "MK Technindo — Conveyor System & Industrial Equipment Fabrication",
  description:
    "MK Technindo specialises in custom conveyor system fabrication and industrial equipment manufacturing for diverse manufacturing sectors across Indonesia.",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          <SiteHeader locale={locale} />
          {children}
          <SiteFooter locale={locale} />
          <ChatWidget locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
