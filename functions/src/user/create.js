const functions = require("firebase-functions");
const admin = require("firebase-admin");

exports.createUser = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError(
      "unauthenticated",
      "Apenas usuários autenticados podem criar novos usuários."
    );
  }

  const { email, password } = data;
  if (!email || !password) {
    throw new functions.https.HttpsError(
      "invalid-argument",
      "Email e senha são obrigatórios para criar um novo usuário."
    );
  }

  try {
    const userRecord = await admin.auth().createUser({
      email,
      password,
    });

    return { uid: userRecord.uid };
  } catch (error) {
    console.error("Erro ao criar novo usuário:", error);
    throw new functions.https.HttpsError(
      "internal",
      "Não foi possível criar o novo usuário."
    );
  }
});
