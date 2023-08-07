import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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

    const todoCard = await screen.findAllByTestId("todo-card");
    expect(todoCard).toHaveLength(2);
  });
});
