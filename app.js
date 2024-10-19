const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

const products = [
    {
        id: 1,
        title: "Complete",
        desc: "A complete skateboard ready to shred!",
        price: 2500,
        colors: [
            {
                code: "Almost",
                img: "./img/skating/skateboard.png"
            },
            {
                code: "Element",
                img: "./img/skating/skateboard.png"
            },
        ],
    },
    {
        id: 2,
        title: "Deck",
        desc: "A fresh deck with that fresh pop!",
        price: 1000,
        colors: [
            {
                code: "Blank",
                img: "./img/skating/decks.webp"
            },
            {
                code: "Gripped",
                img: "./img/skating/decks.webp"
            },
        ],
    },
    {
        id: 3,
        title: "Wheels",
        desc: "A fresh set of wheels ready to melt the road's tar!",
        price: 500,
        colors: [
            {
                code: "White",
                img: "./img/skating/wheels.webp"
            }],
    },
    {
        id: 4,
        title: "Trucks",
        desc: "A sturdy pair of trucks ready to spark some metal!",
        colors: [
            {
                code: "Steel",
                img: "./img/skating/trucks.png"
            }],
        price: 700,
    },
    {
        id: 5,
        title: "Bearings",
        desc: "A fresh set of brearings to spin you ahead in time!",
        colors: [
            {
                code: "ABEC 5",
                img: "./img/skating/bearings.webp"
            }],
        price: 200,
    },
];

let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductDesc = document.querySelector(".productDesc");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        slideNext(index);
        chooseProduct(index)
    });
});

function updateDisplayedProduct(index)
{
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "R " + choosenProduct.price;
    currentProductDesc.textContent = choosenProduct.desc;
    currentProductImg.src = choosenProduct.colors[0].img;
    currentProductColors.forEach((color, index) => {
        color.style.backgroundColor = choosenProduct.colors[index].code;
    });
}

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", ()=>{
        currentProductImg.src = choosenProduct.colors[index].img;
        console.log("next color...")
    });
});

currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", ()=>{
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";    
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});

const payment = document.querySelector(".payment");
const productBtn = document.querySelector(".productBtn");
const closeButton = document.querySelector(".close");

productBtn.addEventListener("click", ()=>{
    payment.style.display = "flex";
});

closeButton.addEventListener("click", ()=>{
    payment.style.display = "none";
});



function chooseProduct(index)
{
    choosenProduct = products[index];
    updateDisplayedProduct(index);
}

function slideNext(index)
{
    wrapper.style.transform = `translateX(${-100*index}vw)`
    console.log("next...")
}


console.log(wrapper)

wrapper.style.transform = "translateX(-100vw)"