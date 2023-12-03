import blackPasta from './assets/black-pasta.jpg';
import shrimpPasta from './assets/shrimp-pasta.jpg';
import blackOlivesDish from './assets/black-olives-dish.jpg';

const renderMenu = () => {

    function createMenuCard(item, price, image) {

        const card = document.createElement("div");

        const itemName = document.createElement("h3");
        const itemPrice = document.createElement("p");
        const itemImage = document.createElement("img");

        itemName.innerText = item;
        itemPrice.innerText = price;
        itemImage.src = image;

        card.append(itemName, itemPrice, itemImage)

        return card
    };



const main = document.getElementById("main");
main.innerHTML = "";
main.append(createMenuCard("Black pasta", "28 PLN", blackPasta),
            createMenuCard("Shrimp pasta", "24 PLN", shrimpPasta),
            createMenuCard("Black olives", "17 PLN", blackOlivesDish)
            );
};

export { renderMenu }