import { Button } from "@mui/material";

const Header = () => {
  return (
    <header className="flex justify-between py-5 mb-5">
      <h1 className="font-bold text-xl">Todos Application</h1>
      <Button variant="contained">Add new Todo</Button>
    </header>
  );
};

export default Header;
