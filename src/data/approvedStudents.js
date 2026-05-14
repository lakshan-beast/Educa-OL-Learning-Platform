// src/data/approvedStudents.js

// 11 වසරේ ලැයිස්තු (Arrays)
import { grade11All } from "./students/grade11/all_classes";
import { grade11Dual } from "./students/grade11/dual_classes";
// import { grade11Maths } from "./students/grade11/single_maths";
// import { grade11Science } from "./students/grade11/single_science";
// import { grade11English } from "./students/grade11/single_english";

// 10 වසරේ ලැයිස්තු (Arrays) - පසුව ඔයා මේවා හදපුවාම මෙතනට එකතු කරන්න
// import { grade10All } from './students/grade10/all_classes';

// --- හැම එකක්ම එකම එක ලොකු ලැයිස්තුවකට එකතු කිරීම ---
export const allApprovedStudents = [
  ...grade11All,
  ...grade11Dual,
  //   ...grade11Maths,
  //   ...grade11Science,
  //   ...grade11English,

  // 10 වසරේ ඒවා හැදුවම ඒ Arrays ටිකත් මෙතනින් පල්ලෙහාට දාන්න:
  // ...grade10All,
];
