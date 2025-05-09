// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getRemoteConfig } from "firebase/remote-config";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0fgr6WlkE5Wdn8iFaMkGg3iqLUgv85xE",
  authDomain: "fir-react-js-9adf7.firebaseapp.com",
  projectId: "fir-react-js-9adf7",
  storageBucket: "fir-react-js-9adf7.firebasestorage.app",
  messagingSenderId: "23879886449",
  appId: "1:23879886449:web:ceb413773bdcf519d51dd0",
  measurementId: "G-9NRDRZJBWD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const remoteConfig = getRemoteConfig(app);

// Optional Remote Config settings
remoteConfig.settings = {
  minimumFetchIntervalMillis: 3600000,
};

export default database;
export { remoteConfig };