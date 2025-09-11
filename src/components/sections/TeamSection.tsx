"use client";

import { motion, type Variants } from "framer-motion";
import { teamData } from "@/data/team";
import { TeamMemberCard } from "@/components/cards/TeamMemberCard";
import { Button } from "@/components/ui/button";
import { Carousel } from "@/components/ui/carousel"; // <-- Impor Carousel

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export function TeamSection({
  onViewAllClick,
}: {
  onViewAllClick: () => void;
}) {
  const featuredTrainers = teamData.filter((t) => t.featured).slice(0, 3);

  return (
    <section id="tim" className="py-24 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Pelatih Berlisensi Kami
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            Bertemu dengan para ahli yang berdedikasi untuk memandu perjalanan
            fitness Anda.
          </p>
        </motion.div>

        {/* Tampilan Desktop (Grid) */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
        >
          {featuredTrainers.map((member) => (
            <TeamMemberCard key={member.name} {...member} />
          ))}
        </motion.div>

        {/* Tampilan Mobile (Carousel) */}
        <div className="sm:hidden">
          <Carousel className="gap-6">
            {featuredTrainers.map((member, index) => (
              <div key={index} className="flex-none w-[80%] snap-center">
                <TeamMemberCard {...member} />
              </div>
            ))}
          </Carousel>
        </div>

        <div className="text-center mt-20">
          <Button
            onClick={onViewAllClick}
            variant="outline"
            size="lg"
            className="rounded-full font-semibold"
          >
            Lihat Semua Pelatih
          </Button>
        </div>
      </div>
    </section>
  );
}
