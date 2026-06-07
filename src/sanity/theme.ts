import { buildLegacyTheme } from "sanity";

export const theme = buildLegacyTheme({
  /* Base theme colors */
  "--black": "#020617",
  "--white": "#FFFFFF",

  "--gray": "#94A3B8",
  "--gray-base": "#94A3B8",

  "--component-bg": "#0F172A",
  "--component-text-color": "#FFFFFF",

  /* Brand Colors */
  "--brand-primary": "#3B82F6",

  /* Default button */
  "--default-button-color": "#94A3B8",
  "--default-button-primary-color": "#3B82F6",
  "--default-button-success-color": "#10B981",
  "--default-button-warning-color": "#F59E0B",
  "--default-button-danger-color": "#EF4444",

  /* State */
  "--state-info-color": "#3B82F6",
  "--state-success-color": "#10B981",
  "--state-warning-color": "#F59E0B",
  "--state-danger-color": "#EF4444",

  /* Navbar */
  "--main-navigation-color": "#020617",
  "--main-navigation-color--inverted": "#FFFFFF",

  /* Focus */
  "--focus-color": "#3B82F6",
});
