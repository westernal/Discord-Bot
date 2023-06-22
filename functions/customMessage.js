const customMessage = async (client) => {
  const channel = await client.channels.fetch("698931252262207591");
  channel.send("Hossein kharkosse");
};

module.exports = customMessage;
