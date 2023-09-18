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
                        <h3>Personal website</h3>
                        <p>This is my first serious personal website that I have desgined and build by myself from scratch with React.</p>
                    </div>
                </div>
                <p className="portfolio-github">You can see more of works at my <a href="https://github.com/chashusse" target="_blank">Github page.</a></p>
            </div>


        </div>
    )

}