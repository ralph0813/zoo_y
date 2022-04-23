import * as React from 'react'
import { Link } from 'react-router-dom'
import { imgUrl } from '../../service/url'

const navigation = [
  {
    name: 'Home',
    to: '/'
  },
  {
    name: 'Characteristic ',
    to: '/Characteristic'
  },
  {
    name: 'Conclusion ',
    to: '/Conclusion'
  },
]

export default function Header() {
  return (
    <header className="bg-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-2 flex items-center justify-between border-b border-white lg:border-none lg:py-6 ">
          <div className="flex items-center">
            <Link to="/">
              <span className="sr-only">Zoo Y</span>
              <img
                className="h-8 w-auto lg:h-10"
                src={imgUrl.smallLogo}
                alt="logo"
              />
            </Link>
            <div className="hidden ml-10 space-x-8 lg:block">
              {navigation.map((link) => (
                <Link key={link.name} to={link.to} className="text-base font-medium text-white hover:text-indigo-50">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <Link
              to="/login"
              className="btn-primary py-1"
            >
              Sign in
            </Link>
            <Link
              to="/signup"
              className="btn-secondary py-1"
            >
              Sign up
            </Link>
          </div>
        </div>
        <div className="py-2 flex flex-wrap justify-center space-x-6 lg:hidden">
          {navigation.map((link) => (
            <Link key={link.name} to={link.to} className="text-base btn-link">
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
