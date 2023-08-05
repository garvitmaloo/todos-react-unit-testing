import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import FinishedTodos from "./FinishedTodos";
import PendingTodos from "./PendingTodos";

export interface Todo {
  id: String;
  title: String;
  description: String;
  isFinished: Boolean;
}

const AllTodosContainer = () => {
  const getAllTodosQuery = useQuery({
    queryKey: ["todos"],
    queryFn: () => {
      return axios.get("http://localhost:4000/todos");
    },
  });

  const pendingTodos: Todo[] = [];
  const finishedTodos: Todo[] = [];

  const allTodos = getAllTodosQuery.data?.data as Todo[];
  allTodos &&
    allTodos.forEach((todo) => {
      if (todo.isFinished) {
        finishedTodos.push(todo);
      } else {
        pendingTodos.push(todo);
      }
    });

  return (
    <div className="flex gap-7 h-[80vh]">
      <PendingTodos pendingTodos={pendingTodos} />
      <FinishedTodos finishedTodos={finishedTodos} />
    </div>
  );
};

export default AllTodosContainer;
