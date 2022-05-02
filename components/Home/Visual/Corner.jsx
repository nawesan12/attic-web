export default function Corner() {
    return (
        <>
        <section className="corner">
            <div className="line"></div>
            <svg width="90" height="90" viewBox="0 0 89 89" fill="none" xmlns="http://www.w3.org/2000/svg" className="triangle">
                <path d="M0.377207 4.84733C0.35143 2.6156 2.15701 0.794488 4.38888 0.801151L84.2221 1.03949C87.7717 1.05009 89.5498 5.33508 87.0506 7.85577L8.13949 87.4456C5.6403 89.9663 1.34024 88.2249 1.29924 84.6755L0.377207 4.84733Z" fill="white"/>
            </svg>
            <div className="line horizontal"></div>
        </section>


        <style jsx>{`
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
        `}</style>
        </>
    )
}