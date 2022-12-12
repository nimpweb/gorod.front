import React from 'react'
import Link from 'next/link'

const LoginBlock = () => {
  return (
    <div className="z-20 flex flex-col right-5 shadow-xl bg-white rounded-2xl p-5" style={{width: '300px', height: '280px', top: '120px'}}>
      <h1 className="font-bold uppercase text-center text-slate-700">Авторизация</h1>

      <form className="mt-5">
        <input type="text" 
          placeholder='Имя пользователя'
          name="login-name"
          className="rounded-md outline-none border shadow-md w-full border-slate-400 p-2 text-md mb-2"
        />
        <input type="password" 
          placeholder='Пароль'
          name="login-password"
          className="rounded-md outline-none border shadow-md w-full border-slate-400 p-2 text-md mb-2"
        />
        <Link href='/forgot' className="block">
          <span className="text-xs text-center w-full flex justify-center mt-1">Забыли имя или пароль?</span>
        </Link>

        <button 
          type="submit"
          className="ease duration-200 bg-[#324d67] hover:bg-[#324d67]/75 text-white px-10 py-2 rounded-xl text-center w-full mt-5"
        >Войти</button>
      </form>

    </div>
  )
}

export default LoginBlock