import React from "react"
import { Link } from "gatsby"
import { useWindowWidth } from "@react-hook/window-size"

import { createLink } from "../externalLink"

import "./style.sass"

import topBackground from "./images/topBg.svg"
import mobileTopBackground from "./images/mobileTopBg.svg"
import twitter from "../../images/twitter.svg"
import discord from "../../images/discord.svg"

const Footer = () => {
  const width = useWindowWidth()
  const sm = width < 768

  return (
    <footer className="Footer">
      <img
        src={sm ? mobileTopBackground : topBackground}
        alt=""
        className="Footer__top-background"
      />

      <div className="Footer__content">
        <div className="Footer__bg" />

        <div className="Footer__links">
          <Link to={"/"} rel="home">
            AIPs
          </Link>

          {createLink("AIPs on Github", "https://github.com/aave/aip")}
          {createLink("Aave Protocol", "https://aave.com")}

          {createLink(
            "Discord",
            "https://aave.com/discord",
            <img src={discord} alt="discord" />,
            "Footer__social-link"
          )}

          {createLink(
            "Twitter",
            "https://twitter.com/AaveAave/",
            <img src={twitter} alt="twitter" />,
            "Footer__social-link"
          )}
        </div>

        <div className="Footer__credit">
          Copyright &copy; {new Date().getFullYear()} Aave
        </div>
      </div>
    </footer>
  )
}

export default Footer
