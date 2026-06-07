import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemaTypes";
import { theme } from "./theme";

const projectId = (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "36w74cui").trim();
const dataset = (process.env.NEXT_PUBLIC_SANITY_DATASET || "production").trim();

export default defineConfig({
  basePath: "/admin",
  name: "KyrvynLtd_CMS",
  title: "Kyrvyn Ltd CMS",

  projectId,
  dataset,

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
  theme,
});
