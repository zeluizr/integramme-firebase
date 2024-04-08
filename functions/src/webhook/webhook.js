const functions = require("firebase-functions");
const admin = require("firebase-admin");

exports.webhook = functions.https.onRequest(async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).send("Método não permitido");
    return;
  }

  const data = req.body;

  try {
    const reference = admin.database().ref("/webhookData");
    await reference.push(data);
    res.status(200).send("Dados recebidos e salvos com sucesso");
  } catch (error) {
    console.error("Erro ao salvar os dados:", error);
    res.status(500).send("Erro interno do servidor");
  }
});
