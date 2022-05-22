import * as React from 'react'
import { setLocalStorage } from '../utils/utils'

export type UserInfo = {
  uid: string
  uname: string
  userEmail: string
  avatar: string
  about: string
  isLogin?: boolean
  isAdmin?: boolean
}

export type Action = {
  type: 'UPDATE' | 'LOGOUT' | 'GET' | 'LOGIN' | 'INIT'
  data?: UserInfo | any
}

export type UserInfoDispatch = React.Dispatch<Action>

const getInitState = (): UserInfo => {
  return {
    uid: localStorage.getItem('uid') || '',
    isLogin: localStorage.getItem('isLogin') === 'true',
    uname: localStorage.getItem('uname') || '',
    isAdmin: localStorage.getItem('isAdmin') === 'true',
    userEmail: localStorage.getItem('userEmail') || '',
    avatar: localStorage.getItem('avatar') || '',
    about: localStorage.getItem('about') || ''
  }
}

export const initialState = getInitState()

export function reducer(state: UserInfo, action: Action) {
  switch (action.type) {
    case 'UPDATE':
      setLocalStorage(action.data)
      return { ...state, ...action.data }
    case 'LOGIN':
      localStorage.setItem('isLogin', 'true')
      localStorage.setItem('uname', action?.data?.uname || '')
      localStorage.setItem('isAdmin', action?.data?.isAdmin || '')
      localStorage.setItem('userEmail', action?.data?.userEmail || '')
      localStorage.setItem('avatar', action?.data?.avatar || '')
      localStorage.setItem('about', action?.data?.about || '')
      localStorage.setItem('uid', action?.data?.uid || '')
      return {
        ...state,
        ...action.data,
        isLogin: true
      }
    case 'LOGOUT':
      localStorage.clear()
      return getInitState()
    default:
      throw new Error()
  }
}

export const UserInfoContext = React.createContext({} as { state: UserInfo, dispatch: UserInfoDispatch })
export const useUserInfoContext = () => React.useContext(UserInfoContext)
