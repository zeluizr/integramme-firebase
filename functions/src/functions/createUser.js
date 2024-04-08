// functions/src/auth/registerUser.js
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors")({ origin: true }); // Habilita o CORS para todas as origensclear

exports.registerUser = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const { email, password } = req.body;
      const userRecord = await admin.auth().createUser({
        email,
        password,
      });
      res.status(200).send({ userId: userRecord.uid });
    } catch (error) {
      console.error("Erro ao registrar usuário:", error);
      res.status(500).json({ error: "Erro ao criar usuário" });
    }
  });
});
