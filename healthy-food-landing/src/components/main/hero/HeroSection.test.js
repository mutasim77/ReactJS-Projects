import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Hero } from "./HeroSection";

describe("Testing Hero component", () => {
  it("should show heading in component", () => {
    render(<Hero />);

    const mainHead = screen.getByRole("heading");

    expect(mainHead).toBeInTheDocument();
    expect(mainHead).toHaveTextContent("Ready for Trying a new recipe?");
  });

  it("should show a image with correctly alternative text", () => {
    render(<Hero />);

    const mainImg = screen.getByRole("img");

    expect(mainImg).toBeInTheDocument();
    expect(mainImg).toHaveAttribute("alt", "draw with healthy calcule");
  });
  
  it("should show a input to search recipes", () => {
    render(<Hero />);

    const mainInput = screen.getByRole("textbox");

    expect(mainInput).toBeInTheDocument();
    expect(mainInput).toHaveAttribute("placeholder", "Search healthy recipes");
    expect(mainInput).toHaveAttribute("type", "text");
  });

  it("should show a button to find a new recipe", () => {
    render(<Hero />);

    const mainBtn = screen.getByRole("button");

    expect(mainBtn).toBeInTheDocument();
    expect(mainBtn).toHaveAttribute("type", "text");
  });
});
