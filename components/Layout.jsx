import React from 'react'
import Head from 'next/head'
import Footer from './Footer';
import Header from './Header';

const Layout = ( { pageTitle, children } ) => {
  return (
    <>
      <Head>
        <title>{pageTitle || "Удобные платежи"}</title>
        <meta name="description" content={`${pageTitle} :: удобные платежи`} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <link rel="icon" type="image/png" href="./logo.png" />
      </Head>
      <header>
        <Header />
      </header>
      <main className="pt-20 pb-10">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout