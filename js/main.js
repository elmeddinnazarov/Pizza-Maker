

// Internel Functions
const capitalize = text => text.charAt(0).toUpperCase() + text.slice(1);


// Select Size Section

const sizes = document.querySelectorAll(".size")
const pizza = document.querySelector("#pizza")


// size state

let currentValue = 'medium' // 'small', 'medium', 'large'

sizes.forEach(el => {
    el.onclick = sizeHandler
})


function sizeHandler(e){
    currentValue = e.target.getAttribute("value")
    switch(currentValue){
        case "small":
            pizza.style.width = 55 + "%"
            pizza.style.height = 55 + "%"
            break
        case "medium":
            pizza.style.width = 70 + "%"
            pizza.style.height = 70 + "%"
            break
        case "large":
            pizza.style.width = 90 + "%"
            pizza.style.height = 90 + "%"
            break
    }
}


// Select Crust Section

const crusts = document.querySelectorAll(".crust")


// Crust state

let currenctCrustSrc = null


crusts.forEach(el => {
    el.onclick = productAnimationChanger
})


function productSrcAdder(productSrc) {
    const addedProductImg = document.querySelector(".added-product-img")
    const addedProductIcon = document.querySelector(".added-product-icon")

    addedProductImg.src = productSrc;
    
    if (addedProductImg.classList.contains("added-pr-anime") && addedProductIcon.classList.contains("added-ic-anime")) {
      addedProductImg.classList.remove("added-pr-anime");
      addedProductIcon.classList.remove("added-ic-anime");
    } 
    else {
      addedProductImg.classList.add("added-pr-anime");
      addedProductIcon.classList.add("added-ic-anime");
    }
  }

function productAnimationChanger(e){
    const crustImg = document.querySelector(`#${e.target.id}-crust`);
    currenctCrustSrc = crustImg.src
    productSrcAdder(currenctCrustSrc)

}






// left menu 

// const productBox = document.querySelectorAll(".product-box")
// const productTitle = document.querySelectorAll("product-title")