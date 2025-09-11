"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Briefcase, Home, Sparkles, User, Diamond } from "lucide-react";
import { cn } from "@/lib/utils";
import { useActionHubStore } from "@/hooks/useActionHubStore";

// Tautan untuk navigasi utama di bottom dock
const navLinks = [
  { name: "Home", href: "/#", icon: Home },
  { name: "Kelas", href: "/#layanan", icon: Briefcase },
  { name: "Harga", href: "/#pricing", icon: Diamond },
  { name: "Pelatih", href: "/#tim", icon: User },
];

// Tautan untuk navigasi desktop
const desktopNavLinks = [
  { name: "Home", href: "/#" },
  { name: "Kelas", href: "/#layanan" },
  { name: "Harga", href: "/#pricing" },
  { name: "Pelatih", href: "/#tim" },
];

export function Navbar() {
  const { onOpen: openActionHub } = useActionHubStore();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* === TAMPILAN MOBILE === */}
      <AnimatePresence>
        {isScrolled && (
          <>
            {/* Tombol Aksi Mengambang (FAB) untuk "Layanan" */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.1,
              }}
              className="md:hidden fixed bottom-24 right-4 z-50"
            >
              <Button
                onClick={openActionHub}
                className="rounded-full w-16 h-16 shadow-lg bg-primary hover:bg-primary/90"
              >
                <Sparkles className="w-7 h-7 text-primary-foreground" />
              </Button>
            </motion.div>

            {/* Navigasi Bawah (Bottom Dock) */}
            <motion.nav
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-sm 
                         bg-card shadow-lg z-50 overflow-hidden border rounded-full"
            >
              <div className="flex justify-around items-center h-16">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="flex flex-col items-center justify-center text-xs w-16 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <link.icon className="w-5 h-5 mb-1" />
                    <span>{link.name}</span>
                  </Link>
                ))}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>

      {/* === TAMPILAN DESKTOP === */}
      <nav className="hidden md:flex justify-center w-full fixed top-4 z-50 animate-fade-in-down">
        <div className="flex items-center justify-between gap-8 bg-card rounded-full shadow-lg px-6 py-3 border">
          <Link
            href="/"
            className={cn(
              "text-xl font-heading font-bold text-foreground hover:text-primary transition-colors"
            )}
          >
            Gentala Arasy
          </Link>
          <div className="flex items-center space-x-8">
            {desktopNavLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Button
            onClick={openActionHub}
            size="sm"
            className="rounded-full font-semibold"
          >
            Layanan
          </Button>
        </div>
      </nav>
    </>
  );
}
