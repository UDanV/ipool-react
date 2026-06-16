import gallery1 from "@/assets/gallery_img1.png";
import gallery2 from "@/assets/gallery_img2.png";
import gallery3 from "@/assets/gallery_img3.png";
import gallery4 from "@/assets/gallery_img4.png";
import zenSchema from "@/assets/zen_modeli_new.png";
import tettaSchema from "@/assets/tetta2.png";
import hiitSchema from "@/assets/hiit-models.png";
import spaceSchema from "@/assets/space-models.png";

export type Pool = {
  description: string;
  schema?: string;
  variants: PoolVariant[];
};

export type PoolVariant = {
  id: string;
  label: string;
  volume: number;
  width: number;
  length: number;
  depth: string | number;
  cols?: number;
  image?: string[];
};

export type PoolType = "HIIT" | "SPACE" | "TETTA" | "ZEN";

export const POOL_DATA: Record<PoolType, Pool> = {
  TETTA: {
    description: "Центральный монумент бассейна TETTA...",
    schema: tettaSchema,
    variants: [
      {
        id: "tetta-1000",
        label: "TETTA 1000",
        volume: 49,
        width: 10,
        length: 3.5,
        depth: 1.5,
        image: [gallery1],
      },
      {
        id: "tetta-800",
        label: "TETTA 800",
        volume: 39,
        width: 8,
        length: 3.5,
        depth: 1.5,
        image: [gallery2],
      },
      {
        id: "tetta-600",
        label: "TETTA 600",
        volume: 25,
        width: 6,
        length: 3,
        depth: 1.5,
        image: [gallery2],
      },
      {
        id: "tetta-500",
        label: "TETTA 500",
        volume: 20,
        width: 5,
        length: 3,
        depth: 1.5,
        image: [gallery3],
      },
    ],
  },
  ZEN: {
    description: "Бассейн ZEN — спокойствие и баланс",
    schema: zenSchema,
    variants: [
      {
        id: "zen-1000",
        label: "ZEN 1000",
        volume: 49,
        width: 10,
        length: 3.5,
        depth: 1.5,
        image: [gallery1],
      },
      {
        id: "zen-800",
        label: "ZEN 800",
        volume: 39,
        width: 8,
        length: 3.5,
        depth: 1.5,
        image: [gallery4],
      },
      {
        id: "zen-600",
        label: "ZEN 600",
        volume: 25,
        width: 6,
        length: 3,
        depth: 1.5,
        image: [gallery1],
      },
      {
        id: "zen-500",
        label: "ZEN 500",
        volume: 20,
        width: 5,
        length: 3,
        depth: 1.5,
        image: [gallery1],
      },
    ],
  },
  HIIT: {
    description: "HIIT — бассейн для интенсивных тренировок",
    schema: hiitSchema,
    variants: [
      {
        id: "hiit-900",
        label: "HIIT 900",
        volume: 44,
        length: 3.5,
        width: 9,
        depth: "1.3-1.7 (2)",
        cols: 2,
        image: [gallery1],
      },
      {
        id: "hiit-800L",
        label: "HIIT 800, One L",
        volume: 41,
        length: 3.5,
        width: 8,
        depth: "1.3-1.7 (1)",
        cols: 1,
        image: [gallery1],
      },
      {
        id: "hiit-800R",
        label: "HIIT 800, One R",
        volume: 41,
        length: 3.5,
        width: 8,
        depth: "1.3-1.7 (1)",
        cols: 1,
        image: [gallery1],
      },
      {
        id: "hiit-700",
        label: "HIIT 700",
        volume: 32,
        length: 3.5,
        width: 7,
        depth: "1.3-1.7",
        image: [gallery1],
      },
      {
        id: "hiit-600L",
        label: "HIIT 600, One L",
        volume: 30,
        width: 6,
        length: 3.5,
        depth: "1.3-1.7",
        image: [gallery1],
      },
      {
        id: "hiit-600R",
        label: "HIIT 600, One R",
        volume: 30,
        width: 6,
        length: 3.5,
        depth: "1.3-1.7",
        image: [gallery1],
      },
    ],
  },
  SPACE: {
    description: "SPACE — просторный бассейн для релакса",
    schema: spaceSchema,
    variants: [
      {
        id: "space-1000",
        label: "SPACE 1000",
        volume: 49,
        width: 10,
        length: 3.5,
        depth: 1.5,
        image: [gallery1],
      },
      {
        id: "space-800",
        label: "SPACE 800",
        volume: 39,
        width: 8,
        length: 3.5,
        depth: 1.5,
        image: [gallery1],
      },
      {
        id: "space-600",
        label: "SPACE 600",
        volume: 25,
        width: 6,
        length: 3,
        depth: 1.5,
        image: [gallery1],
      },
      {
        id: "space-500",
        label: "SPACE 500",
        volume: 20,
        width: 5,
        length: 3,
        depth: 1.5,
        image: [gallery1],
      },
    ],
  },
};