import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"
import Header from './header'
import Sidebar from './sidebar'
import Footer from "./footer"

import styles from './styles/layout.module.css'

const Layout = ({ posts, children }) => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <main className={styles.main}>
          {posts && (
            <Sidebar posts={posts} />
          )}
          {children}
        </main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
