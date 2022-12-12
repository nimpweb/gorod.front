import Head from 'next/head'
import { Header, Footer } from './../components'
import { HomeContainer } from './../container'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Удобные платежи</title>
        <meta name="description" content="Удобные платежи системы город Оренбург" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <link rel="icon" type="image/png" href="./logo.png" />
      </Head>

      <Header />

      <main>
        <HomeContainer />
      </main>
      <Footer />
    </div>
  )
}
