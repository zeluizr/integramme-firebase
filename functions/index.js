const admin = require("firebase-admin");
admin.initializeApp();

const { helloWorld } = require("./src/functions/helloWorld");
const { registerUser } = require("./src/functions/createUser");

exports.helloWorld = helloWorld;
exports.createUser = registerUser;
