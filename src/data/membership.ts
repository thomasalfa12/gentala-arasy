import type { MembershipPlan } from "@/types";

export const membershipData: MembershipPlan[] = [
  {
    title: "Starter Plan",
    price: 149,
    period: "month",
    features: [
      "Akses ke semua fasilitas gym",
      "1 sesi perkenalan dengan pelatih",
      "Rencana latihan mandiri",
      "Akses ke loker harian",
    ],
  },
  {
    title: "Pro Plan",
    price: 249,
    period: "month",
    features: [
      "Semua fitur di Starter Plan",
      "Akses ke semua kelas grup (Yoga, Kardio)",
      "4 sesi personal trainer per bulan",
      "Analisis komposisi tubuh bulanan",
      "Handuk gratis setiap kunjungan",
    ],
    isPopular: true,
  },
  {
    title: "Elite Plan",
    price: 399,
    period: "month",
    features: [
      "Semua fitur di Pro Plan",
      "Sesi personal trainer tanpa batas",
      "Konsultasi nutrisi personal",
      "Akses prioritas ke fasilitas baru",
      "Gratis 1 tamu setiap akhir pekan",
    ],
  },
];