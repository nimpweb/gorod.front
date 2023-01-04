import React from 'react';
import { Layout, Container } from '../components';
import { AiFillFilePdf } from 'react-icons/ai';
import { IoMdArrowRoundBack } from 'react-icons/io';
import Link from 'next/link';

const Payed = () => {
    return (
        <Layout
            pageTitle="Оплата выполнена::Удобные платежи"
            backgroundOptions={{
                css: {
                    backgroundColor: 'rgba(235, 235, 235, .5)',
                },
            }}>
            <Container>
                <h1 className="flex justify-center items-center gap-2 font-bold text-xl text-center mb-5 select-none">
                    <Link
                        href="/profile"
                        className="rounded-full p-2 transition-all duration-200 hover:scale-125 hover:bg-white">
                        <IoMdArrowRoundBack />
                    </Link>
                    Оплата выполнена
                </h1>
                <div
                    className="mx-auto p-5 bg-white rounded-xl text-sm flex flex-col gap-1 relative select-none"
                    style={{ width: '400px' }}>
                    <img
                        width={150}
                        src="/payed.png"
                        alt="payed"
                        className="absolute bottom-3 right-3"
                    />

                    <p>
                        Квитанция №: <span className="font-bold">111111</span>
                        &nbsp;&nbsp;от <span className="font-bold">12/12/2022</span>
                    </p>
                    <p>
                        Адрес:{' '}
                        <span className="font-bold">г.Оренбург, ул.Советская, д.60, кв.71</span>
                    </p>
                    <p>ФИО: Семенов А.А.</p>
                    <p>
                        Счет <span className="font-bold">56578445</span> Квартплата - Центральный
                        район УКХ Центральная
                    </p>
                    <p>
                        Период: <span className="fond-bold">текущий</span>
                    </p>
                    <p>
                        Рассчитанная сумма пени на 12/12/2022 составляет{' '}
                        <span className="font-bold">2465.71</span>
                    </p>
                    <table className="border border-slate-300 border-collapse">
                        <thead>
                            <tr>
                                <th className="border border-slate-300 text-left p-2 bg-slate-100">
                                    Услуга
                                </th>
                                <th className="border border-slate-300 p-2 text-right bg-slate-100">
                                    Сумма
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-slate-300 p-1">Отопление</td>
                                <td className="border border-slate-300 p-1 text-right font-semibold">
                                    11.17
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300 p-1">Вывоз ТБО</td>
                                <td className="border border-slate-300 p-1 text-right font-semibold">
                                    13.28
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300 p-1">Горячая вода</td>
                                <td className="border border-slate-300 p-1 text-right font-semibold">
                                    14.87
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300 p-1">Холодная вода</td>
                                <td className="border border-slate-300 p-1 text-right font-semibold">
                                    9.45
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="text-right">
                        Сумма: <span className="font-bold">1000.00</span>
                    </p>
                    <p className="text-right">
                        Оплачено пени: <span className="font-bold">36.22</span>
                    </p>
                    <p className="text-right">
                        Итого: <span className="font-bold">1000.00</span>
                    </p>
                    <p className="text-right">
                        Всего: <span className="font-bold">1000.00</span>
                    </p>
                    <p className="text-slate-500 text-xs text-center">
                        Чек автоматически был направлен на адрес Вашей электронной почты
                    </p>
                    <button className="bg-slate-800 py-1 px-3 rounded-xl text-white hover:bg-slate-500 cursor-pointer ease-linear duration-200 active:translate-y-1 flex items-center gap-1 w-[50%]">
                        <AiFillFilePdf /> Сохранить в PDF
                    </button>
                </div>
            </Container>
        </Layout>
    );
};

export default Payed;
