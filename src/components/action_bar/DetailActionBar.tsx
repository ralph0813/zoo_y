import * as React from 'react'
import { useState } from 'react'
import { FormatTime, timeFromNow } from '../../utils/utils'
import {
  DownloadIcon,
  ChatAlt2Icon,
  ClockIcon,
  EyeIcon,
  ThumbUpIcon as ThumbUpIconOutline,
} from '@heroicons/react/outline'
import { ThumbUpIcon as ThumbUpIconSolid } from '@heroicons/react/solid'
// import { doThumbUp } from '../../service/commonApi'
// import { useModelContext } from '../../context/ModelContext'
// import { ModalConfig, notLoginConfig } from '../../utils/modalConfig'
// import { useUserInfoContext } from '../../context/UserInfoContext'

export interface ActionBarProps {
  articleId: string
  isThumbUp: boolean
  nrOfThumbUp: number
  nrOfVisit: number
  nrOfComment: number
  createTime: string
}

const DetailActionBar = ({ actionProps }: { actionProps: ActionBarProps }) => {

  // const { dispatch: modelDispatch } = useModelContext()
  // const { state: userInfo } = useUserInfoContext()
  // const openModel = (config: ModalConfig) => {
  //   modelDispatch({ type: 'OPEN', config })

  const {
    articleId,
    isThumbUp,
    nrOfThumbUp,
    nrOfVisit,
    nrOfComment,
    createTime,
  } = actionProps
  const [thumbUp, setThumbUp] = useState(isThumbUp)
  const [thumbUpNum, setThumbUpNum] = useState<number>(nrOfThumbUp)
  const { date, time } = FormatTime(createTime)
  const handleThumbUpClick = async () => {
    // const isLogin = userInfo.isLogin
    // if (!isLogin) {
    //   openModel(notLoginConfig)
    //   return
    // }
    // const { success, isThumbUp } = await doThumbUp({ articleId: articleId })
    if (!thumbUp) {
      setThumbUpNum((num) => num + 1)
    } else {
      setThumbUpNum((num) => num - 1)
    }
    setThumbUp(!thumbUp)
  }
  const [timeFrom, unit] = timeFromNow(new Date(createTime.replace(' ', 'T')))
  return (
    <div className='w-full flex justify-between'>
      <div className="text-gray-500  text-sm">
        Posted on {date} {time}
      </div>

      <div
        className='flex space-x-1 text-sm text-gray-500 items-center px-1 rounded cursor-pointer hover:bg-gray-100'
        onClick={handleThumbUpClick}
      >
        {thumbUp
          ? <ThumbUpIconSolid className='h-4 w-4 text-gray-500' />
          : <ThumbUpIconOutline className='h-4 w-4 text-gray-500' />
        }
        <div>{thumbUpNum}</div>
        <div className='hidden md:inline'>likes</div>
      </div>
    </div>
  )
}
export default DetailActionBar
