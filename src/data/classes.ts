import type { Service } from "@/types";
import { Dumbbell, HeartPulse, Wind, Weight, PersonStanding } from "lucide-react";

export const classesData: Service[] = [
  {
    icon: Dumbbell,
    title: "Latihan Beban",
    description: "Program pembentukan otot terstruktur untuk kekuatan maksimal.",
    price: 150000,
    featured: true,
  },
  {
    icon: HeartPulse,
    title: "Kardio Intensif",
    description: "Tingkatkan daya tahan jantung dan bakar kalori lebih efektif.",
    price: 125000,
    featured: true,
  },
  {
    icon: Wind,
    title: "Kelas Yoga & Pilates",
    description: "Temukan keseimbangan tubuh dan pikiran, tingkatkan fleksibilitas.",
    price: 135000,
    featured: true,
  },
  {
    icon: Weight,
    title: "Crossfit",
    description: "Tantang batas Anda dengan latihan fungsional berintensitas tinggi.",
    price: 175000,
    featured: false,
  },
  {
    icon: PersonStanding,
    title: "Zumba",
    description: "Bakar kalori sambil bersenang-senang dengan kelas tari Latin.",
    price: 120000,
    featured: false,
  },
];