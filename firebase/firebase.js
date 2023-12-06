import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/analytics'

const firebaseConfig = {
  // apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  // authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  // projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  // storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  // messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  // appId: process.env.NEXT_PUBLIC_APP_ID,
  apiKey: "AIzaSyBppNgHixpgvFnP0Ag30kmhayCB9VrcvjQ",
  authDomain: "dongwoo-315ab.firebaseapp.com",
  projectId: "dongwoo-315ab",
  storageBucket: "dongwoo-315ab.appspot.com",
  messagingSenderId: "592251870373",
  appId: "1:592251870373:web:87fc7c0b21037587dac14c"
};
  
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
  // if (typeof window !== "undefined") {
  //   if ("measurementId" in firebaseConfig) {
  //     firebase.analytics()
  //   }
  // }
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const FieldValue = firebase.firestore.FieldValue;
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
export const appleAuthProvider = new firebase.auth.OAuthProvider('apple.com');