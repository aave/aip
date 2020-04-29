
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

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
    <div
      style={{
        display: `flex`,
      }}
    >
      <p>
        {description}
      </p>
    </div>
  )
}

export default About
