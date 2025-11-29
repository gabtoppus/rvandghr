document.getElementById("heart").onclick = function () {
  document.getElementById("letter").style.display = "block";
  this.style.display = "none";
};
const pages = document.querySelectorAll(".page");

document.querySelectorAll(".next-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const nextId = btn.getAttribute("data-next");
    pages.forEach((p) => p.classList.remove("active"));
    document.getElementById(nextId).classList.add("active");
  });
});

document.querySelectorAll(".prev-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const prevId = btn.getAttribute("data-prev");
    pages.forEach((p) => p.classList.remove("active"));
    document.getElementById(prevId).classList.add("active");
  });
});
const heartsContainer = document.getElementById("hearts-container");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart-float");
  heart.innerText = "❤️";

  heart.style.left = Math.random() * 100 + "vw";

  heart.style.animationDuration = 4 + Math.random() * 4 + "s";

  heart.style.fontSize = 15 + Math.random() * 25 + "px";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);
}
setInterval(createHeart, 500);