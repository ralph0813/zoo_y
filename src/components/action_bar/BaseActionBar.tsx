import * as React from 'react'
import { useState } from 'react'
import { timeFromNow } from '../../utils/utils'
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

const BaseActionBar = ({ actionProps }: { actionProps: ActionBarProps }) => {

  // const { dispatch: modelDispatch } = useModelContext()
  // const { state: userInfo } = useUserInfoContext()
  // const openModel = (config: ModalConfig) => {
  //   modelDispatch({ type: 'OPEN', config })
  // }

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
      <div className='flex space-x-2 md:space-x-4'>
        <div className='flex space-x-1 text-sm text-gray-500 items-center'>
          <EyeIcon className='h-4 w-4 text-gray-500' />
          <div className='sm:text-sm'>{nrOfVisit || 0}</div>
          <div className='hidden md:inline'>reads</div>
        </div>
        <div className='flex space-x-1 text-sm text-gray-500 items-center'>
          <ChatAlt2Icon className='h-4 w-4 text-gray-500' />
          <div>{nrOfComment || 0}</div>
          <div className='hidden md:inline'>thread</div>
        </div>
        <div className='flex space-x-1 text-sm text-gray-500 items-center'>
          <ClockIcon className='h-4 w-4 text-gray-500' />
          <div>{timeFrom || 0}</div>
          <div className='inline'>{unit || 'days'} <p className='hidden md:inline'>ago</p></div>
        </div>
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
export default BaseActionBar
