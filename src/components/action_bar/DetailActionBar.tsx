import * as React from 'react'
import { useEffect, useState } from 'react'
import { FormatTime } from '../../utils/utils'
import {
  ThumbUpIcon as ThumbUpIconOutline,
} from '@heroicons/react/outline'
import { ThumbUpIcon as ThumbUpIconSolid } from '@heroicons/react/solid'
import { useUserInfoContext } from '../../context/userContext'
import { doThumbUp } from '../../firebase/service'
// import { doThumbUp } from '../../service/commonApi'
// import { useModelContext } from '../../context/ModelContext'
// import { ModalConfig, notLoginConfig } from '../../utils/modalConfig'
// import { useUserInfoContext } from '../../context/UserInfoContext'

export interface ActionBarProps {
  articleId: string
  isThumbUp: boolean
  nrOfThumbUp: number
  createTime: string
}

const DetailActionBar = ({ actionProps }: { actionProps: ActionBarProps }) => {

  // const { dispatch: modelDispatch } = useModelContext()
  const { state: userInfo } = useUserInfoContext()
  // const openModel = (config: ModalConfig) => {
  //   modelDispatch({ type: 'OPEN', config })

  const {
    articleId,
    isThumbUp,
    nrOfThumbUp,
    createTime,
  } = actionProps
  const [thumbUp, setThumbUp] = useState(isThumbUp)
  const [thumbUpNum, setThumbUpNum] = useState<number>(nrOfThumbUp)
  const { date, time } = FormatTime(createTime)
  const isAdmin = userInfo.isAdmin
  useEffect(() => {
    setThumbUpNum(nrOfThumbUp)
    setThumbUp(isThumbUp)
  }, [nrOfThumbUp, isThumbUp])

  const handleThumbUpClick = async () => {
    if(!userInfo.isLogin){
      alert("Please login in first.")
      return
    }
    if (!thumbUp) {
      setThumbUpNum((num) => num + 1)
      doThumbUp({ type: 'posts', pid: actionProps.articleId, up: true })
    } else {
      setThumbUpNum((num) => num - 1)
      doThumbUp({ type: 'posts', pid: actionProps.articleId, up: false })
    }
    setThumbUp(!thumbUp)
  }
  return (
    <div className="w-full flex justify-between">
      <div className="text-gray-500  text-sm">
        Posted on {date} {time}
      </div>

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
    </div>
  )
}
export default DetailActionBar
