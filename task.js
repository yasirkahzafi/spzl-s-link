async function task(client) {
  const lastChannelMessage = 1845885;

  await client.sendMessage("ANONMINUS", {
    message:
      "https://t.me/berbagivid18/51657",
    replyTo: lastChannelMessage,
  });
}

module.exports = task;
