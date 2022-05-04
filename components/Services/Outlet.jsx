export default function Outlet() {
    return (
        <>
        <section className="outlet">
            <h1>Aca va el contenido</h1>
            <p>Y obviamente mucha descripcion con fotitos y todo :)</p>
        </section>

        <style jsx>{`
            .outlet {
                display:flex;
                flex-direction:column;
                align-items:center;
                padding-block: 15vh;
            }

            h1 {
                font-size: 2.25rem;
            }
        `}</style>
        </>
    )
}