const TelegramBot = require('node-telegram-bot-api');
const chemicaltoolsbot = require('chemicaltools-bot')
const express = require('express');
const bodyParser = require('body-parser');
const TOKEN = '621653660:AAH-j39YYtzPgkueko9kSi4xIn4xnIlP1Mk';
const url = 'chemicaltoolstelegram.njzjz.win';
const bot = new TelegramBot(TOKEN);
bot.setWebHook(`${url}/bot${TOKEN}`);
bot.onText(/(.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = chemicaltoolsbot(match[0]); 
  bot.sendMessage(chatId, resp);
});
const app = express();
app.use(bodyParser.json());
app.post(`/bot${TOKEN}`, (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});
module.exports = app