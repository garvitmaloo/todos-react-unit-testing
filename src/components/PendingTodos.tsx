import { Typography } from "@mui/material";
import { Key } from "react";

import { Todo } from "./AllTodosContainer";
import TodoCard from "./TodoCard";

const PendingTodos = ({ pendingTodos }: { pendingTodos: Todo[] }) => {
  return (
    <div className="w-full overflow-auto shadow-md p-3 text-center">
      <h1 className="mb-5">Pending Todos</h1>
      {pendingTodos.length === 0 && (
        <Typography variant="h4" component="h4">
          No Todos. Try adding a new one.
        </Typography>
      )}

      {pendingTodos.map((todo) => (
        <TodoCard key={todo.id as Key} todoDetails={todo} />
      ))}
    </div>
  );
};

export default PendingTodos;
