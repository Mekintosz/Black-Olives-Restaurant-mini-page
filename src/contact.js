import map from "./assets/map.jpg";

const createContactInfo = () => {
  const wrapper = document.createElement("section");
  wrapper.className = "contact-info";

  const telephone = document.createElement("h3");
  telephone.textContent = "Tel. 71-542-17-23";

  const address = document.createElement("p");
  address.innerHTML = "Wybrzeża Morskiego 102<br>Świnoujście<br>Polska";

  wrapper.append(telephone, address);
  return wrapper;
};

const createMap = () => {
  const image = document.createElement("img");
  image.src = map;
  image.alt =
    "Map showing the location of Black Olives restaurant in Świnoujście";
  image.loading = "lazy";
  return image;
};

const renderContact = (root) => {
  const container = document.createElement("div");
  container.className = "contact-container";
  container.append(createContactInfo(), createMap());

  const target = root ?? document.getElementById("main");
  if (!target) return;
  target.replaceChildren(container);
};

export { renderContact };
