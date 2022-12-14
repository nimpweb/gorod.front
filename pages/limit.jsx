import { Layout, Container } from "../components";

export default function Limit() {

  return (
   <Layout 
    pageTitle="Лимиты по операциям::Удобные платежи"
  >
    <Container>
      <h1 className="font-bold text-xl text-center mb-10">Лимиты по операциям обслуживания банковских карт на интернет-сайте Банка в целях осуществления переводов денежных средств в рамках Системы «Город»</h1>

      <div className="overflow-x-auto relative shadow-md sm:rounded-lg" style={{width: '80%', margin: '0 auto'}} >
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                  <th scope="col" className="py-3 px-6 text-center">
                  Лимиты
                  </th>
                  <th scope="col" className="py-3 px-6 text-center">
                  Оплата за жилищно-коммунальные услуги и содержание детей в дошкольных образовательных учреждениях
                  </th>
                  <th scope="col" className="py-3 px-6 text-center">
                  Оплата за прочие услуги Системы «Город»
                  </th>
              </tr>
          </thead>
          <tbody>
            <tr>
              <td 
                colSpan={3} 
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 uppercase font-semibold text-center bg-slate-100 py-2"
              >
                Максимальная сумма
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                одной операции*
                </th>
                <td className="py-4 px-6 text-center">
                30 100 руб.
                </td>
                <td className="py-4 px-6 text-center">
                10 000 руб.
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                операций по одной карте в месяц
                </th>
                <td className="py-4 px-6 text-center">
                150 000 руб.
                </td>
                <td className="py-4 px-6 text-center">
                30 000 руб.
                </td>
            </tr>
            <tr>
              <td 
                colSpan={3} 
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 uppercase font-semibold text-center bg-slate-100 py-2"
              >
                Количество успешных попыток оплаты с одного IP-адреса
              </td>
            </tr>  
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                в день
                </th>
                <td className="py-4 px-6 text-center">
                5
                </td>
                <td className="py-4 px-6 text-center">
                5
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                в месяц
                </th>
                <td className="py-4 px-6 text-center">
                10
                </td>
                <td className="py-4 px-6 text-center">
                10
                </td>
            </tr>
            <tr>
              <td 
                colSpan={3} 
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 uppercase font-semibold text-center bg-slate-100 py-2"
              >
                Количество различных номеров карт для оплаты с одного IP-адреса
              </td>
            </tr>  
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                в день
                </th>
                <td className="py-4 px-6 text-center">
                2
                </td>
                <td className="py-4 px-6 text-center">
                2
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                в месяц
                </th>
                <td className="py-4 px-6 text-center">
                4
                </td>
                <td className="py-4 px-6 text-center">
                2
                </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mt-5 text-slate-500"><sup className="text-slate-800">*</sup> в рамках одной операции возможна оплата нескольких услуг Системы «Город»</p>

      </Container>
   </Layout>
  )


}
