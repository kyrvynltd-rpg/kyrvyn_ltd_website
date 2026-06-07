import { describe, expect, it } from "vitest";
import { caseStudies } from "@/lib/caseStudies";

describe("caseStudies", () => {
  it("has unique slugs", () => {
    const slugs = caseStudies.map((c) => c.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("has required fields populated", () => {
    for (const cs of caseStudies) {
      expect(cs.slug).toBeTruthy();
      expect(cs.title).toBeTruthy();
      expect(cs.services.length).toBeGreaterThan(0);
      expect(cs.stack.length).toBeGreaterThan(0);
      expect(cs.outcomes.length).toBeGreaterThan(0);
    }
  });
});
