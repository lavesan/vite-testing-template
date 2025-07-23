import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

describe("App", () => {
  it("should render without crashing", () => {
    expect(() =>
      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      )
    ).not.toThrow();
  });
});
