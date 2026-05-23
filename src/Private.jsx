import "./styles.css";
import { useContext } from "react";
import { AuthContext } from './AuthContext';

export default function Private() {
    const { user, setUser, logout } = useContext(AuthContext);
  return (
    <div className="App">
      <h1>Welcome Page</h1>
      <h2>Hello, {user}</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
