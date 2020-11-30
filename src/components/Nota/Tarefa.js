import React from "react";
import { Button, Input, } from "antd";
import { Popconfirm } from 'antd';



const Tarefa = ({ onChange, onDelete, value }) => {
const { TextArea } = Input;
  return (
    <div >
      <TextArea  
      value={value} 
      onChange={onChange}
     
     
      />
      <Popconfirm title="Are you sure？" okText="Yes" cancelText="No"> </Popconfirm>
      <Button type="danger" block
      onClick={onDelete}
      
      
      
      ><b>Excluir</b>
      
 
      
      </Button>
     
    </div>
    
  );
};
export default Tarefa;
