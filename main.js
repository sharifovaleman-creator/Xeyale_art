const targetDate = new Date("June 1, 2026 11:00:00").getTime();

function updateTimer() {
   const now = new Date().getTime();
   const diff = targetDate - now;
   
   const days = Math.floor(diff / (1000 * 60 * 60 * 24));
   const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
   const minutes = Math.floor((diff / (1000 * 60)) % 60);
   const seconds = Math.floor((diff / 1000) % 60);
   
   document.getElementById("days").innerText = days;
   document.getElementById("hours").innerText = hours;
   document.getElementById("minutes").innerText = minutes;
   document.getElementById("seconds").innerText = seconds;
}

setInterval(updateTimer, 1000);
updateTimer();

document.addEventListener("contextmenu", e => e.preventDefault());
document.addEventListener("copy", e => e.preventDefault());
document.addEventListener("cut", e => e.preventDefault());
document.addEventListener("paste", e => e.preventDefault());
document.addEventListener("dragstart", e => e.preventDefault());

const yes = document.getElementById("yesBtn");
const no = document.getElementById("noBtn");

yes.onclick = () => {
   yes.style.boxShadow = "0 0 12px #6D31A3";
   no.style.boxShadow = "none";
};

no.onclick = () => {
   no.style.boxShadow = "0 0 12px #D4AF37";
   yes.style.boxShadow = "none";
};