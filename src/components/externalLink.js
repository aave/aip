import React from 'react'

export const createLink = (label, link, children) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {children}{label}
    </a>
  )
}