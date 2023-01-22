import { useState, useEffect } from 'react'
import { Layout, Container } from '../components'
import { Sidebar } from '../container'
import { RiLockPasswordLine } from 'react-icons/ri'
import { HiOutlineSave } from 'react-icons/hi'
import { useUser } from '../store';
import { $api } from '../utils/api';
import Loading from './../components/Loading';

const Profile = () => {
    const [loading, setLoading] = useState(false);
    // const { user } = useUser((state) => state.user);
    const [services, setServices] = useState({});
    const [errorMessage] = useState('');

    const handleSubmitForm = (event) => {
        event.preventDefault();
        alert('clicked Save')
    }

    useEffect(() => {
        setLoading(true);
        $api('/profile')
            .then(response => { console.log(response); return response?.data; })
            .then(data => setServices({ ...data?.services }))
            .finally( () => setLoading(false));
    }, []);


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
                        className=" overflow-x-auto relative shadow-md sm:rounded-lg bg-white sm:w-[80%] w-full"
                        // style={{ width: '80%' }}
                        >
                        
                        <form 
                            method="post" 
                            onSubmit={handleSubmitForm}
                            className="p-5"
                        >
                            { errorMessage.length > 0 && <div className="w-full rounded-lg text-center bg-red-700 text-white p-2 font-semibold text-sm">{ errorMessage }</div> }
                            <div className="sm:grid grid-cols-3 gap-5">
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
                            <div className="flex flex-col sm:w-[50%] w-full mx-auto mt-5">
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

                        <div className="mt-5 mb-5">
                        <h2 className="mt-3 text-xl font-bold text-center w-full mb-3">Список доступных услуг</h2>
                        {   loading ? <Loading 
                                            style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%'}} 
                                            text="Загружаем Ваши услуги..." 
                                        />
                                    : (
                                        services?.length > 0 ? (
                                            services.map(service => (
                                                <div className="flex w-full border border-slate-300 p-3">
                                                    <div>{service.srvtype}</div>
                                                    <div>{service.account}</div>
                                                    <div>{service.srvname}</div>
                                                </div>
                                            )
                                        ))  : <p className="w-full text-center text-slate-500">У вас не добавлено ни одной услуги...</p>
                                    )
                        }
                        
                        </div>
                            
                    </div>

                </div>
            </Container>
        </Layout>
    );
};


export default Profile