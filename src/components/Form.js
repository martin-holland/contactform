import React from "react";

function Form({submit, change}) {
  return (
    <div className="formwrapper">
      <form onSubmit={submit}>
          <label htmlFor="firstname">First Name</label>
            <input
              id="firstname"
              name="firstname"
              type="text"
              required
              onChange={change}
            />
          <label htmlFor="lastname">Last Name</label>
            <input
              id="lastname"
              name="lastname"
              type="text"
              required
              onChange={change}
            />
          <label htmlFor="telnumber">Telephone Number</label>
            <input
              id="telnumber"
              name="telnumber"
              type="tel"
              required
              onChange={change}
            />
          <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              required
              onChange={change}
            />
          <label htmlFor="role">Role</label>
          <select id="role" name="role" required onChange={change}>
            <option value="teacher" selected="selected">Please Select*</option>
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
            <option value="other">Other</option>
          </select>
          <input type="submit" name="showpopup" value="Send" />
      </form>
    </div>
  );
}

export default Form;
