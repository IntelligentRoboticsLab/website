import type { Partner } from "../components/partnershipsPage/partners/types";
import { PartnerLevels } from "../components/partnershipsPage/partners/types";

  // UNCOMMENT TO TEST THE DIFFERENT LEVELS
  export const PartnerListLevel1: Partner[] = [
    {
      name: "Universiteit van Amsterdam",
      description: "",
      url: "https://www.uva.nl/",
      width: 120,
      height: 35,
      img_multiplier: 100,
      logo: "https://boostcrop.eu/wp-content/uploads/2019/03/universiteit-van-amsterdam-logo-png-transparent.png",
      level: PartnerLevels.Platinum
    }
    // https://www.auf.nl/binaries/_ht_1562081236409/logolargeretina/content/gallery/channellogos/auf/auf-large-nl.svg
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
      logo: "https://www.auf.nl/binaries/_ht_1562081236409/logolargeretina/content/gallery/channellogos/auf/auf-large-nl.svg",
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
      logo: "https://static.wixstatic.com/media/4f8123_1d56194d420648ec907078f5fc83ade1~mv2.png/v1/crop/x_0,y_54,w_4420,h_772/fill/w_336,h_58,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo%20blue.png",
      level: PartnerLevels.Bronze
    }
    ];