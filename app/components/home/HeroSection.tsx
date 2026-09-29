"use client";

import Image from "next/image";
import { Search, Star } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "../layout/Header";

const STUDENT_AVATARS = [
  "/assets/Avater1.png",
  "/assets/Avater2.png",
  "/assets/Avater3.png",
  "/assets/Avater4.png",
  "/assets/Avater5.png",
];

export default function HeroSection() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/courses?q=${encodeURIComponent(query.trim())}`);
    } else {
      router.push("/courses");
    }
  }

  return (
    <section
      className="hero-grid relative min-h-[920px] lg:min-h-[1024px] w-full overflow-hidden flex flex-col justify-between"
      aria-label="Hero Section"
    >
      {/* 3D background ornaments from design */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 flex justify-center select-none"
        aria-hidden
      >
        <div className="relative w-full max-w-[1440px] h-[700px] lg:h-[804px]">
          <Image
            src="/assets/3d ornament.png"
            alt=""
            fill
            priority
            className="object-contain object-bottom"
            sizes="(max-width: 1440px) 100vw, 1440px"
          />
        </div>
      </div>

      {/* Top Header */}
      <Header activePath="/" />

      {/* Hero center text & search */}
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 pt-4 pb-4 md:px-12 flex flex-col items-center text-center">
        {/* Main Headline */}
        <h1 className="font-semibold tracking-tight text-on-brand text-3xl sm:text-5xl lg:text-[60px] lg:leading-[1.12]">
          Get Access to Hundreds
          <br />
          Courses Available
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-sm sm:text-base lg:text-[17px] text-on-brand/80 max-w-2xl font-normal leading-relaxed">
          Unlock your creativity, gain valuable knowledge, and grow your business
          with our wide range of courses.
        </p>

        {/* Search bar inside pill container */}
        <form
          onSubmit={handleSearch}
          role="search"
          aria-label="Search courses"
          className="mt-7 sm:mt-9 flex w-full max-w-[560px] items-center justify-between rounded-pill bg-surface p-1.5 pl-5 shadow-sm border border-transparent transition-all focus-within:ring-2 focus-within:ring-accent"
        >
          <div className="flex flex-1 items-center min-w-0 mr-2">
            <Search
              className="h-5 w-5 text-text-muted flex-shrink-0"
              aria-hidden
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Course, topic, creator"
              aria-label="Search courses, topics, or creators"
              className="w-full bg-transparent px-3 text-sm sm:text-[15px] text-text-primary placeholder:text-text-muted focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="flex-shrink-0 rounded-pill bg-accent px-6 sm:px-7 py-2.5 text-sm sm:text-[15px] font-medium text-on-accent transition-colors hover:bg-accent-hover focus:outline-none"
          >
            Search
          </button>
        </form>
      </div>

      {/* Bottom Hero Graphic Area */}
      <div className="relative z-10 w-full mt-auto flex flex-col items-center">
        <div className="relative w-full max-w-[1150px] flex justify-center items-end">
          {/* Lime Semi-Circle Background */}
          <div
            className="pointer-events-none absolute bottom-0 select-none flex justify-center w-full"
            aria-hidden
          >
            <Image
              src="/assets/semi-circle-lime.png"
              alt=""
              width={1149}
              height={442}
              priority
              className="w-[620px] sm:w-[850px] lg:w-[1149px] h-auto object-contain object-bottom"
            />
          </div>

          {/* Student Person Image */}
          <div className="relative z-10 flex justify-center">
            <Image
              src="/assets/male.png"
              alt="Student smiling with headphones and laptop"
              width={516}
              height={483}
              priority
              className="w-[280px] sm:w-[380px] lg:w-[490px] h-auto object-contain object-bottom"
            />
          </div>

          {/* Floating Card 1: UI/UX Design (Left / Mid) */}
          <div className="absolute z-20 top-8 sm:top-14 left-2 sm:left-8 lg:left-24 rounded-2xl bg-surface px-4 py-3.5 shadow-panel border border-border/50 max-w-[195px] sm:max-w-[210px]">
            <p className="text-sm font-semibold text-text-primary">
              UI/UX Design
            </p>
            <p className="mt-1 text-xs text-text-muted">
              200 Courses &nbsp;•&nbsp; 1000+ Students
            </p>
          </div>

          {/* Floating Card 2: Learning Progress 55% (Right / Mid) */}
          <div className="absolute z-20 top-12 sm:top-20 right-2 sm:right-8 lg:right-28 rounded-2xl bg-surface px-4 py-3.5 shadow-panel border border-border/50 min-w-[170px] sm:min-w-[200px]">
            <p className="text-xs font-medium text-text-muted">
              Learning Progress
            </p>
            <p className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
              55%
            </p>
            {/* Progress bar */}
            <div className="mt-2 h-1.5 w-full rounded-pill bg-border">
              <div
                className="h-full rounded-pill bg-accent"
                style={{ width: "55%" }}
                role="progressbar"
                aria-valuenow={55}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="55% completed"
              />
            </div>
          </div>

          {/* Floating Card 3: Happy Students (Bottom Left) */}
          <div className="absolute z-20 bottom-8 sm:bottom-12 left-1 sm:left-4 lg:left-14 rounded-2xl bg-surface px-4 py-3.5 shadow-panel border border-border/50 max-w-[230px] sm:max-w-[250px]">
            <p className="text-sm font-semibold text-text-primary">
              Happy Students
            </p>
            <div className="mt-0.5 flex items-center gap-1.5 text-xs text-text-muted">
              <span>4.5 (240)</span>
              <Star className="h-3.5 w-3.5 fill-text-primary text-text-primary" />
            </div>

            {/* Overlapping Avatars + 2K+ Counter */}
            <div className="mt-2.5 flex items-center">
              {STUDENT_AVATARS.map((src, index) => (
                <div
                  key={src}
                  className="relative h-7 w-7 rounded-full border-2 border-surface overflow-hidden"
                  style={{ marginLeft: index === 0 ? 0 : "-8px" }}
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
              {/* 2K+ Badge (Lime background with black text) */}
              <div
                className="relative z-10 -ml-2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-surface bg-accent text-[10px] font-bold text-on-accent"
                aria-label="More than 2000 students"
              >
                2K+
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
