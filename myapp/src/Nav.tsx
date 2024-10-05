import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Nav.css";
import pic from "./assets/logo-banana.png";

type Page = {
  name: string;
  address: string;
};

interface NavvProps {
  pages: Page[];
}

function Navv({ pages }: NavvProps) {
  return (
    <nav className="navbar">
      <img src={pic} alt="Logo" />
      <ul>
        {pages.map((page, index) => (
          <li key={index}>
            <Link to={page.address}>{page.name}</Link> {/* Use Link for navigation */}
          </li>
        ))}
      </ul>
      <button>No login yet</button>
    </nav>
  );
}

export default Navv;
