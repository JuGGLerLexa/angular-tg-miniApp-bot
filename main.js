import { Telegraf, Markup } from "telegraf";

const token = "6924398275:AAGHIh86fdgQEll_B6WAiK20NLA5jvz1wA8";
const webAppUrl = "https://google.com";

const bot = new Telegraf(token);

bot.command("start", (ctx) => {
  ctx.reply(
    "Ласкаво просимо! Нажміть на кнопку нижче, щоб запустити застосунок",
    Markup.keyboard([
      Markup.button.webApp("Відправити повідомлення", webAppUrl),
    ])
  );
});

bot.launch();
