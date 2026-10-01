import Image from "next/image";
import { Star } from "lucide-react";

const AVATARS = [
  "/assets/Avater1.png",
  "/assets/Avater2.png",
  "/assets/Avater3.png",
  "/assets/Avater4.png",
  "/assets/Avater5.png",
];

/** "Happy Students" floating card with avatar stack and rating. */
export default function HappyStudentsCard() {
  return (
    <div className="w-[195px] rounded-card bg-surface p-3 shadow-panel border border-border/40">
      <p className="text-xs font-semibold text-text-primary">Happy Students</p>
      <div className="mt-0.5 flex items-center gap-1.5 text-[11px] text-text-muted">
        <span>4.5 (240)</span>
        <Star className="h-3 w-3 fill-star text-star" aria-hidden="true" />
      </div>
      <div className="mt-2 flex items-center">
        {AVATARS.map((src, i) => (
          <div
            key={src}
            className="relative h-6 w-6 overflow-hidden rounded-full border-2 border-surface"
            style={{ marginLeft: i === 0 ? 0 : "-6px" }}
          >
            <Image src={src} alt="Student avatar" fill sizes="24px" className="object-cover" />
          </div>
        ))}
        <div
          className="relative z-10 -ml-1.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-surface bg-accent text-[9px] font-bold text-on-accent"
          aria-label="More than 2000 students"
        >
          2K+
        </div>
      </div>
    </div>
  );
}
