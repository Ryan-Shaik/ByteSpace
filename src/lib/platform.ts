import {
  PLATFORM_STATS,
  CREATOR_BENEFITS,
  type PlatformStat,
  type CreatorBenefit,
} from "@/src/data/platform-stats";

export function getPlatformStats(): PlatformStat[] {
  return PLATFORM_STATS;
}

export function getCreatorBenefits(): CreatorBenefit[] {
  return CREATOR_BENEFITS;
}
