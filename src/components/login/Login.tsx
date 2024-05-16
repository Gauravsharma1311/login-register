import React from "react";
import LoginForm from "./LoginForm";
import { Link, useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleSuccessfulLogin = () => {
    navigate("/profile");
  };

  return (
    <div>
      {/* <h1>Login</h1> */}
      <LoginForm onSuccess={handleSuccessfulLogin} />
      <p>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
};

export default Login;
