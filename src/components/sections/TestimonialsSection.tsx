"use client";

import { motion, type Variants } from "framer-motion";
import { testimonialsData } from "@/data/testimonials";
import { TestimonialCard } from "@/components/cards/TestimonialsCard";
import { Carousel } from "@/components/ui/carousel"; // <-- Impor Carousel

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export function TestimonialsSection() {
  return (
    <section id="testimoni" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Apa Kata Klien Kami
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            Kepercayaan dan kepuasan klien adalah prioritas utama dan aset
            terbesar kami.
          </p>
        </motion.div>

        {/* Tampilan Desktop (Grid) */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </motion.div>

        {/* Tampilan Mobile (Carousel) */}
        <div className="lg:hidden">
          <Carousel className="gap-6">
            {testimonialsData.map((testimonial, index) => (
              <div
                key={index}
                className="flex-none w-[90%] sm:w-[80%] snap-center"
              >
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
