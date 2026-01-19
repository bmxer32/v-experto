// src/components/ServiceCard.jsx
import React from 'react';

const ServiceCard = ({ service, isOpen, onToggle, hideButton = false }) => {
  return (
    <div 
      className={`
        flex flex-col w-full h-fit
        bg-white rounded-2xl shadow-sm border transition-all duration-500 ease-out will-change-transform
        ${isOpen ? 'border-blue-500 shadow-xl' : 'border-slate-200 hover:border-blue-300'}
        /* Отступы */
        p-6 md:p-8
      `}
    >
      <div className="flex-1">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-3xl transition-colors duration-300 ${isOpen ? 'bg-blue-600 text-white' : 'bg-slate-50 text-slate-900'}`}>
              {service.icon}
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 leading-tight max-w-200px">{service.title}</h2>
              <div className="text-blue-600 font-bold mt-1 bg-blue-50 inline-block px-2 py-0.5 rounded text-sm">{service.price}</div>
            </div>
          </div>
        </div>

        <p className="text-slate-500 mb-6 text-sm leading-relaxed">{service.desc}</p>

        <div className="mb-6 bg-slate-50 p-5 rounded-xl border border-slate-100">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Объекты оценки:</h3>
          <ul className="space-y-2">
            {service.items.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>{item}
              </li>
            ))}
          </ul>
        </div>

        {/* Анимация раскрытия (Показываем ТОЛЬКО если кнопка не скрыта) */}
        {!hideButton && (
          <div 
             className={`
               grid transition-[grid-template-rows] duration-500 ease-in-out
               ${isOpen ? 'grid-rows-[1fr] opacity-100 mb-6' : 'grid-rows-[0fr] opacity-0'}
             `}
          >
              <div className="overflow-hidden min-h-0">
                  <div className={`transition-all duration-500 ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
                      <div className="pt-4 border-t border-slate-100">
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Подробности услуги:</h3>
                        <p className="text-sm text-slate-600 mb-4 leading-relaxed bg-blue-50/50 p-3 rounded-lg border border-blue-100">{service.details}</p>
                        <div>
                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Документы:</h3>
                            <p className="text-xs text-slate-500 italic">{service.docs}</p>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
        )}
      </div>

      {/* Кнопка "Подробнее" - скрываем, если передали hideButton */}
      {!hideButton && (
        <div className="mt-auto">
            <button 
              onClick={() => onToggle(service.id)}
              className={`w-full py-3 border font-bold rounded-xl transition-all duration-300 active:scale-95 ${isOpen ? 'bg-slate-100 text-slate-600 border-slate-200' : 'border-blue-600 text-blue-600 hover:bg-blue-50'}`}
            >
              {isOpen ? 'Свернуть' : 'Подробнее'}
            </button>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;