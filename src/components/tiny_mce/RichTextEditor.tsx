// @ts-nocheck
import React, { useEffect, useImperativeHandle, useRef, useState } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import ShowRich from './ShowRich'

export default function RichTextEditor({
  height = 500}) {
  const editorRef = useRef(null)
  const log = () => {
    if (editorRef.current) {
      const richText = editorRef.current.getContent()
      const plainText = editorRef.current.getBody().textContent
    }
  }
  // const onInputChange = () => {
  //   const richText = editorRef.current.getContent()
  //   const  plainText = editorRef.current.getBody().textContent
  //   console.log(richText)
  // }

  const initV = '<p dir="auto"><strong>This directory contains a set of examples that give you an idea for how you might use Slate to implement your own editor. Take a look around!</strong></p>\n' +
    '<ul dir="auto">\n' +
    '<li><a href="https://github.com/ianstormtaylor/slate/blob/main/site/examples/plaintext.tsx"><strong>Plain text</strong></a>&nbsp;&mdash; showing the most basic case: a glorified&nbsp;' +
    '<li><a href="https://github.com/ianstormtaylor/slate/blob/main/site/examples/richtext.tsx"><strong>Rich text</strong></a>&nbsp;&mdash; showing the features you\'d expect from a basic editor.</li>\n' +
    '</ul>'

  return (
    <>
      <Editor
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue={initV}
        init={{
          height: height,
          menubar: false,
          selector: 'textarea#premiumskinsandicons-jam',
          skin: 'jam',
          icons: 'jam',
          plugins: 'image link lists',
          toolbar: 'undo redo | styles | bold italic underline forecolor backcolor | link image | align | bullist numlist',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:18px }'
        }}
      />
    </>
  )
}
