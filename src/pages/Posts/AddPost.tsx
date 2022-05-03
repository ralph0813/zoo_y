import * as React from 'react'
import { useParams } from 'react-router-dom'
import Markdown from '../../components/Markdown'
import Draft from '../../components/Draft'
import UnicornEditor from '../../components/Draft'

export default function AddPost() {
  const params = useParams()
  return (
    <div className="base-box items-start">
      <div className="self-center"> AddPost</div>
      <div>title</div>
      <input type="text" className="w-full" />
      <div>Body</div>
      <div className="h-72 w-full border">
        <Markdown />
      </div>
    </div>
  )
}
