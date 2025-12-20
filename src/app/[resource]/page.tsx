import { fetchEntityList } from "@/api";
import type { SwapiEntityList } from "@/types";

interface EntityListPageProps {
  params: Promise<{
    resource: string;
  }>;
}

/**
 * This page shows a list of entities.
 */
const EntityListPage: React.FC<EntityListPageProps> = async ({ params }) => {
  const { resource } = await params;

  let entityList: SwapiEntityList;
  try {
    entityList = await fetchEntityList(resource);
  } catch (error) {
    console.error(error);
    return <div>Failed to fetch entity list {resource}</div>;
  }
  return <div>{JSON.stringify(entityList)}</div>;
};

export default EntityListPage;
