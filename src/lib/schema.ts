import { z } from "zod";

// Skema untuk Booking Kelas
export const bookingSchema = z.object({
  name: z.string().min(3, { message: "Nama lengkap diperlukan." }),
  phone: z.string().min(10, { message: "Nomor WhatsApp valid diperlukan." }),
  // UBAH DARI ARRAY KE STRING
  class: z.string().min(1, { message: "Anda harus memilih satu kelas." }),
  date: z.date(),
  time: z.string().min(1, { message: "Waktu janji temu harus diisi." }),
});

// Skema untuk Daftar Membership
export const membershipSchema = z.object({
  name: z.string().min(3, { message: "Nama lengkap diperlukan." }),
  phone: z.string().min(10, { message: "Nomor WhatsApp valid diperlukan." }),
  plan: z.string().min(1, { message: "Anda harus memilih satu paket." }),
});