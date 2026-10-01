import Image from "next/image";
import { Star } from "lucide-react";

const AVATARS = [
  "/assets/Avater1.png",
  "/assets/Avater2.png",
  "/assets/Avater3.png",
  "/assets/Avater4.png",
  "/assets/Avater5.png",
];

interface HappyStudentsCardProps {
  variant?: "default" | "lime";
}

/** "Happy Students" floating card with avatar stack and rating. */
export default function HappyStudentsCard({
  variant = "default",
}: HappyStudentsCardProps) {
  const isLime = variant === "lime";

  return (
    <div
      className={`rounded-card shadow-panel ${
        isLime
          ? "w-[230px] sm:w-[250px] bg-accent border-none text-text-primary p-4 rounded-[22px] shadow-xl"
          : "w-[195px] bg-surface border border-border/40 p-3.5"
      }`}
    >
      <p className={`font-semibold text-text-primary ${isLime ? "text-sm" : "text-xs"}`}>
        Happy Students
      </p>
      <div
        className={`mt-0.5 flex items-center gap-1.5 ${
          isLime ? "text-xs text-text-primary font-medium" : "text-[11px] text-text-muted"
        }`}
      >
        <span>4.5 (240)</span>
        <Star
          className={`h-3.5 w-3.5 ${
            isLime ? "fill-brand text-brand" : "fill-star text-star"
          }`}
          aria-hidden="true"
        />
      </div>
      <div className="mt-2.5 flex items-center">
        {AVATARS.map((src, i) => (
          <div
            key={src}
            className={`relative h-6.5 w-6.5 overflow-hidden rounded-full border-2 ${
              isLime ? "border-accent" : "border-surface"
            }`}
            style={{ marginLeft: i === 0 ? 0 : "-6px" }}
          >
            <Image
              src={src}
              alt="Student avatar"
              fill
              sizes="26px"
              className="object-cover"
            />
          </div>
        ))}
        <div
          className={`relative z-10 -ml-1.5 flex h-6.5 w-6.5 items-center justify-center rounded-full border-2 text-[9px] font-bold ${
            isLime
              ? "border-accent bg-text-primary text-white"
              : "border-surface bg-accent text-on-accent"
          }`}
          aria-label="More than 2000 students"
        >
          2K+
        </div>
      </div>
    </div>
  );
}

