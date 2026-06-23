import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { CookieBanner } from "@/components/ui/CookieBanner";
import { usePathname } from "next/navigation";

vi.mock("framer-motion", async () => {
  const original = await vi.importActual<typeof import("framer-motion")>("framer-motion");
  return {
    ...original,
    useReducedMotion: vi.fn(() => false),
  };
});

describe("CookieBanner", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.mocked(usePathname).mockReturnValue("/");
    // Reset mock for each test
    import("framer-motion").then(({ useReducedMotion }) => {
      vi.mocked(useReducedMotion).mockReturnValue(false);
    });
  });

  it("shows when no consent and stores consent on accept", async () => {
    render(<CookieBanner />);
    expect(await screen.findByText("Cookies and Data Governance")).toBeInTheDocument();
    await userEvent.click(screen.getByRole("button", { name: "Accept All" }));
    expect(localStorage.getItem("cookie_consent")).toBe("all");
  });

  it("does not show when consent already exists", () => {
    localStorage.setItem("cookie_consent", "essential");
    const { container } = render(<CookieBanner />);
    expect(container.firstChild).toBeNull();
  });

  it("stores essential consent", async () => {
    render(<CookieBanner />);
    expect(await screen.findByText("Cookies and Data Governance")).toBeInTheDocument();
    await userEvent.click(screen.getByRole("button", { name: "Essential Cookies Only" }));
    expect(localStorage.getItem("cookie_consent")).toBe("essential");
  });

  it("does not render on admin routes", () => {
    vi.mocked(usePathname).mockReturnValue("/admin");
    const { container } = render(<CookieBanner />);
    expect(container.firstChild).toBeNull();
  });

  it("handles Manage Preferences consent click", async () => {
    render(<CookieBanner />);
    expect(await screen.findByText("Cookies and Data Governance")).toBeInTheDocument();
    await userEvent.click(screen.getByRole("button", { name: "Manage Preferences" }));
    expect(localStorage.getItem("cookie_consent")).toBe("essential");
  });

  it("renders correctly under reduced motion", async () => {
    const { useReducedMotion } = await import("framer-motion");
    vi.mocked(useReducedMotion).mockReturnValue(true);

    render(<CookieBanner />);
    expect(await screen.findByText("Cookies and Data Governance")).toBeInTheDocument();
  });
});
