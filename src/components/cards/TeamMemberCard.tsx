"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";
import type { TeamMember } from "@/types";

export function TeamMemberCard({ name, role, imageUrl, socials }: TeamMember) {
  const FADE_UP_ANIMATION_VARIANTS: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring", duration: 0.8 } },
  };

  return (
    <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="text-center">
      <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-2xl shadow-lg">
        <Image
          src={imageUrl}
          alt={`Foto profil ${name}`}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <h3 className="font-heading text-xl font-bold">{name}</h3>
      <p className="text-primary mb-3">{role}</p>
      {socials && (
        <div className="flex justify-center gap-4">
          {socials.linkedin && (
            <Link
              href={socials.linkedin}
              className="text-muted-foreground hover:text-foreground"
            >
              <Linkedin size={20} />
            </Link>
          )}
          {socials.twitter && (
            <Link
              href={socials.twitter}
              className="text-muted-foreground hover:text-foreground"
            >
              <Twitter size={20} />
            </Link>
          )}
        </div>
      )}
    </motion.div>
  );
}
