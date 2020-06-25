import React from "react"
import { Location } from "@reach/router"

import "./style.sass"

const Sidebar = ({ posts }) => {
  let categories = {}

  posts.map(post => {
    const status = post.node.frontmatter.status
    if (status === null || status === undefined) {
      return null
    }

    const entry = {
      aip: post.node.frontmatter.aip,
      title: post.node.frontmatter.title,
      slug: post.node.fields.slug,
    }

    if (categories[status] === undefined) {
      categories[status] = [entry]
    } else {
      categories[status].push(entry)
    }
    return null
  })

  const toc = Object.keys(categories).map(category => {
    return (
      <div key={category}>
        <header>
          <h2 className="Sidebar__caption">{category}</h2>
        </header>

        {categories[category].map((aip, index) => {
          return (
            <Location key={index}>
              {({ location }) => {
                return (
                  <article
                    key={aip.aip}
                    className={
                      location.pathname.includes(aip.slug)
                        ? "Sidebar__active-link"
                        : "Sidebar__link"
                    }
                  >
                    <a href={"/aips" + aip.slug}>
                      AIP {aip.aip}: {aip.title}
                    </a>
                  </article>
                )
              }}
            </Location>
          )
        })}
      </div>
    )
  })

  return (
    <div className="Sidebar">
      <div className="Sidebar__wrapper">{toc}</div>
    </div>
  )
}

export default Sidebar
