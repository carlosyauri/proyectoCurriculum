let header = document.getElementById("header")
header.style.opacity = "1"
    //cambio de imagenes de proyectos
let imagenGif = document.getElementById("imagen-gifs");
let imagenLanding = document.getElementById("imagen-landing");
let leerMas = document.getElementById("leerMas");
let leerMasDos = document.getElementById("leerMasDos");
let endText = document.getElementById("endText");
let endTextDos = document.getElementById("endTextDos");
let expand = document.getElementById("expand");
let expandDos = document.getElementById("expandDos");
let cerrar = document.getElementById("cerrar");
let cerrarDos = document.getElementById("cerrarDos");
let text = document.getElementById("text");
let textDos = document.getElementById("textDos");
let inicio = Array.from(document.getElementsByClassName("inicio"))
let middle = Array.from(document.getElementsByClassName("middle"))
let fin = Array.from(document.getElementsByClassName("fin"))
imagenGif.addEventListener("mouseover", ()=>{
    for (let i = 0; i < 1; i++) {
        let element = inicio[i]
        let element2 = middle[i];
        let element3 = fin[i]
        element2.style.opacity = "1"
        element3.style.opacity = "1"
        element.style.opacity = "0"
    }
    setTimeout(()=>{imagenGif.style.opacity="1"},(4000))
})
imagenGif.addEventListener("mouseleave", () =>{
    for (let i = 0; i < 1; i++) {
        let element = inicio[i]
        let element2 = middle[i];
        let element3 = fin[i]
        element2.style.opacity = "0"
        element3.style.opacity = "0"
        element.style.opacity = "1"
    }
})

imagenLanding.addEventListener("mouseover", ()=>{
    for (let i = 1; i < 2; i++) {
        let element = inicio[i]
        let element2 = middle[i];
        let element3 = fin[i]
        element2.style.opacity = "1"
        element3.style.opacity = "1"
        element.style.opacity = "0"
    }
    setTimeout(()=>{imagenLanding.style.opacity="1"},(4000))
})
imagenLanding.addEventListener("mouseleave", () =>{
    for (let i = 1; i < 2; i++) {
        let element = inicio[i]
        let element2 = middle[i];
        let element3 = fin[i]
        element2.style.opacity = "0"
        element3.style.opacity = "0"
        element.style.opacity = "1"
    }
})

leerMas.addEventListener("click", ()=>{
    leerMas.setAttribute("hidden", "")
    endText.removeAttribute("hidden")
    cerrar.removeAttribute("hidden")
    expand.classList.add("extend")
    text.classList.add("extendp")
})

leerMasDos.addEventListener("click", ()=>{
    leerMasDos.setAttribute("hidden", "")
    endTextDos.removeAttribute("hidden")
    cerrarDos.removeAttribute("hidden")
    expandDos.classList.add("extend")
    textDos.classList.add("extendp")
})


cerrar.addEventListener("click", ()=>{
    cerrar.setAttribute("hidden", "")
    endText.setAttribute("hidden", "")
    leerMas.removeAttribute("hidden")
    expand.classList.remove("extend")
    text.classList.remove("extendp")
})
cerrarDos.addEventListener("click", ()=>{
    cerrarDos.setAttribute("hidden", "")
    endTextDos.setAttribute("hidden", "")
    leerMasDos.removeAttribute("hidden")
    expandDos.classList.remove("extend")
    textDos.classList.remove("extendp")
})

