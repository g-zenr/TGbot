const TelegramBot = require("node-telegram-bot-api");

const token = "7157175853:AAGaQ7Ddcnt2Ih1Y4W4aHtZi3Pf1AxHAteA";

const bot = new TelegramBot(token, { polling: true });

let users = {};

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  if (!users[chatId]) {
    users[chatId] = { balance: 1000 };
  }
  bot.sendMessage(
    chatId,
    "Here are the available games:\n" +
      "/dice - Dice Roll Game\n" +
      "/roulette - Roulette Game\n" +
      "/blackjack - Blackjack Game\n" +
      "/slotmachine - Slot Machine Game\n" +
      "/poker - Poker Game\n" +
      "/wheeloffortune - Wheel of Fortune Game\n" +
      "/bingo - Bingo Game\n" +
      "/scratchcard - Scratch Card Game\n" +
      "/craps - Craps Game\n" +
      "/baccarat - Baccarat Game\n" +
      "/rps - Rock, Paper, Scissors Game\n" +
      "/coinflip - Coin Flip Game\n" +
      "/higherlower - Higher or Lower Game\n" +
      "/numberguess - Number Guessing Game\n" +
      "/wordassoc - Word Association Game\n" +
      "/help - Show available commands"
  );
});

bot.onText(/\/balance/, (msg) => {
  const chatId = msg.chat.id;
  if (!users[chatId]) {
    users[chatId] = { balance: 1000 };
  }
  bot.sendMessage(
    chatId,
    `Your current balance is: ${users[chatId].balance} credits.`
  );
});

bot.onText(/\/balance/, (msg) => {
  const chatId = msg.chat.id;
  if (!users[chatId]) {
    users[chatId] = { balance: 1000 };
  }
  bot.sendMessage(
    chatId,
    `Your current balance is: ${users[chatId].balance} credits.`
  );
});

bot.onText(/\/dice/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    "Welcome to the Dice Roll Game! Choose a number between 1 and 6 to bet on."
  );
});

bot.onText(/\/roulette/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    "Welcome to the Roulette Game! Choose your bet and place it on the table."
  );
});

bot.onText(/\/blackjack/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    "Welcome to the Blackjack Game! Place your bets and try to beat the bot's hand without going over 21."
  );
});

bot.onText(/\/slotmachine/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    "Welcome to the Slot Machine Game! Pull the lever and try your luck to match symbols and win credits."
  );
});

bot.onText(/\/poker/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    "Welcome to the Poker Game! Place your bets, raise, and bluff to win against other players or the bot."
  );
});

bot.onText(/\/wheeloffortune/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    "Welcome to the Wheel of Fortune Game! Spin the wheel and win prizes."
  );
});

bot.onText(/\/bingo/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    "Welcome to the Bingo Game! Buy cards and win prizes for completing lines or full cards."
  );
});
bot.onText(/\/scratchcard/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    "Welcome to the Scratch Card Game! Scratch virtual cards and win prizes."
  );
});

bot.onText(/\/craps/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    "Welcome to the Craps Game! Place your bets and roll the dice."
  );
});

bot.onText(/\/baccarat/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    "Welcome to the Baccarat Game! Bet on the outcome of a two-card hand."
  );
});

bot.onText(/\/rps/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    "Welcome to Rock, Paper, Scissors Game! Choose your move: Rock, Paper, or Scissors."
  );
});

bot.onText(/\/coinflip/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "Welcome to Coin Flip Game! Choose heads or tails.");
});

bot.onText(/\/higherlower/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    "Welcome to Higher or Lower Game! Try to guess if the next number is higher or lower than the current one."
  );
});

bot.onText(/\/numberguess/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    "Welcome to Number Guessing Game! Try to guess the secret number."
  );
});

bot.onText(/\/wordassoc/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    "Welcome to Word Association Game! Start with a word and see where it leads."
  );
});

bot.onText(/\/help/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    "Commands:\n" +
      "/start - Start the game and get initial credits.\n" +
      "/balance - Check your current balance.\n" +
      "/bet <amount> <high/low> - Place a bet.\n" +
      "/help - Show this help message."
  );
});
