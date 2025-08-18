// I know, I should get some sleep

export const layout = (addClerk: boolean, addHeroUi: boolean) => {
  const CLERK_IMPORT = addClerk
    ? `import { ClerkProvider } from '@clerk/tanstack-react-start'`
    : ``;

  const CLERK_PROVIDER_START = addClerk ? `<ClerkProvider>` : ``;
  const CLERK_PROVIDER_END = addClerk ? `</ClerkProvider>` : ``;

  const HEROUI_IMPORT = addHeroUi
    ? `import { Providers } from "@/componets/provider";`
    : ``;

  const HEROUI_START = addHeroUi ? `<Providers>` : ``;
  const HEROUI_END = addHeroUi ? `</Providers>` : ``;

  return `
// src/routes/__root.tsx
/// <reference types="vite/client" />
import type { ReactNode } from "react";
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import "@/styles/globals.css";
${CLERK_IMPORT}
${HEROUI_IMPORT}


export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "TanStack Start Starter",
      },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    ${CLERK_PROVIDER_START}
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
      ${HEROUI_START}
        {children}
      ${HEROUI_END}
        <Scripts />
      </body>
    </html>
    ${CLERK_PROVIDER_END}
  );
}
`;
};
