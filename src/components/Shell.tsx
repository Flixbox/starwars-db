import { fetchRoot } from "@/api";
import type { SwapiRoot } from "@/types";
import {
  AppShell,
  AppShellHeader,
  AppShellNavbar,
  NavLink,
  Stack,
  Text,
} from "@mantine/core";

const Shell: React.FC<{ children: React.ReactNode }> = async ({ children }) => {
  let rootData: SwapiRoot;
  try {
    rootData = await fetchRoot();
  } catch (error) {
    console.error(error);
    return <div>Failed to fetch root data</div>;
  }

  return (
    <AppShell>
      <AppShellHeader>
        <Text>Star Wars DB</Text>
      </AppShellHeader>

      <AppShellNavbar>
        <Stack>
          {Object.entries(rootData).map(([resourceName]) => (
            <NavLink
              key={resourceName}
              href={`/${resourceName}`}
              label={resourceName}
            />
          ))}
        </Stack>
      </AppShellNavbar>
      {children}
    </AppShell>
  );
};

export { Shell };
