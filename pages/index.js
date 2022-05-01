import Head from 'next/head'
import Main from '../components/Home/Main'

export default function Home() {
  return (
    <>
      <Head>
        <title>Attic</title>
        <meta name="description" content="Attic" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />
    </>
  )
}
