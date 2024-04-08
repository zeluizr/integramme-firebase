const admin = require("firebase-admin");
admin.initializeApp();

const { webhook } = require("./src/webhook/webhook.js");
const { createUser } = require("./src/user/create.js");

exports.webhook = webhook;
exports.createUser = createUser;
