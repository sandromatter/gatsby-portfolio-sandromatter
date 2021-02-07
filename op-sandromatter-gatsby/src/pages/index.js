import React from "react"

import Header from "../components/header"
import Banner from "../components/banner"
import SEO from "../components/seo"

import styles from "../styles/layout.module.css"

const IndexPage = () => (
  <>
    <Header />
    <Banner h1Text={"Das bin ich"}/>
    <main className={styles.white}>
      <article className={styles.wrapper}>
        <SEO title="Das bin ich." lang="de"/>
        <div className={styles.underlineYellow}> 
          <h2>hey!</h2>
        </div>
        <p>Ich bin Online Marketing Spezialist, aus der Schweiz <span role="img" aria-label="Emoji switzerland flag">🇨🇭</span> und studiere an der Fachhochschule Graubünden Digital Business Management.</p>
        <p>Was ich mag in Kürze:</p>
        <ul>
          <li>Berge &amp; Mountainbikes! <span role="img" aria-label="Emoji tree">🌲</span><span role="img" aria-label="Emoji mountain">⛰️</span><span role="img" aria-label="Emoji cyclist">🚴</span></li>
          <li>Fotografie &amp; Videografie <span role="img" aria-label="Emoji camera">📸 </span><span role="img" aria-label="Emoji videocamera">🎥 </span></li>
          <li>Tech, News &amp; Medien <span role="img" aria-label="Emoji floppy-disk">💾 </span><span role="img" aria-label="Emoji newspaper">📰 </span></li>
        </ul>
        <p>Falls ich ein neues Projekt starte, berichte ich bestimmt bei <a className={styles.link} href="https://www.twitter.com/sandromatter">Twitter</a> oder <a className={styles.link} href="https://www.linkedin.com/in/sandromatter">LinkedIn</a> davon. Sollte ich wieder einmal ein Foto- oder Videoprojekt lancieren, so bekommst Du das am ehesten auf <a className={styles.link} href="https://www.instagram.com/sandromatter">Instagram</a> mit, meine Coding-Projekte, wie diese Webseite hier, findest Du auf <a className={styles.link} href="https://github.com/sandromatter">GitHub</a>. Schau doch rein, schreib mir, oder lass ein <span role="img" aria-label="Emoji thumbs up">👍🏻</span> liegen.</p>
        <div className={styles.underlineYellow}>
          <h2>kontakt</h2>
        </div>
        <div className={styles.contactLinks}>
          <a className={styles.link} href="mailto:hey@sandromatter.ch?subject=Hey%20Sandro!">hey@sandromatter.ch</a>
          <a className={styles.link} href="https://www.linkedin.com/in/sandromatter">LinkedIn</a>
          <a className={styles.link} href="https://www.twitter.com/sandromatter">Twitter</a>
          <a className={styles.link} href="https://www.instagram.com/sandromatter">Instagram</a>
        </div>
      </article>
    </main>
  </>
)

export default IndexPage
