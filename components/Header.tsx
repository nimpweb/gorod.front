import Link from 'next/link'
import React from 'react'
import logo from '../public/logo.png'

const Header = () => {
  return (
    <div className="flex bg-blue-300 rounded-br-2xl rounded-bl-2xl justify-between shadow-lg fixed w-full z-20">
      <img className="gap ml-1 w-[50px]" src="./logo.png" alt = "logo"/>
      <div className="flex gap-10 items-center mr-5 border-red-50">
        <Link className="text-white font-semibold" href="/tarif">
          <div>Тарифы</div>
        </Link>
        <Link href="/limt">
          <div className="font-bold">Лимиты</div>
        </Link>
        <Link href="/help">
          <div className="font-bold">Помощь</div>
        </Link>
      </div>
    </div>
  )
}

export default Header