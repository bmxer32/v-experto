'use client';
import { useState } from 'react';

export default function Faq() {
  // Список вопросов. Потом поменяешь тексты.
  const questions = [
    {
      q: "Сколько времени занимает оценка?",
      a: "Обычно мы готовим отчет за 1-2 рабочих дня. Если нужно срочно — сделаем за 60 минут (услуга экспресс-оценки)."
    },
    {
      q: "Какие документы нужны?",
      a: "Паспорт заказчика и документы на объект (ПТС/СТС для авто, выписка ЕГРН для квартиры). Можно прислать фото в WhatsApp."
    },
    {
      q: "Подойдет ли отчет для нотариуса в другом городе?",
      a: "Да. Наши отчеты подписаны усиленной электронной подписью (ЭЦП). Нотариусы по всей России обязаны их принимать по закону."
    },
    {
      q: "Как оплатить услугу?",
      a: "Можно оплатить картой, переводом или по счету для юрлиц. Работаем официально, выдаем чек."
    }
  ];

  // Какой вопрос сейчас открыт? (null = никакой)
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 bg-white border-y border-slate-200">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-slate-900">Частые вопросы</h2>
        
        <div className="space-y-4">
          {questions.map((item, index) => (
            <div key={index} className="border border-slate-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left bg-slate-50 hover:bg-slate-100 transition"
              >
                <span className="font-bold text-slate-800">{item.q}</span>
                {/* Стрелочка, которая крутится */}
                <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              
              {/* Выпадающий текст */}
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-5 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50">
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}