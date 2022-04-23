import React from 'react'
import YoutubeEmbed from '../../components/YoutubeEmbed/YoutubeEmbed'

export default function Home() {
  return (
    <div className="flex flex-col flex-grow h-full bg-gray-200 items-center space-y-2">
      <div className="text-5xl">Zoo Y</div>
      <div className="flex flex-col flex-grow h-full w-full justify-center items-center">
        <div className="text-4xl">Panda</div>
        <div className="w-full max-w-4xl">
          <YoutubeEmbed embedId={'CpK1lZJmbJY'} />
        </div>
        <p className="text-xl">balabala</p>
      </div>
    </div>
  )
}
