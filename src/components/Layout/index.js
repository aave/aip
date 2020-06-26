import React from "react"
import { useWindowWidth } from "@react-hook/window-size"

import Header from "../Header"
import Sidebar from "../Sidebar"
import Footer from "../Footer"
import MobileMenu from "../MobileMenu"

import "./style.sass"

const Layout = ({ posts, children }) => {
  const width = useWindowWidth()
  const sm = width < 768

  return (
    <>
      {sm && posts && <MobileMenu posts={posts} />}
      <Header />

      <div className="Layout">
        <main className="Layout__wrapper">
          {posts && <Sidebar posts={posts} />}
          {children}
        </main>
      </div>

      <Footer />
    </>
  )
}

export default Layout
