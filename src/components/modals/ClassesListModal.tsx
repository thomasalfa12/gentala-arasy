"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { classesData } from "@/data/classes";

interface ClassesListModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ClassesListModal({ isOpen, onClose }: ClassesListModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-card sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl">
            Semua Kelas & Program
          </DialogTitle>
          <DialogDescription>
            Pilih program yang paling sesuai dengan target kebugaran Anda.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 max-h-[60vh] overflow-y-auto pr-4">
          <ul className="space-y-4">
            {classesData.map((item) => (
              <li
                key={item.title}
                className="flex items-center justify-between border-b border-border pb-3"
              >
                <div className="flex items-center gap-4">
                  <item.icon className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
                {item.price && (
                  <span className="font-semibold text-foreground whitespace-nowrap">
                    Rp {item.price.toLocaleString("id-ID")}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
}
