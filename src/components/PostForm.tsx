import React, { ChangeEvent, useState, MouseEvent } from 'react'
import { MyInput } from './UI/input/MyInput'
import { MyButton } from './UI/button/MyButton'

type PostFormProps = {
  create: (newPost: { id: number; title: string; body: string }) => void
}

export const PostForm = ({ create }: PostFormProps) => {
  const [post, setPost] = useState({
    title: '',
    body: '',
  })

  function handleNewPost(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    const newPost = {
      ...post,
      id: Date.now(),
    }
    create(newPost)
    setPost({ title: '', body: '' })
  }

  //   const bodyInputRef = useRef<HTMLInputElement>(null)
  return (
    <form>
      {/**Управляемый инпут с помощью value */}
      <MyInput
        type="text"
        value={post.title}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setPost({ ...post, title: e.currentTarget.value })}
        placeholder="title post"
      />
      {/**Управляемый инпут с помощью value */}
      <MyInput
        type="text"
        value={post.body}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setPost({ ...post, body: e.currentTarget.value })}
        placeholder="body post"
      />
      {/*неуправляемый инпут */}
      {/* <MyInput ref={bodyInputRef} type="text" placeholder="description post" /> */}
      <MyButton onClick={handleNewPost}>Add post</MyButton>
    </form>
  )
}
