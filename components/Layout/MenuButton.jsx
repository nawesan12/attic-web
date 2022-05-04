export default function MenuButton({ setMenuOpen, isOpen }) {
    return (
        <>
        <section className="menu-btn" onClick={() => setMenuOpen(!isOpen)} onKeyDown={() => setMenuOpen(!isOpen)} tabIndex="0">
            <div className="menu-lines">
                <div className="line one"></div>
                <div className="line two"></div>
                <div className="line three"></div>
            </div>
            <h3>Menu</h3>

            <h3 className="close">X</h3>
        </section>

        <style jsx>{`
            .menu-btn {
                position: fixed;
                top: 0;
                right: 0;
                margin: 1rem;
                padding:1rem;
                display:flex;
                align-items:center;
                border-radius: .5rem;
                background: var(--primary-bg);
                transition: all .2s ease;
                z-index: 101;
            }    

            .menu-btn:hover {
                background: #333;
            }

            .menu-btn:focus {
                outline: none;
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
                border-radius: .1rem 0 0 .1rem;
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

            h3, .menu-lines {
                ${isOpen ? 'display:none;' : 'display:flex;'}
            }

            .close {
                ${isOpen ? 'display:flex; margin:0;font-size:1.25rem;' : 'display:none;'}
            }
        `}</style>
        </>
    )
}