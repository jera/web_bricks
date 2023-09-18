import { Client, Events, GatewayIntentBits, SlashCommandBuilder } from "discord.js";
import { slashCommands } from './interactions/slash';
import dotenv from 'dotenv';

dotenv.config()
const token = process.env.BOT_TOKEN!;
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.MessageContent, GatewayIntentBits.DirectMessages] });

client.once(Events.ClientReady, async (client: Client<true>) => {
  console.log(`Pronto! Bot ${client.user.tag} ta online!`);
});

client.on(Events.InteractionCreate, async (interaction:any) => {
  if (interaction.isChatInputCommand()) {
    const command = slashCommands[interaction.commandName];
    if (command) command.execute(interaction, client);
  }
});

client.login(token);