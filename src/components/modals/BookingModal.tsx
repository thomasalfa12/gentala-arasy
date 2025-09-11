"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useBookingStore } from "@/hooks/useBookingStore";
import { BookingForm } from "@/components/form/BookingForm";

export function BookingModal() {
  const { isOpen, onClose } = useBookingStore();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      {/* Tambahkan className di sini 👇 */}
      <DialogContent className="bg-card sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl">
            Buat Janji Temu
          </DialogTitle>
          <DialogDescription>
            Isi detail di bawah ini dan kami akan segera menghubungi Anda untuk
            konfirmasi jadwal.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <BookingForm onClose={onClose} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
