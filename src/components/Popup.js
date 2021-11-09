import React from "react";

const closeHandler = () => {
  window.location.reload();
};

function Popup(props) {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>This was your input, please verify</h2>
        <p>Firstname: {props.firstname}</p>
        <p>Lastname: {props.lastname}</p>
        <p>Phone Number: {props.telnumber}</p>
        <p>Message: {props.message}</p>
        <p>Role: {props.role}</p>
        <div className="confirmbuttons">
          <button id="confirm" className="confirm" onClick={closeHandler}>
            Yes, I am sure
          </button>
          <button id="reject" className="reject" onClick={closeHandler}>
            No, do not send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
