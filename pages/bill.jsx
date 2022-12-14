import React from 'react'
import {Layout, Container} from '../components'

const bill = () => {
  return (
    <Layout 
      pageTitle="Начисление::Удобные платежи"
    >
      <Container>
        <h1 className="font-bold text-xl text-center mb-5">Период начисления за декабрь 2022г.</h1>

        <div class="overflow-x-auto relative shadow-md sm:rounded-lg" style={{width: '80%', margin: '0 auto'}} >
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                  <th scope="col" class="py-3 px-6 text-center">
                  Услуга
                  </th>
                  <th scope="col" class="py-3 px-6 text-center">
                  Насчислено
                  </th>
                  <th scope="col" class="py-3 px-6 text-center">
                  Расчетные данные
                  </th>
              </tr>
          </thead>
          <tbody>
            <tr>
              <td 
                colSpan={3} 
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 uppercase font-semibold text-center bg-slate-100 py-2"
              >
                АО "ЭнергосбыТ Плюс"
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Электроэнергия, кВтч <br />
                <span className="font-thin text-xs uppercase">Меркурий-201 / 56665422345</span>
                </th>
                <td class="py-4 px-6 text-center">
                173 x 3,46 = <strong>₽ 685.08</strong>
                </td>
                <td class="py-4 px-6 text-center">
                  <button className="bg-slate-800 py-1 px-3 rounded-xl text-white hover:bg-slate-500 cursor-pointer ease-linear duration-200">Внести показания</button>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Отопление, Гкал
                </th>
                <td class="py-4 px-6 text-center">
                0.95986 x 1 892.24 = <strong>₽ 1 816.29</strong>
                </td>
                <td class="py-4 px-6 text-center">
                 <span className="text-slate-300 text-center select-none">без приборов учета</span>
                </td>
            </tr>
            <tr>
              <td 
                colSpan={3} 
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 uppercase font-semibold text-center bg-slate-100 py-2"
              >
                АО &quot;Росводоканал&quot;
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