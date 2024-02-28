const mainImg = document.getElementById("mainImg");
const focusThumbnail = document.querySelectorAll(".thumbnail");

const remove = document.getElementById("minus");
const add = document.getElementById("plus");

const count = document.getElementById("count");
 
let initialCount = 0;

focusThumbnail.forEach(thumbnail => {
    thumbnail.addEventListener("click", () => {
        const imgSelected = thumbnail.getAttribute("id");
        changeImg(imgSelected);
    })
})

const changeImg = (imgSelected) => {
    if( imgSelected === "product1Thumbnail") {
        console.log(imgSelected);
        mainImg.style.backgroundImage = "url('images/image-product-1.jpg')"
    } else if (imgSelected === "product2Thumbnail") {
        console.log(imgSelected);
        mainImg.style.backgroundImage = "url('images/image-product-2.jpg')"

    } else if (imgSelected === "product3Thumbnail") {
        console.log(imgSelected);
        mainImg.style.backgroundImage = "url('images/image-product-3.jpg')"

    } else {
        console.log(imgSelected);
        mainImg.style.backgroundImage = "url('images/image-product-4.jpg')"

    }
}
const addItems = () => {
    initialCount++;
}
const removeItems = () => {
    initialCount--;
}

// const itemsInCart = () => {
//     if()
// }



