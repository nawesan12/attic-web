export default function ServicesGrid() {
    return (
        <>
            <section className="services">
                <section className="services-grid">
                    <section className="service separator one">
                        <h2>Web Development</h2>
                    </section>
                    <section className="service two">
                        <h2>Web Design</h2>
                    </section>
                    <div className="separation" />
                    <section className="service separator three">
                        <h2>Marketing Services</h2>
                    </section>
                    <section className="service four">
                        <h2>Extra Services</h2>
                    </section>
                </section>
            </section>

            <style jsx>{`
                .services {
                    height:min(100vh, 100vh);
                    display:flex;
                    justify-content:center;
                    align-items:center;
                }

                .services-grid {
                    height:75vh;
                    width:80vw;
                    display:grid;
                    grid-template-columns: 1fr 1fr;
                    grid-template-rows: 1fr 2rem 1fr;
                    border-radius: 1.25rem;
                    background: #000;
                }

                .service {
                    height:100%;
                    width:100%;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    transition: all .2s ease; 
                }

                .service h2 {
                    font-size: calc(1.5rem + 1vw);
                    font-weight: bold;
                    transition: all .3s ease; 
                }

                .service:hover {
                    background: #111;
                }

                .service:hover h2 {
                    transform: scale(1.1);
                }

                .separator {
                    border-right: 1px solid var(--primary-text);
                }

                .one {
                    box-shadow: -2px -2px 0px #B10D62, -4px -4px 0px #FBB847, -6px -6px 0px #158BAB;
                    border-radius: 1.25rem 0 0 .25rem;
                }

                .two {
                    box-shadow: 2px -2px 0px #B10D62, 4px -4px 0px #FBB847, 6px -6px 0px #158BAB;
                    border-radius: 0 1.25rem .25rem 0;
                }

                .three {
                    box-shadow: -2px 2px 4px #B10D62, -4px 4px 0px #FBB847, -6px 6px 0px #158BAB;
                    border-radius: .25rem 0 0 1.25rem;
                }

                .four {
                    box-shadow: 2px 2px 0px #B10D62, 4px 4px 0px #FBB847, 6px 6px 0px #158BAB;
                    border-radius: 0 .25rem 1.25rem 0;
                }

                .separation {
                    grid-row: 2 / 3;
                    grid-column: 1 / 3;
                    height:2.5rem;
                    width:101%;
                    border: 1px solid var(--primary-text);
                    background: #000;
                    margin-inline: -.5%;
                    margin-block: -.3%;
                    position:relative;
                    z-index:1;
                }
            `}</style>
        </>
    )
}