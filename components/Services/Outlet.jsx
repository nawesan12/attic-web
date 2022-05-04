export default function Outlet() {
    return (
        <>
        <section className="outlet">
            <h1 className="article-title">Titulo del Servicio</h1>
            <p>Y obviamente mucha descripcion con fotitos y todo :)</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus tenetur recusandae illum ipsa possimus dicta quam minus temporibus expedita. Culpa autem ut officia hic aspernatur dolores nesciunt. Id, numquam atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita fugiat magnam eius nemo adipisci atque deleniti consequuntur! Corporis vel ea voluptatibus sunt dolores voluptatem quisquam aperiam, beatae, at minima repellendus.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus tenetur recusandae illum ipsa possimus dicta quam minus temporibus expedita. Culpa autem ut officia hic aspernatur dolores nesciunt. Id, numquam atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita fugiat magnam eius nemo adipisci atque deleniti consequuntur! Corporis vel ea voluptatibus sunt dolores voluptatem quisquam aperiam, beatae, at minima repellendus.</p>
        </section>

        <style jsx>{`
            .outlet {
                display:flex;
                flex-direction:column;
                align-items:center;
                padding-block: 15vh;
                grid-column: 2 / 3;
            }

            .article-title {
                font-size: 2.2rem;
                margin-block: 0 2.5rem;
            }

            p {
                margin-block: 1rem;
                width:60%;
                line-height:1.5;
            }
        `}</style>
        </>
    )
}