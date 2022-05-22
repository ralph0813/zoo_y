import * as React from 'react'
import DetailActionBar from '../../components/action_bar/DetailActionBar'
import ShowRich from '../../components/tiny_mce/ShowRich'
import { useUserInfoContext } from '../../context/userContext'

export default function DetailItem({ data }: { data: any }) {
  const {
    state: userInfo,
  } = useUserInfoContext()
  const item = data.data
  const date = new Date()
  const min = date.getMinutes()
  date.setMinutes(min - 10)
  const isThumbUp = item?.likedBy?.indexOf(userInfo.uid) !== undefined && item?.likedBy?.indexOf(userInfo.uid) !== -1
  console.log(item?.likedBy?.length)
  const actionProps = {
    articleId: data.id,
    isThumbUp: isThumbUp,
    nrOfThumbUp: item?.likedBy?.length,
    createTime: item.createTime
  }

  return (
    <div>
      <div className="px-3 py-2 pt-3 bg-whit rounded flex flex-col w-full border border-gray-100 space-y-1 shadow-sm">
        <div className="flex items-center space-x-2 cursor-pointer">
          <img src={item.avatar} className="w-6 h-6 -translate-x-0.5" alt="" />
          <div className="font-medium">{item.userName}</div>
          <div className="text-gray-500 ">{item.describe}</div>
        </div>
        <div className="text-gray-800 min-h-14">
          <ShowRich body={item.body} />
        </div>
        <div className="py-1">
          <DetailActionBar actionProps={actionProps} />
        </div>
      </div>
    </div>
  )
}
