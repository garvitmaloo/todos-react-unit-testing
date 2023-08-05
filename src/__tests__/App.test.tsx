import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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

  it("shows model only when add new todo btn is clicked", async () => {
    render(<App />);

    const modal = screen.queryByTestId("new-todo-modal");
    expect(modal).not.toBeInTheDocument();

    const addNewTodoBtn = screen.getByRole("button", { name: /Add new Todo/i });
    await userEvent.click(addNewTodoBtn);

    const modalTitle = await screen.findByRole("heading", {
      name: /Add A New Todo/i,
    });
    const newTodoForm = await screen.findByTestId("new-todo-form");
    const submitFormBtn = await screen.findByRole("button", { name: /Add/i });

    expect(modalTitle).toBeInTheDocument();
    expect(newTodoForm).toBeInTheDocument();
    expect(submitFormBtn).toBeInTheDocument();
  });
});
