import React from "react";
import Link from "gatsby-link";

import styles from "./index.module.css";

export default function Header() {
  return (
    <nav className={styles.root}>
      <div className={styles.inner}>
        <Link to="/" className={styles.link}>
          Gatsby
        </Link>
      </div>
    </nav>
  );
}
