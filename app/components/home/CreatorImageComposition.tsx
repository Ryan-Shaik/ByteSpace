import Image from "next/image";
import TotalRevenueCard from "@/app/components/ui/TotalRevenueCard";
import YearToDateCard from "@/app/components/ui/YearToDateCard";
import HappyStudentsCard from "@/app/components/ui/HappyStudentsCard";

/**
 * Left-column image composition for the Creator Promo row.
 * Contains the female student, two blue revenue cards, squiggly
 * lime decoration, and the Happy Students card — all absolutely
 * positioned inside a fixed-height relative container.
 */
export default function CreatorImageComposition() {
  return (
    <div className="relative mx-auto h-[440px] sm:h-[500px] lg:h-[500px] w-full max-w-[480px]">
      {/* ---- Total Revenue card — top-left (BEHIND woman) ---- */}
      <div className="absolute left-0 sm:-left-3 top-[2%] z-0">
        <TotalRevenueCard />
      </div>

      {/* ---- Year to Date card — mid-left, below Revenue (BEHIND woman) ---- */}
      <div className="absolute left-1 sm:-left-2 top-[30%] z-0">
        <YearToDateCard />
      </div>

      {/* ---- Female student (anchored centre-bottom, large, IN FRONT of blue cards) ---- */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex justify-center">
        <Image
          src="/assets/female.png"
          alt="Creator with headphones and tablet"
          width={460}
          height={544}
          className="h-[390px] sm:h-[460px] lg:h-[460px] w-auto object-contain object-bottom"
          priority={false}
        />
      </div>

      {/* ---- Squiggly lime decoration — IN FRONT of woman, overlapping her shoulder ---- */}
      <div
        className="pointer-events-none absolute left-[50%] sm:left-[51%] lg:left-[51%] top-[21%] z-20 select-none"
        aria-hidden="true"
      >
        <Image
          src="/assets/squiggly-line-lime1.png"
          alt=""
          width={150}
          height={160}
          className="w-[115px] sm:w-[130px] lg:w-[140px] h-auto drop-shadow-md"
        />
      </div>

      {/* ---- Happy Students card — bottom-right overlapping tablet (IN FRONT of woman) ---- */}
      <div className="absolute bottom-[2%] left-[44%] sm:left-[46%] lg:left-[46%] z-20">
        <HappyStudentsCard />
      </div>
    </div>
  );
}
