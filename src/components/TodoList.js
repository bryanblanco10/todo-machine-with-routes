import React from "react";

function TodoList(props) {
  return (
    <React.Fragment>
      <section className="section-app">
        {props.error && props.onError()}
        {props.loading && props.onLoading()}
        {!props.loading && !props.totalTodos && props.onEmpty()}
        {(!!props.totalTodos && !props.searchTodos.length) && props.onEmptySearchResult()}
        
        {props.children &&
          <div className="list-card">
            {props.children}
          </div>
        }
        {!props.children && 
          <div className="list-card">
            {props.searchTodos.map((todo, index) => props.onTodo(todo, index))}
          </div>
        }
        
      </section>
    </React.Fragment>
  );
};

export { TodoList };