
import portImage1 from "../assets/port-1.png"



export default function PortfolioPage() {
    return (
        <div id="portfolio-page">
            <h2 id="portfolio-h2">Portfolio</h2>
            <p className="test11">Check out some of my <span className="fat-font">works.</span></p>
            <div id="portfolio-div">
                <div className="port-single">

                    <img className="port-images" src={portImage1}></img>


                    <div className="port-info">
                        <h3>port title</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, magni.</p>

                    </div>
                </div>

            </div>


        </div>
    )

}