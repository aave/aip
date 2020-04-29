import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const AipIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const logoImage = data.avatar.childImageSharp.fixed
  const readme = data.markdownRemark
  const posts = data.allMarkdownRemark.edges
  let categories = {}

  posts.map(post => {
    const status = post.node.frontmatter.status
    if (status === null || status === undefined) { 
      console.log(post.node)
      return null }

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
              <Link style={{ boxShadow: `none` }} to={aip.slug}>
                AIP {aip.aip}: {aip.title}
              </Link>
            </article>
          )
        })
        }
      </div>
    )
  })

  return (
    <Layout location={location} title={siteTitle} image={logoImage}>
      <SEO title="Aave Improvement Proposals" />
      <section dangerouslySetInnerHTML={{ __html: readme.html }} />
      <h1>List of AIPs</h1>
      {toc}
    </Layout>
  )
}

export default AipIndex

export const pageQuery = graphql`
         query {
           site {
             siteMetadata {
               title
             }
           }
           avatar: file(absolutePath: { regex: "/logo.png/" }) {
             childImageSharp {
               fixed(width: 50, height: 50) {
                 ...GatsbyImageSharpFixed
               }
             }
           }
           allMarkdownRemark(
             sort: { fields: frontmatter___aip, order: DESC }
             filter: { fields: { slug: { ne: "/" } } }
           ) {
             edges {
               node {
                 fields {
                   slug
                 }
                 frontmatter {
                   status
                   aip
                   title
                 }
               }
             }
           }
           markdownRemark(fields: { slug: { eq: "/" } }) {
             html
           }
         }
       `
