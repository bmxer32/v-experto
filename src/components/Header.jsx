'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          
          {/* Логотип */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-12 h-12 shrink-0">
               <Image 
                 src="/logo.png"
                 alt="Логотип V-Experto"
                 fill
                 className="object-contain"
                 priority
               />
            </div>

            <div className="flex flex-col justify-center">
                <span className="font-bold text-lg sm:text-xl text-slate-900 tracking-tight leading-none">
                  ВАШ Эксперт
                </span>
                <span className="text-[10px] sm:text-xs text-slate-500 font-medium leading-tight">
                  Независимая оценка имущества
                </span>
            </div>
          </Link>
        
          {/* Десктопное меню */}
          <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <Link href="/" className="hover:text-blue-600 transition">Главная</Link>
            {/* 👇 ПЕРЕИМЕНОВАЛИ: Было "Документы", стало "О компании" */}
            <Link href="/documents" className="hover:text-blue-600 transition">О компании</Link>
            <Link href="/services" className="hover:text-blue-600 transition">Услуги</Link>
            <Link href="/#contacts" className="hover:text-blue-600 transition">Контакты</Link>
          </nav>

          {/* Телефон */}
          <div className="hidden sm:flex flex-col items-end">
            <a href="tel:+79206710091" className="text-blue-600 font-bold text-lg leading-none hover:text-blue-700">
              +7 (920) 671-00-91
            </a>
            <span className="text-xs text-slate-400">Работаем по всей РФ</span>
          </div>

          {/* Бургер кнопка */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition"
            aria-label="Меню"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-200 shadow-xl animate-in slide-in-from-top-5 duration-200">
           <div className="flex flex-col p-4 space-y-4 font-medium text-lg text-slate-700">
              <Link href="/" onClick={() => setIsOpen(false)} className="p-2 hover:bg-slate-50 rounded-lg">Главная</Link>
              {/* 👇 Тоже переименовали */}
              <Link href="/documents" onClick={() => setIsOpen(false)} className="p-2 hover:bg-slate-50 rounded-lg">О компании</Link>
              <Link href="/services" onClick={() => setIsOpen(false)} className="p-2 hover:bg-slate-50 rounded-lg">Услуги</Link>
              <Link href="/#contacts" onClick={() => setIsOpen(false)} className="p-2 hover:bg-slate-50 rounded-lg">Контакты</Link>
              
              <div className="h-px bg-slate-100 my-2"></div>
              
              <a href="tel:+79206710091" className="flex items-center gap-3 p-2 text-blue-600 font-bold">
                  <span>📞</span> +7 (920) 671-00-91
              </a>
           </div>
        </div>
      )}
    </header>
  );
}