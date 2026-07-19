import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DocumentsSection from '@/components/DocumentsSection';

export const metadata = {
  title: 'О компании | ООО «ВАШ ЭКСПЕРТ»',
  description: 'Информация о компании ВАШ ЭКСПЕРТ. Наши преимущества, лицензии, сертификаты и реквизиты.',
};

export default function DocumentsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
       <Header />
       
       <main className="grow pt-12 pb-16"> 
         
         <div className="max-w-6xl mx-auto px-4 mb-8 text-sm text-slate-500">
             <Link href="/" className="hover:text-blue-600">Главная</Link>
             <span className="mx-2">/</span>
             <span className="text-slate-800">О компании</span>
         </div>

         <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">О компании</h1>
                    <p className="text-slate-500 text-lg">Профессиональная оценка с ответственностью за результат.</p>
                </div>
                <Link 
                    href="/requisites" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-700 font-semibold rounded-xl hover:border-blue-400 hover:text-blue-600 transition shadow-sm"
                >
                    <span>📋</span>
                    Смотреть реквизиты
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <div className="text-4xl mb-4">⚖️</div>
                    <h3 className="font-bold text-slate-900 mb-2">Полная законность</h3>
                    <p className="text-sm text-slate-500">
                        Работаем строго по ФЗ-135 «Об оценочной деятельности». Наши отчеты принимают все суды, нотариусы и банки РФ.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <div className="text-4xl mb-4">🛡️</div>
                    <h3 className="font-bold text-slate-900 mb-2">Ответственность</h3>
                    <p className="text-sm text-slate-500">
                        Гражданская ответственность компании и каждого оценщика застрахована на сумму более 5 000 000 рублей.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <div className="text-4xl mb-4">🚀</div>
                    <h3 className="font-bold text-slate-900 mb-2">Скорость работы</h3>
                    <p className="text-sm text-slate-500">
                        Готовим отчеты от 1 дня. Используем электронный документооборот и ЭЦП для мгновенной отправки документов.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <div className="text-4xl mb-4">🎓</div>
                    <h3 className="font-bold text-slate-900 mb-2">Квалификация</h3>
                    <p className="text-sm text-slate-500">
                        Все наши эксперты состоят в СРО, имеют квалификационные аттестаты и стаж работы более 10 лет.
                    </p>
                </div>
            </div>

         </div>

         <DocumentsSection />

         {/* 👇 ОБНОВЛЕННЫЙ БЛОК: Без синего фона, минимализм */}
         <div className="max-w-6xl mx-auto px-4 mt-20 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Готовы начать сотрудничество?
            </h3>
            <p className="text-slate-500 mb-8 max-w-2xl mx-auto text-lg">
                Свяжитесь с нами для бесплатной консультации. Мы подскажем, какие документы потребуются для оценки вашего объекта.
            </p>
            
            <Link 
              href="/#contacts" 
              className="inline-flex items-center justify-center px-10 py-4 bg-blue-600 text-white font-bold text-lg rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-600/20 hover:-translate-y-1"
            >
              Оставить заявку на оценку
            </Link>
         </div>

       </main>

       <Footer />
    </div>
  );
}