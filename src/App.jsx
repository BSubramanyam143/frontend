import React from 'react'
import Navbar from './components/navbar/navbar.jsx';
import Body from './components/mybody/body.jsx';
import About from './components/about/about.jsx';
import Skills from './components/myservices/myservices.jsx'
import Project from './components/project/project.jsx'
import Contact from './components/contact/contact.jsx'
import Footer from './components/footer/footer.jsx'

const App = () => {
  return (
   <>
    <Navbar />
    <Body />
    <About />
    <Skills />
    <Project />
    <Contact />
    <Footer />
   </>
  )
}

export default App;