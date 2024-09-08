require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const token = '7422232451:AAFF_SLjeeSyhucfNay9zXB-0b33n6F5aoI';

const bot = new TelegramBot('7422232451:AAFF_SLjeeSyhucfNay9zXB-0b33n6F5aoI', {polling: true});
bot.on('message', (msg) => {
    bot.sendMessage(msg.chat.id, 'Received your message');
  });


module.exports= bot;