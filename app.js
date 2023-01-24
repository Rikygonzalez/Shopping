const burgerImage = document.querySelector(".icon-hamburger")
const burgerMobileMenu = document.querySelector(".icon-hamburger-mobile")

burgerImage.addEventListener("click", hiddenBurger)

function hiddenBurger() {
    const ocultarHamburgesa = burgerMobileMenu.classList.contains("inactive")

    if (!ocultarHamburgesa) {
        burgerMobileMenu.classList.add("inactive")
    } else {
        burgerMobileMenu.classList.remove("inactive")
    }

}






const api = "https://api.escuelajs.co/api/v1/products/"

window
    .fetch(api)
    .then((response) => response.json())
    .then(responseJson => {
        console.log(responseJson);
    })