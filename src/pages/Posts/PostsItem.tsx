import * as React from 'react'
import BaseActionBar from '../../components/action_bar/BaseActionBar'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface PostItem {
  id: string
  avatar: string
  userName: string
  describe?: string
  title: string
  body: string
}

export default function PostsItem() {
  const [body, setBody] = useState('')
  const [more, setMore] = useState(false)
  const [showMore, setShowMore] = useState(false)
  const navigate = useNavigate()
  const goToPostDetail = () => navigate('/posts/' + item.id)
  const getShortBody = (text: string) => text.split(" ").slice(0, shorTextCont).join(" ") + '...'

  const item: PostItem = {
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

  const shorTextCont = 80
  const date = new Date()
  const min = date.getMinutes()
  date.setMinutes(min - 10)
  const actionProps = {
    articleId: '1',
    isThumbUp: false,
    nrOfThumbUp: 2,
    nrOfVisit: 3,
    nrOfComment: 1,
    createTime: date.toISOString(),
  }

  useEffect(() => {
    const show = item.body.length > shorTextCont
    if (show) {
      setBody(getShortBody(item.body))
    } else {
      setBody(item.body)
    }
    setShowMore(show)
  }, [item.body])

  const handleReadMore = () => {
    if (more) {
      setBody(getShortBody(item.body))
      setMore(!more)
    } else {
      setBody(item.body)
      setMore(!more)
    }
  }

  return (
    <div>
      <div className="px-3 py-2 pt-3 bg-white shadow rounded-sm flex flex-col flex-grow w-full border-b space-y-1">
        <div className="flex items-center space-x-2 cursor-pointer">
          <img src={item.avatar} className="w-6 h-6 -translate-x-0.5" alt="" />
          <div className="font-medium">{item.userName}</div>
          <div className="text-gray-500 ">{item.describe}</div>
        </div>
        <div className="font-bold text-lg cursor-pointer" onClick={goToPostDetail}>{item.title}</div>
        <div className="text-gray-800">
          <div className="inline pr-4">{body}</div>
          {
            showMore && (
              <div className="inline-block">
                <div className="btn-link inline-block" onClick={handleReadMore}>{more ? 'Less' : 'More'}</div>
                {more ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-flex" fill="none" viewBox="0 0 24 24"
                       stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-flex" fill="none" viewBox="0 0 24 24"
                       stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </div>
            )
          }

        </div>
        <div className="pt-2">
          <BaseActionBar actionProps={actionProps} />
        </div>
      </div>
    </div>
  )
}
