import * as React from 'react'
import PostsItem from './PostsItem'
import { useUserInfoContext } from '../../context/userContext'
import { useNavigate } from 'react-router-dom'
import { range } from '../../utils/utils'

export default function Posts() {

  const {
    state: userInfo,
    dispatch: userInfoDispatch
  } = useUserInfoContext()
  const navigate = useNavigate()

  const handleAddPost = () => {
    if (userInfo.isLogin) {
      navigate('/posts/add')
    } else {
      navigate('/login')
    }
  }

  return (
    <div className="base-box pb-10">
      <div className="flex items-center justify-between w-full border-b">
        <div className="font-medium text-lg m-3 sm:m-5">Posts</div>
        <button className="btn-primary py-1 mr-1 font-normal" onClick={handleAddPost}> Add post</button>
      </div>
      <div className="w-full">
        {range(0, 10)
          .map((key) => (
            <div className="p-0.5">
              <PostsItem />
            </div>
          ))}
      </div>
    </div>
  )
}
