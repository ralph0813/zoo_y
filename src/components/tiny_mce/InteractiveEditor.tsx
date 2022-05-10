// @ts-nocheck
import React, { useEffect, useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react'

export default function InteractiveEditor() {
  const editorRef = useRef(null)
  const headerRef = useRef(null)

  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent())
    }
  }

  const init = '<p dir="auto"><strong>This directory contains a set of examples that give you an idea for how you might use Slate to implement your own editor. Take a look around!</strong></p>\n' +
    '<ul dir="auto">\n' +
    '<li><a href="https://github.com/ianstormtaylor/slate/blob/main/site/examples/plaintext.tsx"><strong>Plain text</strong></a>&nbsp;&mdash; showing the most basic case: a glorified&nbsp;<code>&lt;textarea&gt;</code>.</li>\n' +
    '<li><a href="https://github.com/ianstormtaylor/slate/blob/main/site/examples/richtext.tsx"><strong>Rich text</strong></a>&nbsp;&mdash; showing the features you\'d expect from a basic editor.</li>\n' +
    '</ul>'

  return (
    <>
      <Editor
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue= {init}
        disabled={true}
        inline={true}
        init={{
          menubar: false,
          selector: 'textarea#premiumskinsandicons-jam',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:18px }'
        }}
      />
    </>
  )
}
