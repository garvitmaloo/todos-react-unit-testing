import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { rest } from "msw";

import NewTodoModal from "../components/NewTodoModal";
import { server } from "../mocks/server";

const queryClient = new QueryClient();

const renderWithQueryClient = (ui: any) => {
  return render(
    <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
  );
};

describe("Todo Modal", () => {
  it("should display success message if the POST request succeeds", async () => {
    renderWithQueryClient(<NewTodoModal closeModal={() => {}} />);

    const titleInput = screen.getByTestId("todo-title-input");
    const descriptionInput = screen.getByTestId("todo-desc-input");
    const addBtn = screen.getByRole("button", { name: "Add" });

    await userEvent.type(titleInput, "New todo");
    await userEvent.type(descriptionInput, "Some details");
    await userEvent.click(addBtn);

    const successMsg = await screen.findByTestId("success-msg");
    expect(successMsg).toBeInTheDocument();
  });

  it("should display error message if POST request fails", async () => {
    server.resetHandlers(
      rest.post("http://localhost:4000/todos", (req, res, ctx) =>
        res(ctx.status(404))
      )
    );

    renderWithQueryClient(<NewTodoModal closeModal={() => {}} />);

    const titleInput = screen.getByTestId("todo-title-input");
    const descriptionInput = screen.getByTestId("todo-desc-input");
    const addBtn = screen.getByRole("button", { name: "Add" });

    await userEvent.type(titleInput, "New todo");
    await userEvent.type(descriptionInput, "Some details");
    await userEvent.click(addBtn);

    const errorMsg = await screen.findByTestId("error-msg");
    expect(errorMsg).toBeInTheDocument();
  });
});
