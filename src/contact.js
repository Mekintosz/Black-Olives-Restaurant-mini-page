import map from './assets/map.jpg';

const renderContact = function () {

    const address = document.createElement("p");
    address.innerHTML = "Wybżerza Morskiego 102<br>Swinujście<br>Polska"
    
    const telephone = document.createElement("h3");
    telephone.innerText = "Tel. 71-542-17-23"
    
    const mapImage =  document.createElement("img");
    mapImage.src = map;

    const contact = document.createElement("div");
    const contactInfo = document.createElement("div");
    contact.classList.add("contact-container");
    contactInfo.append(telephone, address);
    contact.append(contactInfo, mapImage);


    const main = document.getElementById("main");
    main.innerHTML = "";
    main.appendChild(contact);
} 

export { renderContact }