import * as React from 'react'
import { useEffect, useState } from 'react'
import { getAllPosts } from '../../firebase/service'
import PostsItem, { PostItem } from '../Posts/PostsItem'

export default function AdminPosts() {
  const [posts, setProsts] = useState<any>()
  useEffect(() => {
    async function getPosts() {
      const res = await getAllPosts()
      setProsts(res.data)
    }
    getPosts()
  }, [])

  return (
    <div className="py-2  space-y-2">
      {posts && posts.map((data: PostItem) =>
        <PostsItem data={data} key={data.id} />
      )}
      {posts && posts.length === 0 && (
        <div>No posts</div>
      )}
    </div>
  )
}
