import * as React from 'react'
import { useState } from 'react'
import { timeFromNow } from '../../utils/utils'
import {
  ChatAlt2Icon,
  ClockIcon,
  CheckIcon,
  XIcon,
  ThumbUpIcon as ThumbUpIconOutline,
} from '@heroicons/react/outline'
import { ThumbUpIcon as ThumbUpIconSolid } from '@heroicons/react/solid'
import { useUserInfoContext } from '../../context/userContext'
import { allowPost, doThumbUp } from '../../firebase/service'
// import { doThumbUp } from '../../service/commonApi'
// import { useModelContext } from '../../context/ModelContext'
// import { ModalConfig, notLoginConfig } from '../../utils/modalConfig'
// import { useUserInfoContext } from '../../context/UserInfoContext'

export interface ActionBarProps {
  articleId: string
  isThumbUp: boolean
  nrOfThumbUp: number
  nrOfComment: number
  createTime: string
  passed: boolean
  checked: boolean
}

const BaseActionBar = ({ actionProps }: { actionProps: ActionBarProps }) => {

  const { state: userInfo } = useUserInfoContext()
  const isAdmin = userInfo.isAdmin

  const {
    articleId,
    isThumbUp,
    nrOfThumbUp,
    nrOfComment,
    createTime,
    passed,
    checked,
  } = actionProps
  const [allow, setAllow] = useState(passed)
  const [check, setCheck] = useState(checked)
  const [thumbUp, setThumbUp] = useState(isThumbUp)
  const [thumbUpNum, setThumbUpNum] = useState<number>(nrOfThumbUp)

  const handlePass = async (allow: boolean) => {
    await allowPost({ pid: articleId, passed: allow })
    setAllow(allow)
    setCheck(true)
  }

  const handleThumbUpClick = async () => {
    if (!thumbUp) {
      if(!userInfo.isLogin){
        alert("Please login in first.")
        return
      }
      setThumbUpNum((num) => num + 1)
      doThumbUp({ type: 'posts', pid: actionProps.articleId, up: true })
    } else {
      setThumbUpNum((num) => num - 1)
      doThumbUp({ type: 'posts', pid: actionProps.articleId, up: false })
    }
    setThumbUp(!thumbUp)
  }
  const [timeFrom, unit] = timeFromNow(new Date(createTime.replace(' ', 'T')))
  return (
    <div className="w-full flex justify-between">
      <div className="flex space-x-2 md:space-x-4">
        <div className="flex space-x-1 text-sm text-gray-500 items-center">
          <ClockIcon className="h-4 w-4 text-gray-500" />
          <div>{timeFrom || 0}</div>
          <div className="inline">{unit || 'days'} <p className="hidden md:inline">ago</p></div>
        </div>
        <div className="flex space-x-1 text-sm text-gray-500 items-center">
          <ChatAlt2Icon className="h-4 w-4 text-gray-500" />
          <div>{nrOfComment || 0}</div>
          <div className="hidden md:inline">thread</div>
        </div>
      </div>
      <div className="flex">
        <div
          className="flex space-x-1 text-sm text-gray-500 items-center px-1 rounded cursor-pointer hover:bg-gray-100"
          onClick={handleThumbUpClick}
        >
          {thumbUp
            ? <ThumbUpIconSolid className="h-4 w-4 text-gray-500" />
            : <ThumbUpIconOutline className="h-4 w-4 text-gray-500" />
          }
          <div>{thumbUpNum}</div>
          <div className="hidden md:inline">likes</div>
        </div>

        {isAdmin && (
          <div className="flex pl-2 space-x-4">
            <CheckIcon
              className={`h-5 w- text-gray-500  cursor-pointer hover:bg-gray-100 ${(allow && check) && 'outline rounded rounded-full'}`}
              onClick={() => {
                handlePass(true)
              }} />
            <XIcon
              className={`h-5 w-5 text-gray-500  cursor-pointer hover:bg-gray-100 ${(!allow && check) && 'outline rounded rounded-full'}`}
              onClick={() => {
                handlePass(false)
              }} />
          </div>
        )}
      </div>
    </div>
  )
}
export default BaseActionBar
