require("dotenv").config();

const task = require("./task.js");
const getClient = require("./getClient.js");

(async () => {
  const stringSession = process.env["STRING_SESSION_1"];
  const client = await getClient(stringSession);

  await task(client);
  process.exit();
})();
