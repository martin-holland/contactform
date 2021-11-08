import React from "react";

function Popup(props) {
  return (
    <div className="popup">
      <div className="closewrapper">
        <button id="close">X</button>
      </div>
      <div className="popup-content">
        <p>Firstname: {props.firstname}</p>
        <p>Lastname: {props.lastname}</p>
        <p>Phone Number: {props.telnumber}</p>
        <p>Message: {props.message}</p>
        <p>Role: {props.role}</p>
      </div>
    </div>
  );
}

export default Popup;
