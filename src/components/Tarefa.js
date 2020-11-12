import React from "react";
import { Button, Input, } from "antd";

const Tarefa = ({ onChange, onDelete, value }) => {
const { TextArea } = Input;
  return (
    <div className="Item-container">
      <TextArea  value={value} onChange={onChange}  />
      <Button type="danger" block icon="remove"
      onClick={onDelete} ><b>Excluir</b></Button>

    </div>
    
  );
};
export default Tarefa;
