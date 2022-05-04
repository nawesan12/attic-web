export default function Aside({ selectedService, setSelectedService }) {
    return (
        <>
        <aside className="services-aside">

            <h1 className="main-title" onClick={() => setSelectedService('none')}>attic.</h1>
        
            <nav>
                <ul>
                    <li onClick={() => setSelectedService('WEB_DEVELOPMENT')}>&#9656; Web Development</li>
                    <li onClick={() => setSelectedService('WEB_DESIGN')}>&#9656; Web Design</li>
                    <li onClick={() => setSelectedService('MARKETING')}>&#9656; Marketing Services</li>
                    <li onClick={() => setSelectedService('EXTRA_SERVICES')}>&#9656; Extra Services</li>
                </ul>
            </nav>

            <section className="social-media">
                <h5>Follow Us</h5>
                <ul>
                    <li>
                        <a href="https://google.com" target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <rect x="4" y="4" width="16" height="16" rx="2" />
                                <line x1="8" y1="11" x2="8" y2="16" />
                                <line x1="8" y1="8" x2="8" y2="8.01" />
                                <line x1="12" y1="16" x2="12" y2="11" />
                                <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://google.com" target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-twitter" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="#fff" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://google.com" target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <rect x="4" y="4" width="16" height="16" rx="4" />
                                <circle cx="12" cy="12" r="3" />
                                <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </section>
        </aside>

        <style jsx>{`
            .services-aside {
                height:100vh;
                display:flex;
                flex-direction:column;
                align-items:center;
                justify-content:space-around;
                box-shadow: 5px 0 0 #B10D62, 10px 0 0 #158BAB, 15px 0 0 #FBB847;
                position:fixed;
                top:0;
                left:0;
                padding-inline: 1rem 2rem;
            }

            ul li {
                margin: 1rem 0;
                border-radius:.4rem;
                padding:.25rem;
            }

            nav {
                padding-inline:2rem 0;
                align-self:start;
            }

            nav li:hover {
                background: #555;
            }

            .main-title {
                font-size:calc(3.5vw + 3.5vh);
                text-shadow: 1px 0 0 #000, -1px 0 0 #000, 0 1px 0 #000, 0 -1px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 2px 2px 0px #B10D62, 4px 4px 0px #FBB847, 6px 6px 0px #158BAB;
            }

            .social-media {
                text-align:center;
            }

            .social-media ul {
                display:flex;
            }

            .social-media li {
                margin:2rem 1rem 0;
            }
        `}</style>
        </>
    )
}