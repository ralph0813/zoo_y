import React from 'react'
import YoutubeEmbed from '../../components/YoutubeEmbed/YoutubeEmbed'

export default function Home() {
  return (
    <div className="flex flex-col flex-grow h-full items-center space-y-2">
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
