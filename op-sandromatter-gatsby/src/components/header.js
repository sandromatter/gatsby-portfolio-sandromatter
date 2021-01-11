import { Link } from "gatsby"
import React from "react"

import styles from "../styles/header.module.css"

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <h1 className={styles.logo}>
      <Link to="/" className={styles.link}>
          <span className={styles.fullText}>sandromatter.ch</span>
      </Link>
      <Link to="/" className={styles.link}>
        <span className={styles.shortText}>sm.ch</span>
      </Link>
    </h1>
  </header>
)

export default Header
