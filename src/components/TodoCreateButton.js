import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function TodoCreateButton({ setOpenModal }) {
  const onClickButton = () => {
    // let state = null;
    // openModal ? state = false : state = true;
    setOpenModal(prevState => !prevState);
  }

  return (
    <React.Fragment>
      <button className="btnCreate" onClick={() => onClickButton()}>
      <FontAwesomeIcon icon={faXmark} />
      </button>
    </React.Fragment>
  );
};

export { TodoCreateButton };