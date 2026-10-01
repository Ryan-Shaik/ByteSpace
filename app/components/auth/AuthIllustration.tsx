import Image from "next/image";
import { Star, BarChart } from "lucide-react";
import HappyStudentsCard from "@/app/components/ui/HappyStudentsCard";

const CARD1_AVATARS = [
  "/assets/Avater1.png",
  "/assets/Avater3.png",
  "/assets/Avater5.png",
  "/assets/Avater7.png",
];

const CARD2_AVATARS = [
  "/assets/Avater5.png",
  "/assets/Avater6.png",
  "/assets/Avater7.png",
  "/assets/Avater8.png",
];

/**
 * Visual illustration for auth screens (Register/Login).
 * Scaled up to cover comfortable space on large screens while maintaining
 * exact layering and overlaps from Register.png:
 * 1. circle-lime.png (z-10, top-left behind front card)
 * 2. Back course card "Build Digital Asset" (z-10, left-shifted) with card6.jpg
 * 3. Front course card "the Power of Big Data" (z-20, prominent) with card5.jpg
 * 4. Cone-lime.png (z-30, bottom-left overlapping front of back card)
 * 5. Happy Students card (z-30, lime variant, bottom-right overlapping front card)
 * 6. squigly-line-white.png (z-40, right side overlapping both front card and Happy Students card)
 */
export default function AuthIllustration() {
  return (
    <div className="relative mx-auto h-[530px] w-full max-w-[560px] select-none sm:h-[570px] xl:h-[620px] xl:max-w-[620px]">
      {/* 1. Lime Torus Ring (tucked behind top-left of front card) */}
      <div className="absolute left-[30px] top-[20px] z-10 h-[95px] w-[95px] pointer-events-none sm:left-[45px] sm:top-[25px] sm:h-[110px] sm:w-[110px] xl:left-[55px] xl:h-[120px] xl:w-[120px]">
        <Image
          src="/assets/circle-lime.png"
          alt="Decorative 3D ring"
          width={120}
          height={120}
          className="h-full w-full object-contain"
          priority
        />
      </div>

      {/* 2. Back Course Card ("Build Digital Asset" with card6.jpg) */}
      <div
        className="absolute left-0 top-[85px] z-10 w-[290px] rounded-[20px] bg-white p-4 shadow-xl border border-border/20 sm:top-[100px] sm:w-[325px] xl:top-[115px] xl:w-[355px]"
        aria-hidden="true"
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-media bg-surface-muted">
          <Image
            src="/assets/card6.jpg"
            alt="Build Digital Asset"
            fill
            sizes="355px"
            className="object-cover"
          />
          <div className="absolute bottom-2.5 left-2.5 pointer-events-none">
            <span className="rounded-pill bg-surface-overlay px-3 py-0.5 text-[11px] font-medium text-text-pill backdrop-blur-[8px]">
              17 Lessons
            </span>
          </div>
        </div>

        <div className="mt-3.5">
          <h4 className="truncate text-sm font-semibold text-text-primary sm:text-base">
            Build Digital Asset
          </h4>
          <p className="mt-0.5 text-xs text-brand">by purepearl studio</p>

          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-1.5 rounded-pill bg-surface-muted px-2.5 py-1 text-xs font-medium text-text-secondary">
              <BarChart className="h-3.5 w-3.5 stroke-[2.8]" aria-hidden="true" />
              <span>Beginner</span>
            </div>

            <div className="flex items-center">
              {CARD2_AVATARS.map((src, i) => (
                <div
                  key={src}
                  className="relative h-6 w-6 overflow-hidden rounded-full border border-white"
                  style={{ marginLeft: i === 0 ? 0 : "-6px" }}
                >
                  <Image
                    src={src}
                    alt="Student avatar"
                    fill
                    sizes="24px"
                    className="object-cover"
                  />
                </div>
              ))}
              <div className="-ml-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#1A1A1A] text-[9px] font-bold text-white border border-white">
                26+
              </div>
            </div>
          </div>

          <div className="mt-2.5 flex items-baseline gap-1">
            <span className="text-base font-bold text-brand sm:text-lg">$25</span>
            <span className="text-xs text-text-muted">/lifetime</span>
          </div>
        </div>
      </div>

      {/* 3. Front Main Course Card ("the Power of Big Data" with card5.jpg) */}
      <div className="absolute left-[70px] top-[10px] z-20 w-[330px] rounded-[24px] bg-white p-4.5 shadow-2xl border border-border/20 sm:left-[95px] sm:top-[15px] sm:w-[375px] xl:left-[115px] xl:w-[415px]">
        {/* Course Thumbnail */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-media bg-surface-muted">
          <Image
            src="/assets/card5.jpg"
            alt="the Power of Big Data preview"
            fill
            sizes="415px"
            className="object-cover"
            priority
          />

          {/* Floating Pill Overlays */}
          <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1 pointer-events-none">
            <span className="rounded-pill bg-surface-overlay px-2.5 py-1 text-[11px] font-medium text-text-pill backdrop-blur-[8px]">
              17 Lessons
            </span>
            <span className="rounded-pill bg-surface-overlay px-2.5 py-1 text-[11px] font-medium text-text-pill backdrop-blur-[8px]">
              2 hours 16 mins
            </span>
            <span className="rounded-pill bg-surface-overlay px-2.5 py-1 text-[11px] font-medium text-text-pill backdrop-blur-[8px]">
              59 Comments
            </span>
          </div>
        </div>

        {/* Title and Rating Row */}
        <div className="mt-4 flex items-start justify-between gap-2">
          <h3 className="text-base font-semibold text-text-primary sm:text-lg xl:text-xl">
            the Power of Big Data
          </h3>
          <div className="flex items-center gap-1 text-sm font-medium text-text-primary sm:text-base">
            <span>4.5</span>
            <Star className="h-4 w-4 fill-[#EAB308] text-[#EAB308]" aria-hidden="true" />
          </div>
        </div>

        <p className="mt-0.5 text-xs text-brand sm:text-sm">by purepearl studio</p>

        {/* Level and Avatar Stack */}
        <div className="mt-3.5 flex items-center justify-between">
          <div className="flex items-center gap-1.5 rounded-pill bg-surface-muted px-3 py-1 text-xs font-medium text-text-secondary sm:text-sm">
            <BarChart className="h-4 w-4 stroke-[2.8]" aria-hidden="true" />
            <span>Beginner</span>
          </div>

          <div className="flex items-center">
            {CARD1_AVATARS.map((src, i) => (
              <div
                key={src}
                className="relative h-6.5 w-6.5 overflow-hidden rounded-full border border-white sm:h-7 sm:w-7"
                style={{ marginLeft: i === 0 ? 0 : "-7px" }}
              >
                <Image
                  src={src}
                  alt="Student avatar"
                  fill
                  sizes="28px"
                  className="object-cover"
                />
              </div>
            ))}
            <div className="-ml-1.5 flex h-6.5 w-6.5 items-center justify-center rounded-full bg-[#1A1A1A] text-[9px] font-bold text-white border border-white sm:h-7 sm:w-7 sm:text-[10px]">
              26+
            </div>
          </div>
        </div>

        {/* Price Row */}
        <div className="mt-3 flex items-baseline gap-1">
          <span className="text-lg font-bold text-brand sm:text-xl xl:text-2xl">$25</span>
          <span className="text-xs text-text-muted sm:text-sm">/lifetime</span>
        </div>
      </div>

      {/* 4. Lime Cone / Tetrahedron (overlapping in front of back card) */}
      <div className="absolute -bottom-[15px] left-[5px] z-30 h-[125px] w-[125px] pointer-events-none sm:left-[15px] sm:h-[145px] sm:w-[145px] xl:left-[25px] xl:h-[160px] xl:w-[160px]">
        <Image
          src="/assets/Cone-lime.png"
          alt="Decorative 3D cone"
          width={160}
          height={160}
          className="h-full w-full object-contain"
          priority
        />
      </div>

      {/* 5. Happy Students Card (lime variant overlapping front card) */}
      <div className="absolute bottom-[20px] right-[5px] z-30 sm:right-[15px] xl:bottom-[30px] xl:right-[20px]">
        <HappyStudentsCard variant="lime" />
      </div>

      {/* 6. White Squiggly Ribbon (overlapping on top of both front card and Happy Students card) */}
      <div className="absolute -right-[20px] top-[230px] z-40 h-[140px] w-[130px] pointer-events-none sm:-right-[10px] sm:top-[260px] sm:h-[160px] sm:w-[145px] xl:right-[5px] xl:top-[290px] xl:h-[180px] xl:w-[165px]">
        <Image
          src="/assets/squigly-line-white.png"
          alt="Decorative 3D ribbon"
          width={165}
          height={180}
          className="h-full w-full object-contain"
          priority
        />
      </div>
    </div>
  );
}
