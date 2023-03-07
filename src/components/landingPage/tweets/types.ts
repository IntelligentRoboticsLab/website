export interface Tweet {
  id: string;
  handle: string;
  verified: boolean;
  author: string;
  avatar: string;
  date: Date;
  text: string;
  likes: number;
  retweets: number;
  replies: number;
  quotes: number;
}

// used for preview etc when not given an API key
export const dummyTweet: Tweet = {
  id: "1544909672137867264",
  handle: "blamekitsune",
  author: "kitsune",
  verified: false,
  avatar:
    "https://pbs.twimg.com/profile_images/1541797268461871105/lbXl6PEY_400x400.jpg",
  date: new Date("2022-07-07T05:02:23.000Z"),
  text: "I can't stop wetting my pants.",
  likes: 18,
  retweets: 3,
  replies: 9,
  quotes: 1,
};
