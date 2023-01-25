const burgerImage = document.querySelector(".icon-hamburger")
const burgerMobileMenu = document.querySelector(".icon-hamburger-mobile")
const buttonSession = document.querySelector(".button-login")
const buttonMobileSession = document.querySelector(".button-login-mobile")

burgerImage.addEventListener("click", hiddenBurger)
buttonSession.addEventListener("click", starSession)

function hiddenBurger() {
    const ocultarHamburgesa = burgerMobileMenu.classList.contains("inactive")

    if (!ocultarHamburgesa) {
        burgerMobileMenu.classList.add("inactive")
    } else {
        burgerMobileMenu.classList.remove("inactive")
    }
}

function starSession() {
    const ocultarSession = starMobileButton.classList.classList("inactive")

    if (!ocultarSession) {
        starMobileButton.classList.add("inactive")
    } else {
        starMobileButton.classList.remove("inactive")
    }
}






const api = "https://api.escuelajs.co/api/v1/products/"

window
    .fetch(api)
    .then((response) => response.json())
    .then(responseJson => {
        console.log(responseJson);
    })