"use client";

import { AnimatePresence } from "motion/react";
import Image from "next/image.js";
import TestimonialCard from "./TestmonialCard";
import testimonials from "@/data/testmonialDB";


const Testimonials = () => {
  return (
    <section>
      <div className="flex justify-center items-center space-x-4 py-6 sm:py-12">
        <Image
          src="/assets/icons/mic.png"
          width={50}
          height={50}
          alt="voice"
          className="animate-pulse"
        />
        <span className="text-lg sm:text-3xl font-semibold text-slate-100">
          Recommendation
          <span className="text-pink-500"> From </span>
          Linkedin
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              title={testimonial.title}
              text={testimonial.text}
              image={testimonial.image}
              link={testimonial.link}
            />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Testimonials;
