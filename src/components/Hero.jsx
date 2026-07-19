'use client'; 
import { useState, useEffect } from 'react';
import Link from 'next/link'; // 👈 Добавил импорт ссылки

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  // 👇 Запоминаем время загрузки страницы
  const [startTime, setStartTime] = useState(0);

  useEffect(() => {
    setStartTime(Date.now());
  }, []);
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    _t: '' 
  });

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ name: '', phone: '', _t: '' });
    }, 300);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const btn = e.target.querySelector('button');
    const originalText = btn.innerText;
    btn.disabled = true;
    btn.innerText = 'Отправка...';

    // Добавляем текущее время (startTime) в отправку
    const dataToSend = {
        ...formData,
        startTime: startTime
    };

    try {
      const res = await fetch('/api/telegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSend),
      });

      const result = await res.json();

      if (res.ok) {
        setIsSuccess(true);
        setFormData({ name: '', phone: '', _t: '' });
      } else {
        alert(result.error || 'Ошибка при отправке.');
      }
    } catch (error) {
      console.error('Ошибка:', error);
      alert('Произошла ошибка сети.');
    } finally {
      if (btn) {
          btn.disabled = false;
          btn.innerText = originalText;
      }
    }
  };

  // Компонент успешной отправки
  const SuccessMessage = ({ onClose }) => (
    <div className="flex flex-col items-center justify-center text-center h-full py-10 animate-in fade-in zoom-in duration-300">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 className="text-2xl font-bold text-slate-800 mb-2">Заявка принята!</h3>
      <p className="text-slate-500 mb-8 max-w-xs mx-auto">
        Спасибо, <span className="text-slate-800 font-semibold">{formData.name || 'мы'}</span> получили ваши контакты. Перезвоним в течение 15 минут.
      </p>
      {onClose && (
        <button onClick={onClose} className="px-8 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-lg transition">
          Отлично
        </button>
      )}
    </div>
  );

  return (
    <section className="pt-32 pb-20 px-4 bg-linear-to-br from-slate-900 to-blue-900 text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto md:flex items-center gap-12 relative z-10">
        
        {/* Текст слева */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <div className="inline-block px-3 py-1 bg-blue-500/20 text-blue-200 text-sm font-semibold rounded-full mb-6 border border-blue-500/30">
            🚀 Оценка за 60 минут без визита в офис
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Независимая оценка <br/>
            <span className="text-blue-400">для нотариуса и суда</span>
          </h1>
          <p className="text-lg text-slate-300 mb-8 max-w-md">
            Официальные отчеты для вступления в наследство, ипотеки и опеки. Принимаем заявки 24/7. Электронная подпись.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => { setIsSuccess(false); setIsModalOpen(true); }}
              className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg shadow-lg shadow-orange-500/30 transition transform hover:-translate-y-0.5"
            >
              Заказать услугу
            </button>
            <a href="https://t.me/ms_shmelik" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg backdrop-blur border border-white/20 transition text-center flex items-center justify-center">
              Написать в Telegram
            </a>
          </div>
        </div>
        
        {/* Форма справа (Десктоп) */}
        <div className="md:w-1/2 relative hidden md:block">
           <div className="bg-white rounded-2xl p-6 shadow-2xl text-slate-800 max-w-md mx-auto relative z-10 min-h-[400px] flex flex-col justify-center">
             {isSuccess ? (
               <SuccessMessage />
             ) : (
               <form onSubmit={handleSubmit}>
                 <div className="flex items-center gap-4 mb-6 border-b pb-4 border-slate-100">
                     <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">📑</div>
                     <div>
                        <h3 className="font-bold text-lg">Нужна оценка?</h3>
                        <p className="text-sm text-slate-500">Заполните форму за 1 минуту</p>
                     </div>
                 </div>
                 <div className="space-y-4">
                     <input type="text" name="_t" value={formData._t} onChange={handleChange} className="hidden" autoComplete="off" />
                     <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Ваше имя" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                     <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Телефон" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                     
                     {/* 👇 ГАЛОЧКА СОГЛАСИЯ (ДЕСКТОП) */}
                     <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input id="privacy-hero" type="checkbox" required className="w-4 h-4 border border-slate-300 rounded bg-slate-50 focus:ring-3 focus:ring-blue-300 text-blue-600 cursor-pointer" />
                        </div>
                        <label htmlFor="privacy-hero" className="ml-2 text-xs text-slate-500">
                          Я соглашаюсь с <Link href="/policy" className="text-blue-600 hover:underline">политикой обработки данных</Link>
                        </label>
                     </div>

                     <button type="submit" className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition">
                       Получить консультацию
                     </button>
                 </div>
               </form>
             )}
           </div>
           <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Модальное окно */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={handleCloseModal}>
          <div className="bg-white text-slate-900 rounded-2xl p-8 max-w-md w-full shadow-2xl relative" onClick={e => e.stopPropagation()}>
            <button onClick={handleCloseModal} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-xl z-10">✕</button>
            {isSuccess ? (
               <SuccessMessage onClose={handleCloseModal} />
            ) : (
               <>
                <h3 className="text-2xl font-bold mb-2">Заказать услугу</h3>
                <p className="text-slate-500 mb-6">Оставьте контакты, мы перезвоним через 5 минут.</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                   <input type="text" name="_t" value={formData._t} onChange={handleChange} className="hidden" autoComplete="off" />
                   <input type="text" name="name" value={formData.name} placeholder="Ваше имя" onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                   <input type="tel" name="phone" value={formData.phone} placeholder="Телефон" onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                   
                   {/* 👇 ГАЛОЧКА СОГЛАСИЯ (МОДАЛЬНОЕ ОКНО) */}
                   <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="privacy-modal" type="checkbox" required className="w-4 h-4 border border-slate-300 rounded bg-slate-50 focus:ring-3 focus:ring-blue-300 text-blue-600 cursor-pointer" />
                      </div>
                      <label htmlFor="privacy-modal" className="ml-2 text-xs text-slate-500">
                        Я соглашаюсь с <Link href="/policy" className="text-blue-600 hover:underline">политикой обработки данных</Link>
                      </label>
                   </div>

                   <button type="submit" className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition shadow-lg shadow-orange-500/30">
                     Отправить заявку
                   </button>
                </form>
               </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}