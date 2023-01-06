import React from 'react'
import Head from 'next/head'
import Footer from './Footer';
import Header from './Header';

import { ModalContextProvider } from './Modal';

interface IOpacityContainer {
    backgroundColor: string | any
    opacity: string
    children: React.ReactNode
}

const OpacityContainer = ({backgroundColor, opacity, children} : IOpacityContainer) => {
  return (
    <div className="relative w-full h-full pt-20 pb-10">
      <div className="absolute inset-0 z-0" style={{backgroundColor,opacity}}></div>
      {/* <div className="absolute ins" style={{position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, zIndex: 0, backgroundColor,opacity}}></div> */}
      <div className="relative z-1">{children}</div>
    </div>
  )
}

export interface ILayoutBackgroundOptions {
    // ...React.CSSProperties,
    css : React.CSSProperties
    withOpacity: boolean
    backgroundOpacity: string
}

export interface ILayoutOptions {
    fixedHeight ?: number
}



interface ILayout {
    pageTitle: string
    backgroundOptions?: ILayoutBackgroundOptions
    options?: ILayoutOptions
    children?: React.ReactNode
}


const Layout = ( {children, pageTitle, backgroundOptions, options } : ILayout ) => {
  let mainStyle : React.CSSProperties = {};
  if (backgroundOptions){
    mainStyle = {...backgroundOptions.css }
  }
  if (options?.fixedHeight) mainStyle.height = options.fixedHeight;

//   let mainClassName : string  =  '';
//   if (backgroundOptions.withOpacity) mainClassName = ' pt-20 pb-10 ';
//   mainClassName = (!backgroundOptions?.withOpacity) &&  + ' bg-slate-100 relative'
  const mainClassName = `${ !backgroundOptions?.withOpacity  ? 'pt-20 pb-10' : ' bg-slate-100 relative'}`

  return (
        <ModalContextProvider>
            <Head>
                <title>{pageTitle || "Удобные платежи"}</title>
                <meta name="description" content={`${pageTitle} :: удобные платежи`} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
                <link rel="icon" type="image/png" href="./logo.png" />
            </Head>
            <header>
                <Header />
            </header>
            <main className={mainClassName} style={mainStyle}>
                { backgroundOptions?.withOpacity  
                ? (
                    <OpacityContainer 
                        backgroundColor={backgroundOptions.css.backgroundColor} 
                        opacity={backgroundOptions?.backgroundOpacity}
                    >  {children} </OpacityContainer>
                    ) 
                :  <>{children}</>
                }
            </main>

            <Footer />
      </ModalContextProvider>
  )
}

export default Layout