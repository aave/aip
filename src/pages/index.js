import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import "../_mixins/normalize.css"
import "../styles/global.sass"

const AipIndex = ({ data }) => {
  const readme = data.markdownRemark
  const posts = data && data.allMarkdownRemark && data.allMarkdownRemark.edges

  return (
    <Layout posts={posts}>
      <SEO title="Aave Improvement Proposals" />

      <section
        className="Main"
        dangerouslySetInnerHTML={{ __html: readme.html }}
      />
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
