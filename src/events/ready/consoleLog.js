const { guildVariables, addGuildVariable } = require("../../settings/utils/globalVariables");

const {
	ActivityType
} = require('discord.js');

module.exports = (client) => {
	console.log(`✅ ${client.user.tag} is online!`);
	client.user.setActivity({
		name: "Kasakh Tests",
		type: ActivityType.Playing
	});

	// Loop through all the guilds the bot is in
  client.guilds.cache.forEach(guild => {
    // Get the guild ID
    const guildId = guild.id;

    // Check if the guild already has a variable
    if (!guildVariables.hasOwnProperty(guildId)) {
      // If not, add a new variable with the default value
      addGuildVariable(guildId, 0);
    }
	});
}