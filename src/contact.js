import map from './assets/map.jpg';

const renderContact = function () {

    const address = document.createElement("p");
    address.innerText = "ul. Wtbżerza Morskiego 102, Swinujście, Polska"
    
    const telephone = document.createElement("p");
    telephone.innerText = "71-542-17-23"
    
    const mapImage =  document.createElement("img");
    mapImage.src = map;

    const contact = document.createElement("div");
    contact.append(address, telephone, mapImage);

    const main = document.getElementById("main");
    main.innerHTML = "";
    main.appendChild(contact);
} 

export { renderContact }