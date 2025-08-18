export const hero = `
// hero.ts
import { heroui } from "@heroui/theme";
export default heroui();
`;

export const gloablcss = `
@import "tailwindcss";
@plugin './hero.ts';
/* Note: You may need to change the path to fit your project structure */
@source '../../node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}';
@custom-variant dark (&:is(.dark *));
`;

export const provider = `
import { HeroUIProvider } from "@heroui/system";

export interface ProvidersProps {
  children: React.ReactNode;
}


export function Providers({ children}: ProvidersProps) {
  return (
    <HeroUIProvider>
      {children}
    </HeroUIProvider>
  );
}
`;
