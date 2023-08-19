const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');

const serviceAccount = require('./firebaseprivatekey.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();
const Mssg = db.collection("Mssgs");

module.exports = Mssg;