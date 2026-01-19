'use client';

import Link from 'next/link';

const SERVICES = [
  {
    id: 1,
    title: "Оценка недвижимости",
    desc: "Квартиры, дома, земельные участки и коммерческие помещения для ипотеки и опеки.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    link: "/services#nedvizhimost"
  },
  {
    id: 2,
    title: "Оценка транспорта",
    desc: "Легковые и грузовые авто, спецтехника после ДТП или для продажи/наследства.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.124-.504 1.125-1.125V14.25m-2.25-2.25h-2.25a2.25 2.25 0 00-2.25 2.25v1.5m0-3.75V8.25m0 1.5H18a2.25 2.25 0 012.25 2.25v.75m-6-1.5h6m-6 0v2.25m0-2.25h-2.25a2.25 2.25 0 00-2.25 2.25v1.5m0-3.75V8.25m0 1.5h-2.25a2.25 2.25 0 01-2.25-2.25V6" />
      </svg>
    ),
    link: "/services#transport"
  },
  {
    id: 3,
    title: "Оценка бизнеса",
    desc: "Активы предприятия, доли в ООО, ценные бумаги и нематериальные активы.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5M12 6.75h1.5M15 6.75h1.5M9 11.25h1.5M12 11.25h1.5M15 11.25h1.5M9 15.75h1.5M12 15.75h1.5M15 15.75h1.5" />
      </svg>
    ),
    link: "/services#business"
  },
  {
    id: 4,
    title: "Оборудование",
    desc: "Станки, производственные линии, офисная техника и инвентарь.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    link: "/services#equipment"
  },
  {
    id: 5,
    title: "Экспресс-оценка",
    desc: "Предварительный расчет стоимости объекта онлайн за 30 минут. Без выезда.",
    isExpress: true,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-yellow-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    link: "/services#equipment" 
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Заголовок секции */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
            <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Наши услуги</h2>
                <p className="text-slate-500">Проводим оценку любых видов собственности</p>
            </div>
            <Link href="/services" className="text-blue-600 font-semibold hover:text-blue-700 transition flex items-center gap-1">
                Все услуги <span>→</span>
            </Link>
        </div>

        {/* Сетка услуг */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          
          {SERVICES.map((service, index) => {
             // Логика сетки:
             // Индексы 0, 1, 2 (первые 3) -> занимают по 2 колонки на больших экранах (ряд из 3)
             // Индексы 3, 4 (последние 2) -> занимают по 3 колонки на больших экранах (ряд из 2)
             const isLastRow = index >= 3;
             const isExpress = service.isExpress;
             
             // Настраиваем ширину колонок
             let colSpanClass = isLastRow ? 'lg:col-span-3' : 'lg:col-span-2';
             
             // Исправление: Если это Экспресс-оценка (последняя), на планшете (md) растягиваем на всю ширину, 
             // чтобы она не висела одиноко сбоку.
             if (isExpress) {
                colSpanClass += ' md:col-span-2 lg:col-span-3';
             }

             return (
                <Link 
                  href={service.link} 
                  key={service.id}
                  className={`
                    group block p-6 rounded-xl transition-all duration-300 relative overflow-hidden
                    ${colSpanClass}
                    ${isExpress 
                        ? 'bg-blue-600 border border-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20' 
                        : 'bg-white border border-slate-200 shadow-sm hover:border-blue-400 hover:shadow-md hover:-translate-y-1'
                    }
                  `}
                >
                  <div className="flex items-start gap-4">
                    {/* Иконка */}
                    <div className={`p-3 rounded-lg ${isExpress ? 'bg-white/20 text-white' : 'bg-blue-50'}`}>
                        {service.icon}
                    </div>
                    {/* Текст */}
                    <div>
                      <h3 className={`text-xl font-bold mb-2 ${isExpress ? 'text-white' : 'text-slate-900'}`}>
                        {service.title}
                      </h3>
                      <p className={`text-sm leading-relaxed ${isExpress ? 'text-blue-100' : 'text-slate-500'}`}>
                        {service.desc}
                      </p>
                    </div>
                  </div>

                  {/* Декорация для Экспресс-оценки (молния на фоне) */}
                  {isExpress && (
                    <div className="absolute -right-4 -bottom-4 opacity-10 rotate-12 pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-32 h-32 text-white">
                            <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
                        </svg>
                    </div>
                  )}
                </Link>
             );
          })}
        </div>

      </div>
    </section>
  );
}