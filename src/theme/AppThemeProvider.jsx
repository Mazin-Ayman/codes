import { useEffect, useMemo, useState } from "react";
import { CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { ThemeModeContext } from "./ThemeModeContext";
import { createAppTheme, THEME_STORAGE_KEY } from "./index";

const getInitialMode = () => {
  if (typeof window === "undefined") return "dark";

  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    // Storage can be blocked; fall back to the system preference.
  }

  return window.matchMedia?.("(prefers-color-scheme: light)").matches ? "light" : "dark";
};

const AppThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(getInitialMode);

  useEffect(() => {
    document.documentElement.dataset.theme = mode;
    document.documentElement.style.colorScheme = mode;
    document.getElementById("theme-color")?.setAttribute("content", mode === "dark" ? "#111827" : "#f1f5f9");
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, mode);
    } catch {
      // Ignore storage failures; the theme still works for this session.
    }
  }, [mode]);

  const theme = useMemo(() => createAppTheme(mode), [mode]);
  const value = useMemo(
    () => ({
      mode,
      toggleMode: () => setMode((current) => (current === "dark" ? "light" : "dark")),
    }),
    [mode]
  );

  return (
    <ThemeModeContext.Provider value={value}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeModeContext.Provider>
  );
};

export default AppThemeProvider;
