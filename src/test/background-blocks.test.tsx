import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import BackgroundBlocks from "@/components/ui/BackgroundBlocks";

describe("BackgroundBlocks", () => {
  it("renders a stable set of blocks", () => {
    const raf = vi.fn((cb: FrameRequestCallback) => {
      cb(0);
      return 1;
    });
    const caf = vi.fn();
    vi.stubGlobal("requestAnimationFrame", raf);
    vi.stubGlobal("cancelAnimationFrame", caf);
    vi.useFakeTimers();

    const { container } = render(<BackgroundBlocks />);
    const blocks = container.querySelectorAll(".kyrvyn-block");
    expect(blocks.length).toBe(28);

    vi.useRealTimers();
    vi.unstubAllGlobals();
  });

  it("restarts on focus", async () => {
    const raf = vi.fn((cb: FrameRequestCallback) => {
      cb(0);
      return 1;
    });
    vi.stubGlobal("requestAnimationFrame", raf);
    vi.stubGlobal("cancelAnimationFrame", vi.fn());
    vi.useFakeTimers();

    const { container } = render(<BackgroundBlocks />);
    const root = container.querySelector(".kyrvyn-blocks") as HTMLDivElement;
    expect(root.getAttribute("data-restart-key")).toBe("0");

    window.dispatchEvent(new Event("focus"));
    await vi.runOnlyPendingTimersAsync();
    expect(root.getAttribute("data-restart-key")).toBe("1");

    vi.useRealTimers();
    vi.unstubAllGlobals();
  });

  it("restarts on visibility change to visible", async () => {
    const raf = vi.fn((cb: FrameRequestCallback) => {
      cb(0);
      return 1;
    });
    vi.stubGlobal("requestAnimationFrame", raf);
    vi.stubGlobal("cancelAnimationFrame", vi.fn());
    vi.useFakeTimers();

    const { container } = render(<BackgroundBlocks />);
    const root = container.querySelector(".kyrvyn-blocks") as HTMLDivElement;
    expect(root.getAttribute("data-restart-key")).toBe("0");

    Object.defineProperty(document, "visibilityState", { value: "visible", configurable: true });
    document.dispatchEvent(new Event("visibilitychange"));
    await vi.runOnlyPendingTimersAsync();
    expect(root.getAttribute("data-restart-key")).toBe("1");

    vi.useRealTimers();
    vi.unstubAllGlobals();
  });
});
