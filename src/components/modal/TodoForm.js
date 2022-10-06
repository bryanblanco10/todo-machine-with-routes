import React from "react";
import './TodoForm.css';

function TodoForm({ addTodo, setOpenModal }) {
  const [newTodoValue, setNewTodoValue] = React.useState("");

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  }
  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={ onSubmit }>
      <label>Crea tu nuevo TODO</label>
      <textarea onChange={ onChange } value={ newTodoValue } placeholder="Nuevo Todo" />
      <div className="TodoForm-buttonContainer">
        <button className="TodoForm-button TodoForm-button--cancel" type="button" onClick={ onCancel }> Cancelar </button>
        <button className="TodoForm-button TodoForm-button--add" type="submit"> Añadir </button>
      </div>
    </form>
  );
}

export { TodoForm };