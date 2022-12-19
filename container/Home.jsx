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
        <video className="z-0 w-full h-full" autoPlay loop muted controls={false} style={{objectFit: 'cover', position: 'absolute'}}>
          <source src={`./bg-2.mp4`} type="video/mp4" />
        </video>
        {/* <div className="z-1 bg-slate-500" style={{ position: 'absolute', opacity: '0.6', left: 0, top: 0, right: 0, bottom: 0, backgroundColor: 'rgb(100 116 139)'}}></div> */}
        <div className="z-1 bg-slate-500 inset-0 absolute" style={{ opacity: '0.6', backgroundColor: 'rgb(100 116 139)'}}></div>
        
        <Container className="z-2">
          <div className="relative flex flex-col w-full h-full" style={{marginTop: '100px'}}>
            <div className='flex flex-1 items-start'>
              <div className="flex-3 flex flex-col justify-center items-center">
                <img src="logo.png" alt="logo" />
                <span className="text-2xl text-white" style={{textShadow: '0 5px 10px rgba(0, 0, 0, .75)'}}>Система &quot;ГОРОД&quot;</span>
              </div>
              <div className="text-white text-3xl text-center flex-1 select-none" style={{fontSize:'100px', fontFamily: 'Caveat', textShadow: '0 5px 10px rgba(200, 200, 200, .5)'}}>
                Удобные платежи
              </div>

            </div>
            <div className="flex flex-1 flex-col items-center gap-10" style={{border: 'solid 1px blue'}}>
              <div className="flex align-end">
                <span className="text-green-700 text-5xl" style={{color: 'green', fontWeight: 'bold', fontSize: '130px', textShadow: '0 5px 20px rgba(255, 255, 255, 1)'}}>0<sub>%</sub></span>
                <p className="text-slate-100 font-semibold"><sup>*</sup> кроме некоторых услуг(размер комиссии указан до совершения платежа)</p>
              </div>
              <span className="text-white" style={{fontSize: 60, textShadow: '0 5px 10px rgba(0, 0, 0, .75)'}}>на</span>
              <h1 className="uppercase top-10 font-thin bg-white rounded-xl px-10 text-slate-700" style={{fontSize: 80, textShadow: '0 5px 10px rgba(0, 0, 0, .75)'}}>Оплату ЖКХ</h1>
            </div>
          </div>
          {/* <LoginBlock /> */}

        </Container>
      </div>
    </div>
  )
}

export default Home