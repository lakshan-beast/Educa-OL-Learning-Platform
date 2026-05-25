// // src/firebaseConfig.js
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyCgPqfSwT9haDFJRrzJPC0nrp-T2AEabC0",
//   authDomain: "educa-lms-abee5.firebaseapp.com",
//   projectId: "educa-lms-abee5",
//   storageBucket: "educa-lms-abee5.firebasestorage.app",
//   messagingSenderId: "242875493480",
//   appId: "1:242875493480:web:98e78bb1d178d69d6f1fdd",
//   measurementId: "G-2C5P5XNST9",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // export const db = getFirestore(app);
// // import { initializeFirestore } from "firebase/firestore";

// export const db = initializeFirestore(app, {
//   experimentalForceLongPolling: true, // 🚀 Network RPC Errors එන එක 100%ක්ම නවත්වයි
// });

// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore"; // 👑 Network Errors වළක්වන එක ගත්තා

// ⚠️ Firebase වෙබ් අඩවියෙන් ලැබුණු ඔයාගේම ප්‍රොජෙක්ට් එකේ රහස් කේත ටික මෙතනට දාන්න:
const firebaseConfig = {
  apiKey: "AIzaSyCgPqfSwT9haDFJRrzJPC0nrp-T2AEabC0",
  authDomain: "educa-lms-abee5.firebaseapp.com",
  projectId: "educa-lms-abee5",
  storageBucket: "educa-lms-abee5.firebasestorage.app",
  messagingSenderId: "242875493480",
  appId: "1:242875493480:web:98e78bb1d178d69d6f1fdd",
  measurementId: "G-2C5P5XNST9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 🚀 ලංකාවේ Internet ISP බ්ලොක්ස් (RPC Errors) සදහටම නැති කරන සුපිරි Cloud Connection එක
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});
