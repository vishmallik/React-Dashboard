import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";
export type Accent =
  | "#2563EB"
  | "#2a9d90"
  | "#f04345"
  | "#ea45a0"
  | "#e1b340"
  | "#23b124";

export enum AccentColor {
  BLUE = "#2563EB",
  CYAN = "#2a9d90",
  RED = "#f04345",
  MAGENTA = "#ea45a0",
  YELLOW = "#e1b340",
  GREEN = "#23b124",
}

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  defaultAccent?: Accent;
  storageKey?: string;
  accentStorageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  accent: Accent;
  setAccent: (accent: Accent) => void;
};

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
  accent: AccentColor.BLUE,
  setAccent: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  defaultAccent = AccentColor.BLUE,
  storageKey = "app-theme",
  accentStorageKey = "app-accent",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );
  const [accent, setAccent] = useState<Accent>(
    () => (localStorage.getItem(accentStorageKey) as Accent) || defaultAccent
  );
  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
    accent,
    setAccent: (accent: Accent) => {
      localStorage.setItem(accentStorageKey, accent);
      setAccent(accent);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
