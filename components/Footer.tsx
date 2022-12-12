import React from 'react'

const Footer = () => {
  return (
    <div className="w-full bg-gray-200 pt-3 pb-3 rounded-t-2xl z-21 relative divide-y divide-slate-300" style={{boxShadow: '0px -4px 8px 0px rgb(200 200 200 / 80%)'}}>
      <div className="p-5 flex gap-10 justify-between">
        <div className="flex-1">
          <p className="font-bold">Возникли вопросы:</p>
          <div className="text-sm ml-5 mt-2">
            <p>Телефон: <a className="font-semibold" href="tel:83532343103">+7 (3532) 343-103</a>, <a className="font-semibold" href="tel:343-099">343-099</a></p>
            <p>Email: <a className="font-semibold" href="mailto:gorodpay@orbank.ru">gorodpay@orbank.ru</a></p>
            <p className="mt-2">Обеспечивает проведение расчетов в рамках сервиса: АО "БАНК ОРЕНБУРГ"</p>
          </div>
        </div>
        <div className="flex-1">
          <p className="font-bold">Безопасность платежей:</p>
          <div className="text-sm ml-5 mt-2">
            <p>Телефон: <a className="font-semibold" href="tel:84957846055">+7(495) 784-60-55</a></p>
            <p>Email: <a className="font-semibold" href="mailto:info@multicarta.ru">info@multicarta.ru</a></p>
            <p className="mt-2">Обеспечивает проведение расчетов в рамках сервиса: ПАО "Почта Банк"</p>
          </div>
        </div>
        <div className="flex-1">
          <p className="font-bold">Мы принимаем:</p>
          <div className="mt-2 text-sm flex flex-col">
            <img src="./cards.png" alt="cards" className="w-[150px]" />
            <p className="color-gray-300 mt-2">Банковские карты международных платежных систем VISA, MasterCard и национальной платежной системы «Мир».</p>
          </div>
        </div>
      </div>
      <p className="w-full h-auto text-center font-semibold text-sm mt-3 pt-3 border-t-gray-500>">© АО «БАНК ОРЕНБУРГ», Лицензия ЦБ РФ №3269 от 31 марта 2016 г.</p>
    </div>
  )
}

export default Footer