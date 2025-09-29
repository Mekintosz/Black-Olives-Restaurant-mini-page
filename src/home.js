import olivesBranch from "./assets/olives-branch.svg";

const createIntro = () => {
  const wrapper = document.createElement("section");
  wrapper.className = "home-intro";

  const heading = document.createElement("h2");
  heading.className = "title";
  heading.textContent = "What Black Olives are and what we do?";

  const paragraph = document.createElement("p");
  paragraph.className = "main-info";
  paragraph.textContent =
    "Black Olives is a Mediterranean-inspired casual dining experience. We cook every dish with fresh ingredients sourced directly from the Mediterranean region of Rusco. As a family-run establishment, we value customer satisfaction and quality above all. We are delighted to welcome you to our family.";

  wrapper.append(heading, paragraph);
  return wrapper;
};

const createIllustration = () => {
  const image = document.createElement("img");
  image.className = "branch-large";
  image.alt = "Illustration of olive branches";
  image.src = olivesBranch;
  return image;
};

const renderHome = () => {
  const container = document.createElement("div");
  container.className = "home";
  container.append(createIntro(), createIllustration());

  const main = document.getElementById("main");
  if (!main) return;
  main.replaceChildren(container);
};

export { renderHome };
