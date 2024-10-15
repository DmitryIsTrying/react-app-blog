import { useMemo } from 'react'
export type Post = {
  id: number
  title: string
  body: string
}

export type SortType = {
  title: string
  body: string
}

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
