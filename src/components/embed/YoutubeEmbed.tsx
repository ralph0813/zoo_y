import * as React from 'react'
import { useState } from 'react'
// import CenterLoading from '../loadings/CenterLoading'
import { SunIcon } from '@heroicons/react/outline'

const youtube_parser = (url: string): boolean | string => {
  let regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
  let match = url.match(regExp)
  return (match && match[7].length === 11) ? match[7] : false
}

const YoutubeEmbed = ({ embedId, className }: { embedId: string, className?: string }) => {
  const [loading, setLoading] = useState(true)
  let id: string
  if (embedId.length === 11) {
    id = embedId as string
  } else {
    id = youtube_parser(embedId) as string
  }
  return (
    <div className={`w-full h-64 sm:h-96 md:h-120 ${className}`}>
      <div className={(loading ? 'w-full h-full' : 'hidden')}>
        <div
          className="flex flex-col items-center justify-center p-5 h-full w-full items-center justify-center text-gray-700">
          <SunIcon className="animate-spin h-10 w-10 text-gray-700" />
          <div>
            loading
          </div>
        </div>
      </div>

      <iframe
        className={loading ? 'hidden' : ''}
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${id}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        onLoad={() => {
          setLoading(false)
        }}
      />
    </div>
  )
}
export default YoutubeEmbed
