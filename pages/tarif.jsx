import { Layout, Container } from "../components";

export default function Limit() {

  return (
   <Layout 
    pageTitle="Тарифы для физических лиц::Удобные платежи"
  >
    <Container>
      <h1 className="font-bold text-xl text-center mb-5">Обслуживание банковских карт на интернет-сайте Банка в целях осуществления перевода денежных средств в рамках Системы «Город»</h1>
      <p>Плата не взимается, кроме некоторых услуг указанных в документе <a target="_blank" className="font-semibold text-slate-800 hover:text-slate-400 ease duration-200" href="https://orbank.ru/retail/retail-tariffs.php">Тарифы для физических лиц</a>. Вы будете ознакомлены с комиссией до совершения платежа.</p>
    </Container>
   </Layout>

  )


}
