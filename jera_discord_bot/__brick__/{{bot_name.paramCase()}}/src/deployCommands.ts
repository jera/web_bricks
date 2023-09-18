import { REST, Routes } from 'discord.js';
import { slashCommands } from './interactions/slash';
import dotenv from 'dotenv';

dotenv.config();

const token = process.env.BOT_TOKEN!;
const clientId = process.env.CLIENT_ID!

const rest = new REST({ version: '10' }).setToken(token);

(async () => {
	try {
		console.log(`Started refreshing ${slashCommands.length} application (/) commands.`);

    const commandsArray = Object.values(slashCommands).map((command) => command.command!.toJSON())
		console.log(commandsArray)

		await rest.put(Routes.applicationCommands(clientId), { body: [] })
		console.log('Successfully deleted all application commands.')

		const data = await rest.put(
			Routes.applicationCommands(clientId),
			{ body: commandsArray },
		);
	} catch (error) {
		console.error(error);
	}
})();
