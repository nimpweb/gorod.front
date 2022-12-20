import React from 'react'
import Head from 'next/head'
import Footer from './Footer';
import Header from './Header';

import { StateContextProvider } from '../utils/ContextProvider'

const OpacityContainer = ({backgroundColor, opacity, children}) => {
  return (
    <div className="relative w-full h-full pt-20 pb-10">
      <div className="absolute inset-0 z-0" style={{backgroundColor,opacity}}></div>
      {/* <div className="absolute ins" style={{position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, zIndex: 0, backgroundColor,opacity}}></div> */}
      <div className="relative z-1">{children}</div>
    </div>
  )
}

const Layout = ( {children, pageTitle, backgroundOptions, options } ) => {
  let mainStyle = {};
  if (backgroundOptions){
    mainStyle = {...backgroundOptions};
  }
  
  if (options?.fixedHeight) mainStyle.height = options.fixedHeight;

  return (
    <StateContextProvider>
      <Head>
        <title>{pageTitle || "Удобные платежи"}</title>
        <meta name="description" content={`${pageTitle} :: удобные платежи`} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <link rel="icon" type="image/png" href="./logo.png" />
      </Head>
      <header>
        <Header />
      </header>
      <main className={`${!backgroundOptions?.withOpacity && 'pt-20 pb-10'} bg-slate-100 relative`} style={mainStyle}>
        { backgroundOptions?.withOpacity  
          ? (
              <OpacityContainer 
                backgroundColor={backgroundOptions?.backgroundColor} 
                opacity={backgroundOptions?.backgroundOpacity}
              >  {children} </OpacityContainer>
            ) 
          :  <>{children}</>
        }
      </main>

      <Footer />
    </StateContextProvider>
  )
}

export default Layout