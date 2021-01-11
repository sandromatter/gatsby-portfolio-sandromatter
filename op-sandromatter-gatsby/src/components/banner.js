import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
 
import styles from "../styles/banner.module.css"

const Banner = () => {
    const data = useStaticQuery(graphql`
        query {
        placeholderImage: file(relativePath: { eq: "sandromatter-portrait.png" }) {
            childImageSharp {
            fluid(maxWidth: 480) {
                ...GatsbyImageSharpFluid
            }
            }
        }
        }
    `)
    return (
        <section className={styles.banner}>
            <div className={styles.containerHero}>
                <div className={styles.rowText}>
                    <div className={`${styles.mainText} ${styles.underlineBlue}`}>
                        <h1>Das bin ich,<br />Sandro Matter</h1>
                    </div>
                </div>
                <div className={styles.rowImage}>
                    <div className={styles.mainImage}>
                        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
                    </div>
                </div>
                <div className={styles.scroll}>
                    <span>scroll down</span>                    
                </div>
            </div>
        </section>
    )
}

export default Banner