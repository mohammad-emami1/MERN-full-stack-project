import { useState, useContext } from "react";
import  {AuthContext} from "./AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        // LOGIN REQUEST
        const { data } = await axios.post("http://localhost:5000/login", { email, password });
        login(data.token);
        navigate("/");
      } else {
        // SIGNUP REQUEST
        await axios.post("http://localhost:5000/register", { username, email, password, role: "user" });
        setIsLogin(true); // Switch to login after signup
      }
    } catch (error) {
      console.error("Authentication error:", error.response?.data?.error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-yellow-400">
      <h1 className="text-2xl font-bold">{isLogin ? "Login" : "Sign Up"}</h1>

      <form onSubmit={handleSubmit} className="w-1/3 p-6 bg-gray-800 rounded-xl">
        {!isLogin && (
          <input
            className="w-full p-2 mb-4 bg-gray-700 text-white border border-yellow-400 rounded"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        )}
        <input
          className="w-full p-2 mb-4 bg-gray-700 text-white border border-yellow-400 rounded"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="w-full p-2 mb-4 bg-gray-700 text-white border border-yellow-400 rounded"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="w-full bg-yellow-400 p-2 text-black rounded">
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </form>

      <button className="mt-4 text-white underline" onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Need an account? Sign up" : "Already have an account? Login"}
      </button>
    </div>
  );
};


