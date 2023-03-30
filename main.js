const numeroA = parseFloat(document.getElementById('numero-a').value);
const numeroB = parseFloat(document.getElementById('numero-b').value);

function comparaNumero(numeroA, numeroB){
    if (numeroB > numeroA){
        alert('Formulário válido, pois o valor de B é maior que A');
        return true;
    } else {
        alert('Formulário inválido, pois o valor de A é maior que B');
        return false;
    }
}

const formEValido = comparaNumero(numeroA, numeroB);