const burgerImage = document.querySelector(".icon-hamburger")
const burgerMobileMenu = document.querySelector(".icon-hamburger-mobile")
const buttonLogin = document.querySelector(".header-login")
const buttonMobileLogin = document.querySelector(".button-login-mobile")
const account = document.querySelector(".account")
const formBtn = document.querySelector(".form-btn")

burgerImage.addEventListener("click", hiddenBurger)
buttonLogin.addEventListener("click", hiddenLogin)
formBtn.addEventListener("click", hiddenForm)

function hiddenBurger() {
    const ocultarHamburgesa = burgerMobileMenu.classList.contains("inactive")

    if (!ocultarHamburgesa) {
        burgerMobileMenu.classList.add("inactive")
    } else {
        burgerMobileMenu.classList.remove("inactive")
    }
    buttonMobileLogin.classList.add("inactive")
}

function hiddenLogin() {
    const ocultarLogin = buttonMobileLogin.classList.contains("inactive")

    if (!ocultarLogin) {
        buttonMobileLogin.classList.add("inactive")
    } else {
        buttonMobileLogin.classList.remove("inactive")
    }
    burgerMobileMenu.classList.add("inactive")
}
function hiddenForm(){
    const ocultarForm = account.classList.contains("inactive")

    if(ocultarForm){
        account.classList.remove('inactive')
        buttonLogin.classList.add("inactive")
        buttonMobileLogin.classList.add("inactive")
    } else {
        burgerMobileMenu.classList.add("inactive")
    }
}






const api = "https://api.escuelajs.co/api/v1/products/"

window
    .fetch(api)
    .then((response) => response.json())
    .then(responseJson => {
        console.log(responseJson);
    })