const resultado = document.querySelector(' .result ');
const confirmar = document.querySelector(' .equal ');

function insert(valor) {
    resultado.innerHTML += valor;
}

function clean() {
    resultado.innerHTML = '';
}

function backspace() {
    if(resultado.textContent){
        let result = document.getElementById('display').innerHTML
        resultado.innerHTML = result.substring(0, result.length - 1);
    } 
}

function confirma() {
    if(resultado.textContent != 'Erro') {
        document.getElementById('display').innerHTML = eval(resultado.innerHTML)
    }
}