const banco = [
    {nomeCliente : 'neymar',
    idade : 26,
    email : 'alhilal@gmail.com',
    senha : '1234'},

    {nomeCliente : 'messi',
    idade : 31,
    emailCliente : 'goat@gmail.com',
    senha : '1234'},

    {nomeCliente : 'Marcos Leonardo',
    idade : 19,
    emailCliente : 'monstro@gmail.com',
    senha : '1234'},

]

function cadastrohome() {
    var nome = document.getElementById('campnome').value;
    var email = document.getElementById('campemail').value;

    const regex = /^[a-z0-9]+@[a-z0-9.-]+\.[a-z]{2,}$/i
    var cond = regex.test(email)

    var nomeExist = false 
    var emailExis = false

    banco.forEach((valorAtual, indice, arrayBanco) => {
        if(valorAtual.nomeCliente == nome){
            nomeExist = true
        }else if(valorAtual.emailCliente == email){
            emailExis = true
        }

    });

    if (nome == false || email == false || nome.length<2 || cond == false) {
        alert('Voce se cadastrou incorretamente, tente novamente!');
    }else if(nomeExist==true){
        alert("Nome já Cadastrado")
    }else if(emailExis==true){
        alert("Email já Cadastrado") 
    }else{
        alert('Voce se cadastrou com sucesso!!');
    }

}
