import * as React from 'react'
import { useState } from 'react'

import { Link, useLocation, useNavigate } from 'react-router-dom'
import { imgUrl } from '../../service/url'
import { signUp } from '../../firebase/auth'

// import { userLogin } from '../../service/commonApi'
// import { inputEmptyConfig, ModalConfig, passwordIncorrectConfig } from '../../utils/modalConfig'
// import { useModelContext } from '../../context/ModelContext'
// import { useUserInfoContext } from '../../context/UserInfoContext'

export default function Signup() {
  // const { dispatch: modelDispatch } = useModelContext()
  // const openModel = (config: ModalConfig) => {
  //   modelDispatch({
  //     type: 'OPEN',
  //     config
  //   })
  // }
  const navigate = useNavigate()
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const redirectPath = params.get('redirect') || '/'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password_, setPassword_] = useState('')
  const isPasswordMatch = password === password_
  // const { dispatch: UserDispatch } = useUserInfoContext()
  // Portal({
  //   id: 'alert',
  //   children: <Alert />
  // })
  const handleSignUp = async () => {
    if (email && password && isPasswordMatch) {
      const res = await signUp(email, password)
      navigate('/login')
    } else {
      alert('Check your input.')
    }

  }
  return (
    <div className="min-h-full w-screen bg-white flex flex-grow">
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <img className="h-12 w-auto mb-5" src={imgUrl.largeLogo} alt="logo" />
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Create your account
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Or{' '}
              <Link
                to={`/login?redirect=${redirectPath}`}
                className="font-medium text-brand hover:text-brand-light"
              >
                already have one?
              </Link>
            </p>
          </div>
          <div className="mt-8">
            <div className="mt-6">
              <form action="#" method="POST" className="space-y-6">
                <div className="space-y-1">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="text"
                      autoComplete="email"
                      required
                      className="input-primary"
                      onChange={(e) => {
                        setEmail(e.target.value)
                      }}
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="input-primary"
                      onChange={(e) => {
                        setPassword(e.target.value)
                      }}
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label
                    htmlFor="password_"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Confirm Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password_"
                      name="password_"
                      type="password"
                      autoComplete="current-password_"
                      required
                      className="input-primary"
                      onChange={(e) => {
                        setPassword_(e.target.value)
                      }}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <button
                    type="submit"
                    className="btn-primary flex w-full justify-center"
                    onClick={(event) => {
                      event.preventDefault()
                      handleSignUp()
                    }}
                  >
                    Sign up
                  </button>
                  <button
                    type="submit"
                    className="btn-secondary flex w-full justify-center"
                    onClick={async (event) => {
                      event.preventDefault()
                      navigate(-1)
                    }}
                  >
                    Go Back
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block relative w-0 flex-1">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={imgUrl.bgLogin}
          alt="background"
        />
      </div>
    </div>
  )
}
