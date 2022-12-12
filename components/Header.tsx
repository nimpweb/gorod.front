import Link from 'next/link'
import React from 'react'
import logo from '../public/logo.png'
import { MdHelp, MdShowChart, MdAutoFixHigh } from 'react-icons/md'
import {AiOutlineUserAdd } from 'react-icons/ai'

const Header = () => {
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
        <Link href="/register">
          <div className="font-semibold text-sm flex gap-1 items-center hover:text-slate-500 ease-in duration-100 text-blue-700"><AiOutlineUserAdd /> Регистрация</div>
        </Link>
      </div>
    </div>
  )
}

export default Header