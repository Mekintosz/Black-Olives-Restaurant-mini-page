import "./style.css";
import Olives from "./assets/olives.svg";
import { renderHome } from "./home";
import { renderMenu } from "./menu";
import { renderContact } from "./contact";

const routes = [
  { key: "home", label: "Home", renderer: renderHome },
  { key: "menu", label: "Menu", renderer: renderMenu },
  { key: "contact", label: "Contact", renderer: renderContact },
];

const createHeader = () => {
  const header = document.createElement("header");
  header.className = "header";
  header.append(createBranding(), createNavigation());
  return header;
};

const createBranding = () => {
  const wrapper = document.createElement("div");
  wrapper.className = "logotype";

  const logo = document.createElement("img");
  logo.src = Olives;
  logo.alt = "Black Olives restaurant logo";
  logo.className = "header-logo";

  const name = document.createElement("h1");
  name.className = "restaurant-name";
  name.textContent = "Black Olives";

  wrapper.append(logo, name);
  return wrapper;
};

const createNavigation = () => {
  const nav = document.createElement("nav");

  routes.forEach(({ key, label, renderer }, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "nav-button";
    button.dataset.route = key;
    button.textContent = label;
    button.addEventListener("click", () =>
      activateRoute(key, renderer, button)
    );

    if (index === 0) {
      button.classList.add("active");
      button.setAttribute("aria-current", "page");
    }

    nav.append(button);
  });

  return nav;
};

const createMain = () => {
  const main = document.createElement("main");
  main.className = "main";
  main.id = "main";
  return main;
};

const createFooter = () => {
  const footer = document.createElement("footer");
  footer.className = "footer";

  const madeBy = document.createElement("p");
  madeBy.textContent = `Made by Mekintosz for Black Olives @ ${new Date().getFullYear()}`;

  footer.append(createFooterLogo(), madeBy, createFooterLogo());
  return footer;
};

const createFooterLogo = () => {
  const logo = document.createElement("img");
  logo.src = Olives;
  logo.alt = "Olives icon";
  logo.className = "footer-logo";
  return logo;
};

const activateRoute = (key, renderer, button) => {
  const main = document.getElementById("main");
  if (!main) return;

  setActiveButton(button);
  renderer(main);
  updateDocumentTitle(key);
};

const setActiveButton = (activeButton) => {
  const buttons = document.querySelectorAll(".nav-button");
  buttons.forEach((button) => {
    const isActive = button === activeButton;
    button.classList.toggle("active", isActive);
    if (isActive) {
      button.setAttribute("aria-current", "page");
    } else {
      button.removeAttribute("aria-current");
    }
  });
};

const updateDocumentTitle = (key) => {
  const route = routes.find((entry) => entry.key === key);
  if (!route) return;
  document.title = `Black Olives | ${route.label}`;
};

const bootstrap = () => {
  const content = document.getElementById("content");
  if (!content) return;

  const header = createHeader();
  const main = createMain();
  const footer = createFooter();

  content.append(header, main, footer);
  routes[0]?.renderer(main);
  updateDocumentTitle(routes[0]?.key ?? "home");
};

bootstrap();
