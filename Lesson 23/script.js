"use strict";

// Выбор элементов
const header = document.querySelector("header");
const banner = document.querySelector(".banner");
const bannerBtn = banner.querySelector(".btn");
const topBtn = document.querySelector(".btn-top");
const images = document.querySelectorAll(".image");
const sections = document.querySelectorAll("section");

// Смещение баннера вверх
const headerHeight = header.offsetHeight;
banner.style.marginTop = `-${headerHeight}px`;

// Прокрутка к секции Section 1 (свойство scrollTop)
bannerBtn.onclick = function () {
  const scrollHeight = sections[1].getBoundingClientRect().top + window.scrollY;
  document.documentElement.scrollTop = scrollHeight;
};

// Прокрутка к началу страницы (метод window.scrollTo)
topBtn.addEventListener("click", scrollToTop);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

// Событие scroll
window.addEventListener("scroll", scrollHandler);

function scrollHandler() {
  const scrollY = window.scrollY;
  changeNavStyle(scrollY);
  showTopBtn(scrollY);
  animateImageOnScroll();
  scrollSpy(scrollY);
}

// Изменение стилей панели меню
function changeNavStyle(scrollY) {
  if (scrollY > headerHeight) {
    header.classList.remove("bg-transparent");
    header.classList.add("bg-success");
  } else {
    header.classList.add("bg-transparent");
    header.classList.remove("bg-success");
  }
}

// Скрытие-отображение кнопки вверх
function showTopBtn(scrollY) {
  topBtn.hidden = scrollY < document.documentElement.clientHeight;
}

// Отображение "изображений" при прокрутке
function animateImageOnScroll() {
  for (let image of images) {
    if (
      image.getBoundingClientRect().top + 150 <
      document.documentElement.clientHeight
    ) {
      image.classList.add("animated");
    }
  }
}

// scrollSpy
function scrollSpy(scrollY) {
  for (let section of sections) {
    if (section.offsetTop <= scrollY) {
      document.querySelector(".active").classList.remove("active");
      document
        .querySelector(`a[href="#${section.id}"]`)
        .classList.add("active");
    }
  }
}

// Запрет прокрутки
document.onkeyup = function (event) {
  const windowWidth = window.innerWidth;
  const documentWidth = document.documentElement.clientWidth;
  if (event.code == "KeyA" && document.body.style.overflow != "hidden") {
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${windowWidth - documentWidth}px`;
  } else if (event.code == "KeyB") {
    document.body.style.overflow = "auto";
    document.body.style.paddingRight = 0;
  }
};
