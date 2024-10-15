import { Abouts } from '../pages/Abouts'
import Posts from '../pages/Posts'
import { Error } from '../pages/Error'
import { Navigate, Route, Routes } from 'react-router-dom'
import { PostIdPage } from '../pages/PostIdPage'
import { Login } from '../pages/Login'
import { AuthContext } from '../context'
import { useContext } from 'react'
import { Loader } from '../components/UI/Loader/Loader'

export const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext)

  if (isLoading) {
    return <Loader />
  }

  return isAuth ? (
    <Routes>
      <Route path="/" element={<Navigate to="/posts" />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/about" element={<Abouts />} />
      <Route path="/posts/:id" element={<PostIdPage />} />
      <Route path="/login" element={<Navigate to="/posts" />} />
      <Route path="*" element={<Error />} />
    </Routes>
  ) : (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  )
}
