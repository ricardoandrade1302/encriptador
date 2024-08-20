const arrayFrase = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

const textArea = document.querySelector(".form-mensaje");
const imagenMuneco = document.querySelector(".resultado-muñeco");
const loaderImg = document.querySelector(".loader");
const mensaje1 = document.querySelector(".resultado-mensaje1");
const mensaje2 = document.querySelector(".resultado-mensaje2");
const botonEncriptar = document.querySelector(".form-boton-encriptar");
const botonDesencriptar = document.querySelector(".form-boton-desencriptar");
const botonCopiar = document.querySelector(".form-boton-copiar");


function encriptarTexto(mensaje){
    let textoEncriptado = "";
    for (let i = 0; i < mensaje.length; i++) {
        let letra = mensaje[i];
        let encriptada = letra;
        for (let j = 0; j < arrayFrase.length; j++) {
            if (letra.toLowerCase() === arrayFrase[j][0]) {
                encriptada = arrayFrase[j][1];
                break;
            }
        } 
        textoEncriptado += encriptada;
    }  
    return textoEncriptado;
}

function desencriptarTexto(mensaje){
    let textoDesencriptado = mensaje;
    for (let i = 0; i < arrayFrase.length; i++){
        let regex = new RegExp(arrayFrase[i][1], "g");
        textoDesencriptado = textoDesencriptado.replace(regex, arrayFrase[i][0]);
    }
    return textoDesencriptado;
}

textArea.addEventListener("input", (e)=>{
    imagenMuneco.style.display = "none";
    loaderImg.classList.remove("hidden");
    mensaje1.textContent= "Capturando mensaje...";
    mensaje2.textContent= "Por favor, espere un momento...";
})

botonEncriptar.addEventListener("click", (e)=>{
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let textoEncriptado = encriptarTexto(mensaje);
    mensaje2.textContent = textoEncriptado;
    botonCopiar.classList.remove("hidden");
    mensaje1.textContent= "EL mensaje encriptado es:";
})

botonDesencriptar.addEventListener("click", (e)=>{
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let textoDesencriptado = desencriptarTexto(mensaje);
    mensaje2.textContent = textoDesencriptado;
    botonCopiar.classList.remove("hidden");
    mensaje1.textContent= "EL mensaje desencriptado es:";
})

botonCopiar.addEventListener("click", ()=>{
    let textoCopiado = mensaje2.textContent;
    navigator.clipboard.writeText(textoCopiado).then(()=>{
    imagenMuneco.style.display="block";
    loaderImg.classList.add("hidden");
    mensaje1.textContent="Copied";
    botonCopiar.classList.add("hidden");
    mensaje2.textContent="";

    });
})