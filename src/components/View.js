import React from "react";

function View(props) {
  return (
    <div className="viewform">
      <div className="lines">
        <ul className="list">
          <li>
            Firstname: <p>{props.firstname}</p>
          </li>
          <li>
            Lastname: <p>{props.lastname}</p>
          </li>
          <li>
            Phone Number:<p>{props.telnumber}</p>
          </li>
          <li>
            Message: <p>{props.message}</p>
          </li>
          <li>
            Role: <p>{props.role}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default View;
