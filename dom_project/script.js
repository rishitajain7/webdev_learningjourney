const services = [
    {
        name: "Dry Cleaning",
        price: 200,
        image: "images/dry-cleaning.avif"
    },
    {
        name: "Wash & Fold",
        price: 150,
        image: "images/wash-fold.jpg"
    },
    {
        name: "Ironing",
        price: 100,
        image: "images/ironing.jpg"
    },
    {
        name: "Premium Laundry",
        price: 300,
        image: "images/preminum.jpg"
    },
    {
        name: "Shoe Cleaning",
        price: 250,
        image: "images/shoes.jpg"
    }
];

const serviceName = document.getElementById("serviceName");
const servicePrice = document.getElementById("servicePrice");
const serviceImage = document.getElementById("serviceImage");

const addBtn = document.getElementById("addBtn");
const skipBtn = document.getElementById("skipBtn");

const cartItems = document.getElementById("cartItems");
const totalPrice = document.getElementById("totalPrice");

const bookingForm = document.getElementById("bookingForm");

let index = 0;
let total = 0;
let serial = 1;

function displayService(){
    serviceName.innerText = services[index].name;
    servicePrice.innerText = "₹" + services[index].price;
    serviceImage.src = services[index].image;
        }

displayService();
addBtn.onclick = function(){
        const emptyRow = document.getElementById("emptyRow");
    if(emptyRow){
        emptyRow.remove();
    }

    const row = document.createElement("tr");
        row.innerHTML = `
        <td>${serial}</td>
        <td>${services[index].name}</td>
        <td>₹${services[index].price}</td>
    `;

    cartItems.appendChild(row);
total += services[index].price;
totalPrice.innerText = "₹" + total;
        serial++;
        index++;

    if(index >= services.length){
        index = 0;
    }
    displayService();};

skipBtn.onclick = function(){
        index++;
    if(index >= services.length){
        index = 0;
    }

    displayService();

};