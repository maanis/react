import { useState } from 'react'
import './App.css'
import Layout from '../src/components/Layout'
import Home from './pages/Home';
import Detail from './pages/Detail';
import { Route, createRoutesFromElements, RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/:slug' element={<Detail />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />

  )
}

export default App
