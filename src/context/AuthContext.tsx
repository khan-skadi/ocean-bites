import React, { FC, useState, useEffect } from "react";
import { createContext } from "utils/createContext";
import firebase, { auth } from "config/firebase";

interface AuthContextValues {
  currentUser: firebase.User | null;
  login: (email: string, password: string) => void;
}

const [Provider, useAuthContext] = createContext<AuthContextValues>({
  name: "AuthContext",
});

const AuthContextProvider: FC = ({ children }): JSX.Element => {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);

  const login = (email: string, password: string) => auth.signInWithEmailAndPassword(email, password);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <Provider
      value={{
        currentUser,
        login,
      }}
    >
      {children}
    </Provider>
  );
};

export { AuthContextProvider, useAuthContext };
