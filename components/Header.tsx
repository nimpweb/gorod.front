import Link from 'next/link'
import React from 'react'
import { MdHelp, MdShowChart, MdAutoFixHigh } from 'react-icons/md'
import {AiOutlineUserAdd, AiFillCaretDown } from 'react-icons/ai'
import { FiLogOut } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';
import { CiLogin } from 'react-icons/ci';
import {BsGrid3X2Gap} from 'react-icons/bs';
import { ImHistory } from 'react-icons/im';

const Header = () => {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [profilePopup, setProfilePopup] = React.useState(false);
  React.useEffect(() => {
    setLoggedIn(true);
  }, [])
  

  const handleLogoutClick = (e) => {
    e.preventDefault();
    setLoggedIn(false);
  }

  return (
    <div className="flex bg-white rounded-br-2xl rounded-bl-2xl justify-between shadow-lg fixed w-full z-20 border-stone-600 h-[50px]">
      <Link href="/"><img className="gap ml-1 w-[50px]" src="./logo.png" alt = "logo"/></Link>
      <div className="flex gap-10 items-center mr-5 border-red-50">
       
        <Link href="/tarif">
          <div className="font-semibold text-sm flex gap-1 items-center border-r pr-5 hover:text-slate-500 ease-in duration-100"><MdAutoFixHigh /> Тарифы</div>
        </Link>
        <Link href="/limit">
          <div className="font-semibold text-sm flex gap-1 items-center border-r pr-5 hover:text-slate-500 ease-in duration-100"><MdShowChart /> Лимиты</div>
        </Link>
        <Link href="/help">
          <div className="font-semibold text-sm flex gap-1 items-center border-r pr-5 hover:text-slate-500 ease-in duration-100"><MdHelp /> Помощь</div>
        </Link>
        {
          !loggedIn && (
            <Link href="/login">
              <div className="font-semibold text-sm flex gap-1 items-center hover:text-slate-500 ease-in duration-100 text-blue-700"><CiLogin /> Вход</div>
            </Link>
          ) 
        }
        
        {loggedIn && (
          <div 
            className="relative font-semibold text-sm flex gap-1 items-center hover:text-slate-500 ease-in duration-100 cursor-pointer"
            onClick={() => setProfilePopup(!profilePopup)}
          >
            <AiOutlineUserAdd /> Сергей П. Иванов&nbsp;&nbsp;<AiFillCaretDown />
            <div className={`absolute ${!profilePopup && 'hidden'} right-0 z-10 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none top-7`} >
              <div className="py-1" role="none">
                <Link legacyBehavior href="/profile"><a href="#" className="text-gray-700 px-4 py-2 text-sm flex gap-2 hover:bg-slate-100 items-center" role="menuitem"><CgProfile /> Профиль</a></Link>
                <Link legacyBehavior href="/bill"><a href="#" className="text-gray-700 px-4 py-2 text-sm flex gap-2 hover:bg-slate-100 items-center" role="menuitem"><BsGrid3X2Gap /> Начисления</a></Link>
                <Link legacyBehavior href="/bills"><a href="#" className="text-gray-700 px-4 py-2 text-sm flex gap-2 hover:bg-slate-100 items-center" role="menuitem"><ImHistory /> История оплат</a></Link>
                <a href="#" className="text-gray-700 px-4 py-2 text-sm flex gap-2 hover:bg-slate-100 items-center" role="menuitem" onClick={handleLogoutClick}><FiLogOut /> Выход</a>
              </div>
            </div>
          </div>) }
      </div>
    </div>
  )
}

export default Header