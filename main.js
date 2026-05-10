const targetDate = new Date("may 31, 2026 11:00:00").getTime();

/* TIMER */
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

/* BLOCK */
document.addEventListener("contextmenu", e => e.preventDefault());
document.addEventListener("copy", e => e.preventDefault());
document.addEventListener("cut", e => e.preventDefault());
document.addEventListener("paste", e => e.preventDefault());
document.addEventListener("dragstart", e => e.preventDefault());

/* LANG SYSTEM */
const languages = [
   { code: "az", flag: "🇦🇿" },
   { code: "en", flag: "🇬🇧" },
   { code: "ru", flag: "🇷🇺" },
   { code: "ge", flag: "🇬🇪" },
   { code: "hy", flag: "🇦🇲" }
];

const select = document.getElementById("langSelect");

/* OPTIONLAR */
languages.forEach(lang => {
   
   const option = document.createElement("option");
   
   option.value = lang.code;
   option.textContent = lang.flag;
   
   select.appendChild(option);
   
});

/* DEFAULT LANG */
select.value = localStorage.getItem("lang") || "az";

/* LOAD */
loadLanguage(select.value);

/* CHANGE */
select.addEventListener("change", () => {
   
   localStorage.setItem("lang", select.value);
   
   loadLanguage(select.value);
   
});

/* FUNCTION */
function loadLanguage(lang) {
   
   document.getElementById("title").textContent =
      translations[lang].title;
   
   document.getElementById("daysText").textContent =
      translations[lang].days;
   
   document.getElementById("hoursText").textContent =
      translations[lang].hours;
   
   document.getElementById("minutesText").textContent =
      translations[lang].minutes;
   
   document.getElementById("secondsText").textContent =
      translations[lang].seconds;
   
   document.getElementById("btn1").textContent =
      translations[lang].btn1;
   
   document.getElementById("btn2").textContent =
      translations[lang].btn2;
   
   document.getElementById("btn3").textContent =
      translations[lang].btn3;
   
   document.getElementById("btn4").textContent =
      translations[lang].btn4;
   
}