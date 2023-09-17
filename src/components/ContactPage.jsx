import emailImage from "../assets/emailLogo.svg"

export default function ContactPage() {
    return (
        <div id="contact-page">
            <h2 id="contact-me-h2">Contact Me</h2>
            <h2 className="test11">Lets start something <span className="fat-font">great together.</span></h2>
            <div id="contact-information">
                <form>
                    <input
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Name"
                        type="text"
                        required
                    />
                    <input
                        className="form-control rounded-0"
                        id="email"
                        name="email"
                        placeholder="Email"
                        type="email"
                        required
                    />
                    <textarea
                        className="form-control rounded-0"
                        id="message"
                        name="message"
                        placeholder="Message"
                        rows="5"
                        required
                    ></textarea>
                    <button className="btn ac_btn" type="submit">
                        SEND
                    </button>
                </form>
                <div id="right-side-contact">
                    <div className="email-box">
                        <div className="svg-box  svg-email-box">
                            <svg viewBox="0 -2.5 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>email [#1572]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-340.000000, -922.000000)" fill="#ffffff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M294,774.474 L284,765.649 L284,777 L304,777 L304,765.649 L294,774.474 Z M294.001,771.812 L284,762.981 L284,762 L304,762 L304,762.981 L294.001,771.812 Z" id="email-[#1572]"> </path> </g> </g> </g> </g></svg>
                        </div>
                        <p>contact@husseinyousif.com</p>

                    </div>
                    <div className="location-box">
                        <div className="svg-box">
                            <svg viewBox="-1.6 -1.6 19.20 19.20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="si-glyph si-glyph-pin-location-2" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Pin-location-2</title> <defs> </defs> <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g transform="translate(2.000000, 0.000000)" fill="#ffffff"> <path d="M6,0.031 C3.283,0.031 1.08,2.15 1.08,4.764 C1.08,5.439 1.23,6.081 1.494,6.662 L6.084,13.983 L10.506,6.662 C10.771,6.081 10.918,5.438 10.918,4.764 C10.918,2.15 8.717,0.031 6,0.031 L6,0.031 Z M6,8.121 C4.295,8.121 2.915,6.734 2.915,5.023 C2.915,3.314 4.295,1.926 6,1.926 C7.703,1.926 9.086,3.314 9.086,5.023 C9.086,6.734 7.703,8.121 6,8.121 L6,8.121 Z M7.977,4.983 C7.977,6.08 7.091,6.968 5.999,6.968 C4.908,6.968 4.022,6.079 4.022,4.983 C4.022,3.888 4.908,3 5.999,3 C7.091,3 7.977,3.889 7.977,4.983 L7.977,4.983 Z" className="si-glyph-fill"> </path> <path d="M3.29899999,11.8232422 C1.58199999,12.1872422 0.869751004,12.6649999 0.869751004,13.2019999 C0.869751004,13.9709999 2.7,15.031 5.985,15.031 C9.27,15.031 11.1014406,13.9709999 11.1014406,13.2019999 C11.1014406,12.6669999 10.393,12.2032422 8.70000002,11.8232422 L8.7,11.003 C10.565,11.369 11.954,12.104 11.954,13.202 C11.954,14.786 8.87799986,15.9729004 5.98499986,15.9729004 C3.09199986,15.9729004 0.0160000001,14.786 0.0160000001,13.202 C0.0160000001,12.102 1.414,11.353 3.289,11 L3.29899999,11.8232422 Z" className="si-glyph-fill"> </path> </g> </g> </g></svg>
                        </div>
                        <p>Stockholm, Sweden</p>

                    </div>
                    <div className="socialMedia-box">
                        <div className="svg-box">
                            <a href="https://github.com/" target="_blank">
                                <svg className="social-svg" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github [#142]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#ffffff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"> </path> </g> </g> </g> </g></svg>
                            </a>
                        </div>
                        <div className="svg-box">
                            <a href="https://se.linkedin.com/" target="_blank">
                                <svg className="social-svg" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>linkedin [#161]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-180.000000, -7479.000000)" fill="#ffffff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M144,7339 L140,7339 L140,7332.001 C140,7330.081 139.153,7329.01 137.634,7329.01 C135.981,7329.01 135,7330.126 135,7332.001 L135,7339 L131,7339 L131,7326 L135,7326 L135,7327.462 C135,7327.462 136.255,7325.26 139.083,7325.26 C141.912,7325.26 144,7326.986 144,7330.558 L144,7339 L144,7339 Z M126.442,7323.921 C125.093,7323.921 124,7322.819 124,7321.46 C124,7320.102 125.093,7319 126.442,7319 C127.79,7319 128.883,7320.102 128.883,7321.46 C128.884,7322.819 127.79,7323.921 126.442,7323.921 L126.442,7323.921 Z M124,7339 L129,7339 L129,7326 L124,7326 L124,7339 Z" id="linkedin-[#161]"> </path> </g> </g> </g> </g></svg>
                            </a>
                        </div>
                    </div>


                </div>


            </div>

        </div>
    )

}