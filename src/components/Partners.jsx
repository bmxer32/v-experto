import React from 'react';

export default function Partners() {
  const partners = [
    { 
      name: "Сбербанк", 
      logo: "https://avatars.mds.yandex.net/i?id=50a423c431118dc6eb8b2d263045acb196ba9da6-5234597-images-thumbs&n=13" 
    },
    { 
      name: "Дом.рф", 
      logo: "https://mgsu.ru/upload/iblock/45d/45d0e6473d0fd2ee429d2e0ad37ea0c9.png" 
    },
    {   
      name: "Альфа-Банк", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/Alfabank_logo.png" 
    },
    { 
      name: "Газпром", 
      logo: "https://images.seeklogo.com/logo-png/5/2/gazprom-logo-png_seeklogo-59593.png" 
    },
    { 
      name: "Росреестр", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Emblem_of_the_Federal_Service_for_State_Registration.svg/330px-Emblem_of_the_Federal_Service_for_State_Registration.svg.png" 
    },
    { 
      name: "Совкомбанк", 
      logo: "https://p0.zoon.ru/preview/zqzkELAwJCe-P7o9nPZCxA/2400x1500x75/1/9/6/original_54102eb140c0886e078d51df_63c7bce98704d4.72246386.jpg" 
    },
    { 
      name: "Металлинвестбанк", 
      logo: "https://www.ph4.ru/DL/LOGO_ICON/m/metallinvestbank.gif" 
    },
  ];

  return (
    <section className="py-10 border-y border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">
          Наши отчеты принимают
        </p>
        
        {/* Сетка логотипов */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center p-2">
              <img 
                src={partner.logo} 
                alt={partner.name} 
                // Убрал grayscale (черно-белый)
                // Добавил hover:scale-110 (увеличение) и transition-transform (плавность)
                className="h-8 md:h-12 w-auto object-contain transition-transform duration-300 hover:scale-130 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}