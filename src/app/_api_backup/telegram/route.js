import { NextResponse } from 'next/server';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

// Этот код умный: он сам найдет запятую и сделает список получателей.
// Если запятой нет — сработает как раньше для одного.
const TELEGRAM_CHAT_IDS = (process.env.TELEGRAM_CHAT_ID || '')
    .split(',')
    .map(id => id.trim())
    .filter(id => id.length > 0);

const ipCache = new Map();

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, phone, type, message: userMessage, _t, startTime } = body; 
        
        const ip = request.headers.get('x-forwarded-for') || 'unknown';

        // 1. Honey Pot
        if (_t) return NextResponse.json({ success: true }); 

        // 2. Rate Limit (Защита от частого нажатия)
        const lastRequestTime = ipCache.get(ip);
        const now = Date.now();
        if (lastRequestTime && (now - lastRequestTime) < 60000) {
            return NextResponse.json({ error: 'Подождите минуту.' }, { status: 429 });
        }
        ipCache.set(ip, now);

        // 3. Time Trap (Защита от роботов)
        if (startTime && (now - startTime < 1000)) {
            return NextResponse.json({ success: true });
        }

        // 4. Валидация
        if (!name || !phone) {
            return NextResponse.json({ error: 'Заполните поля' }, { status: 400 });
        }

        const text = `
🔥 <b>Новая заявка!</b>

👤 <b>Имя:</b> ${name.trim()}
📞 <b>Телефон:</b> ${phone.trim()}
📄 <b>Услуга:</b> ${type || 'Не указана'}
💬 <b>Сообщение:</b> ${userMessage || '-'}
⏰ <b>Время:</b> ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })}
        `;

        // 5. ОТПРАВКА (Работает для списка и для одного)
        if (!TELEGRAM_BOT_TOKEN || TELEGRAM_CHAT_IDS.length === 0) {
             console.error('Не настроены переменные окружения Vercel!');
             return NextResponse.json({ error: 'Config Error' }, { status: 500 });
        }

        const sendPromises = TELEGRAM_CHAT_IDS.map(chatId => {
            return fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: text,
                    parse_mode: 'HTML',
                }),
            });
        });

        await Promise.all(sendPromises);

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error('Server Error:', error);
        return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 });
    }
}