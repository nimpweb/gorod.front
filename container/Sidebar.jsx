import React from 'react'
import Link from 'next/link';
import { CiLogin } from 'react-icons/ci';


const Sidebar = () => {
  return (
    <div className='relative bg-slate-400 w-1/4' style={{width: '15%'}}>   
      <Link href="/profile"> 
        <div 
          className="flex items-center gap-1 bg-indigo-500 text-white w-full"
        >
          <CiLogin /> Профиль
        </div>
      </Link>
      <Link href="/profile"> 
        <div 
          className="flex items-center gap-1 bg-indigo-500 text-white w-full"
        >
          <CiLogin /> История начислений
        </div>
      </Link>
      
    </div>
  )
}

export default Sidebar