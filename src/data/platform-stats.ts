export interface PlatformStat {
  value: string;
  label: string;
}

export const PLATFORM_STATS: PlatformStat[] = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

export interface CreatorBenefit {
  text: string;
}

export const CREATOR_BENEFITS: CreatorBenefit[] = [
  { text: "Share Your Expertise" },
  { text: "Monetize Your Passion" },
  { text: "Flexibility and Autonomy" },
  { text: "Build a Community" },
];
