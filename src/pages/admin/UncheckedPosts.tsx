import * as React from 'react'
import { useEffect, useState } from 'react'
import { getUnCheckedPosts } from '../../firebase/service'
import PostsItem, { PostItem } from '../Posts/PostsItem'

export default function UncheckedPosts() {
  const [posts, setProsts] = useState<any>()
  useEffect(() => {
    async function getPosts() {
      const res = await getUnCheckedPosts()
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
        <div>No posts need check</div>
      )}
    </div>
  )
}
