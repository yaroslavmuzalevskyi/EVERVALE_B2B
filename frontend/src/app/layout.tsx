import type { Metadata } from "next";
import { gilroy } from "../fonts/gilory";
import { nunitoSans } from "../fonts/nunito";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export const metadata: Metadata = {
  title: "Evervale B2B | Wholesale Cannabis Seeds",
  description:
    "Wholesale cannabis genetics for licensed distributors and seed banks. GACP certification, full traceability from seed to shipment.",
  icons: {
    icon: "/tab_logo.svg",
    shortcut: "/tab_logo.svg",
    apple: "/tab_logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.variable} ${gilroy.variable} antialiased`}>
        <Header />
        <div className="app-shell">
          <main className="px-4 sm:px-6 md:px-8 lg:px-[130px] pt-[140px] pb-[140px] lg:pt-[200px] lg:pb-[200px]">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
