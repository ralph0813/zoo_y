import * as React from 'react'
import { useDate } from '../../hooks/useDate'
import RichTextEditor from '../../components/TinyMCE/RichTextEditor'

export default function FollowPosts() {
  const {
    date,
    time
  } = useDate()

  return (
    <div className="flex flex-col w-full space-y-2">
      <div className="font-medium text-lg">Follow Posts:</div>
      {/* <textarea className="w-full h-32 border rounded border-gray-300" /> */}
      <RichTextEditor height={300} />
      <div className="text-gray-400 text-base">
        Posted on {date} {time}
      </div>
      <button className="btn-primary">post</button>
    </div>
  )
}
