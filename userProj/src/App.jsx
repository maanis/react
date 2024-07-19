import { useState } from 'react'
import './App.css'
import Layout from './components/Layout';
import { Route, createRoutesFromElements, RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom'
import UserDetails from './pages/UserDetails';
import Home from './pages/Home';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/userdetails' element={<UserDetails />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
