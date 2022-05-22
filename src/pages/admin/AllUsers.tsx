import * as React from 'react'
import { useEffect, useState } from 'react'
import { getAllUsers } from '../../firebase/service'
import PostsItem, { PostItem } from '../Posts/PostsItem'
import UserItem from '../../components/admin/users/UserItem'

export default function Allusers() {
  const [users, setUsers] = useState<any>()
  useEffect(() => {
    async function getPosts() {
      const res = await getAllUsers()
      setUsers(res.data)
    }

    getPosts()
  }, [])

  return (
    <div className="py-2  space-y-2">
      {users && users.map((data: PostItem) =>
        <UserItem itemData={data} key={data.id} />
      )}
      {users && users.length === 0 && (
        <div>No users</div>
      )}
    </div>
  )
}
