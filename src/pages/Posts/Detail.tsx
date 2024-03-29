import * as React from 'react'
import { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import DetailItem from './DetailItem'
import { addThreads, getPostDetail } from '../../firebase/service'
import { useDate } from '../../hooks/useDate'
import { Editor } from '@tinymce/tinymce-react'
import { Editor as TinyMCEEditor } from 'tinymce'
import ThreadItem from './ThreadItem'
import { AnnotationOutline } from 'heroicons-react'

export default function Detail() {
  const params = useParams()
  const postId = params.postId

  const [postDetail, setPostDetail] = useState<any>()
  const editorRef = useRef<TinyMCEEditor>()

  function getInput() {
    const richText = editorRef!.current!.getContent()
    const plainText = editorRef!.current?.getBody().textContent
    return { richText, plainText }
  }

  const post = async () => {
    const { richText, plainText } = getInput()
    if (plainText === '') {
      alert('Please in put something.')
    }

    const res = await addThreads({
      body: plainText as string,
      bodyRich: richText as string,
      createTime: new Date().toISOString(),
      pid: postId
    })
    if (res.data) {
      alert('Post successfully!')
      // @ts-ignore
      window.location.reload()
      return
    }
    alert('Something went wrong')
  }

  useEffect(() => {
    const getDetail = async () => {
      const detail = await getPostDetail({ postId })
      // @ts-ignore
      setPostDetail(detail.data)
    }
    getDetail()
  }, [])

  const navigate = useNavigate()
  const goToPostDetail = () => navigate('/posts/' + item.id)
  const myRef = useRef<HTMLDivElement>(null)
  const executeScroll = () => myRef.current!.scrollIntoView()

  const item = {
    id: postId,
    data: {
      avatar: 'https://minio.juntao.life/ifb399/test/np_logo.png',
      userName: postDetail?.uname,
      describe: postDetail?.about,
      title: postDetail?.title,
      body: postDetail?.bodyRich,
      about: postDetail?.about,
      likedBy: postDetail?.likedBy,
      passed: postDetail?.passed,
      checked: postDetail?.checked,
      createTime: postDetail?.createTime
    }
  }
  // const peopleNum = postDetail?.follows?.length + 1 || 1
  const postsNum = postDetail?.follows?.length + 1 || 1

  const { date, time } = useDate()
  return (
    <div className="base-box w-full">
      <div className="font-bold text-2xl cursor-pointer self-start pt-2"
           onClick={goToPostDetail}>{item.data.title}</div>
      <div className="flex justify-between w-full">
        <div className="self-start text-gray-600">{postsNum} posts</div>
        <button className="btn-primary text-sm py-0.5 px-2" onClick={executeScroll}>follow posts</button>
      </div>
      <div className="w-full">
        <DetailItem data={item} />
      </div>
      <div className="self-start text-lg font-bold pt-5"> Threads:</div>
      {postDetail && postDetail?.follows?.map((key: string) => (
        <div className="w-full" key={key}>
          <ThreadItem tid={key} />
        </div>
      ))}
      {(postDetail && postDetail?.follows.length === 0) && (
        <div className='text-center mx-5'>
          <AnnotationOutline className='mx-auto h-12 w-12 text-gray-400' />
          <h3 className='mt-2 text-sm font-medium text-gray-900'>No Posts</h3>
        </div>
      )}
      <div ref={myRef} />
      <div className="flex flex-col w-full space-y-2">
        <div className="font-medium text-lg">Follow Posts:</div>
        {/* <textarea className="w-full h-32 border rounded border-gray-300" /> */}
        <div className="w-full">
          <Editor
            // @ts-ignore
            onInit={(evt, editor) => editorRef.current = editor}
            init={{
              height: 300,
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
        <div className="text-gray-400 text-base">
          Posted on {date} {time}
        </div>
        <button className="btn-primary" onClick={post}>post</button>
      </div>
    </div>
  )
}
