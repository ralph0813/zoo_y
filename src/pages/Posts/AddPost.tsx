import * as React from 'react'
import { useRef, useState } from 'react'

import { addPosts } from '../../firebase/service'
import { useDate } from '../../hooks/useDate'
import { Editor } from '@tinymce/tinymce-react'
import { Editor as TinyMCEEditor } from 'tinymce'
import { useNavigate } from 'react-router-dom'

export default function AddPost() {
  const { date, time } = useDate()
  const editorRef = useRef<TinyMCEEditor>()
  const [title, setTitle] = useState('')
  const navigate = useNavigate()

  function getInput() {
    const richText = editorRef!.current!.getContent()
    const plainText = editorRef!.current?.getBody().textContent
    return { richText, plainText }
  }

  const post = async () => {
    const { richText, plainText } = getInput()
    if (plainText === '' || title === '') {
      alert('Please in put something.')
      return
    }
    const res = await addPosts({
      title: title,
      body: plainText as string,
      bodyRich: richText as string,
      createTime: new Date().toISOString()
    })
    console.log(res)
    if (res.data) {
      alert('Post successfully!')
      // @ts-ignore
      navigate(`/posts/${res.data}`)
    }
  }

  return (
    <div className="base-box items-start">
      <div className="self-center text-xl font-bold p-2"> AddPost</div>
      <div className="flex items-center space-x-2">
        <div className="font-medium text-lg">Title</div>
        <div className="text-sm text-gray-400">Enter post title here</div>
      </div>
      <input
        type="text"
        className="w-full border-gray-200 rounded-lg focus:outline-none"
        onChange={(e) => {
          setTitle(e.target.value)
        }}
      />
      <div className="flex items-center space-x-2 pt-4">
        <div className="font-medium text-lg">Body</div>
        <div className="text-sm text-gray-400">Enter post body here</div>
      </div>
      <div className="w-full min-h-[500px]">
        <Editor
          // @ts-ignore
          onInit={(evt, editor) => editorRef.current = editor}
          init={{
            height: 500,
            menubar: false,
            // selector: 'textarea#premiumskinsandicons-jam',
            skin: 'jam',
            icons: 'jam',
            plugins: 'image link lists',
            toolbar: 'undo redo | styles | bold italic underline forecolor backcolor | link image | align | bullist numlist',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:18px }'
          }}
        />
      </div>
      <div className="pt-2 text-gray-400 font-medium pl-1">
        Edited on {date} {time}
      </div>
      <div className="pt-4 w-full">
        <button className="btn-primary w-full" onClick={post}>Add post</button>
      </div>
    </div>
  )
}
