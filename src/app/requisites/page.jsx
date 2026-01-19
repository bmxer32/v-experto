'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RequisitesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-800">
      <Header />

      <main className="grow py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Кнопка "Назад" */}
          <div className="mb-6">
            <Link 
              href="/" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Вернуться на главную
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 p-8 md:p-12">
            
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
              Реквизиты компании
            </h1>

            {/* Таблица с данными */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-600">
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50">
                    <td className="py-4 pr-4 font-semibold text-slate-900 w-1/3 align-top">Полное название</td>
                    <td className="py-4 pl-4">ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "ВАШ ЭКСПЕРТ"</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-4 pr-4 font-semibold text-slate-900 align-top">Юридический адрес</td>
                    <td className="py-4 pl-4">153037, РОССИЯ, ИВАНОВСКАЯ ОБЛАСТЬ, Г. ИВАНОВО, ПР-КТ ШЕРЕМЕТЕВСКИЙ, Д. 57, ПОМЕЩ. 1004</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-4 pr-4 font-semibold text-slate-900">ИНН</td>
                    <td className="py-4 pl-4">3702199872</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-4 pr-4 font-semibold text-slate-900">КПП</td>
                    <td className="py-4 pl-4">370201001</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-4 pr-4 font-semibold text-slate-900">ОГРН</td>
                    <td className="py-4 pl-4">1183702010216</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-4 pr-4 font-semibold text-slate-900">Расчетный счет</td>
                    <td className="py-4 pl-4">40702810510001623529</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-4 pr-4 font-semibold text-slate-900">Банк</td>
                    <td className="py-4 pl-4">АО «ТБанк»</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-4 pr-4 font-semibold text-slate-900">БИК банка</td>
                    <td className="py-4 pl-4">044525974</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-4 pr-4 font-semibold text-slate-900">Корр. счет банка</td>
                    <td className="py-4 pl-4">30101810145250000974</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-4 pr-4 font-semibold text-slate-900 align-top">Юр. адрес банка</td>
                    <td className="py-4 pl-4">127287, г. Москва, ул. Хуторская 2-я, д. 38А, стр. 26</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200">
               <p className="text-slate-500 mb-2">
                 <span className="font-semibold text-slate-900">Фактический адрес офиса:</span><br/>
                 г. Иваново, Проспект Ленина, 34 (ТЦ "Holiday центр")
               </p>
               <p className="text-slate-500">
                 <span className="font-semibold text-slate-900">Телефон:</span> +7 (920) 671-00-91
               </p>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}