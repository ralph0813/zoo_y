import * as React from 'react'
import { useEffect, useReducer } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/user/Login'
import NotFound from './pages/error/404'
import Home from './pages/Home/Home'
import BaseLayout from './components/layouts/BaseLayout'
import Signup from './pages/user/Singnup'
import Characteristic from './pages/Characteristic/Characteristic'
import Conclusion from './pages/Conclusion/Conclusion'
import Posts from './pages/Posts/Posts'
import Profile from './pages/user/Profile'
import Detail from './pages/Posts/Detail'
import AddPost from './pages/Posts/AddPost'
import AdminLayout from './components/layouts/AdminLayout'
import AdminPosts from './pages/admin/Posts.ts'

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
        <Routes>
          <Route path="/admin/*" element={
            <AdminLayout>
              <Routes>
                <Route path="/" element={<AdminPosts />} />
                <Route path="/users" element={<AdminPosts />} />
                <Route path="/posts" element={<AdminPosts />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AdminLayout>
          } />

          <Route path="/*" element={
            <BaseLayout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/characteristic" element={<Characteristic />} />
                <Route path="/conclusion" element={<Conclusion />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/posts/:postId" element={<Detail />} />
                <Route path="/posts/add" element={<AddPost />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BaseLayout>
          } />
        </Routes>
      </UserInfoContext.Provider>
    </Router>
  )
}
