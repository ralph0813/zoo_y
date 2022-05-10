import * as React from 'react'
import DetailActionBar from '../../components/action_bar/DetailActionBar'
import ShowRich from '../../components/tiny_mce/ShowRich'

export default function DetailItem(){
  const item = {
    id: '1abs',
    avatar: 'https://minio.juntao.life/ifb399/test/np_logo.png',
    userName: 'Ansk',
    describe: 'A front engineer',
    title: 'How can I estimate the travel time of a route by using a travel time matrix?',
    body: 'Vira looked up. The Russian soldiers were a few feet away, spray painting "V" symbols on her car, ' +
      'to avoid friendly fire when they drove it away. One of them - just a boy, Vira thought, my grandson\'s ' +
      'age - took out a walkie-talkie.Poplar, poplar, this is padfoot," he said. "A car is about to come, don\'t shoot. ' +
      'Vira raised herself up on her cane and spoke her prayer aloud. "Please do not take my son." ' +
      'In fact, Valeriy Kuksa was her son-in-law, but she called him her son. The Russians were taking her son.' +
      ' The young one raised his gun halfway. "Go back inside grandma," he said. ' +
      '"He is just going to help us push the car out of the driveway.'
  }
  const date = new Date()
  const min = date.getMinutes()
  date.setMinutes(min - 10)

  const actionProps = {
    articleId: '1',
    isThumbUp: false,
    nrOfThumbUp: 2,
    nrOfVisit: 3,
    nrOfComment: 1,
    createTime: date.toISOString(),
  }

  return(
    <div>
      <div className="px-3 py-2 pt-3 bg-white shadow rounded-sm flex flex-col w-full border-b space-y-1">
        <div className="flex items-center space-x-2 cursor-pointer">
          <img src={item.avatar} className="w-6 h-6 -translate-x-0.5" alt="" />
          <div className="font-medium">{item.userName}</div>
          <div className="text-gray-500 ">{item.describe}</div>
        </div>
        <div className="text-gray-800">
          <ShowRich body={item.body}/>
        </div>
        <div className="py-1">
          <DetailActionBar actionProps={actionProps} />
        </div>
      </div>
    </div>
  )
}
