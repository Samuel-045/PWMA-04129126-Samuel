function cadastro(){
    var nome = document.getElementById('nome').value;
    var idade = document.getElementById('idade').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var senha2 = document.getElementById('senha2').value;
    
    if (nome == false && idade == false && email == false && senha == false && senha2 == false){
        alert('Voce se cadastrou incorretamente, tente novamente!');
    }else{
        if(senha == senha2){
            alert('Voce se cadastrou com sucesso!!');
        }else{
            alert('As senhas nao coincidem');
        }
    }
    
    }