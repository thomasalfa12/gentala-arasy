"use client";

import { motion, type Variants } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import type { MembershipPlan } from "@/types";
import { Button } from "@/components/ui/button";

// 1. Definisikan nomor WhatsApp tujuan di sini
const WHATSAPP_NUMBER = "6281234567890"; // Ganti dengan nomor WA bisnis Anda

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", duration: 0.8 } },
};

export function MembershipCard({ plan }: { plan: MembershipPlan }) {
  // 2. Buat fungsi untuk menangani klik tombol
  const handlePackageBooking = () => {
    const message = `
Halo, saya tertarik untuk mendaftar paket membership *${plan.title}* dengan harga *$${plan.price}/${plan.period}*.

Mohon informasinya untuk langkah selanjutnya. Terima kasih.
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Buka link WhatsApp di tab baru
    window.open(whatsappUrl, "_blank");
  };

  return (
    <motion.div
      variants={cardVariants}
      className={cn(
        "border rounded-2xl p-8 flex flex-col",
        plan.isPopular ? "bg-primary text-primary-foreground" : "bg-card"
      )}
    >
      {plan.isPopular && (
        <div className="text-center mb-4">
          <span className="text-xs font-bold uppercase bg-primary-foreground text-primary px-3 py-1 rounded-full">
            Paling Populer
          </span>
        </div>
      )}
      <h3 className="font-heading text-2xl font-bold text-center">
        {plan.title}
      </h3>
      <div className="text-center my-6">
        <span className="font-heading text-5xl font-extrabold">
          ${plan.price}
        </span>
        <span
          className={cn(
            "text-lg",
            plan.isPopular
              ? "text-primary-foreground/80"
              : "text-muted-foreground"
          )}
        >
          /{plan.period}
        </span>
      </div>
      <ul className="space-y-4 mb-8 flex-grow">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-current" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        size="lg"
        className={cn(
          "w-full rounded-full",
          plan.isPopular &&
            "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
        )}
        variant={plan.isPopular ? "default" : "outline"}
        onClick={handlePackageBooking} // <-- 3. Tambahkan onClick handler di sini
      >
        Book This Package
      </Button>
    </motion.div>
  );
}
