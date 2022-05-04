import CornerLogo from "./Visual/CornerLogo";

export default function Presentation() {
    return (
        <>
        <section className="presentation">
            <section className="top-row">
                <svg width="257" height="250" viewBox="0 0 257 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 10C0 4.47716 4.47715 0 10 0H15V240C15 245.523 10.5228 250 5 250H0V10Z" fill="white"/>
                    <path d="M257 0L257 5C257 10.5228 252.523 15 247 15L7 15L7 9.99999C7 4.47714 11.4772 -1.07321e-05 17 -1.04907e-05L257 0Z" fill="white"/>
                    <path d="M5.37721 10.8473C5.35143 8.6156 7.15701 6.79449 9.38888 6.80115L89.2221 7.03949C92.7717 7.05009 94.5498 11.3351 92.0506 13.8558L13.1395 93.4456C10.6403 95.9663 6.34024 94.2249 6.29924 90.6755L5.37721 10.8473Z" fill="white"/>
                </svg>
            </section>

            <section className="title-container">
                <h1 className="main-title">attic.</h1>
            </section>

            <section className="bottom-row">
                <CornerLogo />

                <span className="scroll-row" />

                <svg width="257" height="250" viewBox="0 0 257 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M257 240C257 245.523 252.523 250 247 250L242 250L242 10C242 4.47716 246.477 -9.19937e-07 252 -4.37114e-07L257 0L257 240Z" fill="white"/>
                    <path d="M0 250L6.55671e-07 245C1.3799e-06 239.477 4.47715 235 10 235L250 235L250 240C250 245.523 245.523 250 240 250L0 250Z" fill="white"/>
                    <path d="M251.282 240.253C251.298 242.485 249.485 244.298 247.253 244.282L167.422 243.702C163.872 243.676 162.112 239.384 164.622 236.874L243.874 157.622C246.384 155.112 250.676 156.872 250.702 160.422L251.282 240.253Z" fill="white"/>
                </svg>
            </section>
        </section>

        <style jsx>{`
            @keyframes bounce {
                0% {
                    transform: translateY(0);
                }
                50% {
                    transform: translateY(-4px);
                }
                100% {
                    transform: translateY(0);
                }
            }

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

            .corner {
                transition: all .2s ease;
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
                animation: bounce 1.2s ease-in infinite;
            }

            @media screen and (max-width:780px) {
                .top-row svg {
                    display:none; 
                }

                .bottom-row {
                    justify-content:center;
                }
            }

            @media screen and (max-width:1000px) {
                .bottom-row svg {
                    display:none;
                }
            }
        `}</style>
        </>
    )
}