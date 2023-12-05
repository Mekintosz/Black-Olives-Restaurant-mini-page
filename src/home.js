import olivesBranch from './assets/olives-branch.svg'

const renderHome = function () {

const home = document.createElement("div");
home.classList.add("home")

const name = document.createElement("h2");
name.innerText = "What Black Olives are and what we do?";
name.classList.add("title");

const branchImage = document.createElement("img");
branchImage.src = olivesBranch;
branchImage.classList.add("branch-large")

const mainInfo = document.createElement("p");
mainInfo.innerText = "Black Olives is mediterranean inspired casual dining experience. We cook all our dishes out of fresh ingredients brought straight from mediterranean region od Rusco. We are family run establishment who focus on customer satisfaction and quality. We are delighted to welcome you to our family.";
mainInfo.classList.add("main-info")

const textContainer = document.createElement("div");
textContainer.append(name, mainInfo);
textContainer.classList.add("text-container")

home.appendChild(textContainer);
home.appendChild(branchImage);

const main = document.getElementById("main");
main.innerHTML = "";
main.appendChild(home);

}

export { renderHome }



  