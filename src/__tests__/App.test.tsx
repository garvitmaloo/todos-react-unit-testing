import App from "../App";
import { render, screen } from "@testing-library/react";

describe("Home page", () => {
  it("should render the component correctly", () => {
    render(<App />);

    const welcomeText = screen.getByRole("heading", { name: /Welcome/i });
    expect(welcomeText).toBeInTheDocument();
  });
});
