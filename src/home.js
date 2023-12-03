import olivesBranch from './assets/olives-branch.svg'

const renderHome = function () {

const home = document.createElement("div");
home.classList.add("home")

const name = document.createElement("h1");
name.innerText = "Who we are?";
name.classList.add("title");

const branchImage = document.createElement("img");
branchImage.src = olivesBranch;
branchImage.classList.add("branch-large")

const mainInfo = document.createElement("p");
mainInfo.innerText = "We are delighted to invite you for opening of new mediterranean restaurant in the town. We are the Black Olives.";
mainInfo.classList.add("main-info")

home.appendChild(name);
home.appendChild(mainInfo);
mainInfo.appendChild(branchImage);

const main = document.getElementById("main");
main.innerHTML = "";
main.appendChild(home);

}

export { renderHome }



  