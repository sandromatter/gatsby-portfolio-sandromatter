import React from "react"

import Header from "../components/header"
import Banner from "../components/banner"
import SEO from "../components/seo"

import styles from "../styles/layout.module.css"

const EnPage = () => (
  <>
    <Header />
    <Banner h1Text={"That's me"}/>
    <main className={styles.white}>
      <article className={styles.wrapper}>
        <SEO title="That's me." lang="en"/>
        <div className={styles.underlineYellow}> 
          <h2>hey!</h2>
        </div>
        <p>I am an online marketing specialist from Switzerland <span role="img" aria-label="Emoji switzerland flag">🇨🇭</span> and study «Digital Business Management» at the University of Applied Sciences of the Grisons.</p>
        <p>What I like in a nutshell:</p>
        <ul>
          <li>Mountains &amp; mountainbikes! <span role="img" aria-label="Emoji tree">🌲</span><span role="img" aria-label="Emoji mountain">⛰️</span><span role="img" aria-label="Emoji cyclist">🚴</span></li>
          <li>Photography &amp; videography <span role="img" aria-label="Emoji camera">📸 </span><span role="img" aria-label="Emoji videocamera">🎥 </span></li>
          <li>Tech, news &amp; media <span role="img" aria-label="Emoji floppy-disk">💾 </span><span role="img" aria-label="Emoji newspaper">📰 </span></li>
        </ul>
        <p>In case I launch a new project I'll be sure to tell you about it on <a className={styles.link} href="https://www.twitter.com/sandromatter">Twitter</a> or <a className={styles.link} href="https://www.linkedin.com/in/sandromatter">LinkedIn</a>. If I launch another photo or video project, you're most likely to hear about it on <a className={styles.link} href="https://www.instagram.com/sandromatter">Instagram</a> and you can find my coding projects, such as this website, on <a className={styles.link} href="https://www.github.com/sandromatter">GitHub</a>. Take a look, write me, or leave a <span role="img" aria-label="Emoji thumbs up">👍🏻</span>.</p>
        <div className={styles.underlineYellow}>
          <h2>contact</h2>
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

export default EnPage
