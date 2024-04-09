const admin = require("firebase-admin");
admin.initializeApp();

const { helloWorld } = require("./src/functions/helloWorld");
const { createUser } = require("./src/functions/createUser");

exports.helloWorld = helloWorld;
exports.registerUser = createUser;
