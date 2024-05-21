import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero/hero'
import About from './components/About/about'
import Service from './components/Services/service'
import { BrowserRouter, useRoutes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  const Router = useRoutes([
    {
      path: "/",
      element: <Hero/>,
    },
    {
      path: "/about",
      element: <About/>
    },
    {
      path: "/hero",
      element: <Hero/>
    },
    {
      path: "/services",
      element: <Service title="Service Page is not ready"/>
    }
  ])

  return (
    <>
        <div>
          {Router}
        </div>
    </>
  )
}

export default App
