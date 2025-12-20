const BASE_API = "https://swapi.py4e.com/api";

/**
 * Fetches a list of entitys from the SWAPI.
 * The result is cached for 1 hour.
 */
const fetchEntityList = async (resource: string) => {
    console.log(`${BASE_API}/${resource}`)
  const res = await fetch(`${BASE_API}/${resource}`, {
    next: { revalidate: 3600 },
  });
  return res.json();
};

/**
 * Fetches a single entity's details from the SWAPI.
 * The result is cached for 1 hour.
 */
const fetchEntity = async (resource: string, id: string) => {
  const res = await fetch(`${BASE_API}/${resource}/${id}`, {
    next: { revalidate: 3600 },
  });
  return res.json();
};

export { fetchEntityList, fetchEntity };
