import { getInternalUrl, isSwapiUrl } from "@/api";
import { NavLink, Text } from "@mantine/core";

const EntityField: React.FC<{ value: unknown }> = ({ value }) => {
  if (Array.isArray(value)) {
    return value.map((item) => <EntityField key={item} value={item} />);
  }
  if (typeof value === "string") {
    if (isSwapiUrl(value)) {
      return <NavLink href={getInternalUrl(value)} label={value} />;
    }
    return <Text>{value}</Text>;
  }

  return null;
};

export { EntityField };
