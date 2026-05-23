import { useState, createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    setUser(username);
  };

  const isAuthenticated = () => {
    if(user !== null) return true;
     else return false;
  }

  const logout = () => {
    setUser(null);
    setUsername("");
    setPassword("");
  }

  return (
    <AuthContext.Provider
      value={{
        username, 
        setUsername, 
        password, 
        setPassword, 
        user, 
        setUser, 
        login,
        isAuthenticated,
        logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};
