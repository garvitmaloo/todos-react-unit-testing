import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AllTodosContainer from "./components/AllTodosContainer";
import Header from "./components/Header";
import NewTodoModal from "./components/NewTodoModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState<Boolean>(false);
  const queryClient = new QueryClient();

  const closeModalHandler = () => {
    setIsModalOpen(false);
  };
  const openModalHandler = () => {
    setIsModalOpen(true);
  };
  return (
    <QueryClientProvider client={queryClient}>
      <div className="max-w-[75%] mx-auto">
        <Header openModal={openModalHandler} />
        <AllTodosContainer />

        {isModalOpen && <NewTodoModal closeModal={closeModalHandler} />}
      </div>
    </QueryClientProvider>
  );
}

export default App;
