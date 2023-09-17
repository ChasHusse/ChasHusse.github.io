import jsImage from "../assets/js-image.png"
import { Link } from "react-router-dom"

export default function HomePage() {

    return (
        <main>
            <section id="section-left">
                <p id="greeting-paragraph">Hello, I'm a</p>
                <h1 id="professional-title">FULLSTACK DEVELOPER</h1>
                <div id="information-paragraph">
                    <p>I am a junior JavaScript full stack developer with a great interest for the web. My goal is to leave beautiful and functional trace after me for the world to experience!  </p>
                </div>                <Link id="more-about-me" to="/about">More about me...</Link>
                <div id="codes">
                    <h2 className="codeName">HTML</h2>
                    <h2 className="codeName">CSS</h2>
                    <h2 className="codeName">JAVASCRIPT</h2>
                    <h2 className="codeName">REACT</h2>
                    <h2 className="codeName">NODE JS</h2>
                    <h2 className="codeName">EXPRESS JS</h2>
                </div>
            </section>
            <section id="section-right">
                <img id="home-image" className="jsImage" src={jsImage} ></img>
            </section>
        </main >
    )
}