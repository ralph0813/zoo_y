import * as React from 'react'
import { setLocalStorage } from '../utils/utils'

export type UserInfo = {
  isLogin?: | boolean
  userName: string
}

export type Action = {
  type: 'UPDATE' | 'LOGOUT' | 'GET' | 'LOGIN' | 'INIT'
  data?: UserInfo | any
}

export type UserInfoDispatch = React.Dispatch<Action>

const getInitState = (): UserInfo => {
  return {
    isLogin: localStorage.getItem('isLogin') === 'true',
    userName: localStorage.getItem('userName') || ''
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
      localStorage.setItem('userName', action?.data?.userName)
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
