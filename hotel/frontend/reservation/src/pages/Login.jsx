import { useState } from "react";
import { API } from "../api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const submit = async () => {
    try {
      const res = await API.post("/login", form);

      // ✅ ONLY LOGIN SETS SESSION
      sessionStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      alert("Login successful");
      navigate("/home");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>

      <input
        placeholder="Email"
        value={form.email}
        onChange={e =>
          setForm({ ...form, email: e.target.value })
        }
      />

      <input
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={e =>
          setForm({ ...form, password: e.target.value })
        }
      />

      <button onClick={submit}>Login</button>
    </div>
  );
}
