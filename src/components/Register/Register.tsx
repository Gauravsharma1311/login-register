import React from "react";
import RegisterForm from "./RegisterForm";
import { Link, useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const navigate = useNavigate();

  const handleSuccessfulRegistration = () => {
    // Redirect to the profile page or any other desired route
    navigate("/profile");
  };

  return (
    <div>
      {/* <h2>
        <h2>Register</h2>
      </h2> */}
      <RegisterForm onSuccess={handleSuccessfulRegistration} />
      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
};

export default Register;
