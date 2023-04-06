// Import the Grammy library
import { Bot } from "grammy";
import { Menu } from "@grammyjs/menu";

import dotenv from "dotenv";
dotenv.config();
const BOT_TOKEN = process.env.BOT_TOKEN;
const bot = new Bot(BOT_TOKEN);

// Create a simple menu.
const menu = new Menu("my-menu-identifier")
  .text("A", (ctx) => ctx.reply("You pressed A!"))
  .row()
  .text("B", (ctx) => ctx.reply("You pressed B!"));

// Make it interactive.
bot.use(menu);

bot.command("start", async (ctx) => {
  // ctx.reply(
  //   "Welcome to my bot! Send me a message, and I'll echo it back to you."
  // );
  await ctx.reply("Check out this menu:", { reply_markup: menu });
});
bot.setMyCommands;

bot.on("message", (ctx) => {
  ctx.reply(`You said: ${ctx.message.text}`);
});

bot.start();
