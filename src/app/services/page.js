// src/app/services/page.js
'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactsSection from '@/components/ContactsSection';
import ServiceCard from '@/components/ServiceCard';
import { servicesList } from '@/data/servicesData';

export default function ServicesPage() {
  
  const [expandedId, setExpandedId] = useState(null);

  const toggleService = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const leftColumn = servicesList.filter((_, i) => i % 2 === 0);
  const rightColumn = servicesList.filter((_, i) => i % 2 !== 0);

  return (
    <main className="min-h-screen bg-white font-sans text-slate-800">
      <Header />

      <section className="pt-32 pb-12 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 blur-3xl rounded-full -z-10 translate-x-1/2"></div>
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">
              Прайс-лист 2026
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
              Услуги и стоимость <br />
              <span className="text-blue-600">независимой оценки</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl border-l-4 border-blue-200 pl-4">
              Мы работаем строго по Федеральному закону №135-ФЗ. <br className="hidden md:block" />
              Наши отчеты принимают все банки, нотариусы и суды РФ.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20 pt-8 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          
          {/* 👇 ИЗМЕНЕНИЕ: flex-col для мобильных, md:flex-row для ПК */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            
            {/* Левый столб: w-full для мобильных, md:w-1/2 для ПК */}
            <div className="w-full md:w-1/2 flex flex-col gap-8">
               {leftColumn.map(service => (
                 <ServiceCard 
                    key={service.id} 
                    service={service} 
                    isOpen={expandedId === service.id} 
                    onToggle={toggleService} 
                 />
               ))}
            </div>

            {/* Правый столб: w-full для мобильных, md:w-1/2 для ПК */}
            <div className="w-full md:w-1/2 flex flex-col gap-8">
               {rightColumn.map(service => (
                 <ServiceCard 
                    key={service.id} 
                    service={service} 
                    isOpen={expandedId === service.id} 
                    onToggle={toggleService} 
                 />
               ))}
            </div>

          </div>

        </div>
      </section>

      <ContactsSection />
      
      <Footer />
    </main>
  );
}