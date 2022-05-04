export default function Aside() {
    return (
        <>
        <aside className="services-aside">

            <p>Aca va un logo</p>

            <nav>
                <ul>
                    <li>&#9656; Web Development</li>
                    <li>&#9656; Web Design</li>
                    <li>&#9656; Marketing Services</li>
                    <li>&#9656; Extra Services</li>
                </ul>
            </nav>

            <p>Aca van las redes</p>
        </aside>

        <style jsx>{`
            .services-aside {
                grid-column: 1 / 2;
                grid-row: 1 / 2;
                height:100%;
                display:flex;
                flex-direction:column;
                align-items:center;
                justify-content:space-around;
                box-shadow: 5px 0 0 #B10D62, 10px 0 0 #158BAB, 15px 0 0 #FBB847;
            }

            ul li {
                margin: 1rem 0;
            }

            nav {
                padding-inline:2rem 0;
                align-self:start;
            }
        `}</style>
        </>
    )
}