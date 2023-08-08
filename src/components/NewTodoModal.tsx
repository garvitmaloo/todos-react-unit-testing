import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function NewTodoModal({
  closeModal,
}: {
  closeModal: () => void;
}) {
  const [open, setOpen] = React.useState(true);
  const [titleInput, setTitleInput] = React.useState("");
  const [descInput, setDescInput] = React.useState("");
  const queryClient = useQueryClient();

  const handleClose = () => {
    closeModal();
    setOpen(false);
  };

  const mutation = useMutation({
    mutationFn() {
      return axios.post("http://localhost:4000/todos", {
        title: titleInput,
        description: descInput,
        isFinished: false,
      });
    },
    onSuccess() {
      queryClient.invalidateQueries(["todos"]);
    },
  });

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    mutation.mutate();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      data-testid="new-todo-modal"
    >
      <Box sx={style}>
        <Typography id="modal-title" variant="h6" component="h6">
          Add A New Todo
        </Typography>

        <form
          className="my-3"
          data-testid="new-todo-form"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            required
            placeholder="Todo Title"
            onChange={(e) => setTitleInput(e.target.value)}
            value={titleInput}
            data-testid="todo-title-input"
            className="block p-3 my-5 rounded border-gray-200 outline-none border-2 w-full transition-all duration-200 focus:border-gray-500"
          />
          <input
            placeholder="Todo Description"
            required
            onChange={(e) => setDescInput(e.target.value)}
            value={descInput}
            data-testid="todo-desc-input"
            className="block p-3 my-5 rounded border-gray-200 outline-none border-2 w-full transition-all duration-200 focus:border-gray-500"
          />
          <Button type="submit" variant="contained">
            Add
          </Button>
        </form>

        {mutation.isSuccess && (
          <p
            className="p-5 rounded-md bg-green-100 ring-1 ring-green-300"
            data-testid="success-msg"
          >
            New Task Added
          </p>
        )}
        {mutation.isError && (
          <p
            className="p-5 rounded-md bg-red-100 ring-1 ring-red-300"
            data-testid="error-msg"
          >
            Failed to add new task
          </p>
        )}
      </Box>
    </Modal>
  );
}
