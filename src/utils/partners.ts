import type { Partner } from "../components/partnershipsPage/partners/types";
import { PartnerLevels } from "../components/partnershipsPage/partners/types";

  // UNCOMMENT TO TEST THE DIFFERENT LEVELS
  export const PartnerListLevel1: Partner[] = [
    {
      name: "Universiteit van Amsterdam",
      description: "",
      url: "https://www.uva.nl/",
      width: 120,
      height: 60,
      img_multiplier: 100,
      logo: "/images/uva.png",
      level: PartnerLevels.Platinum
    }
    ];

    export const PartnerListLevel2: Partner[] = [
    ];

    export const PartnerListLevel3: Partner[] = [
      {
      name: "Amsterdam Universiteitsfonds",
      description: "",
      url: "https://www.auf.nl/?cb",
      width: 120,
      height: 10,
      img_multiplier: 200,
      logo: "/images/universiteitsfonds.png",
      level: PartnerLevels.Silver
    }
    ];

    export const PartnerListLevel4: Partner[] = [
      {
      name: "Zeta Alpha",
      description: "Zeta Alpha is the best Neural Discovery Platform for AI and beyond. Use state-of-the-art Neural Search and Generative AI to improve how you and your team discover, organize and share internal knowledge. Make better decisions, avoid reinventing the wheel, make staying in the know effortless, and make an impact with your work faster.",
      url: "https://www.zeta-alpha.com/",
      width: 120,
      height: 20,
      img_multiplier: 100,
      logo: "/images/zetaalpha.png",
      level: PartnerLevels.Bronze
    },
    {
      name: "Startup Village",
      description: "",
      url: "https://www.startupvillage.nl/",
      width: 1394,
      height: 707,
      img_multiplier: 70,
      logo: "/images/startupvillage.png",
      level: PartnerLevels.Bronze
    }
    ];