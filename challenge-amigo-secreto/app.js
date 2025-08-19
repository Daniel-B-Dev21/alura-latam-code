// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];
let amigosSorteados = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    if (nombreAmigo == '') {
        alert('Esta vacio');
    } else {
        if (listaAmigos.includes(nombreAmigo)) {
            alert('Ya escribiste ese nombre');
        } else {
            listaAmigos.push(nombreAmigo);
            console.log(listaAmigos);
        }
        
    }
}


function sortearAmigo() {
    // Si la lista de amigo sorteados es igual a la lista de amigos:
    if (amigosSorteados.length === listaAmigos.length) {
        alert('Se han sorteado todos los amigos');
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
            alert(`Tu amigo secreto es ${amigoSecreto}`);
            return amigoSecreto;
        }
    } 
}
