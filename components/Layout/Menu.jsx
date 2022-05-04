import { useState } from 'react'
import MenuButton from "./MenuButton";
import LinkTo from "./LinkTo";

export default function Menu() {

    const [isOpen, setMenuOpen] = useState(false);

    return (
        <>        
        <MenuButton  setMenuOpen={setMenuOpen} isOpen={isOpen} />

        <section className="menu">
            <section className="menu-modal">
                <nav>
                    <ul>
                        <li>
                            <LinkTo destiny={"/"} name={"Inicio"} close={() => setMenuOpen(false)}/>
                        </li>
                        <li>
                            <LinkTo destiny={"/services"} name={"Servicios"} close={() => setMenuOpen(false)}/>                            
                        </li>
                        <li>
                            <LinkTo destiny={"/contact"} name={"Contacto"} close={() => setMenuOpen(false)}/>                            
                        </li>
                        <li>
                            <LinkTo destiny={"/projects"} name={"Proyectos"} close={() => setMenuOpen(false)}/>                            
                        </li>
                        <li>
                            <LinkTo destiny={"/staff"} name={"Staff"} close={() => setMenuOpen(false)}/>
                        </li>
                    </ul>
                </nav>

                <section className="section-overview">

                </section>
            </section>
        </section>

        <style jsx>{`
            .menu {
                height: 100vh;
                width: 100vw;
                position:fixed;
                z-index: 100;
                background-image: url('/backgrounds/menu_bg.png');
                background-color: var(--primary-bg);
                background-repeat: no-repeat;
                background-position: center center;
                background-size:cover; 
                transition: all .3s ease-in-out; 
                ${isOpen ? 'transform: translateY(0%);' : 'transform: translateY(-100%);'}
                display:grid;
                place-items:center;
            }

            .menu-modal {
                height: 75vh;
                width:70vw;
                background: var(--primary-bg);
                border: .8rem solid var(--primary-text);
                display:flex;
                align-items:center;
                justify-content:space-evenly;
            }

            nav li {
                margin: 1rem 0;
            }

            .section-overview {
                height:50%;
                width:min(20rem, 20rem);
                border: 2px solid var(--primary-text);
                border-radius: .5rem;
            }
        `}</style>
        </>
    )
}