import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function Header({ children, loading }) {
  return (
    // Cuando es un solo children
    // React.cloneElement(children, { loading })
    //Cuando son mas de un children
    // React.Children.toArray(children).map(child => React.cloneElement(child, { loading }));
    <header>
      <div className="title-app">
        TODOAPP <FontAwesomeIcon icon={faCoffee} />
      </div>
      {/* {children} */}
      { React.cloneElement(children, { loading }) }
    </header>
  );
}

export { Header };