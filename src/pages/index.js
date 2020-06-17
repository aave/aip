import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Header from "../components/header"
import Contents from '../components/contents'
import SEO from "../components/seo"

import styles from './index.module.css'

const AipIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const logoImage = data.avatar.childImageSharp.fixed
  const readme = data.markdownRemark

  return (
    <>
      <Header />
      <Layout location={location} title={siteTitle} image={logoImage}>
        <SEO title="Aave Improvement Proposals" />
        <Contents posts={data.allMarkdownRemark.edges} />
        <section className={styles.main} dangerouslySetInnerHTML={{ __html: readme.html }} />
      </Layout>
    </>
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
