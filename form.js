const products = [
    {
        id: "prod001",
        name: "Smart Watch"
    },
    {
        id: "prod002",
        name: "Wireless Headphones"
    },
    {
        id: "prod003",
        name: "Laptop Stand"
    },
    {
        id: "prod004",
        name: "Bluetooth Speaker"
    }
];


const productSelect = document.querySelector("#product");


products.forEach(product => {

    let option = document.createElement("option");

    option.textContent = product.name;

    option.value = product.id;

    productSelect.appendChild(option);

});


 document.getElementById("lastModified").textContent =
        "Last Modified: " + document.lastModified;