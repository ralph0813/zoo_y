import React from 'react'

import BaseFooter from '../../components/footers/BaseFooter'
import Header from '../../components/headers/Header'

export default function BaseLayout({ children }: { children?: JSX.Element }) {
  return (
    <div className="bg-gray-50 flex flex-col h-screen h-screen-ios">
      <Header />
      <div className="flex-grow">
        {children}
      </div>
      <div className="bg-gray-800">
        <div className="px-4">
          <BaseFooter />
        </div>
      </div>
    </div>
  )
}
