import { Level } from "./types";

export const levels: Level[] = ["A1", "A2", "B1", "B2", "C1"];

export const levelInfo: Record<
  string, { 
    label: string; 
    image: string, 
    explain: string 
}> = {
  A1: { 
    label: "Beginner", 
    image: "https://picsum.photos/300/200", 
    explain: "Basic words for beginner"
  },
  A2: { 
    label: "Elementary", 
    image: "https://picsum.photos/seed/picsum/200/300",
    explain: "Elementary vocabulary list" 
  },
  B1: { 
    label: "Intermediate", 
    image: "https://picsum.photos/id/237/200/300",
    explain: "Intermediate vocabulary set" 
  },
  B2: { 
    label: "Upper-Intermediate", 
    image: "https://picsum.photos/id/200/300/200",
    explain: "Upper-intermediate words" 
  },
  C1: { 
    label: "Advanced", 
    image: "https://picsum.photos/id/1/300/200",
    explain: "Advanced vocabulary terms" 
  },
};
