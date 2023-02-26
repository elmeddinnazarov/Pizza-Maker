

// Internel Functions
const capitalize = text => text.charAt(0).toUpperCase() + text.slice(1);




// Product Menu

const product = document.querySelectorAll("#product")
const pizzaBack = document.querySelector("#pizza-back")




// Product State

let productValue = null;
let draggedEl = null;
let currentProduct = null;

product.forEach(el => {
    el.addEventListener("mousedown", e => {
        onMouseDownHandler(el);
        productValue = e.target.getAttribute("value");
    });
});


document.addEventListener("mousemove", onMousweMoveHandler);

document.addEventListener("mouseup", onMouseUpHandler);


function onMouseDownHandler(el) {
    draggedEl = el.cloneNode(true);
    let rect = el.getBoundingClientRect();
    console.log(rect);
    draggedEl.style.position = "absolute";
    draggedEl.style.top = rect.top + "px";
    draggedEl.style.left = rect.left + "px";
    draggedEl.style.width = rect.width + 15 + "px";
    draggedEl.style.height = rect.height + 15 + "px";
    document.body.append(draggedEl);
}


function onMousweMoveHandler(e){
    if (draggedEl){
        rect = draggedEl.getBoundingClientRect();
        draggedEl.style.top = (e.clientY - rect.height/2) + "px"; 
        draggedEl.style.left = (e.clientX - rect.width/2) + "px"; 
    }
}


function onMouseUpHandler(){
    draggedEl.remove();
}



// Select Size Section

const sizes = document.querySelectorAll(".size")
const pizza = document.querySelector("#pizza")
const pizzaProducts = document.querySelectorAll(".pizza-products")



// size state

let currentPizzaValue = 'medium' // 'small', 'medium', 'large'
const defaultSize = 320

sizes.forEach(el => {
    el.onclick = sizeHandler
})


function sizeHandler(e){
    currentPizzaValue = e.target.getAttribute("value")
    switch(currentPizzaValue){
        case "small":
            pizza.style.width = 55 + "%"
            pizza.style.height = 55 + "%"
            pizzaProducts.forEach(el => {
                
                el.style.width = defaultSize * 0.85 + "px"
                el.style.height = defaultSize * 0.85 + "px"
            });

            break

        case "medium":
            pizza.style.width = 70 + "%"
            pizza.style.height = 70 + "%"
            pizzaProducts.forEach(el => {
                
                el.style.width = defaultSize + "px"
                el.style.height = defaultSize + "px"
            });
            break
        case "large":
            pizza.style.width = 90 + "%"
            pizza.style.height = 90 + "%"
            pizzaProducts.forEach(el => {
                
                el.style.width = defaultSize * 1.4 + "px"
                el.style.height = defaultSize * 1.4 + "px"
            });
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

const productsList = document.querySelector(".products-list")
const productTitle = document.querySelectorAll(".product-title")
const productIcon = document.querySelectorAll(".pr-icon")


//  Add Section
// productTitle.forEach(element => {
//     console.log(element.innerText);

// });


// State
let parentElement = null



//  Remove Section

productIcon.forEach(icon => {

    icon.onclick = e => {
        e.target.style.backgroundColor = "rgb(209, 67, 20)"
        e.target.parentElement.classList.add("remove-anim")

    }
});



// Product Slide Section

// const menuTitles = document.querySelectorAll(".pr-title")
// const caruselActive = document.querySelector(".active")
// const caruselItem = document.querySelectorAll(".carousel-item")



// caruselItem.forEach(element => {

// });