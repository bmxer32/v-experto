export default function ContactsSection() {
  return (
    <section id="contacts" className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Наши контакты</h2>
          <p className="text-slate-500">Приезжайте к нам в офис или звоните для консультации</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden md:flex">
          
          {/* Левая часть: Информация */}
          <div className="p-8 md:p-12 md:w-1/3 flex flex-col justify-center space-y-8 bg-white relative z-10">
            
            {/* Адрес */}
            <div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Адрес офиса</h3>
              <p className="text-lg font-medium text-slate-800">
                г. Иваново,<br /> Проспект Ленина, 34
                <br />
                <span className="text-sm text-slate-500 font-normal">ТЦ "Holiday центр"</span>
              </p>
            </div>

            {/* Телефон */}
            <div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Телефон</h3>
              {/* 👇 ИСПРАВИЛ: поставил реальный номер в href */}
              <a href="tel:+79206710091" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition">
                +7 (920) 671-00-91
              </a>
              <p className="text-sm text-slate-500 mt-1">Пн-Сб с 9:00 до 18:00</p>
            </div>

            {/* Почта */}
            <div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Email</h3>
              <a href="mailto:v-expert@list.ru" className="text-lg font-medium text-slate-800 hover:text-blue-600 transition">
                v-expert@list.ru
              </a>
            </div>

          </div>

          {/* Правая часть: Карта */}
          {/* 👇 ИСПРАВИЛ: min-h-[400px] гарантирует высоту карты на мобильных */}
          <div className="md:w-2/3 h-64 md:h-auto bg-slate-200 relative min-h-[400px]">
            <iframe 
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A72de188b0b373d02c762ef71b4ed1bb3acb760bf27fac346240eb9244b6a4df6&amp;source=constructor" 
                className="w-full h-full absolute inset-0"
                frameBorder="0"
                title="Карта проезда"
                loading="lazy" // Полезно для скорости загрузки
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}