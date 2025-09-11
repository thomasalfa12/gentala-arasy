"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useMembershipStore } from "@/hooks/useMembershipStore";
import { MembershipForm } from "@/components/form/MembershipForm";

export function MembershipModal() {
  const { isOpen, onClose } = useMembershipStore();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-card sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl">
            Daftar Membership
          </DialogTitle>
          <DialogDescription>
            Pilih paket Anda dan isi detail untuk memulai perjalanan fitness
            Anda bersama kami.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <MembershipForm onClose={onClose} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
