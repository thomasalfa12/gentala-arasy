"use client";

import { motion, type Variants } from "framer-motion";
import { classesData } from "@/data/classes";
import { Button } from "@/components/ui/button";
import { ProgramCard } from "@/components/cards/ProgramCard";
import { Carousel } from "@/components/ui/carousel"; // <-- Impor Carousel
import Link from "next/link";

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export function ServicesSection({
  onViewAllClick,
}: {
  onViewAllClick: () => void;
}) {
  const featuredClasses = classesData.filter((c) => c.featured).slice(0, 3);

  return (
    <section id="layanan" className="py-24 bg-background overflow-hidden">
      {" "}
      {/* Tambah overflow-hidden */}
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 0.8 }}
          viewport={{ once: true }}
          className="md:text-left text-center max-w-2xl md:mx-0 mx-auto mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Program & Kelas Unggulan
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            Dirancang oleh para ahli untuk membantu Anda mencapai setiap target
            kebugaran, apa pun level Anda.
          </p>
        </motion.div>

        {/* Tampilan Desktop (Grid) */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredClasses.map((service) => (
            <ProgramCard key={service.title} {...service} />
          ))}
        </motion.div>

        {/* Tampilan Mobile (Carousel) */}
        <div className="md:hidden">
          <Carousel className="gap-6">
            {featuredClasses.map((service, index) => (
              <div key={index} className="flex-none w-[85%] snap-center">
                <ProgramCard {...service} />
              </div>
            ))}
          </Carousel>
        </div>

        <div className="text-center mt-16">
          <Button
            onClick={onViewAllClick}
            variant="outline"
            size="lg"
            className="rounded-full font-semibold"
          >
            Lihat Semua Kelas
          </Button>
        </div>
      </div>
    </section>
  );
}
