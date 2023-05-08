const { getGuildVariable } = require('../../settings/utils/globalVariables');
const { translateDM } = require("../../settings/destination/translateDM")
const { translateChannel } = require("../../settings/destination/translateChannel");

module.exports = (client, reaction, user) => {
	if (getGuildVariable(reaction.message.guild.id) == 0) return translateDM(client, reaction, user);
	else if (getGuildVariable(reaction.message.guild.id) == 1) return translateChannel(client, reaction, user);
}