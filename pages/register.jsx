import React, { useEffect, useState } from 'react';
import { Layout, Container } from "../components";
import { AiOutlineUserAdd } from 'react-icons/ai';
import {$api} from './../utils/api'

export default function Help() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const [enableButton, setEnableButton] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        let enabled = true;
        if (!name.length || !email.length || !password.length || !passwordConfirm.length) { enabled = false }
        if (password !== passwordConfirm) enabled = false;
        if (enabled !== enableButton) setEnableButton(enabled)
    }, [name, email, password, passwordConfirm]);

    const handleCheckPasswords = () => {
        if (password !== passwordConfirm) setErrorMessage('Пароли должны совпадать!')
        else setErrorMessage('')
    }

    const handleSubmitForm = (event) => {
        event.preventDefault();
        console.log('FORM: ', event);
        const formData = new FormData(event.target);
        $api.post('/register', formData)
            .then(data  => console.log('REGISTER DATA: ', data))
            .catch(error => console.warn(error));

    }

  return (
   <Layout 
    pageTitle="Регистрация::Удобные платежи"
  >
    <Container>
      <h1 className="font-bold text-xl text-center mb-5">Регистрация в &quot;Удобных платежах&quot;</h1>
      <div className="bg-white rounded-2xl p-10 sm:w-1/2 w-full m-auto flex flex-col gap-2">
        <form method="post" onSubmit={handleSubmitForm}>
            { errorMessage.length > 0 && <div className="w-full rounded-lg text-center bg-red-700 text-white p-2 font-semibold text-sm">{ errorMessage }</div> }
            <label htmlFor="" className="flex flex-col gap-1">
                Укажите Ваше имя
                <input 
                    type="text" 
                    name="lastname" 
                    placeholder="Укажите Ваше имя" 
                    className="border p-2 px-5 rounded-xl shadow-sm outline-none focus:border-slate-400 ease duration-200 bg-slate-100/95 focus:bg-white"
                    onChange={(e) => setName(e.target.value)}
                />
            </label>

            <label htmlFor="" className="flex flex-col gap-1">
                Укажите Вашу электронную почту
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Электронная почта" 
                    className="border p-2 px-5 rounded-xl shadow-sm outline-none focus:border-slate-400 ease duration-200 bg-slate-100/95 focus:bg-white"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
        
            <label htmlFor="" className="flex flex-col gap-1">
                Пароль
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Пароль" 
                    className="border p-2 px-5 rounded-xl shadow-sm outline-none focus:border-slate-400 ease duration-200 bg-slate-100/95 focus:bg-white"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>

            <label htmlFor="" className="flex flex-col gap-1">
                Подтверждение пароля
                <input 
                    type="password" 
                    name="passwordConfirm" 
                    placeholder="Подтвердите пароль" 
                    className="border p-2 px-5 rounded-xl shadow-sm outline-none focus:border-slate-400 ease duration-200 bg-slate-100/95 focus:bg-white"
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                    onBlur ={handleCheckPasswords}
                />
            </label>

            <div className="divide-x"></div>
            <br />
            <div className="flex justify-center">
                <button 
                    type="submit" 
                    disabled={!enableButton}
                    className="flex items-center gap-1 bg-slate-800 text-white p-2 px-5 rounded-md cursor-pointer hover:bg-slate-500 ease-linear duration-200 disabled:bg-slate-200 disabled:text-slate-300"
                >
                    <AiOutlineUserAdd /> Зарегистрировать
                </button>
            </div>
        </form>
        <div className="p-5">
            <h2 className="font-semibold text-center mb-2">Регистрация через социальные сети</h2>
            <p className="text-center">А нужно ли...?</p>
                <button className="flex items-center gap-2 text-sm border border-blue-700 rounded-xl p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="text-blue-700 w-5 h-5"><path fill="currentColor" d="M31.4907 63.4907C0 94.9813 0 145.671 0 247.04V264.96C0 366.329 0 417.019 31.4907 448.509C62.9813 480 113.671 480 215.04 480H232.96C334.329 480 385.019 480 416.509 448.509C448 417.019 448 366.329 448 264.96V247.04C448 145.671 448 94.9813 416.509 63.4907C385.019 32 334.329 32 232.96 32H215.04C113.671 32 62.9813 32 31.4907 63.4907ZM75.6 168.267H126.747C128.427 253.76 166.133 289.973 196 297.44V168.267H244.16V242C273.653 238.827 304.64 205.227 315.093 168.267H363.253C359.313 187.435 351.46 205.583 340.186 221.579C328.913 237.574 314.461 251.071 297.733 261.227C316.41 270.499 332.907 283.63 346.132 299.751C359.357 315.873 369.01 334.618 374.453 354.747H321.44C316.555 337.262 306.614 321.61 292.865 309.754C279.117 297.899 262.173 290.368 244.16 288.107V354.747H238.373C136.267 354.747 78.0267 284.747 75.6 168.267Z"/></svg>
                    Войти через 
                </button>
            </div>
      </div>

      
    </Container>
   </Layout>

  )


}
