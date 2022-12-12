import React from 'react'
import { LoginBlock } from '../components'

const Home = () => {
  return (
    <div className="relative flex items-center flex-col" style={{height: '700px'}}>
      <div className="absolute" style={{position: 'absolute', overflow: 'hidden', top: '-15px', bottom: '-15px', left: 0, right: 0}}>
        <div className="z-1 bg-slate-500" style={{ position: 'absolute', opacity: '0.6', left: 0, top: 0, right: 0, bottom: 0, backgroundColor: 'rgb(100 116 139)'}}></div>
        <video className="w-full h-full object-cover" autoPlay loop muted controls={false}>
          <source src="./slide-1.mp4" />
        </video>
        
        <LoginBlock />
        
        <div style={{position: 'absolute', top: 120}}>
          <h1 className="text-white text-lg top-10 font-semibold">Оплата ЖКХ</h1>
          <h4><img src="logo.png" alt="logo" /> Система "ГОРОД"</h4>
          <div>
            <span className="text-green-700 text-5xl" style={{color: 'green', fontWeight: 'bold', fontSize: '130px', textShadow: '0 5px 20px rgba(255, 255, 255, 1)'}}>0<sub>%</sub></span>
            <p style={{color: '#777', textWeight: 300}}><sup>*</sup> кроме некоторых услуг(размер комиссии указан до совершения платежа)</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home