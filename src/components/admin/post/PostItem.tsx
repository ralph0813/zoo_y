import * as React from 'react'
import ShowRich from '../../tiny_mce/ShowRich'
import DetailActionBar from '../../action_bar/DetailActionBar'
import ActionBar from './ActionBar'

export default function PostItem() {
  const item = {
    id: '1abs',
    avatar: 'https://minio.juntao.life/ifb399/test/np_logo.png',
    userName: 'Ansk',
    describe: 'A front engineer',
    title: 'How can I estimate the travel time of a route by using a travel time matrix?',
    body: 'Vira looked up. The Russian soldiers were a few feet away, spray painting "V" symbols on her car, ' +
      'to avoid friendly fire when they drove it away. One of them - just a boy, Vira thought, my grandson\'s ' +
      '"He is just going to help us push the car out of the driveway.'
  }

  return (
    <div className="px-3 py-2 pt-3 bg-whit rounded flex flex-col w-full border border-gray-100 space-y-1 shadow-sm">
      <div className="flex items-center space-x-2 cursor-pointer">
        <img src={item.avatar} className="w-6 h-6 -translate-x-0.5" alt="" />
        <div className="font-medium">{item.userName}</div>
        <div className="text-gray-500 ">{item.describe}</div>
      </div>
      <div className="text-gray-800 min-h-14">
        <ShowRich body={item.body} />
      </div>
      <div className="py-1 w-full">
        <ActionBar />
      </div>
    </div>
  )
}
