import * as firebase from "firebase";

var config = {
  
};

firebase.initializeApp(config);

const databaseRef = firebase.database().ref();
export const profilesRef = databaseRef.child("profiles");
export const votesRef = databaseRef.child("votes");
export const authRef = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
