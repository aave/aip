import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "./style.sass"

const About = () => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      site {
        siteMetadata {
          description
          social {
            twitter
          }
        }
      }
    }
  `)

  const { description } = data.site.siteMetadata
  return (
    <div className="About">
      <p>{description}</p>
    </div>
  )
}

export default About
