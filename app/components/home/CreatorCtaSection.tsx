import Image from "next/image";
import Link from "next/link";
import { CreatorCta } from "@/src/types";

interface CreatorCtaSectionProps {
  cta: CreatorCta;
}

export default function CreatorCtaSection({ cta }: CreatorCtaSectionProps) {
  const [headlineFirstPart, headlineSecondPart] = cta.title.includes(" as a ")
    ? [
        `${cta.title.split(" as a ")[0]} as a`,
        cta.title.split(" as a ")[1],
      ]
    : [cta.title, null];

  return (
    <section
      className="hero-grid relative w-full overflow-hidden min-h-[440px] lg:h-[488px] flex items-center justify-center py-16 sm:py-20 lg:py-0"
      aria-labelledby="creator-cta-heading"
    >
      {/* 3D Ornaments overlay filling entire section width with no gaps */}
      <div
        className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
        aria-hidden
      >
        <Image
          src="/assets/Group 6.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Center content */}
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 sm:px-8 flex flex-col items-center text-center">
        {/* Main Headline */}
        <h2
          id="creator-cta-heading"
          className="font-semibold tracking-tight text-on-brand text-2xl sm:text-4xl lg:text-[44px] lg:leading-[1.18] max-w-[760px]"
        >
          {headlineSecondPart ? (
            <>
              {headlineFirstPart}
              <br className="hidden sm:inline" />{" "}
              {headlineSecondPart}
            </>
          ) : (
            cta.title
          )}
        </h2>

        {/* Subtitle / Description */}
        <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-[16px] text-on-brand/80 max-w-[850px] font-normal leading-relaxed">
          {cta.description}
        </p>

        {/* Action Button */}
        <Link
          href={cta.buttonHref}
          className="mt-7 sm:mt-8 inline-flex items-center justify-center rounded-pill bg-accent px-8 py-3.5 text-sm sm:text-base font-medium text-on-accent transition-colors hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand"
        >
          {cta.buttonText}
        </Link>
      </div>
    </section>
  );
}
