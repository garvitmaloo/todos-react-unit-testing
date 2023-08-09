import { render, screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import userEvent from "@testing-library/user-event";

import AllTodosContainer from "../components/AllTodosContainer";

const queryClient = new QueryClient();

const renderWithQueryClient = (ui: any) => {
  return render(
    <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
  );
};

describe("All todos page", () => {
  it("should render a todo card for each todo", async () => {
    renderWithQueryClient(<AllTodosContainer />);

    const todoCard = await screen.findAllByTestId(/^todo-card.*/);
    expect(todoCard).toHaveLength(3);
  });

  it("should render separate todo cards for pending and finished tasks", async () => {
    renderWithQueryClient(<AllTodosContainer />);

    const pendingTodoCards = await screen.findAllByTestId(
      /^todo-card--pending.*/
    );
    const finishedTodoCards = await screen.findAllByTestId(
      /^todo-card--finished.*/
    );

    expect(pendingTodoCards).toHaveLength(2);
    expect(finishedTodoCards).toHaveLength(1);
  });

  // Not working - will fix it
  it.skip("should delete a todo card if 'DELETE' request succeeds", async () => {
    renderWithQueryClient(<AllTodosContainer />);

    const deleteBtns = await screen.findAllByTestId("delete-todo-btn");
    await waitFor(async () => {
      await userEvent.click(deleteBtns[0]);
    });
    const todoCard = await screen.findByTestId(/^todo-card.*1$/);
    expect(todoCard).not.toBeInTheDocument();
  });
});
