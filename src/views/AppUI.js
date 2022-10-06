import React from "react";
import { TodoContext } from "../todoContext/todoContext";
// Components
import { TodoCounter } from "../components/TodoCounter";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { TodoCreateButton } from "../components/TodoCreateButton";
import { Modal } from "../components/modal/Modal";
import { TodoForm } from "../components/modal/TodoForm";
import { Header } from "../components/header/Header";
import { TodoSearch } from "../components/TodoSearch";

function AppUI() {
  const {
    error,
    loading,
    searchTodos,
    onCompleted,
    onDeleted,
    openModal,
    searchValue,
    setSearchValue,
    completedTodos,
    totalTodos,
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext);
  return (
    <React.Fragment>
      <Header>
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </Header>

      <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />

      {/* <TodoSearch /> */}

      <TodoList>
        {error && <p>Desesperate, hubo un error...</p>}
        {loading && <p>Estamos cargando, no te desesperes...</p>}
        {!loading && !searchTodos.length && <p>Crea tu primer TODO!</p>}

        {searchTodos.map((todo, index) => (
          <TodoItem
            text={todo.text}
            status={todo.completed}
            key={index}
            onCompleted={onCompleted}
            onDeleted={() => onDeleted(todo.text)}
          />
        ))}
      </TodoList>

      {openModal && (
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}
      <TodoCreateButton />
    </React.Fragment>
  );
}

export { AppUI };
