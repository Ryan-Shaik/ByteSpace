import Container from "@/app/components/ui/Container";
import TestimonialCard from "@/app/components/ui/TestimonialCard";
import type { TestimonialsContent } from "@/src/types";

interface TestimonialsSectionProps {
  content: TestimonialsContent;
}

export default function TestimonialsSection({
  content,
}: TestimonialsSectionProps) {
  return (
    <section
      className="py-16 md:py-24"
      style={{
        background:
          "linear-gradient(to right, var(--color-surface) 0%, rgba(212, 255, 30, 0.15) 100%)",
      }}
    >
      <Container>
        {/* Header: Heading (left) + Description (right) */}
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-start md:justify-between md:gap-12">
          <h2 className="text-[26px] font-semibold leading-[1.2] text-text-primary md:max-w-[480px] md:text-[36px]">
            {content.heading}
          </h2>
          <p className="text-sm leading-relaxed text-text-secondary md:max-w-[560px] md:text-base md:leading-[26px]">
            {content.description}
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {content.testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
