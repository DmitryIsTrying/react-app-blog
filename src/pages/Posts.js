import { useEffect, useState, useRef } from 'react'
import { usePosts } from '../hooks/usePosts'
import { useFetching } from '../hooks/useFetching'
import PostService from '../API/PostService'
import { getPageCount } from '../utils/pages'
import { MyButton } from '../components/UI/button/MyButton'
import { PostForm } from '../components/PostForm'
import { MyModal } from '../components/UI/MyModal/MyModal'
import { PostFilter } from '../components/PostFilter'
import { Pagination } from '../components/UI/pagination/Pagination'
import { Loader } from '../components/UI/Loader/Loader'
import { PostsList } from '../components/PostsList'
import { useObserver } from '../hooks/useObserver'
import { MySelect } from '../components/UI/select/MySelect'

function Posts() {
  const [posts, setPosts] = useState([])

  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const [visible, setVisible] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter)
  const lastElement = useRef()

  const [fetching, isLoading, error] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page)
    setPosts([...posts, ...response.data])
    setTotalPages(getPageCount(response.headers['x-total-count'], limit))
  })

  useObserver(lastElement, page < totalPages, isLoading, () => setPage(page + 1))

  useEffect(() => {
    fetching(limit, page)
  }, [page, limit])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setVisible(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page)
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
      <MySelect
        onChange={(value) => setLimit(value)}
        value={limit}
        defaultValue="Кол-во элементов на странице"
        options={[
          { value: 5, name: '5' },
          { value: 10, name: '10' },
          { value: 25, name: '25' },
          { value: -1, name: 'Показать все' },
        ]}
      />
      <Pagination page={page} totalPages={totalPages} changePage={changePage} />
      {error && <h1>Ошибка: ${error}</h1>}
      <PostsList remove={removePost} title="Posts list" posts={sortedAndSearchedPosts} />
      {isLoading && <Loader />}
      <div ref={lastElement} style={{ height: '20px', background: 'transparent' }}></div>
    </div>
  )
}

export default Posts
