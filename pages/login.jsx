import Image from 'next/image'
import React from 'react'
import {Layout, Container} from '../components'
import Link  from 'next/link'
import {useRouter} from 'next/router'
import { CiLogin } from 'react-icons/ci';
import { $api } from './../utils/api';
import { FaSpinner } from 'react-icons/fa';

// const backgroundOptions = {
// }

const Login = () => {
    const [errorMessage, setErrorMessage] = React.useState('');
    const [login, setLogin] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [password, setPassword] = React.useState('');

    const router = useRouter();

    const handleSubmitLogin = (e) => {
        e.preventDefault();
        setLoading(true);

        new Promise((resolve, reject) => {
            const formData = new FormData(e.target);
            $api.post('/login', formData).then(data => {
                if (!data) return reject(setErrorMessage('Произошла ошибка на сервере, попробуйте позже...'))
                const { success, token, user } = data.data;
                if (success && token && user) {
                    localStorage.setItem(process.env.API_ACCESS_TOKEN, token);
                    return resolve({user, token});
                } else {
                    reject(setErrorMessage('Произошла ошибка на сервере, попробуйте позже...'))
                }
            });
        }).finally(() => setLoading(false));
    };

    return (
        <Layout
            pageTitle="Авторизация::Удобные платежи"
            backgroundOptions={{
                css: {
                    background: 'rgba(255,255,255,0.5) url(./Data_security_05.jpg)',
                    // backgroundImage: 'url(./90466.jpg)',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundColor: 'rgb(241, 245, 249)',
                    backgroundOpacity: '0.85',
                },
                withOpacity: true,
            }}
            options={{ fixedHeight: '700px' }}>
            <Container className="max-w-md">
                <h1 className="font-bold text-xl text-center mb-10">Авторизация</h1>
                {errorMessage.length > 0 && (
                    <p className="text-red-500 text-center">{errorMessage}</p>
                )}
                <div className="shadow-2xl sm:w-1/2 w-full m-auto h-full p-20 rounded-2xl bg-white opacity-80 flex gap-10">
                    <div className="hidden sm:flex relative flex-1 items-center">
                        <Image
                            src="/two.png"
                            alt="logo"
                            // fill
                            width={200}
                            height={200}
                        />
                    </div>
                    <div className="flex flex-col flex-1 w-full gap-5">
                        {loading ? (
                            <FaSpinner className="w-full w-height flex items-center justify-center" />
                        ) : (
                            <form onSubmit={handleSubmitLogin} method="POST">
                                <div className="flex flex-col w-full gap-5">
                                    <label htmlFor="" className="flex flex-col gap-1">
                                        Логин
                                        <input
                                            type="text"
                                            name="username"
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
                                        className="flex w-full justify-center items-center gap-1 bg-slate-800 text-white p-2 px-5 rounded-md cursor-pointer hover:bg-slate-500 ease-linear duration-200 disabled:bg-slate-200 disabled:text-slate-300 active:translate-y-1">
                                        <CiLogin /> Авторизоваться
                                    </button>
                                </div>
                            </form>
                        )}

                        <p className="text-sm text-center">
                            Если у Вас еще нет профиля, то пройдите{' '}
                            <Link href="/register">
                                <span className="cursor-pointer underline text-blue-900">
                                    Регистрацию
                                </span>
                            </Link>
                        </p>
                    </div>
                </div>
            </Container>
        </Layout>
    );
};

export default Login