import { AppShell } from "@mantine/core";

const Shell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <AppShell>{children}</AppShell>;
};

export { Shell };
