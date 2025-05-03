// Akan name arrays
const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

// Listen for form submission
document.getElementById("akanForm").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent page reload

  // Get input values
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);
  const gender = document.querySelector('input[name="gender"]:checked');

  // Validate inputs
  if (isNaN(day) || day < 1 || day > 31) {
    alert("Please enter a valid day between 1 and 31.");
    return;
  }

  if (isNaN(month) || month < 1 || month > 12) {
    alert("Please enter a valid month between 1 and 12.");
    return;
  }

  if (isNaN(year) || year < 1000) {
    alert("Please enter a valid year.");
    return;
  }

  if (!gender) {
    alert("Please select a gender.");
    return;
  }

  // Calculate day of the week (Zeller's formula variation)
  const CC = Math.floor(year / 100);
  const YY = year % 100;

  // Adjust month and year for Zeller's formula if month is Jan/Feb
  let adjustedMonth = month;
  let adjustedYear = year;
  if (month < 3) {
    adjustedMonth += 12;
    adjustedYear -= 1;
  }

  const d = Math.floor(
    ( ( (CC / 4) - 2 * CC - 1) + (5 * (adjustedYear % 100) / 4) + (26 * (adjustedMonth + 1) / 10) + day ) % 7
  );

  const dayOfWeek = Math.abs(Math.floor(d));

  // Get Akan name
  const genderValue = gender.value;
  const akanName = genderValue === "male" ? maleNames[dayOfWeek] : femaleNames[dayOfWeek];

  // Display result
  const resultSection = document.getElementById("result");
  resultSection.innerHTML = `<h2>Your Akan name is: <span>${akanName}</span></h2>`;
});