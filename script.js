// Récupération des différents éléments HTML5
const deliveryStandardInput = document.querySelector("#delivery__standard");
const deliveryFastInput = document.querySelector("#delivery__fast");
const deliveryExpressInput = document.querySelector("#delivery__express");
const deliveryDelayStandard = document.querySelector(
  ".delivery__delay__standard"
);
const deliveryDelayFast = document.querySelector(".delivery__delay__fast");
const deliveryDelayExpress = document.querySelector(
  ".delivery__delay__express"
);
const deliveryDay = document.querySelector(".description__content");

// Ecoute de l'événement "click" sur l'input deliveryStandardInput
deliveryStandardInput.addEventListener("click", () => {
  deliveryDay.textContent = deliveryDelayStandard.textContent;
});

// Ecoute de l'événement "click" sur l'input deliveryFastInput
deliveryFastInput.addEventListener("click", () => {
  deliveryDay.textContent = deliveryDelayFast.textContent;
});

// Ecoute de l'événement "click" sur l'input deliveryExpressInput
deliveryExpressInput.addEventListener("click", () => {
  deliveryDay.textContent = deliveryDelayExpress.textContent;
});
