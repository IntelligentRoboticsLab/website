import type { ImageMetadata } from "astro";

export enum PartnerLevels {
  Platinum,
  Gold,
  Silver,
  Bronze
}

export interface Partner {
    name: string;
    description: string;
    url: string;
    logo: ImageMetadata;
    width: number,  // base dimensions used to preserve proportions when scaling
    height: number, // base dimensions used to preserve proportions when scaling
    img_multiplier: number,
    level: number;
  }
