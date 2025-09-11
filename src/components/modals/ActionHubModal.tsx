"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useActionHubStore } from "@/hooks/useActionHubStore";
import { useBookingStore } from "@/hooks/useBookingStore";
import { useMembershipStore } from "@/hooks/useMembershipStore"; // <-- Impor store baru
import { Button } from "@/components/ui/button";
import { CalendarCheck, Handshake } from "lucide-react";

export function ActionHubModal() {
  const { isOpen, onClose } = useActionHubStore();
  const { onOpen: openBookingModal } = useBookingStore();
  const { onOpen: openMembershipModal } = useMembershipStore(); // <-- Panggil hook

  const handleBookingClick = () => {
    onClose();
    setTimeout(() => openBookingModal(), 150);
  };

  // Buat fungsi baru untuk membership
  const handleMembershipClick = () => {
    onClose();
    setTimeout(() => openMembershipModal(), 150);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-card sm:max-w-xs">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl text-center">
            Layanan
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-3 pt-4">
          <Button onClick={handleBookingClick} size="lg">
            <CalendarCheck className="mr-2 h-5 w-5" />
            Booking Janji Temu
          </Button>
          {/* Ganti dari Link ke Button */}
          <Button onClick={handleMembershipClick} size="lg" variant="secondary">
            <Handshake className="mr-2 h-5 w-5" />
            Daftar Membership
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
