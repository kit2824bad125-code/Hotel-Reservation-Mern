import { useState } from "react";
import { API } from "../api";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.css";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const submit = async () => {
    try {
      const res = await API.post("/register", form);
      alert(res.data.message);

      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="register-page">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Create Account</h2>
          <p>Register and explore your dashboard</p>
        </div>

        <div className="auth-form">
          <div className="field">
            <input
              placeholder="Name"
              onChange={e => setForm({ ...form, name: e.target.value })}
            />
          </div>

          <div className="field">
            <input
              placeholder="Email"
              onChange={e => setForm({ ...form, email: e.target.value })}
            />
          </div>

          <div className="field">
            <input
              type="password"
              placeholder="Password"
              onChange={e => setForm({ ...form, password: e.target.value })}
            />
          </div>

          <button className="auth-btn" onClick={submit}>
            Register
          </button>

          <p className="auth-footer">
            Already have an account?{" "}
            <span
              className="auth-link"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
