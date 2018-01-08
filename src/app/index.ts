/**
 * This is the firebase.js (web) compatible API.
 * Use 'const firebase = require("nativescript-plugin-firebase/app")'
 */

import * as firebase from "../firebase";
import { auth as firebaseAuthModule } from "./auth";
import { database as firebaseDatabaseModule } from "./database";
import { firestore as firebaseFirestoreModule } from "./firestore";

export function initializeApp(options?: firebase.InitOptions, name? /* ignored */: string): Promise<any> {
  return firebase.init(options);
}

let authCache;
export function auth(app?: any): firebaseAuthModule.Auth {
  if (app) {
    console.log("The 'app' param is ignored at the moment.");
  }
  if (!authCache) {
    authCache = new firebaseAuthModule.Auth();
  }
  return authCache;
}


let dbCache;
export function database(app?: any): firebaseDatabaseModule.Database {
  if (app) {
    console.log("The 'app' param is ignored at the moment.");
  }
  if (!dbCache) {
    dbCache = new firebaseDatabaseModule.Database();
  }
  return dbCache;
}


let firestoreCache;
export function firestore(app?: any): firebaseFirestoreModule.Firestore {
  if (app) {
    console.log("The 'app' param is ignored at the moment.");
  }
  if (!firestoreCache) {
    firestoreCache = new firebaseFirestoreModule.Firestore();
  }
  return firestoreCache;
}
