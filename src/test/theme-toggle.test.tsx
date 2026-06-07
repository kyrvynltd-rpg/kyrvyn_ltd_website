import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useTheme } from "next-themes";

describe("ThemeToggle", () => {
  it("toggles from light to dark", async () => {
    const setTheme = vi.fn();
    vi.mocked(useTheme).mockReturnValue({ theme: "light", setTheme } as never);

    render(<ThemeToggle />);
    await screen.findByRole("button", { name: "Toggle Theme" });
    await userEvent.click(screen.getByRole("button", { name: "Toggle Theme" }));
    expect(setTheme).toHaveBeenCalledWith("dark");
  });

  it("toggles from dark to light", async () => {
    const setTheme = vi.fn();
    vi.mocked(useTheme).mockReturnValue({ theme: "dark", setTheme } as never);

    render(<ThemeToggle />);
    await screen.findByRole("button", { name: "Toggle Theme" });
    await userEvent.click(screen.getByRole("button", { name: "Toggle Theme" }));
    expect(setTheme).toHaveBeenCalledWith("light");
  });
});
