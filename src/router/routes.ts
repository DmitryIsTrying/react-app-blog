import { Abouts } from '../pages/Abouts'
import { Login } from '../pages/Login'
import { PostIdPage } from '../pages/PostIdPage'
import Posts from '../pages/Posts'

export const privateRoutes = [
  { path: '/', element: Posts },
  { path: '/about', element: Abouts },
  { path: '/posts', element: Posts },
  { path: '/posts/:id', element: PostIdPage },
]

export const publicRoutes = [{ path: '/login', element: Login }]
