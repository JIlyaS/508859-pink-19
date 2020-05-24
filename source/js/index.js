var headerBlock = document.querySelector(".header");
var burgerBtn = document.querySelector(".js-burger");


burgerBtn.addEventListener('click', function () {
  headerBlock.classList.toggle('header--active');
});
