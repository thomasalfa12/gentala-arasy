"use client";

import { motion, type Variants } from "framer-motion";
import { membershipData } from "@/data/membership";
import { MembershipCard } from "@/components/cards/MembershipCard";
import { Carousel } from "@/components/ui/carousel"; // <-- Impor Carousel

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

export function MembershipSection() {
  return (
    <section id="pricing" className="py-24 bg-secondary/30 overflow-hidden">
      {" "}
      {/* Tambah overflow-hidden */}
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Find the Perfect Package
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            Have questions about memberships or programs? Our team is here to
            help you find the best fit.
          </p>
        </motion.div>

        {/* Tampilan Desktop (Grid) */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
        >
          {membershipData.map((plan) => (
            <MembershipCard key={plan.title} plan={plan} />
          ))}
        </motion.div>

        {/* Tampilan Mobile (Carousel) */}
        <div className="lg:hidden">
          <Carousel className="gap-6">
            {membershipData.map((plan, index) => (
              <div
                key={index}
                className="flex-none w-[90%] sm:w-[70%] snap-center"
              >
                <MembershipCard plan={plan} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
