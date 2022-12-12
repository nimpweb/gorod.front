import React from 'react'
import { useState, useEffect } from 'react'
import { LoginBlock, Container } from '../components'

const bgVideos = ['bg-2.mp4'];


const Home = () => {

  const [bg, setBg] = useState('');
  useEffect(() => {
    setBg(bgVideos[0]);
  }, []);

  return (
    <div className="relative flex items-center flex-col" style={{height: '650px'}}>
      <div style={{position: 'absolute', overflow: 'hidden', top: '-15px', bottom: '-15px', left: 0, right: 0}}>
        <div className="z-1 bg-slate-500" style={{ position: 'absolute', opacity: '0.6', left: 0, top: 0, right: 0, bottom: 0, backgroundColor: 'rgb(100 116 139)'}}></div>
        <video className="w-full h-full object-cover" autoPlay loop muted controls={false}>
          <source src={`./bg-1.mp4`} type="video/mp4" />
        </video>
        
        <Container>
          
          <div style={{position: 'absolute', top: 120}}>
            <h4><img src="logo.png" alt="logo" /> Система "ГОРОД"</h4>
            <div>
              <span className="text-green-700 text-5xl" style={{color: 'green', fontWeight: 'bold', fontSize: '130px', textShadow: '0 5px 20px rgba(255, 255, 255, 1)'}}>0<sub>%</sub></span>
              <p style={{color: '#777', textWeight: 300}}><sup>*</sup> кроме некоторых услуг(размер комиссии указан до совершения платежа)</p>
            </div>
            <h1 className="text-white uppercase top-10 font-semibold" style={{fontSize: 120}}>Оплата ЖКХ</h1>
          </div>
          <LoginBlock />
        </Container>
      </div>
    </div>
  )
}

export default Home