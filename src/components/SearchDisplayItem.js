import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"


export const SearchDisplayItem = ({ body, title, slug }) => (
  <div>
    <div>{title}</div>
    <div>
      <MDXRenderer>{body}</MDXRenderer>
    </div>
    <div>
      <Link to={`/${slug}`}>{title}</Link>
    </div>
  </div>
)