import { useState } from 'react'
import Nav from './comp/Nav'
import Hero from './comp/hero'
import Program from './comp/Program'
import About from './comp/About'
import Testimonials from './comp/Testimonials'
import Contact from './comp/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          

     <Hero />
     <Program />
     <About />
     <Testimonials />
     <Contact />
     
    </>
  )
}

export default App
