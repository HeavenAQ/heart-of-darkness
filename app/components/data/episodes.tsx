export interface Episode {
  id: string;
  title: string;
  description: string;
  images: string[];
}

export const episodes: Episode[] = [
  {
    id: "01",
    title: "Before the Memories Set off",
    description: `At sunset, five men, including Marlow and the unnamed Narrator, are aboard a pleasure ship called the Nellie, anchored at the Thames mouth, awaiting the tide. The mood is meditative. Marlow reminisces about the first Romans in England and his own voyage up the Congo River. He was employed by the Belgian "Company" that traded on the Congo River after spotting a map of Africa in a shop window. He got the job thanks to his aunt's connections and was desired because a previous steamer captain was killed in a conflict with the natives...`,
    images: ["/story/part 1.png", "/story/part 1-1.png"],
  },
  {
    id: "02",
    title: "The Beginning",
    description: `Marlow recounts the journey to sign his contract in a city resembling a "whited sepulchre" (probably Brussels). He shares a story about his predecessor, Fresleven, who was killed in a dispute over chickens and left in a deserted African village. Upon arriving at the Company's offices, Marlow encounters two knitting women, signs his contract, and has a medical examination. After visiting his aunt, who naively hopes for his role in "civilizing" Africa, Marlow departs on a French steamer, feeling like he's journeying to the center of the earth...`,
    images: ["/story/part 2.png", "/story/part 2-1.png"],
  },
  {
    id: "03",
    title: "The Unexpected",
    description: `Marlow's overland journey covers 200 miles with a sickly companion and a slowly diminishing team of native bearers. He arrives at the decrepit Central Station to find his steamer sunk. He suspects foul play to prevent him from reaching Kurtz. The general manager, who evokes unease in others and is immune to tropical diseases, praises Kurtz and hints at his illness...`,
    images: ["/story/part 3.png", "/story/part 3-1.png"],
  },
  {
    id: "04",
    title: "Journey to Kurtz",
    description: `Marlow overhears the manager and his uncle discussing their problems with Kurtz and a trader in the Congo. Kurtz's ambitions threaten the manager's position, and the trader's activities bother them. The manager's uncle suggests dealing with these issues by hanging the trader and hoping that the tropical disease will eliminate Kurtz. This alarms Marlow, who interrupts their conversation...`,
    images: ["/story/part 4.png", "/story/part4-1.png"],
  },
  {
    id: "05",
    title: "The Riot Before Their Arrivals",
    description: `As they near Kurtz's station, they're attacked by natives, causing the helmsman's death. Marlow manages to scare them off with the steam whistle. The pilgrims are agitated but Marlow is preoccupied with the thought of Kurtz's possible death. Marlow then reflects on Kurtz's life, including his dominating demeanor and his controversial report for the International Society for the Suppression of Savage Customs. He feels a responsibility for preserving Kurtz's memory...`,
    images: ["/story/part 5.png", "/story/part 5-1.png"],
  },
  {
    id: "06",
    title: "Unveil of Kurtz",
    description: `The Russian trader urges Marlow to take Kurtz away, describing Kurtz's exploits, erratic behavior, and illnesses. The Russian has tried to return Kurtz to civilization but Kurtz's obsession with ivory raiding and dominance over a native tribe have hindered this. Despite his actions, including threatening the Russian over ivory, the trader defends Kurtz, stating he cannot be judged by normal standards. As they converse, Marlow realizes that ornamental balls he saw at the station are severed heads. The Russian claims these belong to rebels, a fact Marlow finds surprisingly humorous. The Russian expresses his helplessness over Kurtz's current critical condition and feels abandoned by the Company...`,
    images: ["/story/part6.png", "/story/part6-1.png"],
  },
  {
    id: "07",
    title: "Confrontation",
    description: `On the steamer, Kurtz greets Marlow and has a heated argument with the manager. Marlow withdraws to the steamer's deck, noticing Kurtz's native mistress amongst the locals. The Russian reveals her influence over Kurtz and the trouble she causes. The manager then confides in Marlow about Kurtz's unsound methods causing issues for the Company. Disgusted by the manager's hypocrisy, Marlow alienates himself by praising Kurtz's remarkability. The Russian then reveals that Kurtz had planned the steamer attack to convince the manager he was dead. The Russian departs after Marlow warns him about the manager's intentions to hang him...`,
    images: ["/story/part7.png", "/story/part7-1.png"],
  },
  {
    id: "08",
    title: "The End of Kurtz",
    description: `Back on the journey towards civilization, Marlow spends most of his time alone with a deteriorating Kurtz. The manager dismisses them both as unsound but harmless. Kurtz shares his thoughts and plans with Marlow, who is both impressed and disappointed. When the steamer breaks down, Kurtz entrusts his papers to Marlow for safekeeping, fearing the manager will seize his legacy. As Kurtz's condition worsens, he admits he is waiting for death and utters his famous last words, "The horror! The horror!" before dying. Kurtz is buried, and Marlow falls seriously ill...`,
    images: ["/story/part8.png", "/story/part8-1.png"],
  },
  {
    id: "09",
    title: "Back in Civilization",
    description: `After barely surviving his illness, Marlow returns to Brussels, his contempt for the complacency of the people there growing. He only gives a small part of Kurtz's documents to the Company representative, keeps a few personal items, and hands over some to Kurtz's cousin and a journalist. Marlow visits Kurtz's Intended, still in mourning after a year. As she praises Kurtz, Marlow feels annoyed but eventually pities her. When she asks about Kurtz's last words, Marlow lies, saying it was her name. Marlow ends his tale, leaving the listeners in an atmosphere of "immense darkness".`,
    images: ["/story/part9.png", "/story/part9-1.png", "/story/part9-2.png"],
  },
];
