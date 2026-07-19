import React from 'react';

export default function Trust() {
  return (
    <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4">
            <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
               <div className="relative z-10 md:flex items-center justify-between gap-10">
                  <div className="mb-8 md:mb-0">
                     <h2 className="text-3xl font-bold mb-4">Почему нам доверяют?</h2>
                     <ul className="space-y-4">
                        <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-blue-400 flex items-center justify-center text-xs">✓</div><span>Состоим в СРО оценщиков</span></li>
                        <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-blue-400 flex items-center justify-center text-xs">✓</div><span>Гражданская ответственность застрахована</span></li>
                        <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-blue-400 flex items-center justify-center text-xs">✓</div><span>Работаем по всей России (Электронная подпись)</span></li>
                     </ul>
                  </div>
                  <div className="bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur">
                     <div className="text-4xl font-bold mb-1">15+ лет</div>
                     <div className="text-blue-200 text-sm">Успешной работы</div>
                     <div className="h-px bg-white/20 my-4"></div>
                     <div className="text-4xl font-bold mb-1">10 000+</div>
                     <div className="text-blue-200 text-sm">Готовых отчетов</div>
                  </div>
               </div>
            </div>
        </div>
      </section>
  );
}