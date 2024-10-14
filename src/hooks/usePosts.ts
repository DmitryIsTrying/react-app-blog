import { useMemo } from 'react'
import { Post } from '../App'
import { SortType } from '../App'

export const useSortedPosts = (posts: Post[], sort: string) => {
  const sortedPosts = useMemo(() => {
    if (sort) {
      return [...posts].sort((a: Post, b: Post) => a[sort as keyof SortType].localeCompare(b[sort as keyof SortType]))
    }

    return posts
  }, [sort, posts])

  return sortedPosts
}

export const usePosts = (posts: Post[], filter: { sort: string; query: string }) => {
  const sortedPosts = useSortedPosts(posts, filter.sort)
  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts])
  return sortedAndSearchedPosts
}
