import type { SwapiEntity, SwapiEntityList, SwapiRoot } from "@/types";

const BASE_API = `https://swapi.py4e.com/api`;

/**
 * Fetches the root of the SWAPI, containing links to all resources.
 * The result is cached for 1 hour.
 *
 * @link https://swapi.py4e.com/documentation#root
 */
const fetchRoot = async (): Promise<SwapiRoot> => {
  const res = await fetch(`${BASE_API}`, {
    next: { revalidate: 3600 },
  });
  return res.json();
};

/**
 * Fetches a list of entities from the SWAPI.
 * The result is cached for 1 hour.
 *
 * @link https://swapi.py4e.com/documentation#people
 */
const fetchEntityList = async (resource: string): Promise<SwapiEntityList> => {
  const res = await fetch(`${BASE_API}/${resource}`, {
    next: { revalidate: 3600 },
  });
  return res.json();
};

interface FetchEntity {
  (resource: string, id: string): Promise<SwapiEntity>;
  (url: string): Promise<SwapiEntity>;
}

/**
 * Fetches a single entity's details from the SWAPI.
 * The result is cached for 1 hour.
 *
 * You can either pass a URL or a resource and an ID.
 *
 * @link https://swapi.py4e.com/documentation#people
 */
const fetchEntity: FetchEntity = async (
  resourceOrUrl: string,
  id?: string,
): Promise<SwapiEntity> => {
  const assembledUrl = id
    ? `${BASE_API}/${resourceOrUrl}/${id}`
    : resourceOrUrl;
  const res = await fetch(assembledUrl, {
    next: { revalidate: 3600 },
  });
  return res.json();
};

export { BASE_API, fetchRoot, fetchEntityList, fetchEntity };
