import Image from 'next/image'
import React from 'react'
import {Layout, Container} from '../components'
import Link  from 'next/link'
import { CiLogin } from 'react-icons/ci';

const backgroundOptions = {
  background: 'rgba(255,255,255,0.5) url(./Data_security_05.jpg)',
  // backgroundImage: 'url(./90466.jpg)',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundColor: 'rgb(241, 245, 249)',
  backgroundOpacity: '0.85',
  withOpacity: true
}

const login = () => {

    const [login, setLogin ] = React.useState('')
    const [password, setPassword ] = React.useState('')

    const handleSubmitLogin = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const object = {}
        formData.forEach((value, key) => object[key] = value);
        console.log('SUBMIT_OBJECT = ', object)
    }

  return (
    <Layout 
      pageTitle="Авторизация::Удобные платежи"
      backgroundOptions={backgroundOptions}
      options={{fixedHeight: "700px"}}
      
    >
      <Container className="max-w-md">
        <h1 className="font-bold text-xl text-center mb-10">Авторизация</h1>

        <div className="shadow-2xl w-1/2 m-auto h-full p-20 rounded-2xl bg-white opacity-80 flex gap-10">

        <div className="relative flex-1 flex items-center">
            <Image 
                src="/two.png"
                alt="logo" 
                // fill
                width={200}
                height={200}
            />
          </div>
          <div className="flex flex-col flex-1 w-full gap-5">
            <form onSubmit={handleSubmitLogin} method="POST">
                <div className="flex flex-col w-full gap-5">
                    <label htmlFor="" className="flex flex-col gap-1">
                        Логин
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Укажите Ваш логин" 
                            className="border p-2 px-5 rounded-xl shadow-sm outline-none focus:border-slate-400 ease duration-200 bg-slate-100/95 focus:bg-white"
                            onChange={(e) => setLogin(e.target.value)}
                            value={login}
                        />
                    </label>
                    <label htmlFor="" className="flex flex-col gap-1">
                        Пароль
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Укажите пароль" 
                            className="border p-2 px-5 rounded-xl shadow-sm outline-none focus:border-slate-400 ease duration-200 bg-slate-100/95 focus:bg-white"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                    </label>
                
                <div className="flex gap-5">
                    <label className="flex item-center gap-2 text-slate-500">
                    <input type="checkbox" name="" />
                    Сохранить профиль / автовход
                    </label>
                </div>
                </div>
                <div className="flex items-center gap-2">
                <button 
                    type="submit"
                    className="flex w-full justify-center items-center gap-1 bg-slate-800 text-white p-2 px-5 rounded-md cursor-pointer hover:bg-slate-500 ease-linear duration-200 disabled:bg-slate-200 disabled:text-slate-300 active:translate-y-1"
                >
                    <CiLogin /> Авторизоваться
                </button>
                </div>
            </form>
            <p className="text-sm text-center">Если у Вас еще нет профиля, то пройдите <Link href='/register'><span className="cursor-pointer underline text-blue-900">Регистрацию</span></Link></p>

          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default login