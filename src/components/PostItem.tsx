import React from 'react'
import { MyButton } from './UI/button/MyButton'
type PostItemProps = {
  post: PostType
  number: number
  remove: (post: { id: number; title: string; body: string }) => void
}

export type PostType = {
  id: number
  title: string
  body: string
}

export const PostItem = (props: PostItemProps) => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.post.id}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post__btns">
        <MyButton
          onClick={() => {
            props.remove(props.post)
          }}>
          Delete
        </MyButton>
      </div>
    </div>
  )
}
