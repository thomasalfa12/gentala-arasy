import { cn } from "@/lib/utils";
import React from "react";

interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Carousel({ children, className, ...props }: CarouselProps) {
  return (
    // Container dengan negative margin untuk efek 'full-bleed'
    <div className="-mx-6 px-6">
      <div
        className={cn(
          "flex overflow-x-auto snap-x snap-mandatory hide-scrollbar py-4",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  );
}
