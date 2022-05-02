export default function CornerLogo() {
    return (
        <>
        <section className="corner-logo">
            <div className="row one">
                <div className="square"/>
                <div className="square"/>
            </div>
            <div className="row two">
                <div className="square"/>
                <div className="square"/>
            </div>
            <div className="row three">
                <div className="square"/>
                <div className="square"/>
            </div>
            <div className="row">
                <div className="square" />
                <div className="square" />
                <div className="square" />
                <div className="square" />
            </div>
        </section>

        <style jsx>{`
            .corner-logo {
                height:6rem;
                width:6rem;
                display:grid;
                grid-template-columns: repeat(4, 1fr);
                grid-template-rows: repeat(4, 1fr);
            }

            .square {
                width:max(1.5rem, 1.5rem);
                border:4px solid var(--primary-text);
            }

            .row {
                grid-column: 1 / 5;
                display:flex;
                justify-content:space-between;
            }

            .two {
                grid-column: 1 / 4;
            }

            .three {
                grid-column: 1 / 3;
            }

            @media screen and (max-width:780px) {
                .corner-logo {
                    display:none;
                }
            }
        `}</style>
        </>
    )
}