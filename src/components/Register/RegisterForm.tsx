import React, { useState } from "react";
import { register } from "../../api/authzApi";
import "./RegisterForm.css";

interface RegisterFormProps {
  onSuccess: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMob] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await register(username, password, email, mobile);
      console.log("Registration successful:", data);
      // Call the onSuccess callback passed from the parent component
      onSuccess();
    } catch (error: any) {
      setError(error.message || "An error occurred during registration.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h1> Signup Here!</h1>
      <br />
      <input
        type="text"
        name="username"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="text"
        name="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        name="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <input
        type="number"
        name="mobile"
        placeholder="Mobile Number"
        onChange={(e) => setMob(e.target.value)}
      />
      <br />
      {error && <div className="error-message">{error}</div>}
      <button type="submit" className="btn-submit">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
