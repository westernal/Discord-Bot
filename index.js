const { Client, Events, GatewayIntentBits } = require("discord.js");
const { token } = require("./config.json");
var cron = require("cron");

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, async (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
  fridayStarted.start();
  fridayEnded.start();
});

client.login(token);

let fridayStarted = new cron.CronJob("00 00 00 * * 5", async () => {
  const channel = await client.channels.fetch("698931252262207591");
  channel.send("Baz jome shod MADARJENDEHA!");
});

const salam = async () => {
  const channel = await client.channels.fetch("698931252262207591");
  channel.send("My Message");
  console.log("salam");
};

let fridayEnded = new cron.CronJob("59 59 23 * * 5", async () => {
  const channel = await client.channels.fetch("698931252262207591");
  channel.send("Ta hafteye baad MADARJENDEHA!");
});
