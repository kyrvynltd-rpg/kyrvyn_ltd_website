import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { OfferQuiz } from "@/components/ui/OfferQuiz";

describe("OfferQuiz", () => {
  it("renders step 1 initially and restarts", async () => {
    render(<OfferQuiz />);
    expect(screen.getByText("Quiz • Step 1 of 4")).toBeInTheDocument();
    expect(screen.getByText("What outcome matters most right now?")).toBeInTheDocument();

    const optionBtn = screen.getByRole("button", {
      name: "Launch a website that looks premium and converts",
    });
    await userEvent.click(optionBtn);

    expect(screen.getByText("Quiz • Step 2 of 4")).toBeInTheDocument();

    const restartBtn = screen.getByRole("button", { name: "Restart" });
    await userEvent.click(restartBtn);

    expect(screen.getByText("Quiz • Step 1 of 4")).toBeInTheDocument();
  });

  it("calculates and recommends Bespoke Website Development", async () => {
    render(<OfferQuiz />);

    // Step 1: Website
    await userEvent.click(
      screen.getByRole("button", { name: "Launch a website that looks premium and converts" }),
    );
    // Step 2: Website
    await userEvent.click(screen.getByRole("button", { name: "Low trust or low conversion" }));
    // Step 3: Custom / Website
    await userEvent.click(
      screen.getByRole("button", { name: "We need speed, but we can’t afford quality issues" }),
    );
    // Step 4: Website
    await userEvent.click(screen.getByRole("button", { name: "New build or a full redesign" }));

    expect(screen.getByText("Your best-fit offer")).toBeInTheDocument();
    expect(screen.getByText("Bespoke Website Development")).toBeInTheDocument();

    const retakeBtn = screen.getByRole("button", { name: "Retake quiz" });
    await userEvent.click(retakeBtn);
    expect(screen.getByText("Quiz • Step 1 of 4")).toBeInTheDocument();
  });

  it("calculates and recommends Technical Consulting", async () => {
    render(<OfferQuiz />);

    // Step 1: Consulting
    await userEvent.click(
      screen.getByRole("button", { name: "Get a clear plan before we build anything" }),
    );
    // Step 2: Consulting
    await userEvent.click(
      screen.getByRole("button", { name: "Unclear scope and decision paralysis" }),
    );
    // Step 3: Consulting
    await userEvent.click(
      screen.getByRole("button", { name: "We might build the wrong thing without guidance" }),
    );
    // Step 4: Consulting
    await userEvent.click(
      screen.getByRole("button", { name: "Existing product that needs direction" }),
    );

    expect(screen.getByText("Your best-fit offer")).toBeInTheDocument();
    expect(screen.getByText("Technical Consulting & Architecture")).toBeInTheDocument();
  });

  it("calculates and recommends Custom Integrations", async () => {
    render(<OfferQuiz />);

    // Step 1: Custom
    await userEvent.click(
      screen.getByRole("button", {
        name: "Connect systems / automate workflows / ship complex features",
      }),
    );
    // Step 2: Custom
    await userEvent.click(
      screen.getByRole("button", { name: "Slow site, brittle code, or operational friction" }),
    );
    // Step 3: Custom
    await userEvent.click(
      screen.getByRole("button", { name: "Security and reliability have to be solid" }),
    );
    // Step 4: Custom
    await userEvent.click(
      screen.getByRole("button", { name: "Existing platform that needs upgrades/integrations" }),
    );

    expect(screen.getByText("Your best-fit offer")).toBeInTheDocument();
    expect(
      screen.getByText("Custom Integrations, Blockchain & Platform Modernisation"),
    ).toBeInTheDocument();
  });
});
