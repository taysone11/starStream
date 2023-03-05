import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { routes } from './router'
const AppRouter = () => {
  return (
    <Routes>
        {
            routes.map(route =>
                <Route  path={route.to} element={route.element} key={()=> Date.now()}/>)
        }
    </Routes>
  )
}

export default AppRouter