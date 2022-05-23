import * as React from 'react'
import { useEffect, useState } from 'react'

import { Link, useLocation, useNavigate } from 'react-router-dom'
import { UserCredential } from 'firebase/auth'

import { imgUrl } from '../../service/url'
import { signIn } from '../../firebase/auth'
import { useUserInfoContext } from '../../context/userContext'
import { getUserDetail } from '../../firebase/service'

export default function Login() {
  const {
    state: userInfo,
    dispatch: userInfoDispatch
  } = useUserInfoContext()

  const navigate = useNavigate()
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const redirectPath = params.get('redirect') || '/'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errMsg, setErrMsg] = useState('')
  // const { dispatch: UserDispatch } = useUserInfoContext()
  const handleLogin = async () => {
    if (email && password) {
      try {
        const res = await signIn(email, password) as UserCredential
        const user = res.user

        if (user.emailVerified) {
          const userInfo = await getUserDetail({ uid: user.uid }) as any
          userInfoDispatch({
            type: 'LOGIN',
            data: {
              userEmail: user?.email,
              uid: user?.uid,
              isAdmin: userInfo?.data.isAdmin,
              uname: userInfo?.data.uname,
              avatar: userInfo?.data.avatar,
              about: userInfo?.data.about
            }
          })
          navigate(redirectPath)
        } else {
          setErrMsg('Please verify your email address first.')
        }
      } catch (e) {
        setErrMsg('Wrong email or password.')
      }
    }
  }
  useEffect(() => {
    if (errMsg) {
      setTimeout(() => {
        setErrMsg('')
      }, 5000)
    }
  }, [errMsg])
  return (
    <div className="min-h-full w-screen bg-white flex flex-grow">
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <img className="h-12 w-auto mb-5" src={imgUrl.largeLogo} alt="logo" />
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Login to your account
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Or{' '}
              <Link
                to={`/signup?redirect=${redirectPath}`}
                className="font-medium text-brand hover:text-brand-light"
              >
                sign up for free
              </Link>
            </p>
          </div>
          <div className="mt-8">
            <div className="mt-6">
              <form action="#" method="POST" className="space-y-6">
                <div>
                  {errMsg && <p className="text-base text-red-600 mb-6">{errMsg}</p>}
                  <label
                    htmlFor="Email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
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
                <div className="flex">
                  <div className="text-sm">
                    <Link
                      to="/explore/feedback"
                      className="font-medium text-brand hover:text-brand-light"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                </div>

                <div className="space-y-2">
                  <button
                    type="submit"
                    className="btn-primary flex w-full justify-center"
                    onClick={(event) => {
                      event.preventDefault()
                      handleLogin()
                    }}
                  >
                    Login
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
