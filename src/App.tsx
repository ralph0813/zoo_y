import * as React from 'react'
import { useReducer } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/user/Login'
import NotFound from './pages/error/404'
import Home from './pages/home/Home'
import BaseLayout from './components/layouts/BaseLayout'
import Signup from './pages/user/Singnup'
import Characteristic from './pages/Characteristic/Characteristic'
import Conclusion from './pages/Conclusion/Conclusion'
import Posts from './pages/Posts/Posts'
import Profile from './pages/user/Profile'

import {
  UserInfoContext,
  reducer as userInfoReducer,
  initialState as userInitialState,
} from './context/userContext'

export default function App() {
  const [userInfo, userInfoDispatcher] = useReducer(userInfoReducer, userInitialState)

  return (
    <Router>
      <UserInfoContext.Provider value={{
        state: userInfo,
        dispatch: userInfoDispatcher
      }}>
        <BaseLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/characteristic" element={<Characteristic />} />
            <Route path="/conclusion" element={<Conclusion />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/profile" element={<Profile />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BaseLayout>
      </UserInfoContext.Provider>

    </Router>
  )
}
