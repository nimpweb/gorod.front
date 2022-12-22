import React from 'react'
import {Layout, Container} from '../components'
import { Sidebar } from '../container'

const bill = () => {
  return (
    <Layout 
      pageTitle="История оплат::Удобные платежи"
    >
      <Container>
        <h1 className="font-bold text-xl text-center mb-5">История оплат по единому номеру: 48885565</h1>


        <div className="flex gap-10">
            <Sidebar />
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg" style={{width: '80%', margin: '0 auto'}} >
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-6 text-center">
                        Период
                        </th>
                        <th scope="col" className="py-3 px-6 text-center">
                        Насчислено
                        </th>
                        <th scope="col" className="py-3 px-6 text-center">
                        Операции
                        </th>
                    </tr>
                </thead>
                <tbody>


                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        март 2022
                        </th>
                        <td className="py-4 px-6 text-center">
                        <strong>₽ 4 688.22</strong>
                        </td>
                        <td className="py-4 px-6 text-center">
                        <button className="bg-slate-800 py-1 px-3 rounded-xl text-white hover:bg-slate-500 cursor-pointer ease-linear duration-200 active:translate-y-1">Дублировать чек на почту</button>
                        </td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        февраль 2022
                        </th>
                        <td className="py-4 px-6 text-center">
                        <strong>₽ 6 611.12</strong>
                        </td>
                        <td className="py-4 px-6 text-center">
                        <button className="bg-slate-800 py-1 px-3 rounded-xl text-white hover:bg-slate-500 cursor-pointer ease-linear duration-200 active:translate-y-1">Дублировать чек на почту</button>
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        январь 2022
                        </th>
                        <td className="py-4 px-6 text-center">
                        <strong>₽ 5 685.08</strong>
                        </td>
                        <td className="py-4 px-6 text-center">
                        <button className="bg-slate-800 py-1 px-3 rounded-xl text-white hover:bg-slate-500 cursor-pointer ease-linear duration-200 active:translate-y-1">Дублировать чек на почту</button>
                        </td>
                    </tr>

                    
                </tbody>
                </table>
            </div>
        </div>        
      </Container>
    </Layout>
  )
}

export default bill