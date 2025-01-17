import type { Roles } from "../components/roleinformationPage/roles/types";

export const roleList: Roles[] = [
    {
      name: "Software Engineer",
      description: "In this role, you will be working on our Yggdrasil framework, written in rust. The range of tasks are quite diverse, from communication between robots to debugging strange robot behaviour.",
      tags: ["rust", "programming"]
    },
    {
        name: "ML research scientist",
        description: "AI is a large part of ensuring the autonomous robots operate well in a variety of scenarios. In this role, you'll be working on ensuring our ML applications are state-of-the-art.",
        tags: ["AI", "research", "python"]
    },
    {
        name: "ML engineer",
        description: "AI is a large part of ensuring the autonomous robots operate well in a variety of scenarios. This role combines research and testing to train models to improve the robot's ability to play soccer.",
        tags: ["AI", "python", "research"]
    }
    ];
