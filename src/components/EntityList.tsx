"use client";

import { Button, NavLink, Stack } from "@mantine/core";
import { useState } from "react";
import { getInternalUrl } from "@/api";
import type { SwapiEntityList } from "@/types";

interface EntityListProps {
  initialData: SwapiEntityList;
}

const EntityList: React.FC<EntityListProps> = ({ initialData }) => {
  const [data, setData] = useState(initialData);
  const [next, setNext] = useState(initialData.next);
  const [loading, setLoading] = useState(false);

  const fetchNext = async () => {
    if (!next) return;
    setLoading(true);
    try {
      const res = await fetch(next);
      const newData: SwapiEntityList = await res.json();
      setData({
        ...data,
        ...newData,
        results: [...data.results, ...newData.results],
      });
      setNext(newData.next);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <>
      <Stack>
        {data.results.map((entity) => (
          <NavLink
            key={entity.url}
            href={getInternalUrl(entity.url)}
            label={entity.name}
          />
        ))}
      </Stack>
      {next && (
        <Button onClick={fetchNext} loading={loading}>
          Load more
        </Button>
      )}
    </>
  );
};

export { EntityList };
