import * as React from 'react'
import BaseActionBar from '../../components/action_bar/BaseActionBar'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUserInfoContext } from '../../context/userContext'
// import firebase from 'firebase/compat'
// import Timestamp = firebase.firestore.Timestamp

export interface PostItem {
  id: string
  data: {
    avatar: string | undefined
    uname: string | undefined
    title: string
    body: string
    bodyRich?: string
    about?: string
    follows?: []
    likedBy?: []
    passed: boolean,
    checked: boolean,
    createTime: any
  }
}

export default function PostsItem({ data }: { data: PostItem }) {
  const { id: pid, data: itemData } = data
  const {
    state: userInfo,
  } = useUserInfoContext()
  const [body, setBody] = useState('')
  const [more, setMore] = useState(false)
  const [showMore, setShowMore] = useState(false)
  const navigate = useNavigate()
  const goToPostDetail = () => navigate('/posts/' + pid)
  const getShortBody = (text: string) => text.split(' ')
    .slice(0, shorTextCont)
    .join(' ') + '...'

  const default_avatar = 'https://minio.juntao.life/ifb399/test/np_logo.png'
  const default_uname = 'Guest User'
  const default_describe = ''

  const shorTextCont = 80
  const date = new Date()
  const min = date.getMinutes()
  date.setMinutes(min - 10)
  // @ts-ignore
  const isThumbUp = itemData?.likedBy?.indexOf(userInfo.uid) === -1
  const actionProps = {
    articleId: pid,
    isThumbUp: isThumbUp ,
    nrOfThumbUp: itemData?.likedBy?.length || 0,
    nrOfComment: itemData?.follows?.length || 0,
    createTime: itemData.createTime,
    passed: itemData.passed,
    checked: itemData.checked
  }

  useEffect(() => {
    const show = itemData.body.length > shorTextCont
    if (show) {
      setBody(getShortBody(itemData.body))
    } else {
      setBody(itemData.body)
    }
    setShowMore(show)
  }, [itemData.body])

  const handleReadMore = () => {
    if (more) {
      setBody(getShortBody(itemData.body))
      setMore(!more)
    } else {
      setBody(itemData.body)
      setMore(!more)
    }
  }

  return (
    <div>
      <div
        className="px-3 py-2 pt-3 bg-white shadow rounded-md flex flex-col flex-grow w-full border-b space-y-1 border border-gray-100">
        <div className="flex items-center space-x-2 cursor-pointer">
          <img src={itemData.avatar || default_avatar} className="w-6 h-6 -translate-x-0.5" alt="" />
          <div className="font-medium">{itemData.uname || default_uname}</div>
          <div className="text-gray-500 ">{itemData.about || default_describe}</div>
        </div>
        <div className="font-bold text-lg cursor-pointer" onClick={goToPostDetail}>{itemData.title}</div>
        <div className="text-gray-800 min-h-14">
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
