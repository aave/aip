import React from "react"
import { Link } from "gatsby"

import { createLink } from "../externalLink"

import "./style.sass"

import logo from "../../images/whiteLogo.svg"

const Header = () => {
  return (
    <header className="Header">
      {createLink(
        "",
        "https://aave.com",
        <img src={logo} className="Header__logo" alt="aave logo" />
      )}

      <div className="Header__text-wrapper">
        <div className="Header__title">
          <Link to={"/"} rel="home">
            Aave Improvement Proposals
          </Link>
        </div>
        <div className="Header__description">
          Aave Improvement Proposals (AIPs) describe standards for the Aave
          Protocol, including core protocol specifications, client APIs, and
          contract standards.
        </div>
      </div>
    </header>
  )
}

export default Header
