import { useState } from "react";

import AllTodosContainer from "./components/AllTodosContainer";
import Header from "./components/Header";
import NewTodoModal from "./components/NewTodoModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState<Boolean>(false);
  const closeModalHandler = () => {
    setIsModalOpen(false);
  };

  const openModalHandler = () => {
    setIsModalOpen(true);
  };
  return (
    <div className="max-w-[75%] mx-auto">
      <Header openModal={openModalHandler} />
      <AllTodosContainer />

      {isModalOpen && <NewTodoModal closeModal={closeModalHandler} />}
    </div>
  );
}

export default App;
