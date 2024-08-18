//Declaracion de variables
const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const botonCopiar = document.querySelector(".copiar");
const mensajeInformativo = document.querySelector(".mensaje-informativo");
const mensajeInformativoIngreso = document.querySelector(".mensaje-informativo-ingreso");


// Ocultar el botón copiar inicialmente y mostrar algunos textos informativos
botonCopiar.style.display = "none";
mensajeInformativo.style.display = "block";
mensajeInformativoIngreso.style.display = "block";

// Evento al presionar el boton para encriptar
function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    mostrarBotonCopiar();
}

// Evento al presionar el boton para desencriptar
function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mostrarBotonCopiar();
    
}

// Funcion para encriptar el texto
function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i<matrizCodigo.length;i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

// Funcion para desencriptar el texto
function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i=0; i<matrizCodigo.length;i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

// Funcion para copiar el texto al portapapeles
function copiarTexto() {
    navigator.clipboard.writeText(mensaje.value).then(() => {
    }).catch(err => {
        console.error("Error al copiar al portapapeles: ", err);
    });
}

// Asigna la función copiarTexto al botón de copiar
botonCopiar.addEventListener("click", copiarTexto);


// Función para mostrar el botón copiar y ocultar textos informativos
function mostrarBotonCopiar() {
    if (mensaje.value !== "") {
        botonCopiar.style.display = "block";  // Muestra el botón copiar
        mensajeInformativo.style.display = "none";
        mensajeInformativoIngreso.style.display = "none";
    }
}