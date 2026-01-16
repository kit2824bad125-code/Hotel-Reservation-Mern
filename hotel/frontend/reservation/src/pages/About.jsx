import Navbar from "../components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="page">
        <h2>About EasyReserve</h2>
        <p>
          EasyReserve is a multi-hotel booking platform that allows users
          to reserve rooms worldwide with flexible dates and guest options.
        </p>
      </div>
    </>
  );
}
