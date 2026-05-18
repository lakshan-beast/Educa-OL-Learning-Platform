// src/data/approvedStudents.js

// 11 වසරේ ලැයිස්තු (Arrays)
import { grade11All } from "./students/grade11/all_classes";
import { grade11Dual } from "./students/grade11/dual_classes";
// import { grade11Maths } from "./students/grade11/single_maths";
// import { grade11Science } from "./students/grade11/single_science";
// import { grade11English } from "./students/grade11/single_english";

import { grade10All } from "./students/grade10/all_classes";
import { grade10Dual } from "./students/grade10/dual_classes";
// import { grade10Maths } from "./students/grade10/single_maths";
// import { grade10Science } from "./students/grade10/single_science";
// import { grade10English } from "./students/grade10/single_english";

// 10 වසරේ ලැයිස්තු (Arrays) - පසුව ඔයා මේවා හදපුවාම මෙතනට එකතු කරන්න
// import { grade10All } from './students/grade10/all_classes';

// --- හැම එකක්ම එකම එක ලොකු ලැයිස්තුවකට එකතු කිරීම ---
export const allApprovedStudents = [
  ...grade11All,
  ...grade11Dual,
  // ...grade11Maths,
  // ...grade11Science,
  // ...grade11English,

  ...grade10All,
  ...grade10Dual,
  // ...grade10Maths,
  // ...grade10Science,
  // ...grade10English,
];

import { premiumStudentsList } from "./students/premiumStudents";

export { premiumStudentsList };
