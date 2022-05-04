import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Custom404() {

    const router = useRouter()

    return (
        <>
            <Head>
                <title>Esta pagina no existe :(</title>
            </Head>

            <section className="error-404">
                <h1>Esta pagina no existe :(</h1>
                <h4 onClick={() => router.back()}><a>&#8666; Volver</a></h4>
            </section>

            <style jsx>{`
                .error-404 {
                    height:100vh;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    flex-direction:column;
                }

                a {
                    margin: 2rem 0;
                    cursor:pointer;
                }
            `}</style>
        </>
    )
}