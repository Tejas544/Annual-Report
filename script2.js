// Wait for the page to load
document.addEventListener("DOMContentLoaded", function () {
  // Retrieve student data from localStorage
  const session = localStorage.getItem("session");
  const year1 = localStorage.getItem("year1");
  const year2 = Number(year1) + 1;
  const studentName = localStorage.getItem("studentName");
  const studentClass = localStorage.getItem("studentClass");
  const studentRoll = localStorage.getItem("studentRoll");

  // Display the student data in the relevant span elements
  if (session && year1 && year2 && studentName && studentClass && studentRoll) {
    document.getElementById("session").textContent = session;
    document.getElementById("year1").textContent = year1;
    document.getElementById("year2").textContent = year2;
    document.getElementById("student-name").textContent = studentName;
    document.getElementById("student-class").textContent = studentClass;
    document.getElementById("student-roll").textContent = studentRoll;
  }
  assignGrades();
});
document.getElementById("print-btn").addEventListener("click", function () {
  window.print();
});
window.addEventListener("load", function () {
  // Check navigation type (reload or direct load)
  const navigationType = performance.getEntriesByType("navigation")[0]?.type || performance.navigation.type;
  console.log("Navigation Type:", navigationType); // Debug log

  if (navigationType === "reload" || navigationType === 1) {
    console.log("Page reloaded. Clearing localStorage and redirecting...");

    // Clear localStorage
    localStorage.removeItem("session");
    localStorage.removeItem("year1");
    // localStorage.removeItem("year2");
    localStorage.removeItem("studentName");
    localStorage.removeItem("studentClass");
    localStorage.removeItem("studentRoll");

    // Redirect to index.html
    console.log("Redirecting to index.html...");
    window.location.href = "index.html";
  }
});

// Retrieve Marathi Data from LocalStorage
const marathiData = JSON.parse(localStorage.getItem("marathiData"));
if (marathiData) {
  document.getElementById("marathi-sub1-display").textContent = marathiData.sub1;
  document.getElementById("marathi-sub2-display").textContent = marathiData.sub2;
  document.getElementById("marathi-sub3-display").textContent = marathiData.sub3; 
  document.getElementById("marathi-sub4-display").textContent = marathiData.sub4;
  document.getElementById("marathi-sub5-display").textContent = marathiData.sub5;
  document.getElementById("marathi-sub6-display").textContent = marathiData.sub6;
  document.getElementById("marathi-sub7-display").textContent = marathiData.sub7;
  document.getElementById("marathi-total-display").textContent = marathiData.total;
  document.getElementById("marathi-total-display2").textContent = marathiData.total2;
  document.getElementById("total-marathi3").textContent = Number(marathiData.total2) + Number(marathiData.total);
  document.getElementById("marathi-notes-display").textContent =
    marathiData.notes === "Custom" ? marathiData.customNotes : marathiData.notes;
}

// Retrieve Science 1 Data from LocalStorage
const science1Data = JSON.parse(localStorage.getItem("science1Data"));
if (science1Data) {
  document.getElementById("science1-sub1-display").textContent = science1Data.sub1;
  document.getElementById("science1-sub2-display").textContent = science1Data.sub2;
  document.getElementById("science1-sub3-display").textContent = science1Data.sub3;
  document.getElementById("science1-sub4-display").textContent = science1Data.sub4;
  document.getElementById("science1-sub5-display").textContent = science1Data.sub5;
  document.getElementById("science1-sub6-display").textContent = science1Data.sub6;
 document.getElementById("science1-sub7-display").textContent = science1Data.sub7;
 document.getElementById("science1-total-display").textContent = science1Data.total;
 document.getElementById("science1-total-display2").textContent = science1Data.total2;
 document.getElementById("total-science13").textContent = Number(science1Data.total2) + Number(science1Data.total);
  document.getElementById("science1-notes-display").textContent =
    science1Data.notes === "Custom" ? science1Data.customNotes : science1Data.notes;
    
}

// Retrieve Science 1 Data from LocalStorage
const mathData = JSON.parse(localStorage.getItem("mathData"));
if (mathData) {
  document.getElementById("math-sub1-display").textContent = mathData.sub1;
  document.getElementById("math-sub2-display").textContent = mathData.sub2;
  document.getElementById("math-sub3-display").textContent = mathData.sub3;
  document.getElementById("math-sub4-display").textContent = mathData.sub4;
  document.getElementById("math-sub5-display").textContent = mathData.sub5; 
  document.getElementById("math-sub6-display").textContent = mathData.sub6;
  document.getElementById("math-sub7-display").textContent = mathData.sub7;
  document.getElementById("math-total-display").textContent = mathData.total;
  document.getElementById("math-total-display").textContent = mathData.total;
  document.getElementById("math-total-display2").textContent = mathData.total2;
  document.getElementById("math-total3").textContent = Number(mathData.total2) + Number(mathData.total);
  document.getElementById("math-notes-display").textContent =
    mathData.notes === "Custom" ? mathData.customNotes : mathData.notes;
}
// Retrieve Science 1 Data from LocalStorage
const englishData = JSON.parse(localStorage.getItem("englishData"));
if (englishData) {
  document.getElementById("english-sub1-display").textContent = englishData.sub1;
  document.getElementById("english-sub2-display").textContent = englishData.sub2;
  document.getElementById("english-sub3-display").textContent = englishData.sub3;
  document.getElementById("english-sub4-display").textContent = englishData.sub4;
  document.getElementById("english-sub5-display").textContent = englishData.sub5;
   document.getElementById("english-sub6-display").textContent = englishData.sub6;
   document.getElementById("english-sub7-display").textContent = englishData.sub7;
  document.getElementById("english-total-display").textContent = englishData.total;
  document.getElementById("english-total-display2").textContent = englishData.total2;
  document.getElementById("english-total3").textContent = Number(englishData.total2) + Number(englishData.total);
  document.getElementById("english-notes-display").textContent =
    englishData.notes === "Custom" ? englishData.customNotes : englishData.notes;
}

const science2Data = JSON.parse(localStorage.getItem("science2Data"));
if (science2Data) {
  document.getElementById("science2-sub1-display").textContent = science2Data.sub1;
  document.getElementById("science2-sub2-display").textContent = science2Data.sub2;
  document.getElementById("science2-sub3-display").textContent = science2Data.sub3;
  document.getElementById("science2-sub4-display").textContent = science2Data.sub4;
  document.getElementById("science2-sub5-display").textContent = science2Data.sub5;
  document.getElementById("science2-sub6-display").textContent = science2Data.sub6;
 document.getElementById("science2-sub7-display").textContent = science2Data.sub7;
 document.getElementById("science2-total-display").textContent = science2Data.total;
 document.getElementById("science2-total-display2").textContent = science2Data.total2;
 document.getElementById("total-science23").textContent = Number(science2Data.total2) + Number(science2Data.total);
  document.getElementById("science2-notes-display").textContent =
    science2Data.notes === "Custom" ? science2Data.customNotes : science2Data.notes;
    
}
const kalaaData = JSON.parse(localStorage.getItem("kalaaData"));
if (kalaaData) {
  document.getElementById("kalaa-sub1-display").textContent = kalaaData.sub1;
  document.getElementById("kalaa-sub2-display").textContent = kalaaData.sub2;
  document.getElementById("kalaa-sub3-display").textContent = kalaaData.sub3;
  document.getElementById("kalaa-sub4-display").textContent = "-";
  document.getElementById("kalaa-sub5-display").textContent = "-";
  document.getElementById("kalaa-sub6-display").textContent = "";
 document.getElementById("kalaa-sub7-display").textContent =  "";
 document.getElementById("kalaa-total-display").textContent = kalaaData.total;
 document.getElementById("kalaa-total-display2").textContent = "0";
 document.getElementById("total-kalaa3").textContent =kalaaData.total;
  document.getElementById("kalaa-notes-display").textContent =
    kalaaData.notes === "Custom" ? kalaaData.customNotes : kalaaData.notes;
    
}
const karyanubhavData = JSON.parse(localStorage.getItem("karyanubhavData"));
if (karyanubhavData) {
  document.getElementById("karyanubhav-sub1-display").textContent = karyanubhavData.sub1;
  document.getElementById("karyanubhav-sub2-display").textContent = karyanubhavData.sub2;
  document.getElementById("karyanubhav-sub3-display").textContent = karyanubhavData.sub3;
  document.getElementById("karyanubhav-sub4-display").textContent = "-";
  document.getElementById("karyanubhav-sub5-display").textContent = "-";
  document.getElementById("karyanubhav-sub6-display").textContent = "";
 document.getElementById("karyanubhav-sub7-display").textContent =  "";
 document.getElementById("karyanubhav-total-display").textContent = karyanubhavData.total;
 document.getElementById("karyanubhav-total-display2").textContent = "0";
 document.getElementById("total-karyanubhav3").textContent =karyanubhavData.total;
  document.getElementById("karyanubhav-notes-display").textContent =
    karyanubhavData.notes === "Custom" ? karyanubhavData.customNotes : karyanubhavData.notes;
    
}
const shashiData = JSON.parse(localStorage.getItem("shashiData"));
if (shashiData) {
  document.getElementById("shashi-sub1-display").textContent = shashiData.sub1;
  document.getElementById("shashi-sub2-display").textContent = shashiData.sub2;
  document.getElementById("shashi-sub3-display").textContent = shashiData.sub3;
  document.getElementById("shashi-sub4-display").textContent = "-";
  document.getElementById("shashi-sub5-display").textContent = "-";
  document.getElementById("shashi-sub6-display").textContent = "";
 document.getElementById("shashi-sub7-display").textContent =  "";
 document.getElementById("shashi-total-display").textContent = shashiData.total;
 document.getElementById("shashi-total-display2").textContent = "0";
 document.getElementById("total-shashi3").textContent =shashiData.total;
  document.getElementById("shashi-notes-display").textContent =
    shashiData.notes === "Custom" ? shashiData.customNotes : shashiData.notes;
    
}

function calculateGrade(marks) {
  if (marks >= 91) return "A1";
  if (marks >= 81) return "A2";
  if (marks >= 71) return "B1";
  if (marks >= 61) return "B2";
  if (marks >= 51) return "C1";
  if (marks >= 41) return "C2";
  if (marks >= 33) return "D";
  return "F"; // For marks below 33
}

function assignGrades() {
  // Get total marks for each subject from respective IDs
  const marathiTotal = parseInt(document.getElementById("total-marathi3").textContent) || 0;
  const mathTotal = parseInt(document.getElementById("math-total3").textContent) || 0;
  const science1Total = parseInt(document.getElementById("total-science13").textContent) || 0;
  const science2Total = parseInt(document.getElementById("total-science23").textContent) || 0;
  const englishTotal = parseInt(document.getElementById("english-total3").textContent) || 0;
  const kalaaTotal = parseInt(document.getElementById("total-kalaa3").textContent) || 0;
  const karyanubhavTotal = parseInt(document.getElementById("total-karyanubhav3").textContent) || 0;
  const shashiTotal = parseInt(document.getElementById("total-shashi3").textContent) || 0;

  // Calculate grades
  const marathiGrade = calculateGrade(marathiTotal);
  const mathGrade = calculateGrade(mathTotal);
  const science1Grade = calculateGrade(science1Total);
  const science2Grade = calculateGrade(science2Total);
  const englishGrade = calculateGrade(englishTotal);
  const kalaaGrade = calculateGrade(kalaaTotal);
  const karyanubhavGrade = calculateGrade(karyanubhavTotal);
  const shashiGrade = calculateGrade(shashiTotal);

  // Set grades in the respective grade cells
  document.getElementById("grade-marathi").textContent = marathiGrade;
  document.getElementById("grade-math").textContent = mathGrade;
  document.getElementById("grade-science1").textContent = science1Grade;
  document.getElementById("grade-science2").textContent = science2Grade;
  document.getElementById("grade-english").textContent = englishGrade;
  document.getElementById("grade-kalaa").textContent = kalaaGrade;
  document.getElementById("grade-karyanubhav").textContent = karyanubhavGrade;
  document.getElementById("grade-shashi").textContent = shashiGrade;
}





// Clear LocalStorage after usage to prevent old data issues
localStorage.removeItem("marathiData");
localStorage.removeItem("science1Data"); 
localStorage.removeItem("science2Data"); 
localStorage.removeItem("mathData");
localStorage.removeItem("englishData");
localStorage.removeItem("kalaaData");
localStorage.removeItem("karyanubhavData");
localStorage.removeItem("shashiData");

// Redirect to index.html if the page is refreshed
// window.addEventListener("load", function () {
//   if (performance.getEntriesByType("navigation")[0].type === "reload") {
//       // If the page is refreshed, navigate to index.html
// localStorage.removeItem("session");
// localStorage.removeItem("year1");
// //localStorage.removeItem("year2");
// localStorage.removeItem("studentName");
// localStorage.removeItem("studentClass"); 
// localStorage.removeItem("studentRoll");

//      window.location.href = "index.html";  
//   } 
// });


