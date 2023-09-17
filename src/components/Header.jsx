import { NavLink } from "react-router-dom"
import { useState, useRef, useEffect } from "react"

export default function Header() {

    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }



    //Click outside
    let myRef = useRef()

    const handleClickOutside = e => {
        if (!myRef.current.contains(e.target)) {
            setShowNavbar(false)
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    });




    return (
        <header>
            <NavLink id="main-logo" to="/"><span className="bold-text">hussein</span>yousif</NavLink>
            <h1 id="mobile-nav" onClick={handleShowNavbar}>Mobile</h1>
            <nav ref={myRef} id={showNavbar ? "active-nav" : "nonactive-nav"} >
                <ul>
                    <li id="close-nav" onClick={handleShowNavbar}><p>X</p></li>
                    <li><NavLink onClick={handleShowNavbar} className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/" >HOME</NavLink></li>
                    <li><NavLink onClick={handleShowNavbar} className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/about">ABOUT</NavLink></li>
                    <li><NavLink onClick={handleShowNavbar} className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/portfolio">PORTFOLIO</NavLink></li>
                    <li><NavLink onClick={handleShowNavbar} className={({ isActive }) => (isActive ? 'activeContact' : 'inactive')} id="contact-link" to="/contact">CONTACT</NavLink></li>
                </ul>
            </nav>
        </header>
    )

}