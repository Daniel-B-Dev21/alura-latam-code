// Declarando una lista vacia de amigos:
let listaAmigos = [];
// Declarando la lista que almacenara los amigos sorteados para evitar repeticion:
let amigosSorteados = [];

function asignarTextoElemento(elemento, texto) {
    // Cambia el texto de un elemento HTML
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function limpiarCaja() {
    // Limpia el campo de entrada del nombre del amigo:
    document.querySelector('#amigo').value = '';
}

function agregarAmigo() {
    // Obtiene el valor del campo de texto de amigo:
    let nombreAmigo = document.getElementById('amigo').value;
    if (nombreAmigo == '' || nombreAmigo.length < 3) {
        // Si el nombre del amigo esta vacio o tiene menos de 3 caracteres:
        alert("Por favor, ingrese un nombre valido.");
    } else {
        // Verificando si el amigo ya se escribio antes:
        if (listaAmigos.includes(nombreAmigo)) {
            asignarTextoElemento('#resultado', "Ya agregaste un amigo con ese nombre.");
            limpiarCaja()
        } else {
            // Si es un nombre nuevo lo anade a la lista de amigos:
            asignarTextoElemento('#resultado', '');
            listaAmigos.push(nombreAmigo);
            limpiarCaja();
            // Mostrando el amigo en la iterfaz:
            mostrarListaAmigos(nombreAmigo);
            
        }
        
    }
}


function sortearAmigo() {
    // Verificando que se hayan agregado amigos antes del sorteo:
    if (listaAmigos.length > 1) {
        // Si la lista de amigo sorteados es igual a la lista de amigos:
        if (amigosSorteados.length === listaAmigos.length) {
            // Cuando ya no hay mas amigos por sortear:
            asignarTextoElemento('#resultado', "Ya se han sorteado todos tus amigos.");
            asignarTextoElemento("#listaAmigos", '')
            // Reiniciando la aplicacion:
            listaAmigos = [];
            amigosSorteados = [];
            
        } else {
            // Se crea un indice aleatorio basado en la extension de la lista de amigos:
            let indiceAleatorio = parseInt(Math.random()*listaAmigos.length);
            // El amigo secreto sera un elemento de la lista con el indice aleatorio:
            let amigoSecreto = listaAmigos[indiceAleatorio];
            // Verificando que el amigo aun no se haya sorteado:
            if (amigosSorteados.includes(amigoSecreto)) {
                // La funcion se llama a si misma y elige otro amigo:
                sortearAmigo();
            } else {
                // Si el amigo aun no se ha sorteado lo anade a la lista de sorteados y lo devuelve:
                amigosSorteados.push(amigoSecreto);
                // Limpiando la lista a mostrar:
                asignarTextoElemento("#listaAmigos", '');
                // Mostrando el amigo secreto sorteado
                asignarTextoElemento('#resultado', `El amigo secreto sorteado es: ${amigoSecreto}.`);
                return amigoSecreto;
            }
        } 
    } else {
        // Cuando se ha presionado sortear sin agregar amigos:
        asignarTextoElemento('#resultado', "Añade al menos 2 amigos para realizar el sorteo.");
    }
    
}

function mostrarListaAmigos(nombreAmigo) {
    // Cera un elemento de tipo lista para el HTML:
    let elemento = document.createElement("li");
    // El contenido del elemento creado sera el nombre del amigo:
    elemento.textContent = nombreAmigo;
    // Selecciona la lista del HTML:
    let objetoLista = document.querySelector('#listaAmigos');
    // Agrega el elemento lista que creamos a la lista por defecto del HTML y lo muestra:
    objetoLista.appendChild(elemento);
    return;
}