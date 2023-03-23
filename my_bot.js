// Import the Grammy library
import { Bot } from "grammy";
import dotenv from "dotenv";
// Replace YOUR_BOT_TOKEN with the token you got from BotFather
dotenv.config();
const BOT_TOKEN = process.env.BOT_TOKEN;
const bot = new Bot(BOT_TOKEN);
// Add a command handler for the /start command
bot.command("start", (ctx) => {
  ctx.reply(
    "Welcome to my bot! Send me a message, and I'll echo it back to you."
  );
});

// Add a message handler
bot.on("message", (ctx) => {
  ctx.reply(`You said: ${ctx.message.text}`);
});

// Start the bot
bot.start();
