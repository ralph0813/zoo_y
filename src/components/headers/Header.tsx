import * as React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { imgUrl } from '../../service/url'
import { useUserInfoContext } from '../../context/userContext'
import { logOut } from '../../firebase/auth'

const navigation = [
  {
    name: 'Home',
    to: '/'
  },
  {
    name: 'Characteristic ',
    to: '/characteristic'
  },
  {
    name: 'Conclusion ',
    to: '/conclusion'
  },
  {
    name: 'Posts ',
    to: '/posts'
  },
]

export default function Header() {
  const navigate = useNavigate()

  const {
    state: userInfo,
    dispatch: userInfoDispatch
  } = useUserInfoContext()
  const handleSignOut = async () => {
    await logOut()
    userInfoDispatch({ type: 'LOGOUT' })
  }
  return (
    <header className="bg-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-2 flex items-center justify-between border-b border-white lg:border-none lg:py-6 ">
          <div className="flex items-center">
            <Link className="flex text-white text-2xl font-bold items-center space-x-4" to="/">
              <img
                className="h-8 w-auto lg:h-10"
                src={imgUrl.smallLogo}
                alt="logo"
              />
              <span className="">Zoo Y</span>

            </Link>
            <div className="hidden ml-10 space-x-8 lg:block">
              {navigation.map((link) => (
                <Link key={link.name} to={link.to} className="text-base font-medium text-white hover:text-indigo-50">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          {userInfo.isLogin ? (
            <div className="flex space-x-4 items-center">
              <div
                className="text-white font-medium text-base underline underline-offset-2 cursor-pointer"
                onClick={() => {
                  navigate('/profile')
                }}>
                UserName
              </div>
              <button className="btn-secondary py-1 px-1" onClick={() => handleSignOut()}>Sign out</button>
            </div>
          ) : (
            <div className="ml-10 space-x-4">
              <Link to="/login" className="btn-primary py-1">
                Sign in
              </Link>
              <Link to="/signup" className="btn-secondary py-1">
                Sign up
              </Link>
            </div>
          )}
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
