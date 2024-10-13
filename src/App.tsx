import { ChangeEvent, useState, MouseEvent, useRef } from 'react'
import { Counter } from './components/Counter'
import { ClassCounter } from './components/ClassCounter'
import './styles/App.css'
import { PostItem } from './components/PostItem'
import { PostsList } from './components/PostsList'
import { MyButton } from './components/UI/button/MyButton'
import { MyInput } from './components/UI/input/MyInput'
import { PostForm } from './components/PostForm'

function App() {
  const [posts, setPosts] = useState([
    { id: 0, title: 'JavaScript', body: 'JavaScript - programming language - 1' },
    { id: 1, title: 'JavaScript', body: 'JavaScript - programming language - 2' },
    { id: 2, title: 'JavaScript', body: 'JavaScript - programming language - 3' },
    { id: 3, title: 'JavaScript', body: 'JavaScript - programming language - 4' },
    { id: 4, title: 'JavaScript', body: 'JavaScript - programming language - 5' },
  ])
  const [posts2, setPosts2] = useState([
    { id: 0, title: 'Python', body: 'Python - programming language' },
    { id: 1, title: 'Python', body: 'Python - programming language' },
    { id: 2, title: 'Python', body: 'Python - programming language' },
    { id: 3, title: 'Python', body: 'Python - programming language' },
    { id: 4, title: 'Python', body: 'Python - programming language' },
    { id: 5, title: 'Python', body: 'Python - programming language' },
  ])

  const createPost = (newPost: { id: number; title: string; body: string }) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post: { id: number; title: string; body: string }) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost} />

      {posts.length !== 0 ? (
        <PostsList remove={removePost} title="Posts list of JS" posts={posts} />
      ) : (
        <h1 style={{ textAlign: 'center' }}>Посты не найдены!</h1>
      )}

      {/* <PostsList remove={removePost} title="Posts list of Py" posts={posts2} /> */}
    </div>
  )
}

export default App
