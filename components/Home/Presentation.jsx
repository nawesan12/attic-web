export default function Presentation() {
    return (
        <>
        <section className="presentation">
            <section className="top-row">
                <section className="corner">
                    <div className="line"></div>
                    <svg width="90" height="90" viewBox="0 0 89 89" fill="none" xmlns="http://www.w3.org/2000/svg" className="triangle">
                        <path d="M0.377207 4.84733C0.35143 2.6156 2.15701 0.794488 4.38888 0.801151L84.2221 1.03949C87.7717 1.05009 89.5498 5.33508 87.0506 7.85577L8.13949 87.4456C5.6403 89.9663 1.34024 88.2249 1.29924 84.6755L0.377207 4.84733Z" fill="white"/>
                    </svg>
                    <div className="line horizontal"></div>
                </section>
            </section>

            <section className="title-container">
                <h1 className="main-title">attic.</h1>
            </section>

            <section className="bottom-row">
                <p>Pico de minecra</p>

                <span className="scroll-row" />

                <section className="corner">
                    <div className="line"></div>
                    <svg width="90" height="90" viewBox="0 0 89 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.377207 4.84733C0.35143 2.6156 2.15701 0.794488 4.38888 0.801151L84.2221 1.03949C87.7717 1.05009 89.5498 5.33508 87.0506 7.85577L8.13949 87.4456C5.6403 89.9663 1.34024 88.2249 1.29924 84.6755L0.377207 4.84733Z" fill="white"/>
                    </svg>
                    <div className="line horizontal"></div>
                </section>
            </section>
        </section>

        <style jsx>{`
            .presentation {
                height:min(100vh, 100vh);
                background: url('/backgrounds/shiny_bg.svg') no-repeat center center;
                display:grid;
                grid-template-columns: 1fr;
                grid-template-rows: repeat(3, 1fr);
                padding:2rem;
            }

            .top-row {
                grid-row: 1 / 2;
            }

            .bottom-row {
                grid-row: 3 / 4;
                display:flex;
                justify-content:space-between;
                align-items:end;
            }

            .corner .line {
                width:1rem;
                height:14rem;
                background:var(--primary-text);
                position:absolute;
                border-radius: 10px 0px;
            }

            .corner .horizontal {
                transform: rotate(-90deg);
                top:-4.5rem;
                left: 8.5rem;
                border-radius: 0px 10px;
            }

            .bottom-row .corner {
                transform: rotate(180deg);
            }

            .bottom-row .corner .horizontal {
                transform: rotate(90deg);
                top: -6.5rem;
                left: 6.5rem;
            }

            .title-container {
                grid-column: 1 / 2;
                grid-row: 2 / 3;
                display:flex;
                justify-content:center;
                align-items:center;
            }

            .main-title {
                font-size:calc(10vw + 10vh);
                text-shadow: 3px 0 0 #000, -3px 0 0 #000, 0 3px 0 #000, 0 -3px 0 #000, 2px 2px #000, -3px -3px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 5px 5px 0px #B10D62, 10px 10px 0px #FBB847, 15px 15px 0px #158BAB;
            }

            .scroll-row {
                align-self:end;
                width:8rem;
                height:.6rem;
                background:var(--primary-text);
                border-radius: 1rem;
            }
        `}</style>
        </>
    )
}