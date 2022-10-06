import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTodo() {
  const {
    item: todos,
    saveUpdateItem: saveUpdateTodos,
    loading,
    error, 
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);
  const totalTodos = todos.length;
  const completedTodos = todos.filter((el) => el.completed).length;
  let searchTodos = [];

  if (searchValue.length >= 1) {
    const searchText = searchValue.toLowerCase();
    searchTodos = todos.filter((el) => {
      const todoText = el.text.toLowerCase();
      return todoText.includes(searchText);
    });
  } else {
    searchTodos = todos;
  }

  const addTodo = (text) => {
    let newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
    });
    saveUpdateTodos(newTodos);
  };

  const onCompleted = (text) => {
    let newTodos = [...todos];
    const todoIndex = todos.findIndex((el) => el.text === text);
    newTodos[todoIndex].completed = true;
    saveUpdateTodos(newTodos);
  };

  const onDeleted = (text) => {
    let newTodos = [...todos];
    const todoIndex = todos.findIndex((el) => el.text === text);
    newTodos.splice(todoIndex, 1);
    saveUpdateTodos(newTodos);
  };

  return {
      loading,
      error,
      totalTodos,
      completedTodos,
      searchTodos,
      addTodo,
      onCompleted,
      onDeleted,
      searchValue,
      setSearchValue,
      openModal,
      setOpenModal,
    }
}

export {
  useTodo,
}