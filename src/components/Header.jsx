import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav>
        <Link to="/">
          {" "}
          <picture className="header">
            <img
              src={require("./../assets/ironbeer-navbar.png")}
              alt="ironbeer nav bar"
            />
          </picture>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
