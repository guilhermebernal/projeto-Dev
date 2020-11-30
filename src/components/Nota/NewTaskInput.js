import React, { useState } from "react";
import { Button, Input } from "antd";


const NewTaskInput = ({ onSubmit }) => {
const [newItem, setNewItem] = useState("");
const { TextArea } = Input;

function setNewTask({ target }) {
    setNewItem(target.value);
  }

  function submit(e) {
    e.preventDefault();
    onSubmit(newItem);
  }

  return (
    <div>
      <form onSubmit={submit}>
        <TextArea
          className="Todo-input"
          placeholder="Nota Rápida"
          onChange={setNewTask}
          style={{ height: 400,width: 1500}}
          
        />
        <Button type="primary" block  htmlType="submit">
          <b>Adicionar</b>
        </Button>
        
      </form>
    </div>
  );
};

export default NewTaskInput;
