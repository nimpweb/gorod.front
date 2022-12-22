import React from 'react'
import Link from 'next/link';
import {useRouter} from 'next/router'
import { ImHistory } from 'react-icons/im';
import { CgProfile } from 'react-icons/cg';
import {BsGrid3X2Gap} from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';

const Sidebar = () => {
    const [sidebarRoute, _setSidebarRoute] = React.useState('SIDEBAR_ROUTE');

    const router = useRouter();

    const defaultClassName = `flex items-center gap-1 select-none w-full text-lg rounded-xl p-2 text-slate-800  bg-white hover:bg-slate-500 ease duration-200 hover:text-white`;
    const  activeClassName = `flex items-center gap-1 select-none w-full text-lg rounded-xl p-2 text-slate-500 flex-end bg-slate-500 hover:flex-start`;

    const classNameFunc = (current: string) => {
        if (router.pathname === current) return activeClassName
        return defaultClassName
    }

  return (
    <div className='relative flex flex-col gap-3 bg-slate-400 w-1/4' style={{width: '15%'}}>   
      <Link href="/profile"> 
        <div 
          className={classNameFunc('/profile')}
        >
          <CgProfile /> Профиль
        </div>
      </Link>
      <Link href="/bill"> 
        <div 
          className={classNameFunc('/bill')}
        >
          <BsGrid3X2Gap /> Начисления 
        </div>
      </Link>
      <Link href="/bills"> 
        <div 
          className={classNameFunc('/bills')}
        >
          <ImHistory /> История начислений
        </div>
      </Link>
      <hr />
      <Link href="/logout"> 
        <div 
          className={classNameFunc('/logout')}
        >
          <FiLogOut /> Выход
        </div>
      </Link>
      
    </div>
  )
}

export default Sidebar