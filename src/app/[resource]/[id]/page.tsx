import { Box, Stack, Text, Title } from "@mantine/core";
import { fetchEntity, getEntityDescriptor } from "@/api";
import type { SwapiEntity } from "@/types";
import { EntityField } from "./_components/EntityField";

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
  return (
    <>
      <Title>{getEntityDescriptor(entity)}</Title>
      <Stack>
        {Object.entries(entity).map(([key, value]) => (
          <Box key={key} mt={1}>
            <Text fs="italic">{key}</Text>
            <EntityField key={key} value={value} />
          </Box>
        ))}
      </Stack>
    </>
  );
};

export default EntityPage;
