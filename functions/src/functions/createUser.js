const functions = require("firebase-functions");
const admin = require("firebase-admin");

exports.createUser = functions.https.onCall(async (data, context) => {
  const { email, password } = data;

  try {
    const userRecord = await admin.auth().createUser({
      email,
      password,
    });

    // Retorna o UID do usuário recém-criado para o cliente
    return { userId: userRecord.uid };
  } catch (error) {
    console.error("Erro ao registrar usuário:", error);
    throw new functions.https.HttpsError(
      "internal",
      "Não foi possível criar o usuário.",
      error.message
    );
  }
});
