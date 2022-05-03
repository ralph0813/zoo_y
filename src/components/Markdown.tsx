import { useState } from 'react'

import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
import 'react-markdown-editor-lite/lib/index.css'

const mdParser = new MarkdownIt()
const placeholder = `Edit here`

const Markdown = () => {
  const [body, setBody] = useState<string | null>(null)

  return (
    <MdEditor
      placeholder={placeholder}
      style={{
        height: '100%',
        width: '100%'
      }}
      renderHTML={(text) => mdParser.render(text)}
      onChange={({ text }) => {
        setBody(text)
      }}
    />
  )
}
export default Markdown
