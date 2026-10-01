import Link from "next/link";
import {
  DraftingCompass,
  Code2,
  Laptop,
  Building2,
  Megaphone,
  Camera,
  LucideIcon,
} from "lucide-react";
import Container from "../ui/Container";
import { Category } from "@/src/types";

interface LearningPathsSectionProps {
  categories: Category[];
}

const CATEGORY_ICON_MAP: Record<string, LucideIcon> = {
  PenTool: DraftingCompass,
  Code: Code2,
  Laptop: Laptop,
  Building2: Building2,
  Megaphone: Megaphone,
  Camera: Camera,
};

export default function LearningPathsSection({ categories }: LearningPathsSectionProps) {
  return (
    <section className="bg-surface py-16 md:py-24" aria-labelledby="learning-paths-heading">
      <Container>
        {/* Section Header */}
        <div className="text-center">
          <h2
            id="learning-paths-heading"
            className="text-2xl font-bold tracking-tight text-text-primary sm:text-3xl md:text-[36px]"
          >
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-text-muted sm:text-base">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range
            of courses spans various fields, ensuring there&apos;s something for everyone. Unleash your
            potential and explore our carefully curated categories.
          </p>
        </div>

        {/* 6 Category Tiles Grid */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-5 lg:grid-cols-6">
          {categories.map((cat) => {
            const Icon = CATEGORY_ICON_MAP[cat.iconName] || DraftingCompass;

            return (
              <Link
                key={cat.id}
                href={`/courses?category=${cat.slug}`}
                className="group flex flex-col items-center justify-center rounded-2xl border border-border bg-surface p-6 text-center transition-all duration-200 hover:-translate-y-1 hover:border-brand/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                {/* Circular Lime Accent Container */}
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-on-accent shadow-xs transition-transform duration-200 group-hover:scale-110">
                  <Icon className="h-6 w-6 stroke-[2.2]" aria-hidden="true" />
                </div>

                {/* Category Label */}
                <span className="text-sm font-semibold text-text-primary transition-colors group-hover:text-brand sm:text-base">
                  {cat.name}
                </span>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
