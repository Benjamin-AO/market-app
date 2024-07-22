import React from "react";

function SignUpForm() {
  return (
    <div>
      <div className="left-title-wrapper">
        <b>
          <h1 className="title-color mulishFont-900">Create Account</h1>
        </b>
      </div>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log("just sumbmitted a form :)");
          console.log(
            event.target.name.value,
            event.target.email.value,
            event.target.password.value
          );
        }}
      >
        <div className="form-group">
          <label htmlFor="nameInput">
            <b>Name</b>
          </label>
          <input
            type="input"
            name="name"
            className="form-control rounded-10"
            id="name"
            aria-describedby="emailHelp"
            placeholder="Enter name"
            autoComplete="off"
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">
            <b>Email address</b>
          </label>
          <input
            type="email"
            name="email"
            className="form-control rounded-10"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            autoComplete="off"
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">
            <b>Password</b>
          </label>
          <input
            type="password"
            name="password"
            className="form-control rounded-10"
            id="exampleInputPassword1"
            placeholder="Password"
            autoComplete="off"
          />
        </div>

        <div className="signup-btn-wrapper">
          <button
            type="submit"
            className="btn btn-outline-light btn-lg btn-block btn-rounded btn-purple"
          >
            SIGN UP
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
