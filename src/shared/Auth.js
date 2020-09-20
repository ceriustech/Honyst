import React, { useEffect, useState } from "react";
import { auth } from "../Firebase";

// creates the auth context
export const AuthContext = React.createContext();

// creates auth provider for wrapping app in
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);
  // listens to the state change of the user
  useEffect(() => {
    try {
      auth.onAuthStateChanged((user) => {
        setCurrentUser(user);
        setPending(false);
      });
    } catch (err) {
      console.error(err);
    }
  }, []);
  // loads a loading screen if they aren't logged in yet
  if (pending) {
    return <>Loading...</>;
  }
  // adds user to all components
  return (
    <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>
  );
};
