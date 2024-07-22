import React from "react";
import { Link } from "react-router-dom";
import logo from "../../statics/images/skill_empire_logo.PNG";

function SignInForm() {
  return (
    <div>
      <div className="logo_div">
        <img src={logo} alt="company logo" />
      </div>

      <div className="left-title-wrapper">
        <b>
          <h1 className="title-color mulishFont-900">Welcome back</h1>
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
            SIGN IN
          </button>
        </div>

        <div className="link-wrapper">
          <Link to="/Password-Recovery">
            <span className="link-wrapper">forgot your password?</span>{" "}
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
