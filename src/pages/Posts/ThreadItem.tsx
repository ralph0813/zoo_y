import * as React from 'react'
import { useEffect, useState } from 'react'

import ShowRich from '../../components/tiny_mce/ShowRich'
import { useUserInfoContext } from '../../context/userContext'
import { getThreadsDetail } from '../../firebase/service'
import ThreadActionBar from '../../components/action_bar/ThreadActionBar'

export default function ThreadItem({ tid }: { tid: string }) {
  const [data, setData] = useState<any>()

  useEffect(() => {
    async function getDetail() {
      const res = await getThreadsDetail({ pid: tid })
      setData(res)
      console.log(res)
    }

    getDetail()
  }, [])
  const {
    state: userInfo,
  } = useUserInfoContext()
  const item = data?.data
  const date = new Date()
  const min = date.getMinutes()
  date.setMinutes(min - 10)
  const isThumbUp = item?.likedBy?.indexOf(userInfo.uid) !== undefined && item?.likedBy?.indexOf(userInfo.uid) !== -1

  const actionProps = {
    articleId: tid,
    isThumbUp: isThumbUp,
    nrOfThumbUp: item?.likedBy?.length || 0,
    nrOfComment: item?.follows?.length || 0,
    createTime: item?.createTime
  }
  const default_avatar = 'https://minio.juntao.life/ifb399/test/np_logo.png'
  return (
    <div>
      <div className="px-3 py-2 pt-3 bg-whit rounded flex flex-col w-full border border-gray-100 space-y-1 shadow-sm">
        <div className="flex items-center space-x-2 cursor-pointer">
          <img src={item?.avatar || default_avatar} className="w-6 h-6 -translate-x-0.5" alt="" />
          <div className="font-medium">{item?.uname}</div>
          <div className="text-gray-500 ">{item?.about}</div>
        </div>
        <div className="text-gray-800 min-h-14 w-full">
          <ShowRich body={item?.body} />
        </div>
        <div className="py-1">
          <ThreadActionBar actionProps={actionProps} />
        </div>
      </div>
    </div>
  )
}
