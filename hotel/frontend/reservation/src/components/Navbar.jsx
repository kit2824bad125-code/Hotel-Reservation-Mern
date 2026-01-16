import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>EasyReserve</h2>
      <div>
        <Link to="/home">Home</Link>
        <Link to="/reservations">My Bookings</Link>
        <Link to="/about">About</Link>
        <span className="auth-links">
          <Link to="/login">Login</Link>
          <span className="slash"> / </span>
          <Link to="/register">Register</Link>
        </span>
      </div>
    </nav>
  );
}
