import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faCheckCircle, faPenToSquare, } from '@fortawesome/free-solid-svg-icons'

function TodoItem({ text, status, onCompleted, onDeleted }) {
  return (
    <React.Fragment>
      <div className="card-app">
        <span onClick={() => onCompleted(text)}>
          <FontAwesomeIcon className={ status ? 'icon-check active' : 'icon-check'} icon={faCheckCircle} />
        </span>
        <p className="content-card-app">{text}</p>
        <div>
          <span onClick={onDeleted}>
            <FontAwesomeIcon className="icon-delete" icon={faPenToSquare} />
          </span>
          <span onClick={onDeleted}>
            <FontAwesomeIcon className="icon-delete" icon={faTrash} />
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export { TodoItem };