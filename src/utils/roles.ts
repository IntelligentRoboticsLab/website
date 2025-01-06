import type { Roles } from "../components/roleinformationPage/roles/types";

export const roleList: Roles[] = [
    {
      name: "Rust Programmer",
      description: "In this role, you will be working on our Yggdrasil framework, written in rust. The range of tasks are quite diverse, from communication between robots to debugging strange robot behaviour.",
      tags: ["rust", "programming"]
    },
    {
        name: "AI developer",
        description: "AI is a large part of ensuring the autonomous robots operate well in a variety of scenarios. This role combines research and testing to train models to improve the robot's ability to play soccer.",
        tags: ["AI", "python", "research"]
    }
    ];