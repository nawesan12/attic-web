import Aside from "./Aside";
import Outlet from "./Outlet";

export default function Main() {
    return (
        <>
        <section className="services-main">
            <Aside />
            <Outlet />
        </section>

        <style jsx>{`
            .services-main {
                height:max(100vh, 100vh);
                display:grid;
                grid-template-columns:20vw 1fr;
                grid-template-rows:1fr;
            }        
        `}</style>
        </>
    )
}