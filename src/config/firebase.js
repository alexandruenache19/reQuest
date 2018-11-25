import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyDFKCtD3y9rQ6S0jxUge7LqHG9huwxkaFc",
  authDomain: "meta-pay-review.firebaseapp.com",
  databaseURL: "https://meta-pay-review.firebaseio.com",
  projectId: "meta-pay-review",
  storageBucket: "meta-pay-review.appspot.com",
  messagingSenderId: "1010968158287"
};

firebase.initializeApp(config);

const databaseRef = firebase.database().ref();
export const profilesRef = databaseRef.child("profiles");
export const votesRef = databaseRef.child("votes");
export const authRef = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
