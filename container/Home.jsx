import React from 'react'
import { useState, useEffect } from 'react'
import { MdRoundedCorner } from 'react-icons/md';
import { LoginBlock, Container } from '../components'

const bgVideos = ['slide-1.mp4', 'bg-2.mp4'];


const Home = () => {

  const [bg, setBg] = useState('');
  useEffect(() => {
    const value = bgVideos[Math.round(Math.random())] || bgVideos[0];
    setBg(value);
  }, []);

  return (
    <div className="relative flex items-center flex-col" style={{height: '650px'}}>
      <div style={{position: 'absolute', overflow: 'hidden', top: '-15px', bottom: '-15px', left: 0, right: 0}}>
        <div className="z-1 bg-slate-500" style={{ position: 'absolute', opacity: '0.6', left: 0, top: 0, right: 0, bottom: 0, backgroundColor: 'rgb(100 116 139)'}}></div>
        <video className="z-0 w-full h-full" autoPlay loop muted controls={false} style={{objectFit: 'cover'}}>
          <source src={`./bg-2.mp4`} type="video/mp4" />
        </video>
        
        <Container className="z-5">
          <div className="flex">
            <div style={{position: 'absolute', top: 120}}>
              <div>
                <img src="logo.png" alt="logo" />
                <span className="text-2xl text-white" style={{textShadow: '0 5px 10px rgba(0, 0, 0, .75)'}}>Система &quot;ГОРОД&quot;</span>
              </div>
              <div className="flex align-end">
                <span className="text-green-700 text-5xl" style={{color: 'green', fontWeight: 'bold', fontSize: '130px', textShadow: '0 5px 20px rgba(255, 255, 255, 1)'}}>0<sub>%</sub></span>
                <p className="text-slate-100 font-semibold"><sup>*</sup> кроме некоторых услуг(размер комиссии указан до совершения платежа)</p>
              </div>
              <div className="flex items-center gap-10">
                <span className="text-white" style={{fontSize: 60, textShadow: '0 5px 10px rgba(0, 0, 0, .75)'}}>на</span>
                <h1 className="uppercase top-10 font-thin bg-white rounded-xl px-10 text-slate-700" style={{fontSize: 80, textShadow: '0 5px 10px rgba(0, 0, 0, .75)'}}>Оплату ЖКХ</h1>
              </div>
            </div>
            <LoginBlock />
          </div>

        </Container>
      </div>
    </div>
  )
}

export default Home