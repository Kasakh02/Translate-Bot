const guildVariables = {};

// Function to set a variable for a guild
function setGuildVariable(guildId, variableValue) {
  guildVariables[guildId] = variableValue;
}

// Function to get the variable for a guild
function getGuildVariable(guildId) {
  return guildVariables[guildId];
}

function addGuildVariable(guildId, defaultValue) {
  guildVariables[guildId] = defaultValue;
}

module.exports = {
  guildVariables,
  setGuildVariable,
  getGuildVariable,
	addGuildVariable,
};