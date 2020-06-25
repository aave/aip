import React from "react"
import { Link } from "gatsby"

import { createLink } from "../externalLink"

import "./style.sass"

import footer from "../../images/footer.png"
import footer2x from "../../images/footer@2x.png"
import footer3x from "../../images/footer@3x.png"
import twitter from "../../images/twitter.svg"
import discord from "../../images/discord.svg"

const Footer = () => {
  return (
    <footer className="Footer">
      <img
        src={footer}
        srcSet={`${footer2x} 2x, ${footer3x} 3x`}
        className="Footer__background"
        alt="footer background"
      />

      <div className="Footer__content">
        <div className="Footer__links">
          <Link to={"/"} rel="home">
            AIPs
          </Link>

          {createLink("AIPs on Github", "https://github.com/aave/aip")}
          {createLink("Aave Protocol", "https://aave.com")}

          {createLink(
            "Discord",
            "https://aave.com/discord",
            <img src={discord} alt="discord" />
          )}

          {createLink(
            "Twitter",
            "https://twitter.com/AaveAave/",
            <img src={twitter} alt="twitter" />
          )}
        </div>

        <div className="Footer__credit">Copyright © 2020 Aave</div>
      </div>
    </footer>
  )
}

export default Footer
