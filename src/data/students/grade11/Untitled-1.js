const handleLogin = (e) => {
  e.preventDefault();
  const cleanId = studentId.trim().toUpperCase();
  const cleanPassword = password.trim(); // 🆕 Password එක ගත්තා

  // 🔍 1. මධ්‍යම ලැයිස්තුවෙන් මේ ශිෂ්‍ය ID එක තියෙන Object එක සොයාගන්නවා
  const studentFound = allApprovedStudents.find(
    (student) => student.id === cleanId,
  );

  if (studentFound) {
    // 🔍 2. ID එක හමු වුණොත්, ඒ Object එක ඇතුළේ තියෙන රහස් Password එක සමානද බලනවා
    if (studentFound.password === cleanPassword) {
      localStorage.setItem("user_id", cleanId);
      localStorage.setItem("isLoggedIn", "true");

      // ID එකෙන් Subject Code එක (MES) වෙන් කර ගැනීම
      const idParts = cleanId.split("-");
      const subjectCode = idParts[1];
      localStorage.setItem("user_subjects", subjectCode);

      navigate("/dashboard");
      window.location.reload();
    } else {
      setError("Incorrect Password! ❌");
    }
  } else {
    setError("Your ID is Not Approved or Invalid! ❌");
  }
};

const handleParentLogin = (e) => {
  e.preventDefault();
  const cleanId = studentId.trim().toUpperCase();
  const cleanPassword = password.trim(); // 🆕

  // 🔍 1. අපේ දත්ත ලැයිස්තුවෙන් මේ ID එක තියෙන ළමයාව සොයාගන්නවා
  const studentFound = allApprovedStudents.find(
    (student) => student.id === cleanId,
  );

  if (studentFound) {
    // 🔍 2. ළමයාගේ Password එකයි දෙමාපියන් ගහපු Password එකයි ගැලපෙනවාද බැලීම
    if (studentFound.password === cleanPassword) {
      setIsAuthenticated(true);
      setSearchQuery(cleanId);
      setError("");
    } else {
      setError("ඇතුළත් කළ රහස් මුරපදය (Password) වැරදියි! ❌");
    }
  } else {
    setError("වලංගු නොවන ශිෂ්‍ය ID අංකයකි! ❌");
  }
};
