import React from 'react'
import Link from 'next/link';
import { CiLogin } from 'react-icons/ci';
import {AiOutlineRight } from 'react-icons/ai';


const Sidebar = () => {
  return (
    <div className='relative flex flex-col gap-3 bg-slate-400 w-1/4' style={{width: '15%'}}>   
      <Link href="/profile"> 
        <div 
          className="flex items-center gap-1  text-slate-800 w-full text-lg bg-white rounded-xl p-2 hover:bg-slate-500 ease duration-200 hover:text-white"
        >
          <CiLogin /> Профиль
        </div>
      </Link>
      <Link href="/bill"> 
        <div 
          className="flex items-center gap-1  text-white w-full text-lg bg-slate-800 rounded-xl p-2 justify-end"
        >
          <CiLogin /> Начисления <AiOutlineRight />
        </div>
      </Link>
      <Link href="/bills"> 
        <div 
          className="flex items-center gap-1  text-slate-800 w-full text-lg bg-white rounded-xl p-2 hover:bg-slate-500 ease duration-200 hover:text-white"
        >
          <CiLogin /> История начислений
        </div>
      </Link>
      
    </div>
  )
}

export default Sidebar