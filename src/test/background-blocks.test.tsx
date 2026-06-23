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

  it("restarts on heartbeat when requestAnimationFrame stalls", async () => {
    let now = 0;
    const nowMock = vi.spyOn(performance, "now").mockImplementation(() => now);

    vi.useFakeTimers();
    let called = false;
    const raf = vi.fn((cb: FrameRequestCallback) => {
      if (!called) {
        called = true;
        setTimeout(() => cb(0), 16);
      }
      return 1;
    });
    vi.stubGlobal("requestAnimationFrame", raf);
    vi.stubGlobal("cancelAnimationFrame", vi.fn());

    const { container } = render(<BackgroundBlocks />);
    const root = container.querySelector(".kyrvyn-blocks") as HTMLDivElement;
    expect(root.getAttribute("data-restart-key")).toBe("0");

    // Advance time by 16ms to process the initial tick (setting lastTick = 0)
    vi.advanceTimersByTime(16);
    await vi.runOnlyPendingTimersAsync();

    // Advance time incrementally to ensure timers and interval tick are processed
    for (let step = 0; step < 3; step++) {
      now += 1000;
      vi.advanceTimersByTime(1000);
      await vi.runOnlyPendingTimersAsync();
    }

    expect(root.getAttribute("data-restart-key")).not.toBe("0");

    nowMock.mockRestore();
    vi.useRealTimers();
    vi.unstubAllGlobals();
  });

  it("restarts on heartbeat after 15 seconds of activity", async () => {
    let now = 0;
    const nowMock = vi.spyOn(performance, "now").mockImplementation(() => now);

    // Keep requestAnimationFrame ticking regularly
    const raf = vi.fn((cb: FrameRequestCallback) => {
      // simulate continuous ticking
      setTimeout(() => cb(now), 16);
      return 1;
    });
    vi.stubGlobal("requestAnimationFrame", raf);
    vi.stubGlobal("cancelAnimationFrame", vi.fn());
    vi.useFakeTimers();

    const { container } = render(<BackgroundBlocks />);
    const root = container.querySelector(".kyrvyn-blocks") as HTMLDivElement;
    expect(root.getAttribute("data-restart-key")).toBe("0");

    // Advance time by 16000ms. Since we simulate continuous ticking, lastTick will be close to now (now - lastTick <= 1200),
    // but now - lastActive = 16000 > 15000, which triggers forceRestart.
    for (let step = 0; step < 16; step++) {
      now += 1000;
      vi.advanceTimersByTime(1000);
      await vi.runOnlyPendingTimersAsync();
    }

    expect(root.getAttribute("data-restart-key")).not.toBe("0");

    nowMock.mockRestore();
    vi.useRealTimers();
    vi.unstubAllGlobals();
  });

  it("does not restart on visibilitychange when visibilityState is not visible", async () => {
    vi.useFakeTimers();

    const { container } = render(<BackgroundBlocks />);
    const root = container.querySelector(".kyrvyn-blocks") as HTMLDivElement;
    expect(root.getAttribute("data-restart-key")).toBe("0");

    Object.defineProperty(document, "visibilityState", { value: "hidden", configurable: true });
    document.dispatchEvent(new Event("visibilitychange"));
    await vi.runOnlyPendingTimersAsync();
    expect(root.getAttribute("data-restart-key")).toBe("0");

    vi.useRealTimers();
  });

  it("does not restart on heartbeat when visibilityState is not visible", async () => {
    let now = 0;
    const nowMock = vi.spyOn(performance, "now").mockImplementation(() => now);

    vi.useFakeTimers();
    let called = false;
    const raf = vi.fn((cb: FrameRequestCallback) => {
      if (!called) {
        called = true;
        setTimeout(() => cb(0), 16);
      }
      return 1;
    });
    vi.stubGlobal("requestAnimationFrame", raf);
    vi.stubGlobal("cancelAnimationFrame", vi.fn());

    const { container } = render(<BackgroundBlocks />);
    const root = container.querySelector(".kyrvyn-blocks") as HTMLDivElement;
    expect(root.getAttribute("data-restart-key")).toBe("0");

    vi.advanceTimersByTime(16);
    await vi.runOnlyPendingTimersAsync();

    // Set state to hidden
    Object.defineProperty(document, "visibilityState", { value: "hidden", configurable: true });

    // Advance time where heartbeat runs, but visibility is hidden, so it should exit early and not restart
    now = 1500;
    vi.advanceTimersByTime(1500);
    await vi.runOnlyPendingTimersAsync();

    expect(root.getAttribute("data-restart-key")).toBe("0");

    nowMock.mockRestore();
    vi.useRealTimers();
    vi.unstubAllGlobals();
  });

  it("restarts on window resize", async () => {
    vi.useFakeTimers();

    const { container } = render(<BackgroundBlocks />);
    const root = container.querySelector(".kyrvyn-blocks") as HTMLDivElement;
    expect(root.getAttribute("data-restart-key")).toBe("0");

    window.dispatchEvent(new Event("resize"));
    await vi.runOnlyPendingTimersAsync();
    expect(root.getAttribute("data-restart-key")).toBe("1");

    vi.useRealTimers();
  });
});
