// Wait for the document to load
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("student-details-form");

  // On form submission
  form.addEventListener("submit", function (event) { 
    event.preventDefault();

    // Get the values from the form
    const session = document.getElementById("session-input").value;
    const year1 = document.getElementById("year1-input").value;
    //const year2 = document.getElementById("year2-input").value;
    const studentName = document.getElementById("student-name-input").value;
    const studentClass = document.getElementById("student-class-input").value;
    const studentRoll = document.getElementById("student-roll-input").value;

    // Store them in localStorage
    localStorage.setItem("session", session);
    localStorage.setItem("year1", year1);
    //localStorage.setItem("year2", year2);
    localStorage.setItem("studentName", studentName);
    localStorage.setItem("studentClass", studentClass);
    localStorage.setItem("studentRoll", studentRoll);

    // Close the modal
    document.getElementById("student-details-modal").style.display = "none";
  });
}); 

/// Function to calculate total marks for a given subject
function calculateTotalA(subject) {
    const inputs = document.querySelectorAll(`#${subject}-sub1, #${subject}-sub2, #${subject}-sub3, #${subject}-sub4, #${subject}-sub5`);
    let total = 0;
  
    inputs.forEach(input => {
      const value = parseInt(input.value, 10);
      if (!isNaN(value)) {
        total += value;  
      }
    });
  
    document.getElementById(`${subject}-total`).innerText = total;
  }
function calculateTotalB(subject) {
    const inputs = document.querySelectorAll(`#${subject}-sub6, #${subject}-sub7`);
    let total = 0;
  
    inputs.forEach(input => {
      const value = parseInt(input.value, 10);
      if (!isNaN(value)) {
        total += value;
      }
    });
  
    document.getElementById(`${subject}-total2`).innerText = total;
  }


  // Event listeners for Marathi total calculation
  const marathiInputs = document.querySelectorAll("#marathi-sub1, #marathi-sub2, #marathi-sub3, #marathi-sub4, #marathi-sub5");
  marathiInputs.forEach(input => {
    input.addEventListener("input", () => calculateTotalA("marathi"));
  });
  
  // Event listeners for Science 1 total calculation
  const science1Inputs = document.querySelectorAll("#science1-sub1, #science1-sub2, #science1-sub3, #science1-sub4, #science1-sub5");
  science1Inputs.forEach(input => {
    input.addEventListener("input", () => calculateTotalA("science1"));
  });
  const science2Inputs = document.querySelectorAll("#science2-sub1, #science2-sub2, #science2-sub3, #science2-sub4, #science2-sub5");
  science2Inputs.forEach(input => {
    input.addEventListener("input", () => calculateTotalA("science2"));
  });
  const mathInputs = document.querySelectorAll("#math-sub1, #math-sub2, #math-sub3, #math-sub4, #math-sub5");
  mathInputs.forEach(input => {
    input.addEventListener("input", () => calculateTotalA("math"));
  });
  const englishInputs = document.querySelectorAll("#english-sub1, #english-sub2, #english-sub3, #english-sub4, #english-sub5");
  englishInputs.forEach(input => {
    input.addEventListener("input", () => calculateTotalA("english"));
  });
  const englishInputs2 = document.querySelectorAll("#english-sub6, #english-sub7");
  englishInputs2.forEach(input => {
    input.addEventListener("input", () => calculateTotalB("english"));
  });
  const mathInputs2 = document.querySelectorAll("#math-sub6, #math-sub7");
  mathInputs2.forEach(input => {
    input.addEventListener("input", () => calculateTotalB("math"));
  });
  const marathiInputs2 = document.querySelectorAll("#marathi-sub6, #marathi-sub7");
  marathiInputs2.forEach(input => {
    input.addEventListener("input", () => calculateTotalB("marathi"));
  });
  const science2Inputs2 = document.querySelectorAll("#science2-sub6, #science2-sub7");
  science2Inputs2.forEach(input => {
    input.addEventListener("input", () => calculateTotalB("science2"));
  });
  const science1Inputs2 = document.querySelectorAll("#science1-sub6, #science1-sub7");
  science1Inputs2.forEach(input => {
    input.addEventListener("input", () => calculateTotalB("science1"));
  });
  
  // Show/hide custom notes textarea based on dropdown selection
  function handleCustomNotes(subject) {
    const dropdown = document.getElementById(`${subject}-notes`);
    const customTextarea = document.getElementById(`custom-${subject}-notes`);
  
    dropdown.addEventListener("change", () => {
      if (dropdown.value === "Custom") {
        customTextarea.style.display = "block";
      } else {
        customTextarea.style.display = "none";
      }
    });
  }
  
  // Enable custom notes functionality for Marathi and Science 1
  handleCustomNotes("marathi");
  handleCustomNotes("science1");
  handleCustomNotes("science2");
  handleCustomNotes("english");
  handleCustomNotes("math");
  
  
  document.getElementById("generate-report-btn").addEventListener("click", function () {
    event.preventDefault();

    const maxMarks = {
      marathi: [10, 10, 10, 20, 10,10,30], // Sub1, Sub2, Sub3, Sub4, Sub5
      science1: [10, 10, 10, 20, 10,10,30],
      science2: [10, 10, 10, 20, 10,10,30],
      english: [10, 10, 10, 20, 10,10,30],
      math: [10, 10, 10, 20, 10,10,30]
  };

  // Validation function
  function validateMarks(subject, data) {
      const subjectMaxMarks = maxMarks[subject];
      for (let i = 0; i < subjectMaxMarks.length; i++) {
          if (parseInt(data[`sub${i + 1}`]) > subjectMaxMarks[i]) {
              alert(`${subject.charAt(0).toUpperCase() + subject.slice(1)} Sub${i + 1} marks cannot exceed ${subjectMaxMarks[i]}.`);
              return false;
          }
      }
      return true;
  }

    // Collect Marathi Data
    const marathiData = {
      sub1: document.getElementById("marathi-sub1").value || 0,
      sub2: document.getElementById("marathi-sub2").value || 0,
      sub3: document.getElementById("marathi-sub3").value || 0,
      sub4: document.getElementById("marathi-sub4").value || 0,
      sub5: document.getElementById("marathi-sub5").value || 0,
      sub6: document.getElementById("marathi-sub6").value || 0,
      sub7: document.getElementById("marathi-sub7").value || 0,
      total: document.getElementById("marathi-total").textContent || 0,
      total2: document.getElementById("marathi-total2").textContent || 0,
      //total3: document.getElementById("marathi-total").textContent  + document.getElementById("marathi-total2").textContent,
      notes: document.getElementById("marathi-notes").value || "",
      customNotes: document.getElementById("custom-marathi-notes").value || "",
    };
  
    // Collect Science 1 Data
    const science1Data = {
      sub1: document.getElementById("science1-sub1").value || 0,
      sub2: document.getElementById("science1-sub2").value || 0,
      sub3: document.getElementById("science1-sub3").value || 0,
      sub4: document.getElementById("science1-sub4").value || 0,
      sub5: document.getElementById("science1-sub5").value || 0,
      sub6: document.getElementById("science1-sub6").value || 0,
      sub7: document.getElementById("science1-sub7").value || 0,
      total: document.getElementById("science1-total").textContent || 0,
      total2: document.getElementById("science1-total2").textContent || 0,
      //total3: document.getElementById("science1-total").textContent + document.getElementById("science1-total2").textContent,
      notes: document.getElementById("science1-notes").value || "",
      customNotes: document.getElementById("custom-science1-notes").value || "",
    };
    const science2Data = {
      sub1: document.getElementById("science2-sub1").value || 0,
      sub2: document.getElementById("science2-sub2").value || 0,
      sub3: document.getElementById("science2-sub3").value || 0,
      sub4: document.getElementById("science2-sub4").value || 0,
      sub5: document.getElementById("science2-sub5").value || 0,
      sub6: document.getElementById("science2-sub6").value || 0,
      sub7: document.getElementById("science2-sub7").value || 0,
      total: document.getElementById("science2-total").textContent || 0,
      total2: document.getElementById("science2-total2").textContent || 0,
      //total3: document.getElementById("science2-total").textContent + document.getElementById("science2-total2").textContent,
      notes: document.getElementById("science2-notes").value || "",
      customNotes: document.getElementById("custom-science2-notes").value || "",
    };
    // Collect Science 1 Data
    const englishData = {
      sub1: document.getElementById("english-sub1").value || 0,
      sub2: document.getElementById("english-sub2").value || 0,
      sub3: document.getElementById("english-sub3").value || 0,
      sub4: document.getElementById("english-sub4").value || 0,
      sub5: document.getElementById("english-sub5").value || 0,
      sub6: document.getElementById("english-sub6").value || 0,
      sub7: document.getElementById("english-sub7").value || 0,
      total: document.getElementById("english-total").textContent || 0,
      total2: document.getElementById("english-total2").textContent || 0,
      notes: document.getElementById("english-notes").value || "",
      customNotes: document.getElementById("custom-english-notes").value || "",
    };
    // Collect Science 1 Data
    const mathData = {
      sub1: document.getElementById("math-sub1").value || 0,
      sub2: document.getElementById("math-sub2").value || 0,
      sub3: document.getElementById("math-sub3").value || 0,
      sub4: document.getElementById("math-sub4").value || 0,
      sub5: document.getElementById("math-sub5").value || 0,
      sub6: document.getElementById("math-sub6").value || 0,
      sub7: document.getElementById("math-sub7").value || 0,
      total: document.getElementById("math-total").textContent || 0,
      total2: document.getElementById("math-total2").textContent || 0,
      //total3: document.getElementById("math-total").textContent  + document.getElementById("math-total2").textContent ,
      notes: document.getElementById("math-notes").value || "",
      customNotes: document.getElementById("custom-math-notes").value || "",
    };
    if (
      !validateMarks("marathi", marathiData) ||
      !validateMarks("science1", science1Data) ||
      !validateMarks("science2", science1Data) ||
      !validateMarks("english", englishData) ||
      !validateMarks("math", mathData)
  ) {
      return; // Stop execution if validation fails
  }
  
    // Store in LocalStorage
    localStorage.setItem("marathiData", JSON.stringify(marathiData));
    localStorage.setItem("science1Data", JSON.stringify(science1Data));
    localStorage.setItem("science2Data", JSON.stringify(science1Data));
    localStorage.setItem("englishData", JSON.stringify(englishData));
    localStorage.setItem("mathData", JSON.stringify(mathData));
    
    // Redirect to Output Page
    window.location.href = "output.html"; 
  });
  // Redirect to index.html if the page is refreshed


  
