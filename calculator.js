"use strict";
function isNumber(char) {
  return /^[0-9]$/.test(char);
}
const input = document.querySelector(".header");

const image = document.querySelector(".img-button");
image.addEventListener("click", function () {
  input.value = input.value.slice(0, -1); //take the string from index 0 up
  // to (but not including) the last character.
  if (input.value === "") {
    input.value = "0";
  }
});

input.addEventListener("keydown", function (event) {
  if (!isNumber(event.key) && event.key !== "Backspace") {
    event.preventDefault();
  }
  if (input.value === "0") {
    input.value = input.innerText; // replace 0 with first number
  } else {
    input.value += input.innerText; // append after first number
  }
});

const c = document.querySelector(".c-button");
c.addEventListener("click", function () {
  input.value = "0";
    input.focus(); 
});

const button = document.querySelectorAll(".button-numerical");
button.forEach((button) => {
  button.addEventListener("click", () => {
    if (input.value === "0") {
      input.value = button.innerText; // replace 0 with first number
    } else {
      input.value += button.innerText; // append after first number
    }
  });
});
let firstNumber = null;
let operator = null;
let secondNumber = null;

const buttons = document.querySelectorAll(".button-numerical");

const d = document.querySelector(".divide");
d.addEventListener("click", function () {
  firstNumber = parseFloat(input.value); // عدد اول ذخیره میشه
  operator = "/"; // عملگر ذخیره میشه
  input.value = ""; // صفحه پاک میشه برای عدد بعدی
    input.focus(); 
});
const m = document.querySelector(".multiply");
m.addEventListener("click", function () {
  firstNumber = parseFloat(input.value);
  operator = "*";
  input.value = "";
    input.focus(); 
});
const mi = document.querySelector(".minus");
mi.addEventListener("click", function () {
  firstNumber = parseFloat(input.value);
  operator = "-";
  input.value = "";
    input.focus(); 
});
const p = document.querySelector(".plus");
p.addEventListener("click", function () {
  firstNumber = parseFloat(input.value);
  operator = "+";
  input.value = "";
    input.focus(); 
});

const equal = document.querySelector(".equal");
equal.addEventListener("click", function () {
  let secondNumber = parseFloat(input.value); // number typed after operator
  if (operator === "/") {
    if (secondNumber === 0) {
      input.value = "Error"; // جلوگیری از تقسیم بر صفر
    } else {
      input.value = firstNumber / secondNumber;
    }
  }
  if (operator === "*") {
    input.value = firstNumber * secondNumber;
  }
  if (operator === "-") {
    input.value = firstNumber - secondNumber;
  }
  if (operator === "+") {
    input.value = firstNumber + secondNumber;
  }
});
