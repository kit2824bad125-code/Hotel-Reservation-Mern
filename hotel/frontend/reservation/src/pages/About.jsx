import Navbar from "../components/Navbar";
import "./about.css";
export default function About() {
  return (
    <>
      <Navbar />

      <div className="about-wrapper">
        {/* HERO */}
        <section className="about-hero">
          <h1>EasyReserve</h1>
          <p>
            A modern, scalable hotel reservation platform built for simplicity,
            speed, and global accessibility.
          </p>
        </section>

        {/* OVERVIEW */}
        <section className="about-section glass">
          <h2>About the Platform</h2>
          <p>
            EasyReserve enables users to explore hotels across multiple countries,
            compare pricing, and make reservations with flexible date and guest
            options. The platform is designed with a clean UI and efficient backend
            to ensure a seamless booking experience.
          </p>
        </section>

        {/* FEATURES */}
        <section className="about-section">
          <h2>Core Features</h2>

          <div className="feature-grid">
            <div className="feature-card">
              🌍
              <h3>Global Discovery</h3>
              <p>Browse hotels country-wise with rich visuals and details.</p>
            </div>

            <div className="feature-card">
              ⚡
              <h3>Fast Booking</h3>
              <p>Reserve rooms instantly using optimized REST APIs.</p>
            </div>

            <div className="feature-card">
              🧾
              <h3>Reservation Control</h3>
              <p>View and cancel bookings anytime from one dashboard.</p>
            </div>

            <div className="feature-card">
              🔒
              <h3>Scalable Design</h3>
              <p>Built with scalability and real-world use cases in mind.</p>
            </div>
          </div>
        </section>

       

        {/* FUTURE */}
        <section className="about-section">
          <h2>Future Enhancements</h2>
          <ul className="future-list">
            <li>✔ User authentication & profiles</li>
            <li>✔ Secure online payments</li>
            <li>✔ Hotel reviews & ratings</li>
            <li>✔ Advanced filtering & search</li>
          </ul>
        </section>

        {/* FOOTER */}
        <footer className="about-footer">
          <p>
            EasyReserve is a full-stack project developed with industry-level
            architecture and user experience principles.
          </p>
        </footer>
      </div>
    </>
  );
}
