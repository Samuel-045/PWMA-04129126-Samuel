function cadastrohome() {
    var nome = document.getElementById('campnome').value;
    var email = document.getElementById('campemail').value;

    if (nome == false || email == false) {
        alert('Voce se cadastrou incorretamente, tente novamente!');
    } else {
        alert('Voce se cadastrou com sucesso!!');
    }
}