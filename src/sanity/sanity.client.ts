import { createClient } from "next-sanity";

export const client = createClient({
  projectId: (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "36w74cui").trim(),
  dataset: (process.env.NEXT_PUBLIC_SANITY_DATASET || "production").trim(),
  apiVersion: "2024-03-26",
  useCdn: false, // Ensure live updates bypass the edge cache for immediate admin verification
});
