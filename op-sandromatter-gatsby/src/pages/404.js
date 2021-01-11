import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import SEO from "../components/seo"

import styles from "../styles/layout.module.css"

const NotFoundPage = () => (
  <>
    <Header />
    <main className={styles.wrapper}>
        <SEO title="404: Not found 🤯" />
        <h1>404: Not Found <span role="img" aria-label="Emoji exploding head">🤯</span></h1>
        <p>Uiuiuiui! Halt, stopp. Hier geht es nicht mehr weiter. Wie es scheint bist Du auf eine Seite gestossen die es nicht mehr gibt.</p>
          <Link to="/">Zurück auf die Startseite</Link>
    </main>
  </>
)

export default NotFoundPage
