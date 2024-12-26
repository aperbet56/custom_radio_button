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
const button = document.querySelector(".btn");

// Ecoute de l'événement "click" sur l'input deliveryStandardInput
deliveryStandardInput.addEventListener("click", () => {
  deliveryDay.textContent = deliveryDelayStandard.textContent;
  // Ecoute de l'événement "click" sur le bouton valider
  button.addEventListener("click", () => {
    alert(
      `Votre colis numéro 69249164514354856 vous sera livré sous ${deliveryDelayStandard.textContent} ! Un mail vient de vous être envoyé. Merci de votre confiance !`
    );
    window.location.reload();
  });
});

// Ecoute de l'événement "click" sur l'input deliveryFastInput
deliveryFastInput.addEventListener("click", () => {
  deliveryDay.textContent = deliveryDelayFast.textContent;
  // Ecoute de l'événement "click" sur le bouton valider
  button.addEventListener("click", () => {
    alert(
      `Votre colis numéro 69249164514354856 vous sera livré sous ${deliveryDelayFast.textContent} ! Un mail vient de vous être envoyé. Merci de votre confiance !`
    );
    window.location.reload();
  });
});

// Ecoute de l'événement "click" sur l'input deliveryExpressInput
deliveryExpressInput.addEventListener("click", () => {
  deliveryDay.textContent = deliveryDelayExpress.textContent;
  // Ecoute de l'événement "click" sur le bouton valider
  button.addEventListener("click", () => {
    alert(
      `Votre colis numéro 69249164514354856 vous sera livré sous ${deliveryDelayExpress.textContent} ! Un mail vient de vous être envoyé. Merci de votre confiance !`
    );
    window.location.reload();
  });
});
