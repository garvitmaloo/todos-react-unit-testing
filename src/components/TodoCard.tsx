import { Button, Typography } from "@mui/material";
import DownloadDoneIcon from "@mui/icons-material/DownloadDone";
import DeleteIcon from "@mui/icons-material/Delete";

import { Todo } from "./AllTodosContainer";

const TodoCard = ({ todoDetails }: { todoDetails: Todo }) => {
  return (
    <div className="p-3 my-5 shadow hover:shadow-md transition-all duration-100 flex gap-3 text-left">
      <div className="grow">
        <Typography variant="h5" component="h5" sx={{ marginBottom: "8px" }}>
          {todoDetails?.title}
        </Typography>
        <p className="text-lg text-gray-500">{todoDetails?.description}</p>
      </div>
      <div className="self-center">
        {!todoDetails.isFinished && (
          <Button
            variant="contained"
            title="Mark as done"
            sx={{ margin: "0 6px" }}
          >
            <DownloadDoneIcon />
          </Button>
        )}
        <Button variant="contained" title="Delete">
          <DeleteIcon />
        </Button>
      </div>
    </div>
  );
};

export default TodoCard;
