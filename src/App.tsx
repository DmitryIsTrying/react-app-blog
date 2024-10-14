import { useEffect, useState } from 'react'
import './styles/App.css'

import { PostsList } from './components/PostsList'

import { PostForm } from './components/PostForm'

import PostService from './API/PostService'
import { PostFilter } from './components/PostFilter'
import { MyModal } from './components/UI/MyModal/MyModal'
import { MyButton } from './components/UI/button/MyButton'
import { usePosts } from './hooks/usePosts'
import { Loader } from './components/UI/Loader/Loader'
import { useFetching } from './hooks/useFetching'
import { getPageCount, getPagesArray } from './utils/pages'
import { Pagination } from './components/UI/pagination/Pagination'

export type Post = {
  id: number
  title: string
  body: string
}

export type SortType = {
  title: string
  body: string
}

function App() {
  const [posts, setPosts] = useState<Post[]>([])

  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const [visible, setVisible] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter)

  const { fetching, isLoading, error } = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page)
    setPosts(response.data)
    setTotalPages(getPageCount(response.headers['x-total-count'], limit))
  })

  useEffect(() => {
    fetching(limit, page)
  }, [])

  const createPost = (newPost: { id: number; title: string; body: string }) => {
    setPosts([...posts, newPost])
    setVisible(false)
  }

  const removePost = (post: { id: number; title: string; body: string }) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  const changePage = (page: number) => {
    setPage(page)
    fetching(limit, page)
  }

  return (
    <div className="App">
      <MyButton style={{ marginTop: '30px' }} onClick={() => setVisible(true)}>
        Создать пост
      </MyButton>
      <MyModal visible={visible} setVisible={setVisible}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <Pagination page={page} totalPages={totalPages} changePage={changePage} />
      {error && <h1>Ошибка: ${error}</h1>}
      {isLoading ? <Loader /> : <PostsList remove={removePost} title="Posts list" posts={sortedAndSearchedPosts} />}
    </div>
  )
}

export default App
