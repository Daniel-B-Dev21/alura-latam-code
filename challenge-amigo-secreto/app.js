// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];
let amigosSorteados = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    if (nombreAmigo == '') {
        asignarTextoElemento('#resultado', "No haz escrito el nombre de tus amigos");
    } else {
        if (listaAmigos.includes(nombreAmigo)) {
            asignarTextoElemento('#resultado', "Ya agregaste un amigo con ese nombre");
            limpiarCaja()
        } else {
            asignarTextoElemento('#resultado', '');
            listaAmigos.push(nombreAmigo);
            limpiarCaja()
            asignarTextoElemento("#listaAmigos", listaAmigos);
        }
        
    }
}


function sortearAmigo() {
    // Si la lista de amigo sorteados es igual a la lista de amigos:
    if (amigosSorteados.length === listaAmigos.length) {
        asignarTextoElemento('#resultado', "Ya se han sorteado todos tus amigos");
        asignarTextoElemento("#listaAmigos", '')
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
            console.log(amigosSorteados);
            asignarTextoElemento('#resultado', `Tu amigo secreto es: ${amigoSecreto}`);
            return amigoSecreto;
        }
    } 
}
