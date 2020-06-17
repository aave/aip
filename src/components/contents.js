import React from "react"
import { rhythm } from "../utils/typography"
import { Link } from "gatsby"

import styles from './styles/contents.module.css'

const Contents = ({ posts }) => {
  let categories = {}

  posts.map(post => {
    const status = post.node.frontmatter.status
    if (status === null || status === undefined) {
      console.log(post.node)
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
          <h2
            style={{
              marginBottom: rhythm(1 / 4),
            }}
          >
            {category}
          </h2>
        </header>
        {categories[category].map(aip => {
          return (
            <article key={aip.aip}>
              {/* <Link style={{ boxShadow: `none` }} to={aip.slug}>
                AIP {aip.aip}: {aip.title}
              </Link> */}
              <a href={"/aip" + aip.slug}>
                AIP {aip.aip}: {aip.title}
              </a>
            </article>
          )
        })}
      </div>
    )
  })

  return (
    <div className={styles.toc}>
      <h1>List of AIPs</h1>
      {toc}
    </div>
  )
}

export default Contents