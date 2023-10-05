import './App.css'
import Header from './components/Header'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import PortfolioPage from './components/PortfolioPage'
import ContactPage from './components/ContactPage'

import { Route, Routes } from 'react-router-dom'

let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);


export default function App() {
  return (
    <div id="full-page">
      <div className="background"></div>
      <div className="background2"></div>
      <div className="background3"></div>
      <div className="background4"></div>
      <Header></Header>
      <Routes>
        <Route path='' element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='portfolio' element={<PortfolioPage />} />
        <Route path='contact' element={<ContactPage />} />
      </Routes>

      <footer>
        <p>Designed & Built by Hussein Yousif</p>
      </footer>

    </div>



  )
}






