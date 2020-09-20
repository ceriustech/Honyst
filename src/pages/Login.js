import React, { useCallback, useContext } from "react";
import { auth } from "../Firebase";
import { AuthContext } from "../shared/Auth";

const Login = ({ navigate }) => {
  const handleLogin = useCallback(
    async (e) => {
      e.preventDefault();
      const { email, password } = e.target.elements;
      try {
        await auth.signInWithEmailAndPassword(email.value, password.value);
        await navigate("/");
      } catch (error) {
        alert(error);
      }
    },
    [navigate]
  );

  const currentUser = useContext(AuthContext);

  if (currentUser) {
    navigate("/");
  }

  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;
