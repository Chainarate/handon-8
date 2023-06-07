import React from 'react'
import classes from './Podcast.module.css'

const PodCast = (props) => {
  const { podCast } = props
  return (
    <div className={classes.container}>
      <img src={podCast.img} />
      <div className={classes.blog}>
        <div className={classes.headBlog}>
          <p className="font-semibold text-typography-highlight text-red-500">{podCast.author}</p>
          <p className="text-typography-description text-neutral-500">{podCast.date}</p>
          <p className="text-typography-description text-neutral-500">{podCast.readingTime}</p>
        </div>
        <a href={podCast.url} className="text-2xl font-bold">
          {podCast.header}
        </a>
        <a href={podCast.url}>{podCast.description}</a>
      </div>
    </div>
  )
}

export default PodCast
