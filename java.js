function checkEvenOdd() {
  let num = document.getElementById("num").value;
  let result = num % 2 === 0 ? `🔢 ${num} is an even number.` : `🔢 ${num} is an odd number.`;
  document.getElementById("evenOddResult").innerText = result;
}

function checkGrade() {
  let score = parseInt(document.getElementById("score").value);
  let grade;
  if (score >= 90 && score <= 100) grade = 'A';
  else if (score >= 80 && score <= 89) grade = 'B';
  else if (score >= 70 && score <= 79) grade = 'C';
  else if (score >= 60 && score <= 69) grade = 'D';
  else if (score >= 0 && score < 60) grade = 'F';
  else grade = 'Invalid score';

  document.getElementById("gradeResult").innerText = `🎓 Your grade is ${grade}.`;
}

function checkVoting() {
  let age = document.getElementById("age").value;
  let result = age >= 18 ? "🗳️ You are eligible to vote." : "❌ Sorry, you are not eligible to vote.";
  document.getElementById("votingResult").innerText = result;
}

function findLargest() {
  let a = parseFloat(document.getElementById("a").value);
  let b = parseFloat(document.getElementById("b").value);
  let c = parseFloat(document.getElementById("c").value);
  let largest;

  if (a >= b && a >= c) largest = a;
  else if (b >= a && b >= c) largest = b;
  else largest = c;

  document.getElementById("largestResult").innerText = `📈 ${largest} is the largest number.`;
}

function checkLogin() {
  let username = "admin";
  let password = "12345";

  let inputUsername = document.getElementById("uname").value;
  let inputPassword = document.getElementById("pwd").value;

  let result = (inputUsername === username && inputPassword === password) 
    ? "✅ Login successful!" 
    : "🚫 Invalid username or password.";

  document.getElementById("loginResult").innerText = result;
}