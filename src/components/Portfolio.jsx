'use client'; 

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const customSwiperStyles = `
  .swiper-pagination-bullet-active {
    background: #2563eb;
  }
  .swiper {
    padding-bottom: 50px !important;
    padding-top: 20px !important;
    padding-left: 10px; padding-right: 10px;
  }
  .swiper-slide {
    height: auto;
  }

  /* Стили для стрелочек */
  .swiper-button-next, .swiper-button-prev {
    background: none;
    box-shadow: none;
    border-radius: 0;
    backdrop-filter: none;
    width: auto;
    height: auto;
    margin-top: -10px;
    color: rgb(30 41 59 / 0.4); /* Полупрозрачные */
    transition: all 0.3s ease;
  }

  /* Размер иконки (галочки) */
  .swiper-button-next:after, .swiper-button-prev:after {
    font-size: 28px; 
    font-weight: bold;
  }

  /* Эффект при наведении (на ПК) */
  .swiper-button-next:hover, .swiper-button-prev:hover {
    background: none;
    color: #2563eb;
    transform: scale(1.1);
  }

  /* 👇 ИЗМЕНЕНИЕ: На мобильных делаем стрелки чуть меньше, но НЕ скрываем их */
  @media (max-width: 640px) {
    .swiper-button-next:after, .swiper-button-prev:after {
      font-size: 20px !important; /* Чуть меньше на телефоне */
    }
    /* Можно немного сдвинуть их к краям, если мешают */
    .swiper-button-next { right: 0px !important; }
    .swiper-button-prev { left: 0px !important; }
  }
`;

export default function Portfolio() {
  const cases = [
    {
      title: "Квартира для ипотеки Сбербанк",
      desc: "Оценка 2-комнатной квартиры в новостройке.",
      price: "12 500 000 ₽",
      time: "24 часа",
      tags: ["Недвижимость", "Ипотека"]
    },
    {
      title: "BMW X5 (Наследство)",
      desc: "Оценка рыночной стоимости авто для нотариуса.",
      price: "4 800 000 ₽",
      time: "1 час",
      tags: ["Авто", "Наследство"]
    },
    {
      title: "Складской комплекс",
      desc: "Оценка коммерческой недвижимости для залога в банке.",
      price: "85 000 000 ₽",
      time: "3 дня",
      tags: ["Бизнес", "Кредит"]
    },
    {
      title: "Загородный дом с участком",
      desc: "Оценка жилого дома для раздела имущества при разводе.",
      price: "22 000 000 ₽",
      time: "2 дня",
      tags: ["Недвижимость", "Суд"]
    },
    {
      title: "Ущерб от залива квартиры",
      desc: "Оценка стоимости восстановительного ремонта для суда.",
      price: "Ущерб: 450 000 ₽",
      time: "1 день",
      tags: ["Ущерб", "Суд"]
    },
    {
      title: "Парк спецтехники (5 ед.)",
      desc: "Оценка экскаваторов и бульдозеров для продажи компании.",
      price: "32 000 000 ₽",
      time: "2 дня",
      tags: ["Спецтехника", "Бизнес"]
    }
  ];

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200 overflow-hidden">
      <style>{customSwiperStyles}</style>
      
      <div className="max-w-7xl mx-auto px-4 relative group"> 
        
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Выполненные оценки</h2>
          <p className="text-slate-500">Листайте примеры наших последних отчетов</p>
        </div>

        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="portfolio-slider !pb-14"
        >
          {cases.map((item, index) => (
            <SwiperSlide key={index}>
              <div 
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-xl hover:border-blue-300 cursor-grab h-full flex flex-col"
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-md uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                
                <p className="text-slate-500 text-sm mb-6 grow">{item.desc}</p>
                
                <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-auto">
                  <div>
                      <div className="text-xs text-slate-400">Оценка</div>
                      <div className="font-bold text-slate-900 text-sm md:text-base">{item.price}</div>
                  </div>
                  <div className="text-right">
                      <div className="text-xs text-slate-400">Срок</div>
                      <div className="font-bold text-slate-900">{item.time}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}