export default function Custom404() {
    return (
        <>
            <section className="error-404">
                <h1>Esta pagina no existe :(</h1>
            </section>

            <style jsx>{`
                .error-404 {
                    height:100vh;
                    display:grid;
                    place-items:center;
                }
            `}</style>
        </>
    )
}