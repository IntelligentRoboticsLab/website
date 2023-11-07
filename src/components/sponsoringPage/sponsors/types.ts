export enum SponsorLevels {
  Platinum,
  Gold,
  Silver,
  Bronze
}

export interface Sponsor {
    name: string;
    description: string;
    url: string;
    logo: string;
    width: number,  // if we store images in the public folder, this is needed
    height: number, // to let astro Image know the proportions
    level: number;
  }