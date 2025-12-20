import type { Metadata } from "next";
import "./globals.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { Shell } from "@/components";

export const metadata: Metadata = {
  title: "Star Wars DB",
  description: "Star Wars Database",
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const defaultColorScheme = "dark";
  /**
   * On `suppressHydrationWarning`:
   * There will be a mismatch between the client and server rendered HTML.
   * The mismatch is `data-mantine-color-scheme="light"` on the `html` element.
   * This is expected and can be safely ignored.
   */
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript defaultColorScheme={defaultColorScheme} />
      </head>
      <body>
        <MantineProvider defaultColorScheme={defaultColorScheme}>
          <Shell>{children}</Shell>
        </MantineProvider>
      </body>
    </html>
  );
};

export default Layout;
