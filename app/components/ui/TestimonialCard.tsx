import Image from "next/image";
import type { Testimonial } from "@/src/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="rounded-card border border-border bg-surface p-6 md:p-8 flex flex-col gap-4">
      {/* Avatar */}
      <div className="relative h-16 w-16 md:h-[72px] md:w-[72px] overflow-hidden rounded-pill">
        <Image
          src={testimonial.avatarUrl}
          alt={testimonial.name}
          fill
          className="object-cover"
          sizes="72px"
        />
      </div>

      {/* Name and Role */}
      <div>
        <h3 className="text-lg font-semibold text-text-primary">
          {testimonial.name}
        </h3>
        <p className="text-sm font-medium text-link">{testimonial.role}</p>
      </div>

      {/* Quote */}
      <p className="text-sm leading-relaxed text-text-secondary md:text-base md:leading-[26px]">
        {testimonial.quote}
      </p>
    </article>
  );
}
