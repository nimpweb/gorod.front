export interface IUser {
    name: string                        // логин пользователя                       
    email: string                       // электронная почта польтзователя (может восприниматься как логин)
    fio?: string                        // ФИО пользователя, не обязательный параметр
    shortFio?: string                   // Короткое имя пользоваиеля форма (Имя О. Фамилия) для отображения (в БД не хранится)
    token: string                       // Временный токен, для представления доступа к личному кабиенту платильщика
}

/* Показания прибора учета */
export interface IGorodCounterMetric {
    prev: number                        // прошлые показания
    next: number                        // следующие показания
    diff: number                        // разница
}

/* Прибор учета */
export interface IGorodServiceCoutner {
	title: string                       // Наименование прибора учета
	number: string	                    // Номер прибора учета
    metric?: IGorodCounterMetric[];     // Массив показаний
	unitTitle: string                   // наименование единицы измерения
    value: number                        // количество единиц предоставленной услуги
}

/* Услуга */
export interface IGorodService {
    code: string                        // внутренний код услуги
    agent: IGorodServiceAgent           // организация предоставляющая услугу
	title: string                       // Наименование услуги
    tarif: number                       // текущий тариф на услугу
	money_accrued: number               // начисленная сумма для уплаты за услугу
	money_topay: number                 // сумма которую оплачивает клиент
	fine: number                        // долг по услуге на текущий момент
    counters?: IGorodServiceCoutner[]   // массив приборов учета
}

/* Организация предоставляющая услугу */
export interface IGorodServiceAgent {
    title: string                       // наименование
    phone?: string                      // контактный телефон
    address?: string                    // адрес
    workTime?: string                   // режим работы
}