import { useState } from 'react'
import { Layout, Container } from '../components'
import { Sidebar } from '../container'
import { RiLockPasswordLine } from 'react-icons/ri'
import { HiOutlineSave } from 'react-icons/hi'
import { useUser } from '../store';

const Profile = () => {
    const { user } = useUser((state) => state.user);
    const [errorMessage] = useState('');

    const handleSubmitForm = (event) => {
        event.preventDefault();
        alert('clicked Save')
    }

    return (
        <Layout
            pageTitle="Профиль::Удобные платежи"
            backgroundOptions={{
                css: {
                    backgroundColor: 'rgba(235, 235, 235, .5)',
                },
            }}>
            <Container>
                <h1 className="font-bold text-xl text-center mb-5">Профиль</h1>
                <div className="flex gap-10">
                    <Sidebar />
                    <div
                        className="overflow-x-auto relative shadow-md sm:rounded-lg bg-white"
                        style={{ width: '80%' }}>
                        
                        <form 
                            method="post" 
                            onSubmit={handleSubmitForm}
                            className="p-5"
                        >
                            { errorMessage.length > 0 && <div className="w-full rounded-lg text-center bg-red-700 text-white p-2 font-semibold text-sm">{ errorMessage }</div> }
                            <div className="grid grid-cols-3 gap-5">
                                <label htmlFor="" className="flex flex-col gap-1">
                                    Фамилия
                                    <input 
                                        type="text" 
                                        name="firstname" 
                                        placeholder="Укажите фамилия" 
                                        className="border p-2 px-5 rounded-xl shadow-sm outline-none focus:border-slate-400 ease duration-200 bg-slate-100/95 focus:bg-white"
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </label>
                                <label htmlFor="" className="flex flex-col gap-1">
                                    Имя
                                    <input 
                                        type="text" 
                                        name="middlename" 
                                        placeholder="Укажите имя" 
                                        className="border p-2 px-5 rounded-xl shadow-sm outline-none focus:border-slate-400 ease duration-200 bg-slate-100/95 focus:bg-white"
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </label>
                                <label htmlFor="" className="flex flex-col gap-1">
                                    Отчетство
                                    <input 
                                        type="text" 
                                        name="lastname" 
                                        placeholder="Укажите отчетство" 
                                        className="border p-2 px-5 rounded-xl shadow-sm outline-none focus:border-slate-400 ease duration-200 bg-slate-100/95 focus:bg-white"
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </label>
                            </div>
                            <div className="flex flex-col w-[50%] mx-auto mt-5">
                                <label htmlFor="" className="flex flex-col gap-1">
                                    Адрес электронной почты
                                    <input 
                                        type="email" 
                                        name="email" 
                                        placeholder="Адрес электронной почты" 
                                        className="border p-2 px-5 rounded-xl shadow-sm outline-none focus:border-slate-400 ease duration-200 bg-slate-100/95 focus:bg-white"
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </label>

                                <div className="flex gap-3">
                                    <button
                                        type="button"
                                        className="mt-5 flex items-center bg-red-800 text-white p-2 px-6 rounded-xl justify-center w-full gap-3 hover:bg-red-500 ease duration-200 active:translate-y-1"
                                    >
                                        <RiLockPasswordLine /> Изменить пароль
                                    </button>
                                    <button
                                        type="button"
                                        className="mt-5 flex items-center bg-green-800 text-white p-2 px-6 rounded-xl justify-center w-full gap-3 hover:bg-green-500 ease duration-200 active:translate-y-1"
                                    >
                                        <HiOutlineSave /> Сохранить
                                    </button>
                                </div>

                            </div>
                        </form>
                        
                    </div>
                </div>
            </Container>
        </Layout>
    );
};

export default Profile