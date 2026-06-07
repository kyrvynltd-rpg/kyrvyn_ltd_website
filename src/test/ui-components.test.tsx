import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SectionDivider, SectionHeading } from "@/components/ui/SectionHeading";

describe("ui components", () => {
  it("renders GlassCard children and merges className", () => {
    render(
      <GlassCard className="x">
        <div>hello</div>
      </GlassCard>,
    );
    expect(screen.getByText("hello")).toBeInTheDocument();
    expect(screen.getByText("hello").parentElement).toHaveClass("x");
  });

  it("renders Button with variant and size classes", () => {
    render(
      <Button variant="secondary" size="lg">
        Go
      </Button>,
    );
    const btn = screen.getByRole("button", { name: "Go" });
    expect(btn.className).toContain("rounded-2xl");
    expect(btn.className).toContain("border");
  });

  it("renders ButtonLink as an anchor with href", () => {
    render(<ButtonLink href="/contact">Contact</ButtonLink>);
    const link = screen.getByRole("link", { name: "Contact" });
    expect(link).toHaveAttribute("href", "/contact");
  });

  it("renders Badge variants", () => {
    render(
      <div>
        <Badge>Default</Badge>
        <Badge variant="info">Info</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
      </div>,
    );
    expect(screen.getByText("Default").className).toContain("rounded-full");
    expect(screen.getByText("Info").className).toContain("bg-blue-500/10");
    expect(screen.getByText("Success").className).toContain("bg-emerald-500/10");
    expect(screen.getByText("Warning").className).toContain("bg-amber-500/10");
  });

  it("renders SectionHeading with optional subtitle", () => {
    render(<SectionHeading title="Title" subtitle="Sub" />);
    expect(screen.getByRole("heading", { name: "Title" })).toBeInTheDocument();
    expect(screen.getByText("Sub")).toBeInTheDocument();
  });

  it("renders SectionDivider", () => {
    const { container } = render(<SectionDivider data-testid="divider" />);
    const divider = container.querySelector('[data-testid="divider"]');
    expect(divider).toBeTruthy();
  });
});
