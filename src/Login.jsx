import "./styles.css";
import { useContext } from "react";
import { AuthContext} from './AuthContext';

export default function Login() {
    const { username, setUsername, password, setPassword, login} = useContext(AuthContext);
  return (
    <div className="App">
      <h1>Login Page</h1>
      <input 
         type="text"
         placeholder="Enter username"
         value={username}
         onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input 
         type="password"
         placeholder="Enter password"
         value={password}
         onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick = {login}>Login</button>
    </div>
  );
}
