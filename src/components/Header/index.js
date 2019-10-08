import React from "react";
import Link from "gatsby-link";

import "./index.css";

export default function Header() {
  return (
    <header styleName="header">
      <div styleName="header-inner">
        <Link to="/" styleName="header-link">
          Gatsby
        </Link>
      </div>
    </header>
  );
}
