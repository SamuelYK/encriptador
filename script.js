const entradaTexto=document.querySelector(".entradaTexto")
const salidaTexto=document.querySelector(".resultado")
const estaVacio=document.querySelector(".textoVacio")
const botonCopia=document.querySelector(".botonCopiar")

function abecEncriptado() {
    var abecedario = "abcdefghijklmnopqrstuvwxyz";
    var resultado = [];
  
    for (var i = 0; i < abecedario.length; i++) {
      var letra = abecedario[i];
      var indiceDesplazado = (i + 5) % abecedario.length;
      var letraDesplazada = abecedario[indiceDesplazado];
      resultado.push([letra, letraDesplazada]);
    }
  
    return resultado;
}

function clickEncriptar(){
    if(entradaTexto.value==""){
        
        estaVacio.style.color="#342333"
        salidaTexto.style.backgroundImage = "url('imagenes/Muneco.png')"
        salidaTexto.value=""
    }
    
    else{
    const resultado=encriptar(entradaTexto.value)
    entradaTexto.value=""
    estaVacio.style.color="#f3eff4"
    salidaTexto.style.backgroundImage = "none"
    salidaTexto.value=resultado
    }
}

function clickDesencriptar(){
    if(entradaTexto.value==""){
        
        estaVacio.style.color="#342333"
        salidaTexto.style.backgroundImage = "url('imagenes/Muneco.png')"
        salidaTexto.value=""
    }
    
    else{
    const resultado=desencriptar(entradaTexto.value)
    entradaTexto.value=""
    estaVacio.style.color="#f3eff4"
    salidaTexto.style.backgroundImage = "none"
    salidaTexto.value=resultado
    }
}


function encriptar(mensajeEncriptado){
    var matriz = abecEncriptado();
    let mensaje = mensajeEncriptado.split("")
    for(let n=0;n<mensaje.length;n++){
        for(let i=0;i<matriz.length;i++){
            if(mensaje[n]==matriz[i][0]){
                mensaje[n]=matriz[i][1]
                break;
            }
        }
    }
    
    mensaje=mensaje.toString()
    return mensaje.replaceAll(",","")
}

function desencriptar(mensajeDesencriptado){
    var matriz = abecEncriptado();
    let mensaje = mensajeDesencriptado.split("")
    for(let n=0;n<mensaje.length;n++){
        for(let i=0;i<matriz.length;i++){
            if(mensaje[n]==matriz[i][1]){
                mensaje[n]=matriz[i][0]
                break;
            }
        }
    }
    
    mensaje=mensaje.toString()
    return mensaje.replaceAll(",","")
}

function copiar(){
    navigator.clipboard.writeText(salidaTexto.value)
}

