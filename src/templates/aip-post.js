import React from "react"
import { Link, graphql } from "gatsby"
import m from "moment"

import About from "../components/about"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import { createLink } from "../components/externalLink"

const formatAuthorText = (text) => {
  const matches = text.match(/\((.*?)\)/)
  const githubUser = matches[1].replace("@", "")
  return createLink(text.replace(matches[0], ""), `https://github.com/${githubUser}`)
}

const AipPostTemplate = ({ data, pageContext, location }) => {
  const logoImage = data.avatar.childImageSharp.fixed
  const aip = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next, slug } = pageContext
  const updated = m(aip.frontmatter.updated).isValid()

  return (
    <Layout location={location} title={siteTitle} image={logoImage}>
      <SEO title={aip.frontmatter.title} description={aip.excerpt} />
      <article
        style={{
          marginBottom: rhythm(1),
        }}
      >
        <header>
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: 0,
            }}
          >
            AIP {aip.frontmatter.aip}: {aip.frontmatter.title}
          </h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
            }}
          >
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
              `(Updated: ${m(aip.frontmatter.updated).format("MMMM DD, YYYY")})`}
            <br />
          </p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: aip.html }} />
        <hr
          style={{
            marginTop: rhythm(1),
            marginBottom: rhythm(1),
          }}
        />
        <footer>
          <em>
            <About />
            Learn about the{" "}
            <Link to={"/"} rel="home">
              process here
            </Link>
            .
          </em>
        </footer>
        <hr
          style={{
            marginTop: rhythm(1),
            marginBottom: rhythm(1),
          }}
        />
      </article>

      <nav>
        <div
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← AIP {previous.frontmatter.aip}: {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                AIP {next.frontmatter.aip}: {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </div>
      </nav>
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
