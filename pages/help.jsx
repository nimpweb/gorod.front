import { Layout, Container } from "../components";

export default function Help() {

  return (
   <Layout 
    pageTitle="Помощь::Удобные платежи"
  >
    <Container>
      <h1 className="font-bold text-xl text-center mb-5">Инструкции по работе с &quot;Удобными платежами&quot;</h1>
      <h2 className="text-left font-bold mt-5 mb-5 text-xl">Часто задаваемые вопросы</h2>
      <ul>
    <li className="divide-slate-500 mb-5">
          <h3 className="font-semibold uppercase">Что делать если заплатил на неверный лицевой счет?</h3>
          <p className="px-5 text-justify">Вам нужно обратиться к получателю средств (Поставщику услуги) для переноса платежа с неверного лицевого счета на верный - <button className="text-white px-2 rounded-lg ease duration-300 bg-slate-700 hover:bg-slate-500 active:bg-slate-900 active:translate-y-1">Поставщик услуги</button></p>
        </li>
        
        <li className="divide-slate-500 mb-5">
          <h3 className="font-semibold uppercase">Что делать, если я оплатил неверную услугу?</h3>
          <p className="px-5 text-justify">Вам нужно обратиться к получателю средств (Поставщику услуг) для возврата ошибочно уплаченных денежных средств - <button className="text-white px-2 rounded-lg  ease duration-300 bg-slate-700 hover:bg-slate-500 active:bg-slate-900 active:translate-y-1">Поставщик услуги</button></p>
        </li>

        <li className="divide-slate-500 mb-5">
          <h3 className="font-semibold uppercase">Я сомневаюсь, верную услугу я пытаюсь оплатить?</h3>
          <p className="px-5 text-justify">Для проверки правильности выбранной услуги обратите внимание на наименование Получателя средств (Поставщика услуг), который указан рядом с названием услуги, сверьте название поставщика услуги с данными квитанции или договора на оказание услуг, если услуга имеет номер лицевого счета/договора/телефона, также сравните данные с квитанцией или договором на оказание услуг.</p>
        </li>
        
        <li className="divide-slate-500 mb-5">
          <h3 className="font-semibold uppercase">К кому обратиться, если у меня остались вопросы?</h3>
          <p className="px-5 text-justify">
          По всем интересующим Вас вопросам просим обращаться:
          <ul className="list">
            <li className="list-item">Телефон: <a className="font-semibold underline text-slate-800 hover:text-slate-500 ease duration-100" href="tel:83532343103">+7 (3532) 343-103</a></li>
            <li className="list-item">Email: <a className="font-semibold underline text-slate-800 hover:text-slate-500 ease duration-100" href="mailto:gorodpay@orbank.ru">gorodpay@orbank.ru</a></li>
          </ul>
          </p>
        </li>

      </ul>

      <h2 className="text-left font-bold mt-5 mb-5 text-xl">Видеоинструкции</h2>


      <div className="flex gap-3">
        <VideoInstruction title="Презентация Оренбург Банк" src="https://www.youtube.com/embed/vEx_nwEhFXA" />
        <VideoInstruction title="Дебетовые карты банка Оренбург" src="https://www.youtube.com/embed/az6EEoM_xHQ" />
      </div>
      
      
      
    </Container>
   </Layout>

  )
}

function VideoInstruction({ title, src } ) {
    return (
        <div className="w-[320px] border  rounded-xl overflow-hidden shadow-md p-2">
            <h3 className="font-bold tracking-wide">{ title }</h3>
            <iframe 
                src={src} 
                title={title} 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen 
            />
        </div>
    )
}
