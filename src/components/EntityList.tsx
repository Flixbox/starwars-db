"use client";

import { SwapiEntityList } from "@/types";
import { Button, Stack, Text } from "@mantine/core";
import { useState } from "react";

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
          <Text key={entity.url}>{entity.name}</Text>
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
