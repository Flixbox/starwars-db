interface SwapiEntity {
  name?: string;
  title?: string;
  url: string;
  [key: string]: any;
}

interface SwapiEntityList {
  count: number;
  next?: string;
  previous?: string;
  results: SwapiEntity[];
}

export type { SwapiEntity, SwapiEntityList };
