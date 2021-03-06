const TelegramBot = require('node-telegram-bot-api');
const chemicaltoolsbot = require('chemicaltools-bot')
const TOKEN = '621653660:AAH-j39YYtzPgkueko9kSi4xIn4xnIlP1Mk';
const options = {
    webHook: {
      port: process.env.PORT
    }
  };
const url = process.env.APP_URL || 'https://chemicaltools-telegram.herokuapp.com:443';
const bot = new TelegramBot(TOKEN, options);
bot.setWebHook(`${url}/bot${TOKEN}`);
bot.onText(/([\s\S]*)/, (msg, match) => {
    const chatId = msg.chat.id;
    const resp = chemicaltoolsbot(match[0], 'zh');
    bot.sendMessage(chatId, resp, { parse_mode:"HTML" });
});