import React, { useState } from "react";
import LoginForm from "./LoginForm"; // Assuming LoginForm is another component you have
import "../App.css";

const LoginComponent = ({ mode: initialMode, onSubmit }) => {
  const [mode, setMode] = useState(initialMode);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "login" ? "signup" : "login"));
  };
// ....
  return (
    <div className="app">
      <div
        className={`form-block-wrapper form-block-wrapper--is-${mode}`}
      ></div>
      <section className={`form-block form-block--is-${mode}`}>
        <header className="form-block__header">
          <h1>{mode === "login" ? "Welcome back!" : "Sign up"}</h1>
          <div className="form-block__toggle-block">
            <span>
              {mode === "login" ? "Don't" : "Already"} have an account? Click
              here &#8594;
            </span>
            <input id="form-toggler" type="checkbox" onClick={toggleMode} />
            <label htmlFor="form-toggler"></label>
          </div>
        </header>
        <LoginForm mode={mode} onSubmit={onSubmit} />
      </section>
    </div>
  );
};

export default LoginComponent;
