import * as React from 'react'
import { useParams } from 'react-router-dom'

export default function Detail() {
  const params = useParams()
  console.log(params.postId)
  return (
    <div
      className="base-box">
      detail
    </div>
  )
}
