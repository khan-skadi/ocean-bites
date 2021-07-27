import React, { FC, useState, useEffect } from "react";
import { createContext } from "utils/createContext";
import firebase, { auth } from "config/firebase";

interface AuthContextValues {
  isAuthenticated: boolean;
  currentUser: firebase.User | null;
  revalidate: () => void;
  logout: () => Promise<boolean>;
  login: (email: string, password: string) => Promise<firebase.auth.UserCredential>;
}

const [Provider, useAuthContext] = createContext<AuthContextValues>({
  name: "AuthContext",
});

const AuthContextProvider: FC = ({ children }): JSX.Element => {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState("");

  useEffect(() => {
    const unsubscribe: () => void = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);

      if (user) {
        user.getIdToken().then((authToken) => setToken(authToken));
      } else {
        setToken("");
      }
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    revalidate();
  });

  const login = (email: string, password: string): Promise<firebase.auth.UserCredential> => {
    const user = auth.signInWithEmailAndPassword(email, password);
    setIsAuthenticated(true);
    localStorage.setItem("token", token);

    return user;
  };

  const logout = async () => {
    try {
      await auth.signOut();
      setIsAuthenticated(false);
      setToken("");
      localStorage.removeItem("token");

      return true;
    } catch (err) {
      return false;
    }
  };

  const revalidate = () => {
    const user = auth.currentUser;

    if (user) {
      setCurrentUser(user);
      setIsAuthenticated(true);
    } else {
      setCurrentUser(null);
      setIsAuthenticated(false);
    }
  };

  return (
    <Provider
      value={{
        isAuthenticated,
        currentUser,
        revalidate,
        logout,
        login,
      }}
    >
      {children}
    </Provider>
  );
};

export { AuthContextProvider, useAuthContext };
