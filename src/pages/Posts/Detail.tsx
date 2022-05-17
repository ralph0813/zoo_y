import * as React from 'react'
import { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import DetailItem from './DetailItem'
import FollowPosts from './FollowPosts'
import { range } from '../../utils/utils'
import { getPostDetail } from '../../firebase/service'

export default function Detail() {
  const params = useParams()
  console.log(params.postId)
  const postId = params.postId

  const [postDetail, setPostDetail] = useState()

  useEffect(() => {
    const getDetail = async () => {
      const detail = await getPostDetail({ postId })
      // @ts-ignore
      setPostDetail(detail)
      console.log(detail)
    }
    getDetail()
  }, [])

  const navigate = useNavigate()
  const goToPostDetail = () => navigate('/posts/' + item.id)
  const myRef = useRef<HTMLDivElement>(null)
  const executeScroll = () => myRef.current!.scrollIntoView()

  const item = {
    id: '1abs',
    avatar: 'https://minio.juntao.life/ifb399/test/np_logo.png',
    userName: 'Ansk',
    describe: 'A front engineer',
    title: 'How can I estimate the travel time of a route by using a travel time matrix?',
    body: 'Vira looked up. The Russian soldiers were a few feet away, spray painting "V" symbols on her car, ' +
      'to avoid friendly fire when they drove it away. One of them - just a boy, Vira thought, my grandson\'s ' +
      'age - took out a walkie-talkie.Poplar, poplar, this is padfoot," he said. "A car is about to come, don\'t shoot. ' +
      'Vira raised herself up on her cane and spoke her prayer aloud. "Please do not take my son." ' +
      'In fact, Valeriy Kuksa was her son-in-law, but she called him her son. The Russians were taking her son.' +
      ' The young one raised his gun halfway. "Go back inside grandma," he said. ' +
      '"He is just going to help us push the car out of the driveway.'
  }
  const peopleNum = 1
  const postsNum = 4
  return (
    <div className="base-box">
      <div className="font-bold text-2xl cursor-pointer self-start pt-2" onClick={goToPostDetail}>{item.title}</div>
      <div className="flex justify-between w-full">
        <div className="self-start">{peopleNum} people {postsNum} posts</div>
        <button className="btn-secondary text-sm py-0.5 px-2" onClick={executeScroll}>follow posts</button>
      </div>

      {range(0, postsNum)
        .map((key) => (
          <div className="p-0.5" key={key} >
            <DetailItem />
          </div>
        ))}
      <div ref={myRef} />
      <FollowPosts />
    </div>
  )
}
