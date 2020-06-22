import React from "react"
import { Link, graphql } from "gatsby"
import m from "moment"

import About from "../components/about"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "../styles/index.module.css"

import { createLink } from "../components/externalLink"

const formatAuthorText = (text) => {
  const matches = text.match(/\((.*?)\)/)
  const githubUser = matches[1].replace("@", "")
  return createLink(text.replace(matches[0], ""), `https://github.com/${githubUser}`)
}

const AipPostTemplate = ({ data, pageContext, location }) => {
  const aip = data.markdownRemark
  const posts = data && data.allMarkdownRemark && data.allMarkdownRemark.edges

  const { previous, next, slug } = pageContext
  const updated = m(aip.frontmatter.updated).isValid()

  return (
    <Layout posts={posts}>
      <SEO title={aip.frontmatter.title} description={aip.excerpt} />
      <div className={styles.stack}>
        <article className={styles.main}>
          <header>
            <h1>
              AIP {aip.frontmatter.aip}: {aip.frontmatter.title}
            </h1>
            <p>
              Author: {formatAuthorText(aip.frontmatter.author)}
              <br />
              Status: <strong>{aip.frontmatter.status}</strong> -{" "}
              {createLink("Discussions", aip.frontmatter.discussions)}
              {" - "}
              {createLink(
                "Raw",
                `https://github.com/aave/aip/blob/master${slug.slice(0, -1)}.md`
              )}
              <br />
              Created: {aip.frontmatter.created}{" "}
              {updated &&
                `(Updated: ${m(aip.frontmatter.updated).format(
                  "MMMM DD, YYYY"
                )})`}
              <br />
            </p>
          </header>
          <section dangerouslySetInnerHTML={{ __html: aip.html }} />
          <footer className={styles.aip_footer}>
            <hr />
            <em>
              <About />
              Learn about the{" "}
              <Link to={"/"} rel="home">
                process here
              </Link>
              .
            </em>
          </footer>
          <hr />
        </article>
        <nav>
          <div className={styles.aip_nav}>
            <li>
              {previous && (
                <a href={"/aip" + previous.fields.slug}>
                  {" "}
                  ← AIP {previous.frontmatter.aip}: {previous.frontmatter.title}
                </a>
              )}
            </li>
            <li>
              {next && (
                <a href={"/aip" + next.fields.slug}>
                  {" "}
                  AIP {next.frontmatter.aip}: {next.frontmatter.title} →
                </a>
              )}
            </li>
          </div>
        </nav>
      </div>
    </Layout>
  )
}

export default AipPostTemplate

export const pageQuery = graphql`
         query AipPostBySlug($slug: String!) {
           site {
             siteMetadata {
               title
               siteUrl
             }
           }
           avatar: file(absolutePath: { regex: "/logo.png/" }) {
             childImageSharp {
               fixed(width: 30, height: 30) {
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
           markdownRemark(fields: { slug: { eq: $slug } }) {
             id
             excerpt(pruneLength: 160)
             html
             frontmatter {
               aip
               title
               status
               author
               discussions
               created(formatString: "MMMM DD, YYYY")
               updated
             }
           }
         }
       `
