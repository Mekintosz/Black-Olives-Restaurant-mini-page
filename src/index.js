import './style.css';
import Olives from './assets/olives.svg'
import { renderHome } from './home';
import { renderMenu } from './menu.js';
import { renderContact } from './contact.js';

function makeHeader() {
    const header = document.createElement("header");
    header.classList.add("header");

    const logotype = document.createElement('div');
    logotype.classList.add("logotype");

    const restaurantLogo = document.createElement("img");
    restaurantLogo.src = Olives;
    restaurantLogo.classList.add("header-logo");
  
    const restaurantName = document.createElement("h1");
    restaurantName.classList.add("restaurant-name");
    restaurantName.textContent = "Black Olives";


    logotype.appendChild(restaurantLogo);
    logotype.appendChild(restaurantName);
    header.appendChild(logotype);
    header.appendChild(makeNavigation());
  
    return header;
}

  function makeNavigation() {
    const nav = document.createElement("nav");
  
    const homeButton = document.createElement("button");
    homeButton.classList.add("nav-button");
    homeButton.textContent = "Home";
    homeButton.addEventListener("click", (e) => {
      if (e.target.classList.contains("active")) return;
      setActiveButton(homeButton);
      renderHome();
    });

    const menuButton = document.createElement("button");
    menuButton.classList.add("nav-button");
    menuButton.textContent = "Menu";
    menuButton.addEventListener("click", (e) => {
      if (e.target.classList.contains("active")) return;
      setActiveButton(menuButton);
      renderMenu();
    });
  
    const contactButton = document.createElement("button");
    contactButton.classList.add("nav-button");
    contactButton.textContent = "Contact";
    contactButton.addEventListener("click", (e) => {
      if (e.target.classList.contains("active")) return;
      setActiveButton(contactButton);
      renderContact();
    });
  
    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);
  
    return nav;
  };

  function setActiveButton(button) {
    const buttons = document.querySelectorAll(".nav-button");
  
    buttons.forEach((button) => {
      if (button !== this) {
        button.classList.remove("active");
      }
    });
  
    button.classList.add("active");
  }

  function makeMain() {
    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id", "main");
    return main;
  }

  function makeFooter() {
    const footer = document.createElement("footer");
    footer.classList.add("footer");

    const restaurantLogo = document.createElement("img");
    restaurantLogo.src = Olives;
    restaurantLogo.classList.add("footer-logo");
  
    const madeBy = document.createElement("p");
    madeBy.textContent = `Made by Mekintosz for Black Olives @ ${new Date().getFullYear()}`;

    footer.appendChild(restaurantLogo);
    footer.appendChild(madeBy);
  
    return footer;
  }

const content = document.getElementById("content");

  content.appendChild(makeHeader());
  content.appendChild(makeMain());
  content.appendChild(makeFooter());

setActiveButton(document.querySelector(".nav-button"));
renderHome();