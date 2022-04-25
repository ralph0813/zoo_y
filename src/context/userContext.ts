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

export const initialState: UserInfo = {
  isLogin: localStorage.getItem('isLogin') === 'true',
  userName: localStorage.getItem('userName') || ''
}

export function reducer(state: UserInfo, action: Action) {
  switch (action.type) {
    case 'INIT':
      return { ...initialState }
    case 'GET':
      return { ...state }
    case 'UPDATE':
      setLocalStorage(action.data)
      return { ...state, ...action.data }
    case 'LOGIN':
      localStorage.setItem('isLogin', 'true')
      localStorage.setItem('userName', 'true')
      return {
        ...state,
        isLogin: true
      }
    case 'LOGOUT':
      localStorage.removeItem('isLogin')
      localStorage.removeItem('userName')
      return initialState
    default:
      throw new Error()
  }
}

export const UserInfoContext = React.createContext({} as { state: UserInfo, dispatch: UserInfoDispatch })
export const useUserInfoContext = () => React.useContext(UserInfoContext)
