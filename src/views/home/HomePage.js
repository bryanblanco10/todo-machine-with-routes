import React from "react";
import { useTodo } from "../useTodo";
import { TodoCounter } from "../../components/TodoCounter";
import { TodoList } from "../../components/TodoList";
import { TodoItem } from "../../components/TodoItem";
import { TodoCreateButton } from "../../components/TodoCreateButton";
import { Modal } from "../../components/modal/Modal";
import { TodoForm } from "../../components/modal/TodoForm";
import { Header } from "../../components/header/Header";
import { TodoSearch } from "../../components/TodoSearch";
import { EmptyTodo } from "../../components/messages/EmptyTodo";
import { LoadingTodo } from "../../components/messages/LoadingTodo";
import { ErrorTodo } from "../../components/messages/ErrorTodo";

function HomePage() {
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
  } = useTodo();
  return (
    <React.Fragment>
      {/* Composition */}
      <Header loading={loading} >
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </Header>

      <TodoCounter loading={loading} completedTodos={completedTodos} totalTodos={totalTodos} />

      {/* Renders props */}
      <TodoList
        error={error}
        loading={loading}
        searchTodos={searchTodos}
        totalTodos={totalTodos}
        onError={() => <ErrorTodo />}
        onLoading={() => <LoadingTodo />}
        onEmpty={() => <EmptyTodo />}
        onEmptySearchResult={() => <p>No hay resultados para <strong>{searchValue}</strong></p>}
        onTodo={(todo, index) => (
          <TodoItem
            text={todo.text}
            status={todo.completed}
            key={index}
            onCompleted={onCompleted}
            onDeleted={() => onDeleted(todo.text)}
          />
        )}
      >
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

      {/* <TodoList>
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
      </TodoList> */}

      {openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}
      <TodoCreateButton setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}
export { HomePage };
