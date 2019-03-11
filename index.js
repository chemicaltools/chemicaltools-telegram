const TelegramBot = require('node-telegram-bot-api');
const chemicaltoolsbot = require('chemicaltools-bot')
const TOKEN = '621653660:AAH-j39YYtzPgkueko9kSi4xIn4xnIlP1Mk';
const bot = new TelegramBot(TOKEN, { polling: true });
bot.onText(/(.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const resp = chemicaltoolsbot(match[0]);
    bot.sendMessage(chatId, resp);
});