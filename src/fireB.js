import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID,
  apiKey: "AIzaSyD3Oc-RHMMVc1UUXX74pLMGZQ2n0fXK3fU",
  authDomain: "mbti-over-immersion-test.firebaseapp.com",
  projectId: "mbti-over-immersion-test",
  storageBucket: "mbti-over-immersion-test.appspot.com",
  messagingSenderId: "354505533926",
  appId: "1:354505533926:web:9ec2ab0205d9db0e63ce27",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
