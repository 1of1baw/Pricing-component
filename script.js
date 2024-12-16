document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("billing-toggle");
  const prices = document.querySelectorAll(".amount");

  toggle.addEventListener("change", () => {
    prices.forEach((price) => {
      const annual = price.getAttribute("data-annual");
      const monthly = price.getAttribute("data-monthly");

      price.style.animation = "none";
      price.offsetHeight;
      price.style.animation = "fadeNumber 0.5s ease-out forwards";

      price.textContent = toggle.checked ? monthly : annual;
    });
  });

  toggle.addEventListener("click", () => {
    const slider = toggle.nextElementSibling;
    slider.style.animation = "none";
    slider.offsetHeight;
    slider.style.animation = "bounce 0.3s ease-in-out";
  });
});
