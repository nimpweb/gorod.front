import React from 'react'
import { Layout, Container } from '../components'
import { Sidebar } from '../container'
import { useUser } from '../store';

const profile = () => {
    const user = useUser((state) => state.user);
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
                        <div className="flex flex-wrap">
                            <div className="flex flex-1">
                                <p className="flex-1">Фамилия</p>
                                <input
                                    className="flex-1 border p-1 px-2 rounded-xl shadow-sm outline-none focus:border-slate-400 ease duration-200 bg-slate-100/95 focus:bg-white text-right disabled:text-slate-300 select-none"
                                    type="text"
                                    placeholder="Укажите показания"
                                    value=""
                                />
                            </div>
                            <div className="flex flex-1">
                                <p className="flex-1">Имя</p>
                                <input
                                    className="flex-1 border p-1 px-2 rounded-xl shadow-sm outline-none focus:border-slate-400 ease duration-200 bg-slate-100/95 focus:bg-white text-right disabled:text-slate-300 select-none"
                                    type="text"
                                    placeholder="Укажите показания"
                                    value=""
                                />
                            </div>
                            <div className="flex flex-1">
                                <p className="flex-1">Отчество</p>
                                <input
                                    className="flex-1 border p-1 px-2 rounded-xl shadow-sm outline-none focus:border-slate-400 ease duration-200 bg-slate-100/95 focus:bg-white text-right disabled:text-slate-300 select-none"
                                    type="text"
                                    placeholder="Укажите показания"
                                    value=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Layout>
    );
};

export default profile