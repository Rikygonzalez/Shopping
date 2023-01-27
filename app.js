const burgerImage = document.querySelector(".icon-hamburger")
const burgerMobileMenu = document.querySelector(".icon-hamburger-mobile")
const buttonLogin = document.querySelector(".header-login")
const buttonMobileLogin = document.querySelector(".button-login-mobile")
const account = document.querySelector(".account")
const formBtn = document.querySelector(".form-btn")

const user = document.querySelector(".user")
const formPerfil = document.querySelector(".form-perfil")
const btnPerfil = document.querySelector(".form-btn__perfil")

burgerImage.addEventListener("click", hiddenBurger)
buttonLogin.addEventListener("click", hiddenLogin)
formBtn.addEventListener("click", hiddenForm)
user.addEventListener("click", hiddenPerfil)
btnPerfil.addEventListener("click", cerrarSesion)

function hiddenBurger() {
    const ocultarHamburgesa = burgerMobileMenu.classList.contains("inactive")

    if (!ocultarHamburgesa) {
        burgerMobileMenu.classList.add("inactive")
    } else {
        burgerMobileMenu.classList.remove("inactive")
        formPerfil.classList.add("inactive")
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
    formPerfil.classList.add("inactive")
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

function hiddenPerfil(){
    const ocultarPerfil = formPerfil.classList.contains('inactive')

    if(ocultarPerfil){
        formPerfil.classList.remove("inactive")
        buttonMobileLogin.classList.add("inactive")
        burgerMobileMenu.classList.add("inactive")
    } else{
        formPerfil.classList.add("inactive")
        buttonMobileLogin.classList.add("inactive")
    }
}

function cerrarSesion(){
    const ocultarSesion = formPerfil.classList.contains("inactive")
    
    if(!ocultarSesion){
        account.classList.add("inactive")
        formPerfil.classList.add("inactive")
        buttonLogin.classList.remove("inactive")
        buttonMobileLogin.classList.add("inactive")
    }
}