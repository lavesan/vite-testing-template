import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("should render with primary variant by default", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByText("Click me");
    expect(button).toHaveClass("button primary");
  });

  it("should render with secondary variant when specified", () => {
    render(<Button variant="secondary">Click me</Button>);
    const button = screen.getByText("Click me");
    expect(button).toHaveClass("button secondary");
  });

  it("should merge additional className", () => {
    render(<Button className="extra-class">Click me</Button>);
    const button = screen.getByText("Click me");
    expect(button).toHaveClass("button primary extra-class");
  });

  it("should forward other props to button element", () => {
    render(<Button data-testid="test-button">Click me</Button>);
    const button = screen.getByTestId("test-button");
    expect(button).toBeInTheDocument();
  });
});
