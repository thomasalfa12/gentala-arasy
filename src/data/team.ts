import type { TeamMember } from "@/types";

// Nomor WA utama bisnis (bisa diubah)
const WHATSAPP_NUMBER = "6281234567890"; 

export const teamData: TeamMember[] = [
  {
    name: "Andi Wijaya",
    role: "Head Coach & Founder",
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto.format&fit=crop",
    featured: true,
    // TAMBAHKAN BLOK INI
    socials: {
      whatsapp: `https://wa.me/${WHATSAPP_NUMBER}?text=Halo%20Coach%20Andi,%20saya%20tertarik%20untuk%20bertanya%20tentang%20program%20latihan.`,
      instagram: "#",
    },
  },
  {
    name: "Rina Amelia",
    role: "Yoga Instructor",
    imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto.format&fit=crop",
    featured: true,
    // TAMBAHKAN BLOK INI
    socials: {
      whatsapp: `https://wa.me/${WHATSAPP_NUMBER}?text=Halo%20Coach%20Rina,%20saya%20tertarik%20untuk%20bertanya%20tentang%20kelas%20yoga.`,
      instagram: "#",
    },
  },
  {
    name: "Budi Santoso",
    role: "Personal Trainer",
    imageUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto.format&fit=crop",
    featured: true,
    // TAMBAHKAN BLOK INI
    socials: {
      whatsapp: `https://wa.me/${WHATSAPP_NUMBER}?text=Halo%20Coach%20Budi,%20saya%20tertarik%20untuk%20sesi%20personal%20training.`,
      instagram: "#",
    },
  },
  {
    name: "Dewi Lestari",
    role: "Cardio Specialist",
    imageUrl: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1887&auto.format&fit=crop",
    featured: false,
    // TAMBAHKAN BLOK INI
    socials: {
      whatsapp: `https://wa.me/${WHATSAPP_NUMBER}?text=Halo%20Coach%20Dewi,%20saya%20tertarik%20untuk%20bertanya%20tentang%20kelas%20kardio.`,
      instagram: "#",
    },
  },
];