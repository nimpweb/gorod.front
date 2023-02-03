import React, { useState } from 'react'
import { MdOutlineAddTask } from 'react-icons/md'
import ServiceItem from './ServiceItem';

const ServiceList = ( { services }) => {
    const [loading, setLoading] = useState(false);
  return (
    <div className="mt-5 mb-5">
    <h2 className="mt-3 text-xl font-bold text-center w-full mb-3">Список Ваших услуг</h2>
    <div className="text-center">
    <button type="button" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2 gap-3  uppercase">
        <MdOutlineAddTask className="text-xl" /> Добавить услугу
    </button>
    </div>
    {   loading
            ? <Loading 
                        style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%'}} 
                        text="Загружаем Ваши услуги..." 
                    />
            : (
                services?.length > 0 
                    ? (
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-5">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="py-3 px-6 ">
                                    Аккаунт
                                </th>
                                <th scope="col" className="py-3 px-6 ">
                                    Тип
                                </th>
                                <th scope="col" className="py-3 px-6 ">
                                    Наименование услуги
                                </th>
                                <th scope="col" className="py-3 px-6 ">
                                    &nbsp;
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                         { services.map((service, index) => <ServiceItem key={index} service={service} />) }
                        </tbody>
                    </table>
                     )  
                    : <p className="w-full text-center text-slate-500">У вас не добавлено ни одной услуги...</p>
            )
    }

</div>
  )
}

export default ServiceList