import React from 'react'
import {Layout, Container} from '../components'
import { GiPayMoney }  from 'react-icons/gi'
import { TiSortNumerically }  from 'react-icons/ti'
import {Modal} from 'next-modal'

const bill = () => {

  const [showModal, setShowModal] = React.useState(false)

  

  return (
    <Layout 
      pageTitle="Начисление::Удобные платежи"
    >
      <Container>
        <h1 className="font-bold text-xl text-center mb-5">Период начисления за декабрь 2022г.</h1>

        <div className="overflow-x-auto relative shadow-md sm:rounded-lg" style={{width: '80%', margin: '0 auto'}} >
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="py-3 px-6 text-center">
                    Услуга
                    </th>
                    <th scope="col" className="py-3 px-6 text-center">
                    Насчислено
                    </th>
                    <th scope="col" className="py-3 px-6 text-center">
                    Расчетные данные
                    </th>
                </tr>
            </thead>
            <tbody>
              <tr>
                <td 
                  colSpan={3} 
                  className="border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 uppercase font-semibold text-center bg-slate-100 py-2"
                >
                  АО &quot;ЭнергосбыТ Плюс&quot;
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Электроэнергия, кВтч <br />
                  <span className="font-thin text-xs uppercase">Меркурий-201 / 56665422345</span>
                  </th>
                  <td className="py-4 px-6 text-center">
                  173 x 3,46 = <strong>₽ 685.08</strong>
                  </td>
                  <td className="py-4 px-6 text-center flex justify-end">
                    <button className="bg-slate-800 py-1 px-3 rounded-xl text-white hover:bg-slate-500 cursor-pointer ease-linear duration-200 active:translate-y-1 flex items-center gap-1"><TiSortNumerically /> Внести показания</button>
                  </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Отопление, Гкал
                  </th>
                  <td className="py-4 px-6 text-center">
                  0.95986 x 1 892.24 = <strong>₽ 1 816.29</strong>
                  </td>
                  <td className="py-4 px-6 text-center flex justify-end">
                  <span className="text-slate-300 text-center select-none">без приборов учета</span>
                  </td>
              </tr>
              <tr>
                <td 
                  colSpan={3} 
                  className="border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 uppercase font-semibold text-center bg-slate-100 py-2"
                >
                  АО &quot;Система Город&quot;
                </td>
              </tr>  

              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Холодное водоснабжение, куб. м <br />
                  <span className="font-thin text-xs uppercase">Водомер / BC977265</span>
                  </th>
                  <td className="py-4 px-6 text-center">
                  10 x 33.02 = <strong>₽ 330.20</strong>
                  </td>
                  <td className="py-4 px-6 text-center flex justify-end">
                    <button 
                      className="bg-slate-800 py-1 px-3 rounded-xl text-white hover:bg-slate-500 cursor-pointer ease-linear duration-200 active:translate-y-1 flex items-center gap-1"
                      onClick={() => setShowModal(true)}
                    >
                      <TiSortNumerically />Внести показания
                    </button>
                  </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Водоотведение <br />
                  <span className="font-thin text-xs uppercase"></span>
                  </th>
                  <td className="py-4 px-6 text-center">
                  10 x 23.00 = <strong>₽ 230</strong>
                  </td>
                  <td className="py-4 px-6 text-center flex justify-end">
                  <span className="text-slate-300 text-center select-none">без приборов учета</span>
                  </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Полив придомовой территории <br />
                  <span className="font-thin text-xs uppercase"></span>
                  </th>
                  <td className="py-4 px-6 text-center">
                  -
                  </td>
                  <td className="py-4 px-6 text-center flex justify-end">
                    <span className="text-slate-300 text-center select-none">нет потребления</span>
                  </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Обращение с ТКО <br />
                  <span className="font-thin text-xs uppercase"></span>
                  </th>
                  <td className="py-4 px-6 text-center">
                  -
                  </td>
                  <td className="py-4 px-6 text-center  flex justify-end">
                    <span className="text-slate-300 text-center select-none">нет потребления</span>
                  </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Содержание жилого помещения <br />
                  <span className="font-thin text-xs uppercase"></span>
                  </th>
                  <td className="py-4 px-6 text-center">
                  1097.36
                  </td>
                  <td className="py-4 px-6 text-center flex justify-end">
                    <span className="text-slate-300 text-center select-none">нет потребления</span>
                  </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Взнос на капитальный ремонт <br />
                  <span className="font-thin text-xs uppercase"></span>
                  </th>
                  <td className="py-4 px-6 text-center">
                  352.17
                  </td>
                  <td className="py-4 px-6 text-center flex justify-end">
                  <button className="bg-slate-800 py-1 px-3 rounded-xl text-white hover:bg-slate-500 cursor-pointer ease-linear duration-200 active:translate-y-1 flex items-center gap-1 justify-end"><GiPayMoney /> Изменить оплату</button>
                  </td>
              </tr>
              <tr>
                <td 
                  colSpan={3} 
                  className="border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 uppercase font-semibold text-center bg-slate-100 py-2"
                >
                  ООО "ЦИФРАЛ-СЕРВИС"
                </td>
              </tr>  
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Тех. обсл. Домофона ЦифралCервис <br />
                  <span className="font-thin text-xs uppercase"></span>
                  </th>
                  <td className="py-4 px-6 text-center">
                  0
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-slate-300 text-center select-none">нет потребления</span>
                  </td>
              </tr>
            </tbody>
          </table>
        </div>


      </Container>
    </Layout>
  )
}

export default bill