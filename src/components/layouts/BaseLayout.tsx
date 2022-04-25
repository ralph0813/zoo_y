import React from 'react'

import BaseFooter from '../../components/footers/BaseFooter'
import Header from '../../components/headers/Header'

export default function BaseLayout({ children }: { children?: JSX.Element }) {
  return (
    <div className="flex flex-col h-screen h-screen-ios">
      <Header />
      <div className="flex flex-col flex-grow max-w-7xl mx-auto w-full bg-white">
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
