const { TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions");

module.exports = async function getClient(stringSession) {
  const apiId = 123456;
  const apiHash = "123456abcdfg";

  const client = new TelegramClient(
    new StringSession(stringSession),
    apiId,
    apiHash,
    {
      connectionRetries: 5,
    }
  );
  await client.start({
    phoneNumber: async () => await input.text("Please enter your number: "),
    password: async () => await input.text("Please enter your password: "),
    phoneCode: async () =>
      await input.text("Please enter the code you received: "),
    onError: (err) => console.log(err),
  });

  return client;
};
