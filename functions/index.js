const admin = require("firebase-admin");
admin.initializeApp();

const { webhook } = require("./src/webhook/webhook.js");

exports.webhook = webhook;
