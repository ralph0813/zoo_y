import * as React from 'react'
import { Link } from 'react-router-dom'
import { imgUrl } from '../../service/url'

const NotFound = () => {
  return (
    <div className="bg-white min-h-full flex-grow flex flex-col lg:relative">
      <div className="flex-grow flex flex-col">
        <main className="flex-grow flex flex-col bg-white">
          <div className="flex-grow mx-auto max-w-7xl w-full flex flex-col px-4 sm:px-6 lg:px-8">
            <div className="flex-shrink-0 pt-10 sm:pt-16">
              <Link to="/" className="inline-flex">
                <img className="h-12 w-auto" src={imgUrl.largeLogo} alt="logo" />
              </Link>
            </div>
            <div className="flex-shrink-0 my-auto py-16 sm:py-32">
              <p className="text-2xl font-semibold text-brand-dark uppercase tracking-wide">404 error</p>
              <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Page not found</h1>
              <p className="mt-2 text-base text-gray-500">Sorry, we couldn’t find the page you’re looking for.</p>
              <div className="mt-6">
                <Link to="/" className="text-base font-medium text-brand-dark hover:text-brand">
                  Go back home<span aria-hidden="true"> &rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={imgUrl.image_404}
          alt="404"
        />
      </div>
    </div>
  )
}
export default NotFound
