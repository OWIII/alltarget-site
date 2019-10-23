'use strict';
var menuButton = document.querySelector(".ham4");
var menu = document.querySelector(".mobile-menu");
var search = document.querySelector(".search");
var boxSearch = document.querySelector(".popup-search");
var insertSearch = document.querySelector("[name=header-search]");
var blocksOfShow = document.querySelectorAll(".articles-text");
var linksOfShow = document.querySelectorAll(".block-show");
var enter = document.querySelector(".login");
var modalLogin = document.querySelector(".modal-login");
var inputLogin = document.querySelector("[name=login]");
var loginForm = document.querySelector(".login_form");
var password = document.querySelector("[name=password]");
var login = document.querySelector("[name=login]");
var wrapperAll = document.querySelector('.wrapper-all');
var enterMobile = document.querySelector(".enter-link");

// Слайдер:
$(document).ready(function() {
  $('.services--slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    prevArrow: null,
    nextArrow: null,
    dotsClass: 'dots-style',
  });
});

// Переключатель мобильного меню:
menuButton.addEventListener("click", function() {
  menuButton.classList.toggle('active');
  menu.classList.toggle("show");
});

// Появляющеся окошко с поиском:
const toggleSearh = () => {
  boxSearch.classList.toggle('show');
  insertSearch.focus();
}
search.addEventListener('click', e => {
  e.stopPropagation();
  toggleSearh();
});
document.addEventListener('click', e => {
  let target = e.target;
  let its_boxSearch = target == boxSearch || boxSearch.contains(target);
  let its_search = target == search;
  let search_is_active = boxSearch.classList.contains('show');
  if (!its_boxSearch && !its_search && search_is_active) {
    toggleSearh();
  }
})

// Появление блоков с текстом и ссылок при скролле:
if (document.documentElement.clientWidth < 1024) {
  for (let i = 0; i < blocksOfShow.length; i++) {
    blocksOfShow[i].classList.add("revealator-fade");
    blocksOfShow[i].classList.add("revealator-delay1");
  }
  for (let i = 0; i < linksOfShow.length; i++) {
    linksOfShow[i].classList.add("revealator-fade");
    linksOfShow[i].classList.add("revealator-delay1");
  }
}
// Появляющеся окошко с авторизацией:
const toggleLogin = () => {
  modalLogin.classList.toggle('show');
  inputLogin.focus();
  wrapperAll.classList.toggle("blur");
}

enter.addEventListener('click', e => {
  e.stopPropagation();
  toggleLogin();
});

document.addEventListener('click', e => {
  let target = e.target;
  let its_modalLogin = target == modalLogin || modalLogin.contains(target);
  let its_enter = target == enter;
  let login_is_active = modalLogin.classList.contains('show');
  if (!its_modalLogin && !its_enter && login_is_active) {
    toggleLogin();
  }
});

loginForm.addEventListener("submit", function(e) {
  if (!password.value && !login.value) {
    e.preventDefault();
    alert('Введите, пожалуйста, логин и пароль');
  } else {
    if (!login.value) {
      e.preventDefault();
      alert('Введите, пожалуйста, логин');
    }
    if (!password.value) {
      e.preventDefault();
      alert('Введите, пожалуйста, пароль');
    }
  }
});

enterMobile.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalMobileLogin.classList.add('show');
    wrapperAll.classList.add("blur");
    login.focus();
  });