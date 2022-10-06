import React from "react";

function TodoSearch({ searchValue, setSearchValue, loading }) {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  }
  return (
    <React.Fragment>
      <div className="search">
        <input 
          onChange={onSearchValueChange} 
          type="search"
          value={searchValue}
          disabled={loading}
          placeholder="Buscar todo"
        />
      </div>
    </React.Fragment>
  );
};

export { TodoSearch };