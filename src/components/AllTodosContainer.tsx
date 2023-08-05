import FinishedTodos from "./FinishedTodos";
import PendingTodos from "./PendingTodos";

const AllTodosContainer = () => {
  return (
    <div className="flex gap-7 h-[80vh]">
      <PendingTodos />
      <FinishedTodos />
    </div>
  );
};

export default AllTodosContainer;
