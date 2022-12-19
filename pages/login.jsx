import Image from 'next/image'
import React from 'react'
import {Layout, Container} from '../components'
import Link  from 'next/link'

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
  return (
    <Layout 
      pageTitle="Авторизация::Удобные платежи"
      backgroundOptions={backgroundOptions}
      options={{fixedHeight: "700px"}}
      
    >
      <Container className="max-w-md">
        <h1 className="font-bold text-xl text-center mb-10">Авторизация</h1>

        <div className="shadow-2xl w-full h-full p-20 rounded-2xl bg-white opacity-80 flex gap-10">

          <Image 
            src="/two.png"
            alt="logo" 
            width={200}
            height={200}
          />
          <div className="flex flex-col w-full gap-5">
            <div  className="flex flex-col w-full gap-5">
              <input className="border border-slate-800 p-2 rounded-md ease-linear duration-200" type="text" placeholder='Укажите Ваш логин'/>
              <input className="border border-slate-800 p-2 rounded-md ease-linear duration-200" type="password" placeholder='Укажите пароль'/>
              <div className="flex gap-5">
                <label className="flex item-center gap-2">
                  <input type="checkbox" name="" />
                  Сохранить
                </label>
                <Link href="/register"><span className="hover:text-slate-500 ease duration-200">Еще нет профиля?</span></Link>
              </div>
            </div>
            <div className="flex">
              <button>Авторизоваться</button>
            </div>

          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default login