"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { teamData } from "@/data/team";
import Image from "next/image";
import Link from "next/link";
import { Instagram, MessageSquare } from "lucide-react";

interface TrainersListModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TrainersListModal({ isOpen, onClose }: TrainersListModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-card sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl">
            Tim Pelatih Kami
          </DialogTitle>
          <DialogDescription>
            Para profesional berlisensi yang siap membantu Anda.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 max-h-[60vh] overflow-y-auto pr-4">
          <ul className="space-y-4">
            {teamData.map((member) => (
              <li
                key={member.name}
                className="flex items-center gap-4 border-b border-border pb-3"
              >
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  width={56}
                  height={56}
                  className="rounded-full object-cover w-14 h-14"
                />
                <div className="flex-grow">
                  <h4 className="font-semibold text-foreground">
                    {member.name}
                  </h4>
                  <p className="text-sm text-primary">{member.role}</p>
                </div>
                <div className="flex items-center gap-3">
                  {member.socials?.whatsapp && (
                    <Link
                      href={member.socials.whatsapp}
                      target="_blank"
                      className="text-muted-foreground hover:text-primary"
                    >
                      <MessageSquare />
                    </Link>
                  )}
                  {member.socials?.instagram && (
                    <Link
                      href={member.socials.instagram}
                      target="_blank"
                      className="text-muted-foreground hover:text-primary"
                    >
                      <Instagram />
                    </Link>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
}
