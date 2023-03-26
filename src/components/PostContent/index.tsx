import React from 'react';
import classes from "src/components/PostContent/PostContent.module.css"


type Props = {
  title: string;
  content: string;
  date: string;
}

export const PostContent: React.FC<Props> = ({title, content, date}) => {
  return (
    <div className={classes.wrap}>
      <h1 className={classes.title}>{title}</h1>
      <time className={classes.date}>{date}</time>
      <div className={classes.detail} dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}