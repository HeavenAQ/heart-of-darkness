export interface Character {
  name: string;
  profile: string;
  description: string;
  images: string[];
}

export const characters: Character[] = [
  {
    name: "Mr. Marlow",
    profile: "/characters/marlow_profile.png",
    description:
      "Marlow, a complex hero combining modernist and Victorian elements, embodies honesty, resilience, and independence, yet is emotionally damaged, mirroring characters like Prufrock and Quentin Compson. A skeptic due to life's hardships, he bridges intellectual and physical labor spheres. Articulate and philosophical without existential dread, his manual work is more than just labor—it's an escape from society's pretense.",
    images: ["/characters/Mr. Marlow.jpg", "/characters/Mr Marlow 1.jpg"],
  },
  {
    name: "Kurtz",
    profile: "/characters/kurtz_profile.png",
    description:
      "Kurtz, the enigmatic leader Marlow pursues, is a multitalented musician and painter with a charismatic, influential persona. His eloquent writings bear chilling undertones, garnering both success and white men's disdain. His descent into degeneracy parallels legendary figures like Faustus, Satan, Ahab, and Heathcliff. With exceptional style, ambition, and near-megalomaniacal scheming, Kurtz stands out in a world of mundane wickedness, warranting attention and condemnation.",
    images: ["/characters/Kurtz.jpg", "/characters/Kurtz2.jpg"],
  },
  {
    name: "The Russian Trader",
    profile: "/characters/trader_profile.png",
    description:
      "Commissioned by a Dutch company, the Russian Trader journeyed alone into Africa for two years before becoming a devoted follower of Kurtz. Prone to grandiose philosophical reflections, his blind loyalty to Kurtz attracts Marlow's critique. His lack of critical thinking is mirrored in his youthfulness and his harlequin-esque, patchy outfit, underscoring his jester-like role as seen by Marlow.",
    images: [
      "/characters/The Rusian Trader.jpg",
      "/characters/fotor-ai-2023060316308.jpg",
    ],
  },
  {
    name: "The General Manager",
    profile: "/characters/manager_profile.png",
    description:
      "Journeying with Marlow, the Manager is distinguished by his striking mediocrity, a stark contrast to Kurtz's extraordinary persona. His average, common attributes arouse a sense of threat towards Kurtz, smiling subtly at the possibility of his downfall. Despite his awkward demeanor, he's a schemer, manipulating situations to his advantage. While less power-hungry than the Brickmaker, his disregard for others reveals a prioritization of self-interest.",
    images: [
      "/characters/The General Manager.jpg",
      "/characters/The General Manager2.jpg",
    ],
  },
  {
    name: "The Brickmaker",
    profile: "/characters/brickmaker_profile.png",
    description:
      "The Brickmaker, a minor character Marlow encounters, mirrors the Company's contradiction: his title doesn't match his tasks, just like the Company's actions contradict its mission in Africa. With no real work, he spends time probing Marlow for information, reflecting his ambition to climb the Company's ranks. Described as a \"papier-mâché Mephistopheles,\" he embodies the greed of the ivory trade and moral bankruptcy of imperialism.",
    images: [
      "/characters/The Brickmaker.jpg",
      "/characters/The Brickmaker3.jpg",
    ],
  },
  {
    name: "Kurtz's African Mistress",
    profile: "/characters/african_profile.png",
    description:
      "A stunning, richly adorned woman on the Inner Station's shore, upon Marlow's arrival and departure, mysteriously influences both Kurtz and the indigenous people. Warned about by the Russian Trader, she evokes fear and, like Kurtz, remains an enigma, never interacting with Marlow, leaving her identity and background unknown.",
    images: [
      "/characters/Kurtz’s African mistress.jpg",
      "/characters/Kurtz’s African mistress4.jpg",
    ],
  },
];
