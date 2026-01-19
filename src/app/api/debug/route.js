import { NextResponse } from 'next/server';

// ⚠️ ВАЖНО: Мы убрали чтение переменных отсюда (сверху файла).
// Теперь будем читать их прямо ВНУТРИ функции.

export async function GET() {
  // Читаем переменные прямо в момент, когда ты открываешь страницу
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatIds = process.env.TELEGRAM_CHAT_ID;
  
  // Получаем список всех переменных, которые видит сервер (только названия)
  const allEnvKeys = Object.keys(process.env);
  
  // Ищем наши переменные в этом списке
  const hasTokenKey = allEnvKeys.includes('TELEGRAM_BOT_TOKEN');
  const hasChatIdKey = allEnvKeys.includes('TELEGRAM_CHAT_ID');

  return NextResponse.json({
    status: 'Runtime Check',
    
    // Видит ли сервер саму переменную в списке окружения?
    env_contains_TOKEN: hasTokenKey ? 'YES' : 'NO',
    env_contains_CHAT_ID: hasChatIdKey ? 'YES' : 'NO',

    // Какая длина у значения (если 0 — значит переменная пустая)
    tokenLength: token ? token.length : 0,
    chatIdsValue: chatIds ? chatIds : 'EMPTY',
    
    timestamp: new Date().toISOString()
  });
}