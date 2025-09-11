"use client";

import { motion, type Variants } from "framer-motion";
import type { Service } from "@/types";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", duration: 0.8 } },
};

export function ProgramCard({ icon: Icon, title, description }: Service) {
  return (
    <motion.div
      variants={cardVariants}
      className="p-8 bg-card border rounded-2xl shadow-sm text-left h-full"
    >
      <div className="p-3 bg-primary/10 rounded-xl mb-6 inline-block">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <h3 className="font-heading text-2xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
}
