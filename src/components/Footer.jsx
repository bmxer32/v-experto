import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Верхняя часть подвала (Сетки) */}
        {/* 👇 Изменили grid-cols-4 на grid-cols-3, так как убрали одну колонку */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* 1. Логотип и инфо */}
          <div className="col-span-1">
            <Link href="/" className="text-2xl font-black text-white tracking-tighter mb-4 block">
              ООО «ВАШ Эксперт»
            </Link>
            <p className="text-sm text-slate-400 mb-4">
              Независимая оценка собственности для нотариусов, банков и судов по всей России.
            </p>
          </div>

          {/* 2. Навигация (Компания) */}
          <div>
            <h4 className="text-white font-bold mb-4">Компания</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services#nedvizhimost" className="hover:text-white transition">Услуги</Link></li>
              {/* 👇 Добавили Реквизиты, убрали Оферту */}
              <li><Link href="/requisites" className="hover:text-white transition">Реквизиты</Link></li>
              <li><Link href="/#contacts" className="hover:text-white transition">Контакты</Link></li>
            </ul>
          </div>

          {/* 3. Связь (Колонку "Документы" полностью убрали) */}
          <div>
            <h4 className="text-white font-bold mb-4">Связь</h4>
            <ul className="space-y-2 text-sm">
              <li>г. Иваново, пр. Ленина, 34</li>
              <li><a href="tel:+79206710091" className="hover:text-white transition">+7 (920) 671-00-91</a></li>
              <li><a href="mailto:v-expert@list.ru" className="hover:text-white transition">v-expert@list.ru</a></li>
            </ul>
          </div>
        </div>

        {/* Нижняя полоса */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          
          <div className="flex flex-col md:flex-row gap-4 items-center text-center md:text-left">
            <span>© {currentYear} ООО «ВАШ Эксперт». Все права защищены.</span>
            
            {/* 👇 Политика конфиденциальности теперь здесь */}
            <Link href="/policy" className="hover:text-slate-300 transition underline">
              Политика конфиденциальности
            </Link>
          </div>

          {/* Разработчики */}
          <div className="flex items-center gap-1">
            <span>Сайт делали:</span>
            <a href="https://t.me/Bmxer32" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition font-medium">@Bmxer32</a>,
            <a href="https://t.me/cheliklol" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition font-medium"> @cheliklol</a>
          </div>

        </div>
      </div>
    </footer>
  );
}