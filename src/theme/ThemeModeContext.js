import { createContext, useContext } from "react";

export const ThemeModeContext = createContext(null);

export const useThemeMode = () => {
  const context = useContext(ThemeModeContext);
  if (!context) throw new Error("useThemeMode must be used inside AppThemeProvider");
  return context;
};
