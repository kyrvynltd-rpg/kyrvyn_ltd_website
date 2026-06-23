import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

describe("NewsletterForm", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("shows error in static export when contact email is not configured", async () => {
    process.env.NEXT_PUBLIC_STATIC_EXPORT = "1";
    delete process.env.NEXT_PUBLIC_CONTACT_EMAIL;

    render(<NewsletterForm compact />);
    await userEvent.type(screen.getByLabelText("Email address"), "a@b.com");
    await userEvent.click(screen.getByRole("button", { name: "Subscribe" }));
    expect(await screen.findByText("Unable to subscribe. Try again.")).toBeInTheDocument();
  });

  it("prepares a mailto request in static export mode", async () => {
    process.env.NEXT_PUBLIC_STATIC_EXPORT = "1";
    process.env.NEXT_PUBLIC_CONTACT_EMAIL = "hello@kyrvyn.co.uk";

    const setHref = vi.fn();
    Object.defineProperty(window, "location", {
      value: {
        set href(v: string) {
          setHref(v);
        },
      },
      writable: true,
    });

    render(<NewsletterForm compact />);
    await userEvent.type(screen.getByLabelText("Email address"), "person@example.com");
    await userEvent.click(screen.getByRole("button", { name: "Subscribe" }));
    expect(setHref).toHaveBeenCalled();
    expect(await screen.findByText("Subscription request prepared.")).toBeInTheDocument();
  });

  it("submits via API when not in static export mode", async () => {
    process.env.NEXT_PUBLIC_STATIC_EXPORT = "0";
    process.env.NEXT_PUBLIC_CONTACT_EMAIL = "hello@kyrvyn.co.uk";

    const fetchMock = vi.fn(async () => ({ ok: true })) as unknown as typeof fetch;
    vi.stubGlobal("fetch", fetchMock);

    render(<NewsletterForm compact />);
    await userEvent.type(screen.getByLabelText("Email address"), "person@example.com");
    await userEvent.click(screen.getByRole("button", { name: "Subscribe" }));

    expect(fetchMock).toHaveBeenCalledWith(
      "/api/newsletter",
      expect.objectContaining({ method: "POST" }),
    );
    expect(await screen.findByText("Subscription request prepared.")).toBeInTheDocument();
    vi.unstubAllGlobals();
  });

  it("shows error on API failure", async () => {
    process.env.NEXT_PUBLIC_STATIC_EXPORT = "0";
    const fetchMock = vi.fn(async () => ({ ok: false })) as unknown as typeof fetch;
    vi.stubGlobal("fetch", fetchMock);

    render(<NewsletterForm compact />);
    await userEvent.type(screen.getByLabelText("Email address"), "person@example.com");
    await userEvent.click(screen.getByRole("button", { name: "Subscribe" }));
    expect(await screen.findByText("Unable to subscribe. Try again.")).toBeInTheDocument();
    vi.unstubAllGlobals();
  });

  it("renders non-compact and submits via API", async () => {
    process.env.NEXT_PUBLIC_STATIC_EXPORT = "0";
    const fetchMock = vi.fn(async () => ({ ok: true })) as unknown as typeof fetch;
    vi.stubGlobal("fetch", fetchMock);

    render(<NewsletterForm />);
    expect(screen.getByText("Get Kyrvyn Updates")).toBeInTheDocument();

    await userEvent.type(
      screen.getByPlaceholderText("Enter your email..."),
      "noncompact@example.com",
    );
    await userEvent.click(screen.getByRole("button", { name: "Subscribe" }));

    expect(fetchMock).toHaveBeenCalledWith(
      "/api/newsletter",
      expect.objectContaining({ method: "POST" }),
    );
    expect(await screen.findByText("Subscription request prepared.")).toBeInTheDocument();
    vi.unstubAllGlobals();
  });

  it("renders non-compact and shows error on API failure", async () => {
    process.env.NEXT_PUBLIC_STATIC_EXPORT = "0";
    const fetchMock = vi.fn(async () => ({ ok: false })) as unknown as typeof fetch;
    vi.stubGlobal("fetch", fetchMock);

    render(<NewsletterForm />);
    expect(screen.getByText("Get Kyrvyn Updates")).toBeInTheDocument();

    await userEvent.type(
      screen.getByPlaceholderText("Enter your email..."),
      "noncompact-fail@example.com",
    );
    await userEvent.click(screen.getByRole("button", { name: "Subscribe" }));
    expect(await screen.findByText("Unable to subscribe. Try again.")).toBeInTheDocument();
    vi.unstubAllGlobals();
  });
});
