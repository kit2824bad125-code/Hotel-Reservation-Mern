import { useState } from "react";
import { API } from "../api";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.css";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const submit = async () => {
    try {
      const res = await API.post("/login", form);

      sessionStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Login successful");
      navigate("/home");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login-page">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Welcome Back</h2>
          <p>Login to continue your journey</p>
        </div>

        <div className="auth-form">
          <div className="field">
            <input
              placeholder="Email"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
            />
          </div>

          <div className="field">
            <input
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={e => setForm({ ...form, password: e.target.value })}
            />
          </div>

          <button className="auth-btn" onClick={submit}>
            Login
          </button>

          <p className="auth-footer">
            Don’t have an account?{" "}
            <span
              className="auth-link"
              onClick={() => navigate("/register")}
            >
              Register
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
