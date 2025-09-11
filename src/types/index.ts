import type { LucideIcon } from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  price?: number; // <-- Tambahkan harga (opsional)
  featured?: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  featured?: boolean;
  socials?: {
    whatsapp?: string; // <-- Tambahkan WhatsApp
    instagram?: string; // <-- Tambahkan Instagram
    linkedin?: string;
    twitter?: string;
  };
}

export interface MembershipPlan {
  title: string;
  price: number;
  period: "month" | "year";
  features: string[];
  isPopular?: boolean;
}

// Tambahkan tipe baru di sini
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  imageUrl: string;
  rating: number;
}