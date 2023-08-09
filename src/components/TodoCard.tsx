import { Button, Typography } from "@mui/material";
import DownloadDoneIcon from "@mui/icons-material/DownloadDone";
import DeleteIcon from "@mui/icons-material/Delete";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

import { Todo } from "./AllTodosContainer";

const TodoCard = ({ todoDetails }: { todoDetails: Todo }) => {
  const queryClient = useQueryClient();
  const deleteMutation = useMutation({
    mutationFn() {
      return axios.delete(`http://localhost:4000/todos/${todoDetails.id}`);
    },
    onSuccess(data, variables, context) {
      queryClient.invalidateQueries(["todos"]);
    },
  });

  const deleteHandler = () => {
    deleteMutation.mutate();
  };

  return (
    <div
      className="p-3 my-5 shadow hover:shadow-md transition-all duration-100 flex gap-3 text-left"
      data-testid={`todo-card--${
        todoDetails.isFinished ? "finished" : "pending"
      }--${todoDetails.id}`}
    >
      <div className="grow">
        <Typography variant="h5" component="h5" sx={{ marginBottom: "8px" }}>
          {todoDetails?.title}
        </Typography>
        <p className="text-lg text-gray-500">{todoDetails?.description}</p>
      </div>
      <div className="self-center">
        {!todoDetails.isFinished && (
          <>
            <Button
              variant="contained"
              title="Mark as done"
              sx={{ margin: "0 6px" }}
              data-testid="mark-as-done-btn"
            >
              <DownloadDoneIcon />
            </Button>
          </>
        )}
        <Button
          variant="contained"
          title="Delete"
          data-testid="delete-todo-btn"
          onClick={deleteHandler}
        >
          <DeleteIcon />
        </Button>
      </div>
    </div>
  );
};

export default TodoCard;
