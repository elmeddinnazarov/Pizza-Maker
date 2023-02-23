const product =  document.querySelectorAll("#product")
const productsMenu = document.querySelectorAll(".products")
const subTitle = document.querySelector(".sub-title")


// product state 

let menuType = ''
let nextIndex = 0




//use function

const capitalize = text => text.charAt(0).toUpperCase() + text.slice(1);




//product selection

product.forEach(el => {
    el.onclick = animation
})


function animation(){
    productsMenu.forEach((menu, index) => {
        if (menu.classList.contains("seen")){
            nextIndex = index + 1
            menu.classList.remove("seen")
            menu.classList.add("hidden")
            menuType = productsMenu[nextIndex].getAttribute("menu-type")

            if (nextIndex >= productsMenu.length) {
                nextIndex = 0;
            }
        }
    })
    productsMenu[nextIndex].classList.remove("hidden")
    productsMenu[nextIndex].classList.add("seen")
    console.log(menuType);
    subTitle.textContent = capitalize(menuType)
}


// select size

const sizes = document.querySelectorAll(".size")
const pizza = document.querySelector("#pizza")


// size state

let currentValue = 'medium' // 'small', 'medium', 'large'


console.log(sizes);

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