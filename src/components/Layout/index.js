import React from "react"

import Header from "../Header"
import Sidebar from "../Sidebar"
import Footer from "../Footer"

import "./style.sass"

const Layout = ({ posts, children }) => {
  return (
    <>
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
