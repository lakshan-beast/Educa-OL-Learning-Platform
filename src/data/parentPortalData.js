// src/data/parentPortalData.js

// 1. 📢 පොදු නිවේදන (හැමෝටම පේන කොටස)
export const parentGeneralNotices = [
  {
    id: 1,
    type: "Meeting",
    text: "2026 මැයි 24 (ඉරිදා) උදේ 9.00 ට සියලුම 11 ශ්‍රේණි දෙමාපියන් සඳහා විශේෂ Zoom හමුවක් පැවැත්වේ.",
  },
  {
    id: 2,
    type: "Holiday",
    text: "පොසොන් පොහොය නිමිත්තෙන් ලබන සතියේ පන්ති නිවාඩු වන අතර, නැවත පන්ති පැවැත්වෙන දිනය පසුව දැනුම් දෙනු ලැබේ.",
  },
];

// 2. 💰 ගාස්තු වාර්තා වගුව (Fees Table Data)
export const parentFeesTable = [
  {
    studentId: "EDU-MES-11-LAKSHAN-0512",
    // password: "lakshan1234",
    class: "Maths/Sci/Eng",
    grade: "11",
    feesStatus: "Paid",
    amount: "Rs. 2500",
  },
  {
    studentId: "EDU-M-11-KASUN-0914",
    class: "Mathematics Only",
    grade: "11",
    feesStatus: "Not Paid",
    amount: "Pending - Rs. 1000",
  },
  {
    studentId: "EDU-S-10-NIMAL-0322",
    class: "Science Only",
    grade: "10",
    feesStatus: "Paid",
    amount: "Rs. 1000",
  },
];

// 3. 📅 පැමිණීමේ වාර්තා වගුව (Attendance Table Data)
export const parentAttendanceTable = [
  {
    studentId: "EDU-MES-11-LAKSHAN-0512",
    // password: "lakshan1234",

    class: "Mathematics",
    grade: "11",
    date: "2026-05-16",
    status: "Absent",
  },
  {
    studentId: "EDU-M-11-KASUN-0914",
    class: "Mathematics",
    grade: "11",
    date: "2026-05-16 ",
    status: "Present",
  },
  {
    studentId: "EDU-S-10-NIMAL-0322",
    class: "Science",
    grade: "10",
    date: "2026-05-10",
    status: "Absent",
  },
];
