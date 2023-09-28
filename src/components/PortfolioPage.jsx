import portImage1 from "../assets/port-1.png"
import portImage2 from "../assets/port-2.png"



export default function PortfolioPage() {
    return (
        <div id="portfolio-page">
            <h2 id="portfolio-h2">Portfolio</h2>
            <p className="test11">Check out some of my <span className="fat-font">works.</span></p>
            <div id="portfolio-div">
                <div className="port-single">
                    <img className="port-images" src={portImage1}></img>
                    <div className="port-info">
                        <h3>Personal website</h3>
                        <p>This is my first serious personal website that I have desgined and build by myself from scratch with React.</p>
                    </div>
                </div>
                <div className="port-single">
                    <img className="port-images" src={portImage2}></img>
                    <div className="port-info">
                        <h3>Jobbchaser</h3>
                        <p>An app that will load job-ads with the help of an API. A user can search for jobs, and also use tags to filter specific jobs.</p>
                    </div>
                </div>
                <p className="portfolio-github">You can see more of works at my <a href="https://github.com/chashusse" target="_blank">Github page.</a></p>
            </div>


        </div>
    )

}