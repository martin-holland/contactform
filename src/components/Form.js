import React from "react";

function Form(props) {
  return (
    <div className="formwrapper">
      <h2>Input Form</h2>
      <form onSubmit={props.submit}>
        <div className="formdiv">
          <label htmlFor="firstname">First Name</label>
          <div>
            <input
              id="firstname"
              name="firstname"
              type="text"
              required
              onChange={props.change}
            />
          </div>
          <label htmlFor="lastname">Last Name</label>
          <div>
            <input
              id="lastname"
              name="lastname"
              type="text"
              required
              onChange={props.change}
            />
          </div>
          <label htmlFor="telnumber">Telephone Number</label>
          <div>
            <input
              id="telnumber"
              name="telnumber"
              type="tel"
              required
              onChange={props.change}
            />
          </div>
          <label htmlFor="message">Message</label>
          <div>
            <textarea
              id="message"
              name="message"
              required
              onChange={props.change}
            />
          </div>
          <label htmlFor="role">Role</label>
          <select id="role" name="role" required onChange={props.change}>
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
            <option value="other">Other</option>
          </select>
          <input type="submit" name="showpopup" value="Send" />
        </div>
      </form>
    </div>
  );
}

export default Form;
