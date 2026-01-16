import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import "./Home.css";
export default function Home() {
  const navigate = useNavigate();

  const countries = [
    { name: "India", img: "https://th.bing.com/th/id/OIP.INxMo3stbk_SrYLkwpkjowHaE7?w=269&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { name: "USA", img: "https://th.bing.com/th/id/OIP.9Zq3MpwNIenTCXFPni2tdgHaDt?w=308&h=174&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { name: "France", img: "https://tse2.mm.bing.net/th/id/OIP.gQUbv_OWhEj9bku-pyCoRAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "UK", img: "https://th.bing.com/th/id/OIP.y-Bh5TMPcUcbiz1Dg2NQkAHaEP?w=309&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { name: "Italy", img: "https://th.bing.com/th/id/OIP.zZxK_yupQmt65BtoZKtvywHaEo?w=293&h=182&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { name: "UAE", img: "https://th.bing.com/th/id/OIP.erZ21RxtnH8S0SwNCXcRYwHaFj?w=232&h=183&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { name: "Japan", img: "https://th.bing.com/th/id/OIP.G2Th8Ked3PwTxwID4Cn6rgHaE8?w=234&h=150&c=6&o=7&dpr=1.3&pid=1.7&rm=3" },
    { name: "Thailand", img: "https://th.bing.com/th/id/OIP.kY3JsT84m5ntyBOSg-wyZwHaEo?w=256&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { name: "Australia", img: "https://th.bing.com/th/id/OIP.liE6uTHVN4DLRcpAcflFdQHaE8?w=293&h=196&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { name: "Canada", img: "https://th.bing.com/th/id/OIP.2guj_K6Q6aeGxZ-C7E-v9QHaEK?w=320&h=184&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" }
  ];

  return (
    <>
      <Navbar />
      <div className="home-container">
        <h1>Explore Hotels Worldwide</h1>
        <p>Select a country to view available hotels</p>

        <div className="country-grid">
          {countries.map(c => (
            <div
              key={c.name}
              className="country-card"
              onClick={() => navigate(`/hotels/${c.name}`)}
            >
              <img src={c.img} alt={c.name} />
              <div className="overlay">
                <h2>{c.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
