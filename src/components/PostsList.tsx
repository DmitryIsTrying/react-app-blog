import React, { useState } from 'react'
import { PostItem, PostType } from './PostItem'

type PostsList = {
  posts: PostType[]
  title: string
  remove: (post: { id: number; title: string; body: string }) => void
}

export const PostsList = ({ posts, title, remove }: PostsList) => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      {posts.map((post, index) => {
        return <PostItem remove={remove} number={index + 1} key={post.id} post={post} />
      })}
    </div>
  )
}
