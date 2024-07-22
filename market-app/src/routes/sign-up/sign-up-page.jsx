import React from "react";
import { useNavigate } from "react-router-dom";
import SignUpForm from "../../components/sign-up/sign-up-form.component";
// import "./signUpPage.css";
import "./sign-up-page.styles.css";

function SignUpPage() {
  const Navigate = useNavigate();
  const handleClickRedirect = () => {
    Navigate("/Sign-In");
  };

  return (
    <div className="flex-container">
      <div className="left-container">
        <div className="left-container-inner">
          <SignUpForm />
        </div>
      </div>
      <div className="right-container">
        <div className="right-container-inner">
          <b>
            <h1 className="white-col mulishFont-750">
              Have an <br /> account?
            </h1>
          </b>
          <p className="txt-col-w" style={{ color: "#bfc2c9" }}>
            <b>Continue your journey in one click</b>
          </p>

          <button
            type="button"
            className="btn btn-light btn-rounded btn-lg btn-small"
            onClick={handleClickRedirect}
          >
            <span>SIGN IN</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
