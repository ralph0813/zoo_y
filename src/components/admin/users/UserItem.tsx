import * as React from 'react'

export default function UserItem ({ itemData }: { itemData: any }) {

  const default_avatar = 'https://minio.juntao.life/ifb399/test/np_logo.png'
  const default_uname = 'Guest User'
  const default_describe = ''

  return (
    <div className="flex items-center space-x-2 cursor-pointer">
      <img src={itemData.data.avatar || default_avatar} className="w-6 h-6 -translate-x-0.5" alt="" />
      <div className="font-medium">{itemData.data.uname || default_uname}</div>
      <div className="text-gray-500 ">{itemData.data.about || default_describe}</div>
    </div>
  )
}



