import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BestRecipes } from "./BestRecipes";
// import { RecipePost } from './RecipePost';

describe("Testing a BestRecipes component", () => {
  it("should show a heading in the section", () => {
    render(<BestRecipes />);

    const mainHead = screen.getByRole("heading", { name: /our best recipes/i });

    expect(mainHead).toBeInTheDocument();
  });

  it("should show a main paragraph", () => {
    render(<BestRecipes />);

    const mainP = screen.getByText('Far far away, behind the word mountains, far from the countries Vakalia and Consonantia, there live the blind texts')

    expect(mainP).toBeInTheDocument();
  });
});
