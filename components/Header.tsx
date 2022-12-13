import Link from 'next/link'
import React from 'react'
import { MdHelp, MdShowChart, MdAutoFixHigh } from 'react-icons/md'
import {AiOutlineUserAdd, AiFillCaretDown } from 'react-icons/ai'

const Header = () => {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [profilePopup, setProfilePopup] = React.useState(false);
  React.useEffect(() => {
    setLoggedIn(true);
  }, [])
  
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
            <Link href="/register">
              <div className="font-semibold text-sm flex gap-1 items-center hover:text-slate-500 ease-in duration-100 text-blue-700"><AiOutlineUserAdd /> Регистрация</div>
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
                <Link legacyBehavior href="/profile"><a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem">Профиль</a></Link>
                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem">Выход</a>
              </div>
            </div>
          </div>) }
      </div>
    </div>
  )
}

export default Header