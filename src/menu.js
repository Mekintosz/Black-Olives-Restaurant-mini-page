import blackPasta from "./assets/black-pasta.jpg";
import shrimpPasta from "./assets/shrimp-pasta.jpg";
import blackOlivesDish from "./assets/black-olives-dish.jpg";

const MENU_ITEMS = [
  {
    name: "Black pasta",
    price: "28 PLN",
    image: blackPasta,
    alt: "Plate of squid-ink black pasta garnished with herbs",
  },
  {
    name: "Shrimp pasta",
    price: "24 PLN",
    image: shrimpPasta,
    alt: "Shrimp pasta with cherry tomatoes served in a bowl",
  },
  {
    name: "Black olives",
    price: "17 PLN",
    image: blackOlivesDish,
    alt: "Bowl filled with marinated black olives and herbs",
  },
];

const createMenuCard = ({ name, price, image, alt }) => {
  const card = document.createElement("article");
  card.className = "menu-card";

  const title = document.createElement("h3");
  title.textContent = name;

  const cost = document.createElement("p");
  cost.className = "menu-price";
  cost.textContent = price;

  const photo = document.createElement("img");
  photo.src = image;
  photo.alt = alt;

  card.append(title, cost, photo);
  return card;
};

const renderMenu = (root) => {
  const menu = document.createElement("section");
  menu.className = "menu";
  menu.append(...MENU_ITEMS.map(createMenuCard));

  const target = root ?? document.getElementById("main");
  if (!target) return;
  target.replaceChildren(menu);
};

export { renderMenu };
