import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar programação",
      description:
        "Estudar React, JavaScript e outras tecnologias relacionadas",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Fazer exercícios",
      description: "Resolver problemas de programação",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Ler livros",
      description: "Ler livros sobre desenvolvimento de software",
      isCompleted: false,
    }
  ]);
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className=" text-3xl text-slate-100 font-bold text-center">
          Gerenciador de tarefas
        </h1>
        <Tasks tasks={tasks} />
        <AddTask />
      </div>
    </div>
  );
}
export default App;
