"use client";

import { useState } from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { MembershipSection } from "@/components/sections/MembershipSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { ClassesListModal } from "@/components/modals/ClassesListModal";
import { TrainersListModal } from "@/components/modals/TrainersListModal";

export default function HomePage() {
  const [isClassesModalOpen, setIsClassesModalOpen] = useState(false);
  const [isTrainersModalOpen, setIsTrainersModalOpen] = useState(false);

  return (
    <>
      <HeroSection />
      <ServicesSection onViewAllClick={() => setIsClassesModalOpen(true)} />
      <MembershipSection />
      <TeamSection onViewAllClick={() => setIsTrainersModalOpen(true)} />
      <TestimonialsSection />

      {/* Render modal-modal baru di sini */}
      <ClassesListModal
        isOpen={isClassesModalOpen}
        onClose={() => setIsClassesModalOpen(false)}
      />
      <TrainersListModal
        isOpen={isTrainersModalOpen}
        onClose={() => setIsTrainersModalOpen(false)}
      />
    </>
  );
}
