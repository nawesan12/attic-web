export default function ServicesGrid() {
    return (
        <>
            <section className="services">
                <section className="services-grid">
                    <section className="service separator"></section>
                    <section className="service"></section>
                    <section className="service separator"></section>
                    <section className="service"></section>
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
                    grid-template-columns: repeat(2, 1fr);
                    grid-template-rows: repeat(2, 1fr);
                    border-radius: 1.25rem;
                    background: #000;
                }

                .service {
                    height:100%;
                    width:100%;
                }

                .separator {
                    border-right: 2px solid var(--primary-text);
                }
            `}</style>
        </>
    )
}