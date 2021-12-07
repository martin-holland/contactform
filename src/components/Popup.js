import React from "react";

const closeHandler = () => {
  window.location.reload();
};

function Popup({firstname, lastname, telnumber, message, role}) {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>This was your input, please verify</h2>
        <p>Firstname: {firstname}</p>
        <p>Lastname: {lastname}</p>
        <p>Phone Number: {telnumber}</p>
        <p>Message: {message}</p>
        <p>Role: {role}</p>
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
