const { Client, Intents } = require("discord.js");
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  ],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// client.on("interactionCreate", async (interaction) => {
//   if (!interaction.isCommand()) return;

//   const { commandName } = interaction;

//   if (commandName === "ping") {
//     await interaction.reply("Pong!");
//   } else if (commandName === "beep") {
//     await interaction.reply("Boop!");
//   } else if (commandName === "server") {
//     await interaction.reply(`This server's name is: ${interaction.guild.name}`);
//   } else if (commandName === "user-info") {
//     await interaction.reply(
//       `Your username: ${interaction.user.username}\nYour ID: ${interaction.user.id}`
//     );
//   }
// });

client.on("messageCreate", (message) => {
  if (message.content.toLowerCase().includes("buenos")) {
    message.react('🤖')
    .then(console.log)
    .catch(console.error);
    message.channel.send(`Hola ${message.author}`);
    message.channel.send(`Como estas?`);
  }
  if (message.content.toLowerCase().includes("perfil")) {
    const user = message.author;

    return message.channel.send(
      `${user.username}: ${user.displayAvatarURL({ dynamic: true })}`
    );
  } else {
    message.react('😛')
    .then(console.log)
    .catch(console.error);
  }
});

client.login("ODc1OTQyMjQxNzE2MjczMTUy.YRc2yA.B7DzEJ3tfnOCy63Mf9bkY41AeSE");
