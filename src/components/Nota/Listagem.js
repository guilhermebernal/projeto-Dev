import React, { useState } from "react";
import Tarefa from "./Tarefa";
import NewTaskInput from "./NewTaskInput";

                                                        
const Listagem = () => {
  const [tasks, setTasks] = useState([]);
  //Guilherme IMPORTANTE  Função para add
  function addNewTask(task) {
    const itensCopy = Array.from(tasks);
    itensCopy.push({ id: tasks.length, value: task });
    setTasks(itensCopy);
  }
  //Guilherme Importante Função para atualizar
  function updateTask({ target }, index) {
    const itensCopy = Array.from(tasks);
    itensCopy.splice(index, 1, { id: index, value: target.value });
    setTasks(itensCopy);
  }
  //Guilherme Importnte funcção para apagar
  function deleteTask(index) {
    const itensCopy = Array.from(tasks);
    itensCopy.splice(index, 1);
    setTasks(itensCopy);
  }
return (
    <div className="App2">
      <div className="App-header2">
        <NewTaskInput onSubmit={addNewTask} />
        {tasks.map(({ id, value }, index) => (
          <Tarefa
            key={id}
            value={value}
            onChange={(event) => updateTask(event, index)}
            onDelete={() => deleteTask(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Listagem;
