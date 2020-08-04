"use strict";

// 1. Vending machine
// SUPER LONG WAY OF DOING IT [setting class and events for each button. easier to use event.target]
// let money2 = document.querySelector(".money2");
// console.log(money2.getAttribute("data-amount"));

// let money3 = document.querySelector(".money3");
// console.log(money3.getAttribute("data-amount"));

// let money4 = document.querySelector(".money4");
// console.log(money4.getAttribute("data-amount"));

// let money6 = document.querySelector(".money6");
// console.log(money6.getAttribute("data-amount"));

// let total = 0;

// money2.addEventListener("click", () => {
//   let amount = parseInt(money2.getAttribute("data-amount"));
//   total += amount;
//   let totalParagraph = document.querySelector(".total");
//   totalParagraph.innerText = "Total: $" + total + ".00";
// });

// money3.addEventListener("click", () => {
//   let amount = parseInt(money3.getAttribute("data-amount"));
//   total += amount;
//   let totalParagraph = document.querySelector(".total");
//   totalParagraph.innerText = "Total: $" + total + ".00";
// });

// money4.addEventListener("click", () => {
//   let amount = parseInt(money4.getAttribute("data-amount"));
//   total += amount;
//   let totalParagraph = document.querySelector(".total");
//   totalParagraph.innerText = "Total: $" + total + ".00";
// });

// money6.addEventListener("click", () => {
//   let amount = parseInt(money6.getAttribute("data-amount"));
//   total += amount;
//   let totalParagraph = document.querySelector(".total");
//   totalParagraph.innerText = "Total:$" + total + ".00";
// });
// *******BETTER WAY TO DO IT WITH event.target ~~ in this case the class doesn't matter. its targeting the DIV class.
let price = document.querySelector(".Q1");

let total = 0;

price.addEventListener("click", (event) => {
  let amount = parseInt(event.target.getAttribute("data-amount"));
  console.log(amount);
  total += amount;
  let totalParagraph = document.querySelector(".total");
  totalParagraph.innerText = "Total:$" + total + ".00";
});

// 2. Make money
let coins = document.querySelector(".coin-container");
let form = document.querySelector(".make-money");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let data = new FormData(form);
  let quantity = data.get("quantity");
  let coin = data.get("coin");
  for (let i = 0; i < quantity; i++) {
    let newDiv = document.createElement("div");
    newDiv.innerText = coin;
    coins.append(newDiv);
  }
  form.reset();
});

// 3. lightbulb
