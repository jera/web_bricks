import { Client, ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';
import ping from './ping';


export interface ISlashCommand {
  command: SlashCommandBuilder | Omit<SlashCommandBuilder, "addSubcommand" | "addSubcommandGroup">;
  execute: (interaction: ChatInputCommandInteraction, client: Client) => Promise<unknown>;
  name: string
}

export interface ISlashCommands {
  [key: string]: ISlashCommand;
}

export const slashCommands: ISlashCommands = {
  [ping.name]: ping,
}
