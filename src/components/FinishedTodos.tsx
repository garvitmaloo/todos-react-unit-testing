import { Typography } from "@mui/material";
import { Key } from "react";

import { Todo } from "./AllTodosContainer";
import TodoCard from "./TodoCard";

const FinishedTodos = ({ finishedTodos }: { finishedTodos: Todo[] }) => {
  return (
    <div className="w-full overflow-auto shadow-md p-3 text-center">
      <h1 className="mb-5">Finished Todos</h1>

      {finishedTodos.length === 0 && (
        <Typography variant="h5" component="h5">
          Finished tasks appear here.
        </Typography>
      )}

      {finishedTodos.map((todo) => (
        <TodoCard key={todo.id as Key} todoDetails={todo} />
      ))}
    </div>
  );
};

export default FinishedTodos;
