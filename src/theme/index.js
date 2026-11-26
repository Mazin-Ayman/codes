import { createTheme } from "@mui/material/styles";

const fontFamily = '"Cairo", Arial, Helvetica, sans-serif';

export const THEME_STORAGE_KEY = "codes-theme-mode";

// Keep the palette values in sync with the CSS custom properties in src/index.css.
export const THEME_TOKENS = {
  dark: {
    background: "#111827",
    surface: "#1f2937",
    text: "#f9fafb",
    muted: "#cbd5e1",
    primary: "#38bdf8",
    primaryHover: "#7dd3fc",
    inputBackground: "#f8fafc",
    inputText: "#0f172a",
    inputLabel: "#334155",
    inputBorder: "rgba(226, 232, 240, 0.55)",
    shadow: "0 8px 24px rgba(0, 0, 0, 0.35)",
    selection: "rgba(56, 189, 248, 0.18)",
  },
  light: {
    background: "#f1f5f9",
    surface: "#ffffff",
    text: "#0f172a",
    muted: "#475569",
    primary: "#0369a1",
    primaryHover: "#075985",
    inputBackground: "#ffffff",
    inputText: "#0f172a",
    inputLabel: "#334155",
    inputBorder: "rgba(15, 23, 42, 0.22)",
    shadow: "0 8px 24px rgba(15, 23, 42, 0.1)",
    selection: "rgba(3, 105, 161, 0.12)",
  },
};

export const createAppTheme = (mode) => {
  const tokens = THEME_TOKENS[mode] ?? THEME_TOKENS.dark;

  return createTheme({
    direction: "rtl",
    palette: {
      mode,
      primary: { main: tokens.primary },
      success: { main: "#22c55e" },
      warning: { main: "#f59e0b" },
      error: { main: "#ef4444" },
      background: { default: tokens.background, paper: tokens.surface },
      text: { primary: tokens.text, secondary: tokens.muted },
    },
    typography: {
      fontFamily,
      button: { fontWeight: 700 },
    },
    shape: { borderRadius: 10 },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: { backgroundColor: tokens.background, color: tokens.text },
        },
      },
      MuiTextField: {
        defaultProps: { size: "small" },
      },
      MuiAutocomplete: {
        styleOverrides: {
          root: {
            width: "100%",
            minWidth: 240,
            backgroundColor: tokens.inputBackground,
            borderRadius: 8,
            boxShadow: tokens.shadow,
            "& input": { color: tokens.inputText, textAlign: "center" },
            "& input::placeholder": { color: "#64748b", opacity: 1 },
            "& .MuiInputLabel-root, & .MuiInputLabel-root.Mui-focused": {
              color: tokens.inputLabel,
            },
            "& .MuiOutlinedInput-notchedOutline": { borderColor: tokens.inputBorder },
            "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: tokens.primary },
            "& .MuiAutocomplete-popupIndicator, & .MuiAutocomplete-clearIndicator": {
              color: tokens.inputText,
            },
          },
          paper: { backgroundColor: tokens.surface, color: tokens.text },
          option: {
            color: tokens.text,
            '&[aria-selected="true"]': { backgroundColor: tokens.selection },
          },
        },
      },
      MuiAlert: {
        styleOverrides: { root: { fontFamily, fontWeight: 600 } },
      },
    },
  });
};
