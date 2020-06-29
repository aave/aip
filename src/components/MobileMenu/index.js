import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { useWindowWidth } from "@react-hook/window-size"
import classNames from "classnames"

import { createLink } from "../externalLink"
import Sidebar from "../Sidebar"

import "./style.sass"

import logo from "../../images/logo.svg"
import whiteLogo from "../../images/whiteLogo.svg"

const MobileMenu = ({ posts }) => {
  const [visible, setVisible] = useState(false)

  const width = useWindowWidth()
  const sm = width < 768

  const openMenu = () => setVisible(true)
  const closeMenu = () => setVisible(false)

  useEffect(() => {
    if (visible && !sm) {
      closeMenu()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sm])

  if (visible) {
    if (typeof window !== `undefined`) {
      document
        .getElementsByTagName("html")[0]
        .classList.add("Body__mobileMenu-open")
    }
  } else {
    if (typeof window !== `undefined`) {
      document
        .getElementsByTagName("html")[0]
        .classList.remove("Body__mobileMenu-open")
    }
  }

  return (
    <div className="MobileMenu__wrapper">
      <div
        className={classNames("MobileMenu__overlay", {
          MobileMenu__overlayVisible: visible,
        })}
        onClick={closeMenu}
      />
      <div className="MobileMenu">
        <div className="MobileMenu__top-inner">
          <Link to={"/"} rel="home">
            <img src={logo} alt="Aave" />
          </Link>
          <button
            className={classNames("MobileMenu__open")}
            type="button"
            onClick={openMenu}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div
          className={classNames("MobileMenu__inner", {
            MobileMenu__innerActive: visible,
          })}
        >
          <div className="MobileMenu__top-line">
            {createLink(
              "",
              "https://aave.com",
              <img src={whiteLogo} className="MobileMenu__logo" alt="Aave" />
            )}
            <button
              className="MobileMenu__close"
              type="button"
              onClick={closeMenu}
            />
          </div>

          <Sidebar posts={posts} />
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
