const year = document.querySelector("#year");
const modified = document.querySelector("#lastModified");

year.textContent = new Date().getFullYear();

modified.textContent = `Last Modified: ${document.lastModified}`;

const menuButton = document.querySelector("#menuButton");
const navMenu = document.querySelector("#navMenu");

navMenu.classList.add("hide");

menuButton.addEventListener("click", () => {

    navMenu.classList.toggle("hide");

    if(navMenu.classList.contains("hide")){
        menuButton.innerHTML = "&#9776;";
    }
    else{
        menuButton.innerHTML = "✖";
    }

});