import React from 'react'

import BaseFooter from '../../components/footers/BaseFooter'
import Header from '../../components/headers/Header'

export default function BaseLayout({ children }: { children?: JSX.Element }) {
  return (
    <div className="flex flex-col min-h-screen min-h-screen-ios bg-gray-100">
      <Header />
      <div className="flex flex-col flex-grow  mx-auto w-full">
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
