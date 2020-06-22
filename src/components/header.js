import React from 'react'

import headerStyles from '../styles/header.module.css'
import { Link } from 'gatsby'
import { createLink } from '../components/externalLink'

import header from './images/header.png'
import header2x from './images/header@2x.png'
import header3x from './images/header@3x.png'
import logo from './images/logo.png'
import logo2x from './images/logo@2x.png'
import logo3x from './images/logo@3x.png'

const Header = () => {
  return (
    <div className={headerStyles.container}>
      <img
        src={header}
        srcSet={`${header2x} 2x, ${header3x} 3x`}
        className={headerStyles.imageBanner}
        alt='header background'
      />
      {createLink(
        "",
        "https://aave.com",
        <img
          src={logo}
          srcSet={`${logo2x} 2x, ${logo3x} 3x`}
          className={headerStyles.logo}
          alt='aave logo'
        />
      )}

      <div className={headerStyles.titleContainer}>
        <div className={headerStyles.title}>
          <Link to={"/"} rel="home">
            Aave Improvement Proposals
          </Link>
        </div>
        <div className={headerStyles.subTitle}>
          Aave Improvement Proposals (AIPs) describe standards for the Aave
          Protocol, including core protocol specifications, client APIs, and
          contract standards.
        </div>
      </div>
    </div>
  )
}

export default Header