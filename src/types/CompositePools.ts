import zenSchema from "@/assets/zen_modeli_new.png";
import tettaSchema from "@/assets/tetta2.png";
import hiitSchema from "@/assets/hiit-models.png";
import spaceSchema from "@/assets/space-models.png";
import {
  hiitImages,
  spaceImages,
  tettaImages,
  zenImages,
} from "@/types/compositeImport";

export type Pool = {
  title: string;
  subtitle: string;
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
  depth: number | [number, number];
  cols?: number;
  image?: string[];
};

export type PoolType = "HIIT" | "SPACE" | "TETTA" | "ZEN";

export const POOL_DATA: Record<PoolType, Pool> = {
  TETTA: {
    title: "TETTA",
    subtitle: "Роскошь в её самом современном проявлении.",
    description:
      "Центральный монумент баccейна TETTA — подиум с нисходящими по обеим сторонам лестничными маршами, выполнены из природного гранита роскошной серии Veinroc. Богатство его контрастной текстуры из светлых и тёмных полос сложно передать словами. Это тот самый случай, когда для того чтобы влюбиться достаточно лишь взглянуть.",
    schema: tettaSchema,
    variants: [
      {
        id: "tetta-1000",
        label: "TETTA 1000",
        volume: 49,
        width: 10,
        length: 3.5,
        depth: 1.5,
        image: [...tettaImages],
      },
      {
        id: "tetta-800",
        label: "TETTA 800",
        volume: 39,
        width: 8,
        length: 3.5,
        depth: 1.5,
        image: [...tettaImages],
      },
      {
        id: "tetta-600",
        label: "TETTA 600",
        volume: 25,
        width: 6,
        length: 3,
        depth: 1.5,
        image: [...tettaImages],
      },
      {
        id: "tetta-500",
        label: "TETTA 500",
        volume: 20,
        width: 5,
        length: 3,
        depth: 1.5,
        image: [...tettaImages],
      },
    ],
  },
  ZEN: {
    title: "ZEN",
    subtitle: "«Меньше значит больше» — манифест минимализма.",
    description:
      "Лаконичность ступеней бассейна Zen останавливает время. Лестница спроектирована таким образом, чтобы отнимать у вас меньше места и, при этом, предоставить больше комфорта. Идеально выверенный шаг ступеней позволяет с лёгкостью спуститься в бассейн, а их ширина достаточна, чтобы присесть для отдыха.",
    schema: zenSchema,
    variants: [
      {
        id: "zen-1000",
        label: "ZEN 1000",
        volume: 49,
        width: 10,
        length: 3.5,
        depth: 1.5,
        image: [...zenImages],
      },
      {
        id: "zen-800",
        label: "ZEN 800",
        volume: 39,
        width: 8,
        length: 3.5,
        depth: 1.5,
        image: [...zenImages],
      },
      {
        id: "zen-600",
        label: "ZEN 600",
        volume: 25,
        width: 6,
        length: 3,
        depth: 1.5,
        image: [...zenImages],
      },
      {
        id: "zen-500",
        label: "ZEN 500",
        volume: 20,
        width: 5,
        length: 3,
        depth: 1.5,
        image: [...zenImages],
      },
    ],
  },
  HIIT: {
    title: "HIIT",
    subtitle: "Рождение новой звезды",
    description:
      "HIIT — первый бассейн, выполненный по традиционной технологии, где была пересмотрена каждая деталь. Чистые линии, отточенные формы и внушительные поверхности — признаки архитектуры на все времена. Перед разработчиками HIIT стояла задача совместить триаду господствующих трендов современной архитектуры: строгий стиль, максимальное пространство и бескомпромиссный комфорт",
    schema: hiitSchema,
    variants: [
      {
        id: "hiit-900",
        label: "HIIT 900",
        volume: 44,
        length: 3.5,
        width: 9,
        depth: [1.3, 1.7],
        cols: 2,
        image: [...hiitImages],
      },
      {
        id: "hiit-800L",
        label: "HIIT 800, One L",
        volume: 41,
        length: 3.5,
        width: 8,
        depth: [1.3, 1.7],
        cols: 1,
        image: [...hiitImages],
      },
      {
        id: "hiit-800R",
        label: "HIIT 800, One R",
        volume: 41,
        length: 3.5,
        width: 8,
        depth: [1.3, 1.7],
        cols: 1,
        image: [...hiitImages],
      },
      {
        id: "hiit-700",
        label: "HIIT 700",
        volume: 32,
        length: 3.5,
        width: 7,
        depth: [1.3, 1.7],
        image: [...hiitImages],
      },
      {
        id: "hiit-600L",
        label: "HIIT 600, One L",
        volume: 30,
        width: 6,
        length: 3.5,
        depth: [1.3, 1.7],
        image: [...hiitImages],
      },
      {
        id: "hiit-600R",
        label: "HIIT 600, One R",
        volume: 30,
        width: 6,
        length: 3.5,
        depth: [1.3, 1.7],
        image: [...hiitImages],
      },
    ],
  },
  SPACE: {
    title: "SPACE",
    subtitle: "100% пространства.",
    schema: spaceSchema,
    description:
      "Домашнего бассейна никогда не бывает много. Бассейн SPACE отдаёт всё своё пространство вам. Ныряйте, плавайте и развлекайтесь в его безграничном объёме.",
    variants: [
      {
        id: "space-1000",
        label: "SPACE 1000",
        volume: 49,
        width: 10,
        length: 3.5,
        depth: 1.5,
        image: [...spaceImages],
      },
      {
        id: "space-800",
        label: "SPACE 800",
        volume: 39,
        width: 8,
        length: 3.5,
        depth: 1.5,
        image: [...spaceImages],
      },
      {
        id: "space-600",
        label: "SPACE 600",
        volume: 25,
        width: 6,
        length: 3,
        depth: 1.5,
        image: [...spaceImages],
      },
      {
        id: "space-500",
        label: "SPACE 500",
        volume: 20,
        width: 5,
        length: 3,
        depth: 1.5,
        image: [...spaceImages],
      },
    ],
  },
};
