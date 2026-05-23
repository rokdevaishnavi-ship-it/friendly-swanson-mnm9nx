import "./styles.css";
import Login from './Login';
import Private from './Private';
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export default function App() {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <div className="App">
      { isAuthenticated() ? <Private /> : <Login /> }
    </div>
  );
}
