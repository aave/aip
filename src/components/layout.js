import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"
import { createLink } from "./externalLink"

import styles from './styles/layout.module.css'

const Layout = ({ location, title, image, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname !== rootPath) {
    header = (
      <div
        style={{
          display: `flex`,
          marginBottom: rhythm(1),
        }}
      >
        <Image
          fixed={image}
          alt={"alt"}
          style={{
            marginRight: rhythm(1 / 3),
            marginBottom: 0,
            minWidth: 30,
            borderRadius: `100%`,
          }}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
        <h3
          style={{
            marginTop: 2,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      </div>
    )
  }
  return (
    <div
      className={styles.container}
    >
      {header && <header>{header}</header>}
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <hr />
        <p>
          <Link to={"/"} rel="home">
            AIPs
          </Link>
          {" - "}
          {createLink("AIPs on Github", "https://github.com/aave/aip")}
          {" - "}
          {createLink("Aave Protocol", "https://aave.com")}
          {" - "}
          {createLink("Discord", "https://aave.com/discord")}
          {" - "}
          {createLink("Twitter", "https://twitter.com/AaveAave/")}
        </p>
      </footer>
    </div>
  )
}

export default Layout
