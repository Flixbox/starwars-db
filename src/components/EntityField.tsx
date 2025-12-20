import { NavLink, Text } from "@mantine/core";
import {
  fetchEntity,
  getEntityDescriptor,
  getInternalUrl,
  isSwapiUrl,
} from "@/api";
import type { SwapiEntity } from "@/types";

/**
 * Dynamically renders a field based on its value.
 * - Arrays are rendered recursively.
 * - Hyperlinks are converted to internal links.
 * - Unknown types are not rendered.
 */
const EntityField: React.FC<{ value: unknown }> = async ({ value }) => {
  if (Array.isArray(value)) {
    return value.map((item) => <EntityField key={item} value={item} />);
  }

  if (typeof value === "string" && isSwapiUrl(value)) {
    let entity: SwapiEntity;
    try {
      entity = await fetchEntity(value);
    } catch (error) {
      console.error(error);
      return <div>Failed to fetch entity {value}</div>;
    }

    return (
      <NavLink
        href={getInternalUrl(value)}
        label={getEntityDescriptor(entity)}
      />
    );
  }

  if (typeof value === "string" || typeof value === "number") {
    return <Text>{value}</Text>;
  }

  return null;
};

export { EntityField };
