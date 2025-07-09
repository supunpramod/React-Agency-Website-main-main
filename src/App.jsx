import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Services from './components/Services.jsx'
import About from './components/About.jsx'
import Product from './components/Product.jsx'
import Blog from './components/Blog.jsx'
import Newsletter from './components/Newsletter.jsx'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
    <Navbar/>
    <Home/>
    <Services />
    <About/>
    <Product/>
    <Blog/>
    <Newsletter/>
   
    </>
  )
}

export default App
