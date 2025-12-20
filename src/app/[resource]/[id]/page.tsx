import { fetchEntity } from "@/api";
import { EntityField } from "@/components";
import type { SwapiEntity } from "@/types";
import { Box, Stack, Title, Text } from "@mantine/core";

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
      <Title>{entity.name}</Title>
      <Stack>
        {Object.entries(entity).map(([key, value]) => (
          <Box key={key} mt={1}>
            <Text>{key}</Text>
            <EntityField key={key} value={value} />
          </Box>
        ))}
      </Stack>
    </>
  );
};

export default EntityPage;
