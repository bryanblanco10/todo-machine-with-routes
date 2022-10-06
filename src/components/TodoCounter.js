import React from "react";

function TodoCounter({ completedTodos, totalTodos, loading }) {
  return (
    <React.Fragment >
      <h2 className="subtitle-app">Has completado {loading ? "..." : completedTodos} de {loading ? "..." : totalTodos} TODOs</h2>
    </React.Fragment>
  );
}

export { TodoCounter };