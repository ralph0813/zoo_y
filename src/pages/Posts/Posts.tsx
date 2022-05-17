import * as React from 'react'
import PostsItem from './PostsItem'
import { useUserInfoContext } from '../../context/userContext'
import { useNavigate } from 'react-router-dom'
import { range } from '../../utils/utils'
import { useEffect, useState } from 'react'
import { getPosts } from '../../firebase/service'
import BaseLoading from '../../components/loadings/BaseLoading'

export default function Posts() {
  const [data, setData] = useState<undefined | []>()
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
  useEffect(() => {
    const getPostsData = async () => {
      const res = await getPosts()
      // @ts-ignore
      setData(res.data)
    }
    getPostsData()
  }, [])

  return (
    <div className="base-box pb-10">
      <div className="flex items-center justify-between w-full">
        <div className="font-bold text-2xl m-3 sm:m-5">Posts</div>
        <button className="btn-primary py-1 mr-1 font-normal" onClick={handleAddPost}> Add post</button>
      </div>
      <div className="w-full">
        {data
          ? data.map((data: any) => (
            <div className="p-0.5" key={data.id}>
              <PostsItem />
            </div>
          ))
          : <BaseLoading />
        }
      </div>
    </div>
  )
}
