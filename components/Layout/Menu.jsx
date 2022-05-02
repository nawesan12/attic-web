export default function Menu() {
    return (
        <>
        <section className="menu-btn">
            <div className="menu-lines">
                <div className="line one"></div>
                <div className="line two"></div>
                <div className="line three"></div>
            </div>
            <h3>Menu</h3>
        </section>

        <style jsx>{`
            .menu-btn {
                position: fixed;
                top: 0;
                right: 0;
                padding:2rem;
                display:flex;
                align-items:center;
            }    

            h3 {
                margin-inline: .5rem 0;
            }

            .menu-lines {
                display:flex;
                flex-direction:column;
                align-items:end;
            }

            .line {
                height:.4rem;
                background:var(--primary-text);
                margin-block: .1rem;
            }

            .one {
                width: 5rem;
            } 

            .two {
                width:2rem;
            }

            .three {
                width:3.5rem;
            }
        `}</style>
        </>
    )
}