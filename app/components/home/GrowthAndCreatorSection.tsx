import Image from "next/image";
import { CircleCheckBig } from "lucide-react";
import Container from "@/app/components/ui/Container";
import GrowthImageComposition from "./GrowthImageComposition";
import CreatorImageComposition from "./CreatorImageComposition";
import type { PlatformStat, CreatorBenefit } from "@/src/data/platform-stats";
import type { Course } from "@/src/types";

interface GrowthAndCreatorSectionProps {
  stats: PlatformStat[];
  benefits: CreatorBenefit[];
  previewCourse: Course;
}

export default function GrowthAndCreatorSection({
  stats,
  benefits,
  previewCourse,
}: GrowthAndCreatorSectionProps) {
  return (
    <section
      className="relative w-full overflow-hidden"
      aria-label="Platform growth and creator section"
    >
      {/* ---- Single gradient background spanning the whole section ---- */}
      <div className="pointer-events-none absolute inset-0 select-none" aria-hidden="true">
        <Image
          src="/assets/Gradient-background.png"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* ================================================================
          ROW 1 — "Your Path to Professional Growth Starts Here!"
          Left: text + stats   |   Right: student image composition
          ================================================================ */}
      <Container className="relative z-10 pt-16 md:pt-24 lg:pt-28">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-8">
          {/* --- Text column --- */}
          <div className="text-center lg:text-left">
            <h2 className="text-[28px] font-semibold leading-[1.18] tracking-tight text-text-primary sm:text-[36px] lg:text-[42px]">
              Your Path to Professional
              <br />
              Growth Starts Here!
            </h2>

            <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-text-muted sm:text-[15px] lg:mx-0">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>

            <div className="mt-8 flex justify-center gap-10 sm:gap-14 lg:justify-start">
              {stats.map((s) => (
                <div key={s.label} className="text-center lg:text-left">
                  <p className="text-[28px] font-bold text-link sm:text-[34px]">{s.value}</p>
                  <p className="mt-0.5 text-sm font-medium text-text-muted">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* --- Image composition --- */}
          <GrowthImageComposition course={previewCourse} />
        </div>
      </Container>

      {/* ================================================================
          ROW 2 — "Create & Manage Courses Easily."
          Left: student image composition   |   Right: text + checklist
          ================================================================ */}
      <Container className="relative z-10 pb-16 pt-8 md:pb-24 md:pt-12 lg:pb-28 lg:pt-16">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-8">
          {/* --- Image composition (comes second on mobile via order) --- */}
          <div className="order-2 lg:order-1">
            <CreatorImageComposition />
          </div>

          {/* --- Text column --- */}
          <div className="order-1 text-center lg:order-2 lg:text-left">
            <h2 className="text-[28px] font-semibold leading-[1.18] tracking-tight text-text-primary sm:text-[36px] lg:text-[42px]">
              Create &amp; Manage
              <br />
              Courses Easily.
            </h2>

            <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-text-muted sm:text-[15px] lg:mx-0">
              <span className="font-semibold text-text-primary">ByteSpace</span>{" "}
              supports individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>

            <ul className="mt-7 flex flex-col gap-4" role="list">
              {benefits.map((b) => (
                <li
                  key={b.text}
                  className="flex items-center justify-center gap-3 text-sm font-medium text-text-primary sm:text-base lg:justify-start"
                >
                  <CircleCheckBig
                    className="h-5 w-5 flex-shrink-0 text-brand"
                    strokeWidth={2.2}
                    aria-hidden="true"
                  />
                  {b.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
