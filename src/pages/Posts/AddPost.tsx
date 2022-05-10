import * as React from 'react'
import ReachText from '../../components/tiny_mce/RichTextEditor'

export default function AddPost() {
  const date = new Date()
  return (
    <div className="base-box items-start">
      <div className="self-center text-xl font-bold p-2"> AddPost</div>
      <div className="flex items-center space-x-2">
        <div className="font-medium text-lg">Title</div>
        <div className="text-sm text-gray-400">Enter post title here</div>
      </div>
      <input type="text" className="w-full border-gray-200 rounded-lg focus:outline-none" />

      <div className="flex items-center space-x-2 pt-4">
        <div className="font-medium text-lg">Body</div>
        <div className="text-sm text-gray-400">Enter post body here</div>
      </div>
      <div className="w-full min-h-[500px]">
        <ReachText />
      </div>
      <div className="pt-2 text-gray-400 font-medium pl-1">
        Edited on {date.toLocaleString()}
      </div>
      <div className="pt-4 w-full">
        <button className="btn-primary w-full">Add post</button>
      </div>
    </div>
  )
}
