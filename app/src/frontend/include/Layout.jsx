import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

function Layout() {
  return (
    <div>
      <main>
        <NavBar />
        <Outlet />
      </main>
    </div>
  )
}

export default Layout