import React from "react"

export const createLink = (label, link, children, className) => {
  return (
    <a
      className={className}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <span>{label}</span>
    </a>
  )
}
