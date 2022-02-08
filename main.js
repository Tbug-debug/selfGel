const icon = document.querySelector(".fa-door-closed");
const menu = document.querySelector(".main-thrid");
const menue = document.querySelector("main-thrid-half");
const texted = document.querySelector(".main-texted");
const door = document.querySelector(".door");
const doropen = document.querySelector(".fa-door-open");

function popUp() {
  setTimeout(() => {
    menu.classList.add("hi");
  }, 1000);
  setTimeout(() => {
    door.classList.add("view");
  }, 1000);
  texted.classList.add("hidden");

  menu.classList.add("height");
}

function closeMenu() {
  menu.classList.add("transition");
  setTimeout(() => {
    menu.classList.remove("height");
  }, 1000);
  menu.classList.remove("hi");
  setTimeout(() => {
    texted.classList.remove("hidden");
  }, 2200);
  door.classList.remove("view");
}

icon.addEventListener("click", popUp);
doropen.addEventListener("click", closeMenu);

const black = document.querySelector(".black-ph");
const img = document.querySelector(".top-back-ph");
const circle = document.querySelector(".circle-text");

function showImg() {
  img.classList.add("scal", "trans");
  circle.classList.add("views", "trans", "heights");
}

function clearImg() {
  img.classList.remove("scal", "trans");
  circle.classList.remove("views", "trans", "heights");
}

black.addEventListener("mouseover", showImg);
black.addEventListener("mouseleave", clearImg);

const upto = document.querySelector(".update");

function getTime() {
  const updaetTime = new Date("2022-06-15:00:00:00+0900");
  const currentTime = new Date();
  const milsec = 1000;
  const sec = 60;
  const min = 60;
  const hour = 24;

  const timeOut = updaetTime.getTime() - currentTime.getTime();
  const day = timeOut / (milsec * sec * min * hour);

  const days = String(Math.floor(day)).padStart(2, 0);
  const hours = String(
    updaetTime.getHours() - currentTime.getHours() + 23
  ).padStart(2, "0");
  const minutes = String(
    updaetTime.getMinutes() - currentTime.getMinutes() + 59
  ).padStart(2, "0");
  const seconds = String(
    updaetTime.getSeconds() - currentTime.getSeconds() + 59
  ).padStart(2, "0");

  upto.innerText = `✨ ${days}일 ${hours}시간 ${minutes}분 ${seconds}초 남았습니다 ✨`;
}

getTime();
setInterval(getTime, 1000);

const btn = document.querySelector(".btn");
const info = document.querySelector(".top-text");
const text = document.querySelectorAll(".uptodate");

const showMore = info.classList;
const showText = text[0].classList;
const showTexte = text[1].classList;
const showTextb = text[2].classList;

function showInfo() {
  showMore.toggle("heights");
  setTimeout(() => {
    showText.toggle("views");
    showTexte.toggle("views");
    showTextb.toggle("views");
  }, 300);
  showMore.toggle("views");
  showMore.toggle("trans");
}

btn.addEventListener("click", showInfo);
