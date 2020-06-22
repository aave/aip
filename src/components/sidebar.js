import React from "react"

import styles from '../styles/sidebar.module.css'

const Sidebar = ({ posts }) => {
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
          <h2 className={styles.h2}>
            {category}
          </h2>
        </header>
        {categories[category].map(aip => {
          return (
            <article key={aip.aip} className={styles.aipLink}>
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
      <div className={styles.title}>List of AIPs</div>
      <div className={styles.box}>
        {toc}
      </div>
    </div>
  )
}

export default Sidebar