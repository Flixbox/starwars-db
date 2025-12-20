import { fetchEntity } from "@/api";
import type { SwapiEntity } from "@/types";

interface EntityPageProps {
  params: Promise<{
    resource: string;
    id: string;
  }>;
}

/**
 * This page shows the details of a single entity.
 */
const EntityPage: React.FC<EntityPageProps> = async ({ params }) => {
  const { resource, id } = await params;

  let entity: SwapiEntity;
  try {
    entity = await fetchEntity(resource, id);
  } catch (error) {
    console.error(error);
    return (
      <div>
        Failed to fetch entity {resource}/{id}
      </div>
    );
  }
  return <div>{JSON.stringify(entity)}</div>;
};

export default EntityPage;
