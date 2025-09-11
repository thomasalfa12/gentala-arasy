"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Quote, Star } from "lucide-react";
import type { Testimonial } from "@/types";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1 text-primary">
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          className={`w-5 h-5 ${
            index < rating ? "fill-current" : "text-secondary"
          }`}
        />
      ))}
    </div>
  );
}

export function TestimonialCard({
  quote,
  name,
  role,
  imageUrl,
  rating,
}: Testimonial) {
  const FADE_UP_ANIMATION_VARIANTS: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring", duration: 0.8 } },
  };

  return (
    <motion.div
      variants={FADE_UP_ANIMATION_VARIANTS}
      className="bg-card p-8 rounded-2xl shadow-sm border relative overflow-hidden"
    >
      <Quote className="absolute top-4 right-4 w-16 h-16 text-secondary/50" />
      <div className="relative z-10">
        <StarRating rating={rating} />
        <blockquote className="mt-4 text-lg text-foreground italic">
          &ldquo;{quote}&rdquo;
        </blockquote>
        <div className="mt-6 flex items-center">
          <Image
            src={imageUrl}
            alt={name}
            width={48}
            height={48}
            className="rounded-full object-cover mr-4"
          />
          <div>
            <p className="font-heading font-semibold text-foreground">{name}</p>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
