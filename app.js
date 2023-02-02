const burgerImage = document.querySelector(".icon-hamburger")
const burgerMobileMenu = document.querySelector(".icon-hamburger-mobile")
const buttonLogin = document.querySelector(".header-login")
const buttonMobileLogin = document.querySelector(".button-login-mobile")
const account = document.querySelector(".account")
const formBtn = document.querySelector(".form-btn")

const user = document.querySelector(".user")
const formPerfil = document.querySelector(".divPerfil")
const btnPerfil = document.querySelector(".form-btn__perfil")

const selectAccount = document.querySelector(".goAccount")
const viewPerfil = document.querySelector(".account-perfil")
const editPerfil = document.querySelector(".edit-button")
const modificatedPerfil = document.querySelector(".perfil")
const cancelEdit = document.querySelector(".cancel-button")

const headerLogo = document.querySelector(".header-logo")

const mainContainer = document.querySelector(".main-container")
const mainSection = document.querySelector(".main-section")

const navNosotros = document.querySelector(".nosotros")
const secNosotros = document.querySelector(".nosotros-container")
// const carouselContainer = document.querySelector("carousel")

burgerImage.addEventListener("click", hiddenBurger)
buttonLogin.addEventListener("click", hiddenLogin)
formBtn.addEventListener("click", hiddenForm)
user.addEventListener("click", hiddenPerfil)
btnPerfil.addEventListener("click", cerrarSesion)
selectAccount.addEventListener("click", selectPerfil)
editPerfil.addEventListener("click", selectEditPerfil)
cancelEdit.addEventListener("click", cancelEditPerfil)
headerLogo.addEventListener("click", home)
navNosotros.addEventListener("click", nosotros)

function nosotros() {   
    const toNosotros = secNosotros.classList.contains("inactive")

    if (toNosotros) {
        secNosotros.classList.toggle("inactive")
    }

}

function home(){
    location.reload()
}

// function backHome() {
//     if (goHome) {
//         mainContainer.classList.remove("inactive")
//     }
//     viewPerfil.classList.remove("inactive")
//     burgerMobileMenu.classList.add("inactive")
//     modificatedPerfil.classList.add("inactive")
//     viewPerfil.classList.add("inactive")
//     formPerfil.classList.add("inactive")
//     buttonMobileLogin.classList.add("inactive")
// }

function cancelEditPerfil() {
    const stopEditPerfil = cancelEdit.classList.contains("inactive")

    if (!stopEditPerfil) {
        modificatedPerfil.classList.add("inactive")
        mainContainer.classList.add("inactive")
    }
    viewPerfil.classList.remove("inactive")
    mainContainer.classList.add("inactive")
    burgerMobileMenu.classList.add("inactive")
}

function selectEditPerfil() {
    const viewEditPerfil = modificatedPerfil.classList.contains("inactive")

    if (viewEditPerfil) {
        modificatedPerfil.classList.remove("inactive")
        mainContainer.classList.add("inactive")
    }
    viewPerfil.classList.add("inactive")
    mainContainer.classList.add("inactive")
    burgerMobileMenu.classList.add("inactive")
    formPerfil.classList.add("inactive")
}

function selectPerfil() {
    const viewAccount = viewPerfil.classList.contains("inactive")
    
    if (!viewAccount) {
        viewPerfil.classList.add("inactive")
    }
    viewPerfil.classList.remove("inactive")
    formPerfil.classList.add("inactive")
    modificatedPerfil.classList.add("inactive")
    mainContainer.classList.add("inactive")

}

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
        modificatedPerfil.classList.add("inactive")
        viewPerfil.classList.add("inactive")
        mainContainer.classList.remove("inactive")
    
    }
}


