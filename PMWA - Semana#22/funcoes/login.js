function login(){
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value
    let banco = bdUsu()
    let condJanela

    const rgxEmail = /^[a-z0-9]+@[a-z0-9.-]+\.[a-z]{2,}$/i
    const rgxSen = /^\w{8,25}$/

    let condEmail = rgxEmail.test(email)
    let condSen = rgxSen.test(senha)

    if(!condEmail || !condSen){
        condJanela=false
        document.getElementById("retorno").innerHTML=`<br><p style='margin:5px 10px;font-family: fonte_li'>Preencha os campos corretamente!</p>`
        if(!condEmail){
            document.getElementById("email").style.border="2px red solid"
        }else{
            document.getElementById("email").style.border=""
        }

        if(!condSen){
            document.getElementById("senha").style.border="2px solid red"
        }else{
            document.getElementById("senha").style.border=""
        }
        
    }else{
        campos = document.querySelectorAll(".inputs")
        campos.forEach(campo =>{
            campo.style.border=""
        })
        
        banco.forEach(conta => {//percorre todos os cadastros até achar o usuário e a senha correspondente
            if(conta.Obemail == email && conta.Obsenha == senha){
                document.getElementById("retorno").innerHTML=`<br><p style='margin:5px 10px;font-family: fonte_li'>Login feito!</p>`
                condJanela=true

            }
        });

        if(condJanela==true){
            window.open('/index.html','_self')
        }
    }
    
}

//constante usada para ler o banco de dados 
const bdUsu = () => localStorage.length==0 ? [] : JSON.parse(localStorage.getItem("registro")) // bdUsu : banco de dados usúario

document.getElementById("btnLogin").addEventListener('click', event => {
    event.preventDefault()
    login()
})