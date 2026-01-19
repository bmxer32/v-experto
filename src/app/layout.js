import { Inter } from "next/font/google";
import Script from "next/script"; // Для подключения аналитики
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://v-experto.ru"),

  // 👇 Сюда вставь код из Google Search Console (из пункта "Тег HTML"), если еще не вставил
  verification: {
    google: "ЗДЕСЬ_ТВОЙ_КОД_ИЗ_GOOGLE_HTML_TAG",
  },

  title: {
    default: "ООО «ВАШ Эксперт» | Независимая оценка в Иваново",
    template: "%s | ВАШ Эксперт",
  },

  // 👇 Обновили описание под требования заказчицы (добавили ООО)
  description:
    "Официальная оценка недвижимости, транспорта и бизнеса. ООО «ВАШ Эксперт». Отчеты для нотариуса, опеки и суда. Иваново, пр. Ленина, 34. Тел: +7 (920) 671-00-91",

  keywords: [
    "ООО ВАШ Эксперт",
    "оценка недвижимости иваново",
    "независимая экспертиза",
    "оценка для нотариуса",
    "оценка квартиры для ипотеки",
    "оценка ущерба",
  ],

  openGraph: {
    title: "ООО «ВАШ Эксперт» — Независимая оценка",
    description:
      "Официальные отчеты для нотариусов, банков и судов. Работаем по всей России.",
    url: "https://v-experto.ru",
    siteName: "ООО ВАШ Эксперт",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "ru_RU",
    type: "website",
  },

  alternates: {
    canonical: "https://v-experto.ru",
  },

  // 👇 ДОБАВЛЕНО: Иконка сайта (favicon)
  icons: {
    icon: "https://v-experto.ru/favicon.ico",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {/* Яндекс.Метрика */}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(106109339, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true
            });
          `}
        </Script>

        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/106109339"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>

        {children}
      </body>
    </html>
  );
}