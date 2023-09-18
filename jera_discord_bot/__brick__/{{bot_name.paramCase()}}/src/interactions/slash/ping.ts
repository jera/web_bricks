import { ChatInputCommandInteraction, Client, SlashCommandBuilder } from "discord.js";
const name = 'ping';
const command = new SlashCommandBuilder()
  .setName(name)
  .setDescription('Responder com pong!!')
  
  const execute = async (interaction: ChatInputCommandInteraction, client: Client) => { 
    await interaction.reply('Pong!');
  }
  export default {
    name,
    command,
    execute,
  };
  