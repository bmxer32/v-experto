import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4 text-center">
      <h1 className="text-9xl font-extrabold text-blue-600 opacity-20 select-none">
        404
      </h1>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
          Страница не найдена
        </h2>
        <p className="text-slate-600 mb-8 max-w-md">
          Возможно, она была удалена или вы ввели неверный адрес. 
          Но наш оценщик готов выехать к вам даже сюда! (Шутка)
        </p>
        <Link 
          href="/" 
          className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-600/20"
        >
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
}