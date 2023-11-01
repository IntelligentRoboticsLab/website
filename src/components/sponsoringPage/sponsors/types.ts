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
    level: number; // high is 0, low is 3
  }