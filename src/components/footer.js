import React from "react"
import { Link } from "gatsby"

import { createLink } from "./externalLink"

import styles from '../styles/footer.module.css'

import footer from "./images/footer.png"
import footer2x from "./images/footer@2x.png"
import footer3x from "./images/footer@3x.png"
import twitter from "./images/twitter.svg"
import discord from "./images/discord.svg"

const Footer = () => {
  return (
    <div className={styles.container}>
      <img
        src={footer}
        srcSet={`${footer2x} 2x, ${footer3x} 3x`}
        className={styles.imageBanner}
        alt='footer background'
      />
      <div className={styles.content}>
        <div className={styles.links}>
          <Link to={"/"} rel="home">
            AIPs
          </Link>
          {createLink("AIPs on Github", "https://github.com/aave/aip")}
          {createLink("Aave Protocol", "https://aave.com")}

          {createLink(
            "Discord",
            "https://aave.com/discord",
            <img src={discord} className={styles.icon} alt='discord' />
          )}

          {createLink(
            "Twitter",
            "https://twitter.com/AaveAave/",
            <img src={twitter} className={styles.icon} alt='twitter' />
          )}
        </div>
        <div className={styles.credit}>Copyright © 2020 Aave</div>
      </div>
    </div>
  )
}

export default Footer