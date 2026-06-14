import React from "react";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router";

const LoggedIn = () => {
  const navigation = useNavigate();
  const { login} = useAuth();

  const handleClick = () => {
    login();
    navigation("/dashboard");
  };
  return (
    <div>
      <h1>Welcome Back !!</h1>
      <button onClick={handleClick}>Login</button>
    </div>
  );
};

export default LoggedIn;
