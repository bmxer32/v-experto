import Image from 'next/image';

export default function Logo({ className = "h-12 w-auto" }) {
  return (
    // Обертка div контролирует размер через className, который передается из Header
    <div className={`relative flex items-center justify-center ${className}`}>
      <Image 
        src="/logo.png"       // Next.js сам ищет файлы в папке public
        alt="V-Experto Logo"
        width={150}           // Укажи примерную ширину оригинала (это для пропорций)
        height={150}          // Укажи примерную высоту оригинала
        className="object-contain w-full h-full" // Картинка впишется в блок и сохранит пропорции
        priority              // Грузить мгновенно (важно для лого в шапке)
      />
    </div>
  );
}