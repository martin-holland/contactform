import React from "react";

function Form(props) {
  return (
    <div className="formwrapper">
      <form>
        <div>
          <label htmlFor="firstname">First Name</label>
          <input
            id="firstname"
            name="firstname"
            type="text"
            required
            onChange={props.change}
          />
        </div>
        <div>
          <label htmlFor="lastname">Last Name</label>
          <input
            id="lastname"
            name="lastname"
            type="text"
            required
            onChange={props.change}
          />
        </div>
        <div>
          <label htmlFor="telnumber">Telephone Number</label>
          <input
            id="telnumber"
            name="telnumber"
            type="tel"
            required
            onChange={props.change}
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            required
            onChange={props.change}
          />
        </div>
        <div className="selectbox">
          <label htmlFor="role">Role</label>
          <select id="role" name="role" required onChange={props.change}>
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button name="showpopup" onClick={props.showpopup}>
          Send
        </button>
      </form>
    </div>
  );
}

export default Form;
