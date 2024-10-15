import React from 'react'
import { MyButton } from './UI/button/MyButton'
import { useNavigate } from 'react-router-dom'
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
  const router = useNavigate()

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
            router(`/posts/${props.post.id}`)
          }}>
          Открыть
        </MyButton>
        <MyButton
          onClick={() => {
            props.remove(props.post)
          }}>
          Удалить
        </MyButton>
      </div>
    </div>
  )
}
