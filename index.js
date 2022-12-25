/* Navigation menu */

const navigationMenu = document.querySelector(".navigation-menu");
const navigationItems = navigationMenu.querySelectorAll(
  ".navigation-menu__link",
);
const burger = document.querySelector(".burger");
const burgerRotate = `burger_rotate`;
const navigationMenuActiveLink = `navigation-menu_active_link`;
const navigationMenuVisible = `navigation-menu_visible`;

navigationItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    for (let nav of navigationItems) {
      nav.classList.remove(`${navigationMenuActiveLink}`);
      navigationMenu.classList.remove(`${navigationMenuVisible}`);
      burger.classList.remove(`${burgerRotate}`);
    }
    e.target.classList.add(`${navigationMenuActiveLink}`);
  });
});

burger.addEventListener("click", (e) => {
  navigationMenu.classList.toggle(`${navigationMenuVisible}`);
  burger.classList.toggle(`${burgerRotate}`);
});

/* Emblem Anchor */

const emblems = document.querySelectorAll(".emblem");

emblems.forEach((item) => {
  item.addEventListener("click", (e) => {
    window.location.href = `index.html#`;
    for (let nav of navigationItems) {
      nav.classList.remove(`${navigationMenuActiveLink}`);
    }
    navigationItems[0].classList.add(`${navigationMenuActiveLink}`);
  });
});

/* Episodes */

const episodesButton = document.querySelector(".episodes__button");
let epsisodesTitle = document.querySelector(".episodes__title");
const episdodesLibrary = document.querySelectorAll(".library__item");
const library__item_unvisible = `library__item_unvisible`;
isLatestEpisodes = true;

episodesButton.addEventListener("click", (e) => {
  let buttonContent = isLatestEpisodes
    ? `View latest episodes`
    : `View all episodes`;
  let titleContent = isLatestEpisodes ? `All episodes` : `Latest episodes`;

  if (isLatestEpisodes) {
    episdodesLibrary.forEach((item) =>
      item.classList.remove(`${library__item_unvisible}`),
    );
    isLatestEpisodes = false;
  } else {
    episdodesLibrary.forEach((item, idx) => {
      idx != 0 ? item.classList.add(`${library__item_unvisible}`) : null;
    });
    isLatestEpisodes = true;
  }
  episodesButton.textContent = buttonContent;
  epsisodesTitle.textContent = titleContent;
});

/* Subscribe */

const subscribesForm = document.querySelector(".subscribes__form");
const formName = subscribesForm.querySelector(".name");
const formEmail = subscribesForm.querySelector(".email");

subscribesForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (formName.value && formEmail.value) {
    alert(`"${formName.value}", your subscription was successful!`);
  } else {
    alert("Please, fill all fields!");
  }
});
