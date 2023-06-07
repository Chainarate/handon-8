import React from 'react'
import classes from './Blog.module.css'

const Blog = (props) => {
  const { blog } = props
  return (
    <div className={classes.blog}>
      <div className={classes.headBlog}>
        <p className="font-semibold text-typography-highlight text-red-500">{blog.author}</p>
        <p className="text-typography-description text-neutral-500">{blog.date}</p>
        <p className="text-typography-description text-neutral-500">{blog.readingTime}</p>
      </div>
      <a href={blog.url} className="text-2xl font-bold">
        {blog.header}
      </a>
      <a href={blog.url}>{blog.description}</a>
      <div className={classes.tag}>
        {blog.tags.map((tag) => {
          return <p key={tag}>#{tag}</p>
        })}
      </div>
    </div>
  )
}

export default Blog
