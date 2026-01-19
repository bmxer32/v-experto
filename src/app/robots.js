// 👇 ЭТА СТРОКА РЕШАЕТ ПРОБЛЕМУ
export const dynamic = 'force-static';

export default function robots() {
  return {
    rules: {
      userAgent: '*', 
      allow: '/',     
    },
    sitemap: 'https://v-experto.ru/sitemap.xml',
  }
}