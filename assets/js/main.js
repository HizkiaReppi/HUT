const bonus = document.getElementById("bonus");
const putar = document.getElementById("putar");
const utama = document.getElementById("utama");

klik.addEventListener("click", function munculBonus() {
  if (bonus.style.display === "none") {
    bonus.style.display = "block";
    klik.innerText = "Maaf ne";
  } else {
    bonus.style.display = "none";
    klik.innerText = "Klik lagi";
  }
});

putar.addEventListener("click", function lanjut() {
  if (utama.style.display === "none") {
    utama.style.display = "block";
  } else {
    utama.style.display = "none";
  }
});
