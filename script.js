"use strict";
//  #1
let totalParagraph = document.querySelector(".total");

let button = document.querySelectorAll(".btn");

let totalDue = 0;

button.forEach((snack) => {
  snack.addEventListener("click", () => {
    let amount = Number(snack.getAttribute("data-amount"));
    totalDue += amount;
    totalParagraph.innerText = `Total:$ ${totalDue}`;
  });
});

// # 2
let form = document.querySelector(".money-form");

let coinContainer = document.querySelector(".coin-container");

form.addEventListener("submit", (e) => {
  //submit happens if you click the button OR press enter
  e.preventDefault();
  let data = new FormData(form); //line 18 already references the html form
  let quantity = data.get("quantity");
  let coin = data.get("coin");
  for (let i = 0; i < quantity; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add(coin, "coin");
    newDiv.innerText = coin;
    coinContainer.append(newDiv);
    newDiv.addEventListener("click", () => {
      newDiv.remove();
    });
  }
  form.reset();
});

// #3
let bulb = document.querySelector(".bulb");
let onButton = document.querySelector(".on");
let offButton = document.querySelector(".off");
let toggleButton = document.querySelector(".toggle");
let endButton = document.querySelector(".end");

onButton.addEventListener("click", () => {
  bulb.classList.add("light");
});

offButton.addEventListener("click", () => {
  bulb.classList.remove("light");
});

toggleButton.addEventListener("click", () => {
  bulb.classList.toggle("light");
});

endButton.addEventListener("click", () => {
  bulb.remove();
  let buttons = document.querySelectorAll(".switch");
  buttons.forEach((button) => {
    button.disabled = true;
  });
});
