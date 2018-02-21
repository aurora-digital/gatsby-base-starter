import React from "react";
import Link from "gatsby-link";

import "./index.scss";

const Header = () => (
  <div className="header">
    <div className="header-inner">
      <h1 style={{ margin: 0 }}>
        <Link to="/" className="header-link">
          Gatsby
        </Link>
      </h1>
    </div>
  </div>
);

export default Header;
