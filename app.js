const burgerImage = document.querySelector(".icon-hamburger")
const burgerMobileMenu = document.querySelector(".icon-hamburger-mobile")
const buttonLogin = document.querySelector(".header-login")
const buttonMobileLogin = document.querySelector(".button-login-mobile")
const account = document.querySelector(".account")
const formBtn = document.querySelector(".form-btn")
const boxLogo = document.querySelector(".box-logo")

const user = document.querySelector(".user")
const formPerfil = document.querySelector(".divPerfil")
const btnPerfil = document.querySelector(".form-btn__perfil")

const selectAccount = document.querySelector(".goAccount")
const viewPerfil = document.querySelector(".account-perfil")
const editPerfil = document.querySelector(".edit-button")
const modificatedPerfil = document.querySelector(".perfil")
const cancelEdit = document.querySelector(".cancel-button")


const mainSection = document.querySelector(".main-section")

const headerLogo = document.querySelector(".header-logo")
const carouselContainer = document.querySelector(".carousel")
const navProductos = document.querySelector(".productos")
const mainContainer = document.querySelector(".main-container")
const navOfertas = document.querySelector(".ofertas")
const secOfertas = document.querySelector(".ofertas-container")
const navTemporada = document.querySelector(".temporada")
const secTemporada = document.querySelector(".temporada-container")
const navNosotros = document.querySelector(".nosotros")
const secNosotros = document.querySelector(".nosotros-container")
const navComunidad = document.querySelector(".comunidad")
const secComunidad = document.querySelector(".comunidad-container")
const navPoliticas = document.querySelector(".politicas")
const secPoliticas = document.querySelector(".politicas-container")


burgerImage.addEventListener("click", hiddenBurger)
buttonLogin.addEventListener("click", hiddenLogin)
formBtn.addEventListener("click", hiddenForm)
user.addEventListener("click", hiddenPerfil)
btnPerfil.addEventListener("click", cerrarSesion)
selectAccount.addEventListener("click", selectPerfil)
editPerfil.addEventListener("click", selectEditPerfil)
cancelEdit.addEventListener("click", cancelEditPerfil)
headerLogo.addEventListener("click", home)
navProductos.addEventListener("click", productos)
navOfertas.addEventListener("click", ofertas)
navTemporada.addEventListener("click", temporada)
navNosotros.addEventListener("click", nosotros)
navComunidad.addEventListener("click", comunidad)
navPoliticas.addEventListener("click", politicas)
boxLogo.addEventListener("click", home)

// function home() {
//     const toHome = carouselContainer.classList.contains("inactive")

//     if (toHome) {
//         carouselContainer.classList.toggle("inactive")
//     }
//     mainContainer.classList.add("inactive")
//     secNosotros.classList.add("inactive")
//     secOfertas.classList.add("inactive")
//     secTemporada.classList.add("inactive")
//     secComunidad.classList.add("inactive")
//     secPoliticas.classList.add("inactive")
//     viewPerfil.classList.add("inactive")
// }

function home(){
    const toHome = carouselContainer.classList.contains("inactive")

    if (toHome) {
        carouselContainer.classList.remove("inactive")
    }
    mainContainer.classList.add("inactive")
    secNosotros.classList.add("inactive")
    secOfertas.classList.add("inactive")
    secTemporada.classList.add("inactive")
    secComunidad.classList.add("inactive")
    secPoliticas.classList.add("inactive")
    viewPerfil.classList.add("inactive")
    modificatedPerfil.classList.add("inactive")
}


function productos() {
    const toProductos = mainContainer.classList.contains("inactive")

    if (toProductos) {
        mainContainer.classList.toggle("inactive")
    }
    carouselContainer.classList.add("inactive")
    secNosotros.classList.add("inactive")
    secOfertas.classList.add("inactive")
    secTemporada.classList.add("inactive")
    secComunidad.classList.add("inactive")
    secPoliticas.classList.add("inactive")
    viewPerfil.classList.add("inactive")
    modificatedPerfil.classList.add("inactive")
}

function ofertas() {
    const toOfertas = secOfertas.classList.contains("inactive")

    if (toOfertas) {
        secOfertas.classList.toggle("inactive")
    }
    carouselContainer.classList.add("inactive")
    mainContainer.classList.add("inactive")
    secNosotros.classList.add("inactive")
    secTemporada.classList.add("inactive")
    secComunidad.classList.add("inactive")
    secPoliticas.classList.add("inactive")
    viewPerfil.classList.add("inactive")
    modificatedPerfil.classList.add("inactive")
}

function temporada() {
    const toTemporada = secTemporada.classList.contains("inactive")

    if (toTemporada) {
        secTemporada.classList.toggle("inactive")
    }
    carouselContainer.classList.add("inactive")
    mainContainer.classList.add("inactive")
    secOfertas.classList.add("inactive")
    secNosotros.classList.add("inactive")
    secComunidad.classList.add("inactive")
    secPoliticas.classList.add("inactive")
    viewPerfil.classList.add("inactive")
    modificatedPerfil.classList.add("inactive")
}

function nosotros() {   
    const toNosotros = secNosotros.classList.contains("inactive")

    if (toNosotros) {
        secNosotros.classList.toggle("inactive")
    }
    carouselContainer.classList.add("inactive")
    mainContainer.classList.add("inactive")
    secTemporada.classList.add("inactive")
    secOfertas.classList.add("inactive")
    secComunidad.classList.add("inactive")
    secPoliticas.classList.add("inactive")
    viewPerfil.classList.add("inactive")
    modificatedPerfil.classList.add("inactive")

}

function comunidad() {   
    const toComunidad = secComunidad.classList.contains("inactive")

    if (toComunidad) {
        secComunidad.classList.toggle("inactive")
    }
    carouselContainer.classList.add("inactive")
    mainContainer.classList.add("inactive")
    secTemporada.classList.add("inactive")
    secOfertas.classList.add("inactive")
    secNosotros.classList.add("inactive")
    secPoliticas.classList.add("inactive")
    viewPerfil.classList.add("inactive")
    modificatedPerfil.classList.add("inactive")

}

function politicas() {   
    const toPoliticas = secPoliticas.classList.contains("inactive")

    if (toPoliticas) {
        secPoliticas.classList.toggle("inactive")
    }
    carouselContainer.classList.add("inactive")
    mainContainer.classList.add("inactive")
    secTemporada.classList.add("inactive")
    secOfertas.classList.add("inactive")
    secComunidad.classList.add("inactive")
    secNosotros.classList.add("inactive")
    viewPerfil.classList.add("inactive")
    modificatedPerfil.classList.add("inactive")
}

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

    carouselContainer.classList.add("inactive")
    secNosotros.classList.add("inactive")
    secOfertas.classList.add("inactive")
    secTemporada.classList.add("inactive")
    secComunidad.classList.add("inactive")
    secPoliticas.classList.add("inactive")
}

function selectPerfil() {
    const viewAccount = viewPerfil.classList.contains("inactive")
    
    if (!viewAccount) {
        viewPerfil.classList.add("inactive")
    }
    viewPerfil.classList.remove("inactive")
    formPerfil.classList.add("inactive")
    modificatedPerfil.classList.add("inactive")
    
    carouselContainer.classList.add("inactive")
    mainContainer.classList.add("inactive")
    secNosotros.classList.add("inactive")
    secOfertas.classList.add("inactive")
    secTemporada.classList.add("inactive")
    secComunidad.classList.add("inactive")
    secPoliticas.classList.add("inactive")
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


