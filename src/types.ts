interface SwapiRoot {
  [key: string]: string;
}

interface SwapiEntity {
  name?: string;
  title?: string;
  url: string;
  [key: string]: unknown;
}

interface SwapiEntityList {
  count: number;
  next?: string;
  previous?: string;
  results: SwapiEntity[];
}

export type { SwapiRoot, SwapiEntity, SwapiEntityList };
