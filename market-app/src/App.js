import React from "react";
import { Routes, Route } from "react-router-dom";
// import "./App.css";
import SignUpPage from "./routes/sign-up/sign-up-page";
import SignInPage from "./routes/sign-in/sign-in-page";
import PasswordRecoveryPage from "./routes/passwordRecovery/passwordRecovery";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/Sign-In" element={<SignInPage />} />
        <Route path="/Sign-Up" element={<SignUpPage />} />
        <Route path="/Password-Recovery" element={<PasswordRecoveryPage />} />
      </Routes>
    </div>
  );
};

export default App;
