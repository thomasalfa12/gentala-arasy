// src/app/layout.tsx
import { Manrope, Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner"; // Ganti menjadi sonner
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BookingModal } from "@/components/modals/BookingModal"; // Pastikan path benar
import { ActionHubModal } from "@/components/modals/ActionHubModal";
import { MembershipModal } from "@/components/modals/MembershipModal";
const fontManrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

// Konfigurasi Montserrat untuk judul
const fontMontserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700", "800"], // Ambil weight yang lebih tebal
});

export const metadata = {
  // Update judul
  title: "Gentala Arasy - Template Gym & Fitness",
  description: "Template website modern untuk gym dan fitness center di Jambi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // GANTI 'light' menjadi 'dark' untuk menjadikan mode gelap sebagai default
    <html lang="en" className="!scroll-smooth">
      <body
        className={cn(
          fontManrope.variable,
          fontMontserrat.variable, // Gunakan Montserrat
          "font-sans antialiased"
        )}
      >
        <Navbar />
        <BookingModal />
        <ActionHubModal />
        <MembershipModal />
        <main>{children}</main>
        <Footer />
        <Toaster richColors theme="light" /> {/* Sesuaikan tema Toaster */}
      </body>
    </html>
  );
}
