import React from "react";
import { useNavigate } from "react-router-dom";
import SignInForm from "../../components/sign-in/sign-In-form.component";
import "./sign-in.styles.css";

function SignInPage() {
  const Navigate = useNavigate();
  const handleClickRedirect = () => {
    Navigate("/Sign-Up");
  };

  return (
    <div className="flex-container">
      <div className="left-container">
        <div className="left-container-inner">
          <SignInForm />
        </div>
      </div>
      <div className="right-container">
        <div className="right-container-inner">
          <b>
            <h1 className="white-col mulishFont-750">
              Don't have an <br /> account?
            </h1>
          </b>
          <p className="txt-col-w" style={{ color: "#bfc2c9" }}>
            <b>start your journey in one click</b>
          </p>

          <button
            type="button"
            className="btn btn-light btn-rounded btn-lg btn-small"
            onClick={handleClickRedirect}
          >
            <span>SIGN UP</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
