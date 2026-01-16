import { useState } from "react";
import { API } from "../api";
import { useNavigate } from "react-router-dom";

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

      // ✅ IMPORTANT: DO NOT STORE USER
      // sessionStorage.setItem(...) ❌ NOT ALLOWED

      // ✅ FORCE USER TO LOGIN
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="login">
      <h2>Register</h2>

      <input
        placeholder="Name"
        onChange={e =>
          setForm({ ...form, name: e.target.value })
        }
      />

      <input
        placeholder="Email"
        onChange={e =>
          setForm({ ...form, email: e.target.value })
        }
      />

      <input
        type="password"
        placeholder="Password"
        onChange={e =>
          setForm({ ...form, password: e.target.value })
        }
      />

      <button onClick={submit}>Register</button>
    </div>
  );
}
