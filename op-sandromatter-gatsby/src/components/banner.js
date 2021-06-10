import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
 
import stylesBanner from "../styles/banner.module.css"
import stylesLayout from "../styles/layout.module.css"

const Banner = ({ h1Text }) => {
    const data = useStaticQuery(graphql`
        query {
        placeholderImage: file(relativePath: { eq: "sandromatter-portrait.png" }) {
            childImageSharp {
            fluid(maxWidth: 960) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
            }
            }
        }
        }
    `)
    return (
        <section className={stylesBanner.banner}>
            <div className={stylesBanner.containerHero}>
                <div className={stylesBanner.rowText}>
                    <div className={`${stylesBanner.mainText} ${stylesBanner.underlineBlue}`}>
                        <h1>{h1Text},<br />Sandro Matter</h1>
                    </div>
                </div>
                <div className={stylesBanner.rowImage}>
                    <div className={stylesBanner.mainImage}>
                        <Img fadeIn={false} loading="eager" fluid={data.placeholderImage.childImageSharp.fluid} />
                    </div>
                </div>
                <div className={stylesBanner.scroll}>
                    <div className={stylesBanner.languageBox}>
                        <a className={stylesLayout.link} href="/">de</a> | <a className={stylesLayout.link} href="/en">en</a>
                    </div>
                    <span>scroll down</span>            
                </div>
            </div>
        </section>
    )
}

export default Banner