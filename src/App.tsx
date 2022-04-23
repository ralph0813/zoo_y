import * as React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/user/Login'
import NotFound from './pages/error/404'
import Home from './pages/home/Home'
import BaseLayout from './components/layouts/BaseLayout'
import Signup from './pages/user/Singnup'

export default function App() {
  return (
    <Router>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BaseLayout>
    </Router>
  )
}
