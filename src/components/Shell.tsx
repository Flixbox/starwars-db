import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  AppShellNavbar,
  Container,
  NavLink,
  Stack,
  Text,
} from "@mantine/core";
import { fetchRoot } from "@/api";
import type { SwapiRoot } from "@/types";

const Shell: React.FC<{ children: React.ReactNode }> = async ({ children }) => {
  let rootData: SwapiRoot;
  try {
    rootData = await fetchRoot();
  } catch (error) {
    console.error(error);
    return <div>Failed to fetch root data</div>;
  }

  return (
    <AppShell
      header={{ height: 30 }}
      navbar={{
        width: 100,
        breakpoint: 0,
      }}
      padding="md"
    >
      <AppShellHeader>
        <Text size="xl">Star Wars DB</Text>
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
      <AppShellMain>
        <Container>{children}</Container>
      </AppShellMain>
    </AppShell>
  );
};

export { Shell };
