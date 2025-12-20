"use client";

import { createTheme, type MantineTheme } from "@mantine/core";

const theme = createTheme({
  components: {
    NavLink: {
      styles: (theme: MantineTheme) => ({
        root: {
          color: theme.colors.blue[6],
        },
        label: {
          color: theme.colors.blue[6],
        },
        icon: {
          color: theme.colors.blue[6],
        },
      }),
    },
  },
});

export { theme };
