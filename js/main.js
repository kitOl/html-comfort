if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (let i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

const sidebarToggleBtn = document.querySelector(".menu-icon");
const sidebar = document.querySelector(".sidebar");

sidebarToggleBtn.addEventListener("click", function () {
  //   console.log("click");
  sidebarToggleBtn.classList.toggle("menu-icon-active");
  sidebar.classList.toggle("sidebar--mobile-active");
});

const btnMore = document.querySelector(".btn-more");
const hiddenCards = document.querySelectorAll(".card-link--hidden");

btnMore.addEventListener("click", function () {
  hiddenCards.forEach(function (item) {
    item.classList.remove("card-link--hidden");
  });
});

const widgets = document.querySelectorAll(".widget");

widgets.forEach(function (widget) {
  widget.addEventListener("click", function (e) {
    if (e.target.classList.contains("widget__title")) {
      e.target.classList.toggle("widget__title--active");
      e.target.nextElementSibling.classList.toggle("widget__body--hidden");
    }
  });
});

const checkMetroAny = document.querySelector("#location-05");
const topLocationCheckboxes = document.querySelectorAll(
  "[data-location-param]"
);
// const allLocationCheckboxes = document.querySelectorAll(".location__checkbox");

checkMetroAny.addEventListener("change", function () {
  console.log("any");
  if (checkMetroAny.checked) {
    topLocationCheckboxes.forEach(function (item) {
      item.checked = false;
    });
    // checkMetroAny.checked = true;
  }
});

topLocationCheckboxes.forEach(function (item) {
  item.addEventListener("change", function () {
    if (item.checked) {
      checkMetroAny.checked = false;
    }
  });
});

const hiddenOptionsBtn = document.querySelector(".widget__btn-hidden--show");
const optionsHidden = document.querySelectorAll(".checkbox--hidden");
const btnHiddenOptionsText = "Скрыть доп. опции";
const btnShowOptionsText = "Показать еще";

hiddenOptionsBtn.addEventListener("click", function () {
  if (hiddenOptionsBtn.dataset.options == "hidden") {
    optionsHidden.forEach(function (option) {
      option.style.display = "block";
      // option.classList.toggle("checkbox--hidden");
    });

    hiddenOptionsBtn.innerText = btnHiddenOptionsText;
    hiddenOptionsBtn.dataset.options = "visible";
  } else if (hiddenOptionsBtn.dataset.options == "visible") {
    optionsHidden.forEach(function (option) {
      option.style.display = "none";
      // option.classList.toggle("checkbox--hidden");
    });
    hiddenOptionsBtn.innerText = btnShowOptionsText;
    hiddenOptionsBtn.dataset.options = "hidden";
  }
});
