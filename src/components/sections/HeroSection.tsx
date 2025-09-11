"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Definisikan variants di luar dengan tipe yang benar
const FADE_UP_ANIMATION_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: "spring", duration: 0.8 } },
};

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center pt-24 md:pt-0"
    >
      {/* Latar belakang gradien halus */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background to-secondary/30" />

      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Kolom Teks */}
          <div className="text-center md:text-left">
            <motion.h1
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="font-heading text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
            >
              Tempa Kekuatanmu,
              <br />
              <span className="text-primary">Raih Versi Terbaikmu</span>
            </motion.h1>

            <motion.p
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto md:mx-0"
            >
              Bergabunglah dengan komunitas kami dan mulailah perjalanan
              transformasi kebugaran Anda hari ini. Fasilitas lengkap, pelatih
              profesional.
            </motion.p>

            <motion.div
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <Button asChild size="lg" className="rounded-full font-bold">
                <Link href="/#pricing">Lihat Paket Membership</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full"
              >
                <Link href="/#">Jadwalkan Tur Gym</Link>
              </Button>
            </motion.div>
          </div>

          {/* Kolom Gambar */}
          <motion.div
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="relative w-full h-[350px] md:h-[600px]"
          >
            <Image
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop"
              alt="Suasana di dalam gym modern"
              fill
              className="object-cover rounded-3xl shadow-xl"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
