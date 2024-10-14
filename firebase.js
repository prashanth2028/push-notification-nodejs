import admin from "firebase-admin";
import serviceAccount from "./firebase-service-account.json";

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
  
module.exports = admin;