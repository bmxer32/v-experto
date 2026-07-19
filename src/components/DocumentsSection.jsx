'use client';
import { useState } from 'react';
import Image from 'next/image';

// Полный список документов
const DOCUMENTS = [
  // --- 1. КВАЛИФИКАЦИОННЫЕ АТТЕСТАТЫ (Самое важное) ---
  { id: 1, src: '/documents/attestat-nedv-novikova.jpg', alt: 'Аттестат: Недвижимость (Новикова Н.Н.)' },
  { id: 2, src: '/documents/attestat-nedv-shmeleva.jpg', alt: 'Аттестат: Недвижимость (Шмелева И.Н.)' },
  { id: 3, src: '/documents/attestat-nedv-mogilskaya.jpg', alt: 'Аттестат: Недвижимость (Могильская О.В.)' },
  { id: 4, src: '/documents/attestat-dvizh-shmeleva.jpg', alt: 'Аттестат: Движимое имущество (Шмелева И.Н.)' },
  { id: 5, src: '/documents/attestat-dvizh-mogilskaya.jpg', alt: 'Аттестат: Движимое имущество (Могильская О.В.)' },

  // --- 2. ЧЛЕНСТВО В СРО ---
  { id: 6, src: '/documents/sro-roo-novikova.jpg', alt: 'Членство в СРО РОО (Новикова Н.Н.)' },
  { id: 7, src: '/documents/sro-svod-mogilskaya.jpg', alt: 'Членство в СРО СВОД (Могильская О.В.)' },

  // --- 3. ВЫСШЕЕ ОБРАЗОВАНИЕ (Новые документы) ---
  { id: 11, src: '/documents/diploma-magister-novikova.jpg', alt: 'Диплом Магистра: Экономика (Новикова Н.Н.)' },
  { id: 12, src: '/documents/diploma-magister-shmeleva.jpg', alt: 'Диплом Магистра: Экономика (Шмелева И.Н.)' },
  { id: 13, src: '/documents/diploma-prof-shmeleva.jpg', alt: 'Диплом: Экспертиза и управление (Шмелева И.Н.)' },
  { id: 14, src: '/documents/diploma-vuz-novikova.jpg', alt: 'Диплом: Экономист-менеджер (Новикова Н.Н.)' },
  { id: 15, src: '/documents/diploma-vuz-mogilskaya.jpg', alt: 'Диплом: Экономист-менеджер (Могильская О.В.)' },

  // --- 4. ПОВЫШЕНИЕ КВАЛИФИКАЦИИ ---
  { id: 8, src: '/documents/diploma-maok-shmeleva.jpg', alt: 'Удостоверение МАОК (Шмелева И.Н.)' },
  { id: 9, src: '/documents/diploma-ightu-novikova.jpg', alt: 'Повышение квалификации (Новикова Н.Н.)' },
  { id: 10, src: '/documents/cert-roo-novikova.jpg', alt: 'Сертификат РОО (Новикова Н.Н.)' },
];

export default function DocumentsSection() {
  const [selectedDoc, setSelectedDoc] = useState(null);

  return (
    <section id="documents" className="py-8">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Сетка документов */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {DOCUMENTS.map((doc) => (
            <div 
              key={doc.id} 
              className="group relative cursor-pointer aspect-[3/4] bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100"
              onClick={() => setSelectedDoc(doc)}
            >
              {/* Картинка (Превью) */}
              <div className="relative w-full h-full">
                 <Image 
                   src={doc.src} 
                   alt={doc.alt}
                   fill
                   className="object-cover object-top"
                 />
                 <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-300" />
              </div>

              {/* Иконка глаза */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/90 backdrop-blur rounded-full p-3 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                  </svg>
                </div>
              </div>
              
              {/* Подпись снизу */}
              <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm py-3 px-2 border-t border-slate-100 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-xs font-bold text-center text-slate-700 truncate">
                    {doc.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* МОДАЛЬНОЕ ОКНО (Просмотр) */}
      {selectedDoc && (
        <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setSelectedDoc(null)}
        >
            <button className="absolute top-6 right-6 text-white/70 hover:text-white transition p-2 z-[101]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <div 
                className="relative max-w-5xl w-full h-[90vh] rounded-lg overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                 <Image 
                   src={selectedDoc.src} 
                   alt={selectedDoc.alt}
                   fill
                   className="object-contain bg-transparent"
                   quality={100}
                 />
            </div>
        </div>
      )}
    </section>
  );
}