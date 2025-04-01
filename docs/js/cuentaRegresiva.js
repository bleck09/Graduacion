// Fecha de la graduación: 5 de abril de 2025 a medianoche
const graduationDate = new Date("April 5, 2025 00:00:00").getTime();

const countdownInterval = setInterval(() => {
  const now = new Date().getTime();
  const distance = graduationDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Actualiza los elementos del contador en tu HTML
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  // Si la cuenta regresiva llega a 0, muestra un mensaje
  if (distance < 0) {
    clearInterval(countdownInterval);
    document.querySelector(".section3-content").innerHTML = "<h1>¡Es el día de la Graduación!</h1>";
  }
}, 1000);