import { render, screen } from "@testing-library/react";

import App from "../App";

describe("Home page", () => {
  it("should render the page correctly", () => {
    render(<App />);

    const welcomeText = screen.getByRole("heading", {
      name: /Todos Application/i,
    });
    const addNewTodoBtn = screen.getByRole("button", {
      name: /Add new todo/i,
    });
    const pendingTodosText = screen.getByRole("heading", {
      name: /Pending Todos/i,
    });
    const finishedTodosText = screen.getByRole("heading", {
      name: /Finished Todos/i,
    });

    expect(welcomeText).toBeInTheDocument();
    expect(addNewTodoBtn).toBeInTheDocument();
    expect(pendingTodosText).toBeInTheDocument();
    expect(finishedTodosText).toBeInTheDocument();
  });
});
