const text_area = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

//Validamos que el texto si cumpla con tener solo letras minúsculas y sin acentos.

function validarTexto(){
    let textoEscrito = document.querySelector(".text-area").value;
    let validador = textoEscrito.match(/^[a-z]*$/);

    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}

//Se crea la función del boton ENCRIPTAR y formateamos el textArea del texto a encriptar.
function botonEncriptar(){
    if(!validarTexto()) {
        const textoEncriptado = encriptar(text_area.value)
        mensaje.value = textoEncriptado
        mensaje.style.backgroundImage = "none"
        text_area.value = "";
    
    }
}

/*Llaves
    La letra "e" es convertida para "enter"
    La letra "i" es convertida para "imes"
    La letra "a" es convertida para "ai"
    La letra "o" es convertida para "ober"
    La letra "u" es convertida para "ufat"
    */

/*Creamos la función para añadir los textos cifrados mediante un bucle por cada vocal.
    cada vez que encuentre una vocal añadirá el texto correspondiente:
        "e = añadira 'enter'"
        "i = añadira 'imes'"
        "a = añadira 'ai'"
        "o = añadira 'ober'"
        "u = añadira 'ufat'"*/
        
function encriptar(cadenaEncriptada){
    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    cadenaEncriptada = cadenaEncriptada.toLowerCase()

    for(let i = 0; i < matriz.length; i++){
        if(cadenaEncriptada.includes(matriz[i][0])){
            cadenaEncriptada = cadenaEncriptada.replaceAll(matriz[i][0], matriz[i][1])

        }

    }
    return cadenaEncriptada
}


//Se le da función al boton desencriptar.
function botonDesencriptar(){
    const textoEncriptado = desencriptar(text_area.value)
    mensaje.value = textoEncriptado
    text_area.value = "";
    
}

//Creamos la función para desencriptar el texto.
/*Si el texto a encriptar contiene entre los strings:
    "enter",
    "imes",
    "ai",
    "ober"
    "ufat"
Lo tomará como texto a desencriptar*/

function desencriptar(cadenaDesencriptada){
    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];;
    cadenaDesencriptada = cadenaDesencriptada.toLowerCase()

    for(let i = 0; i < matriz.length; i++){
        if(cadenaDesencriptada.includes(matriz[i][1])){
            cadenaDesencriptada = cadenaDesencriptada.replaceAll(matriz[i][1] , matriz[i][0])
        }

    }
    return cadenaDesencriptada
}

//Función para copiar el texto encriptado o desencriptado.
function copiarTexto(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")
}


