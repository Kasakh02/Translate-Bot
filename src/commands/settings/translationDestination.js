const {
	ApplicationCommandOptionType,
	PermissionFlagsBits,
} = require('discord.js');

const { guildVariables, setGuildVariable, getGuildVariable } = require('../../settings/utils/globalVariables');

module.exports = {
	name: "change-dest",
	description: 'Changes the destination of the translations',
	deleted: false,
	permissionsRequired: [PermissionFlagsBits.Administrator],
	options: [
		{
			name: 'state',
			description: "Where to send translations to",
			type: ApplicationCommandOptionType.String,
			required: true,
			choices: [
				{
					name: 'DM',
					value: 'dm',
				},
				{
					name: 'Message in Channel',
					value: 'channel',
				},
			],
		}
	],

	callback: (client, interaction) => {
		if (interaction.options.get("state").value === 'dm') {
			setGuildVariable(interaction.guild.id, 0);
			interaction.reply("Translations will now be sent through DM!");
			setTimeout(() => {
				interaction.deleteReply();
			}, 10000);
		}
		else {
			setGuildVariable(interaction.guild.id, 1);
			interaction.reply("Translations will now be sent in through channel!");
			setTimeout(() => {
				interaction.deleteReply();
			}, 10000);
		}
	},
}