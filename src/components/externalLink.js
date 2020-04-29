import React from 'react'

export const createLink = (label, link) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  )
}