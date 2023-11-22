function cadastro(){
    let email = document.getElementById("email").value
    let senha1 = document.getElementById("senha1").value
    let senha2 = document.getElementById("senha2").value
    let cpf = document.getElementById("cpf").value
    let endc = document.getElementById("endc").value
    let banco = bdUsu()
    let barrador

    const rgxEmail = /^[a-z0-9]+@[a-z0-9.-]+\.[a-z]{2,}$/i
    const rgxEndc = /^\D{1,50}$/
    const rgxCpf = /^\d{3}[.]?\d{3}[.]?\d{3}[-]?\d{2}$/
    const rgxSen = /^\w{8,25}$/

    let condEmail = rgxEmail.test(email)
    let condEndc = rgxEndc.test(endc)
    let condCpf = rgxCpf.test(cpf)
    let condSen1 = rgxSen.test(senha1)
    let condSen2 = rgxSen.test(senha2)
    barrador=false

    if(!condEmail || !condCpf || !condEndc || !condSen1 || !condSen2){
        document.getElementById("retorno").innerHTML= `<p style='margin:5px 10px;font-family:fonte_li'>Preencha os campos de forma correta!</p>`
        if(!condEmail){
            document.getElementById("email").style.border="red solid 3px"
        }else{
            document.getElementById("email").style.border=""
        }
        
        if(!condCpf){
            document.getElementById("cpf").style.border="red solid 3px"
        }else{
            document.getElementById("cpf").style.border=""
        }

        if(senha1!=senha2 || (senha1=="" && senha2=="")){
            document.getElementById("senha1").style.border="red solid 3px"
            document.getElementById("senha2").style.border="red solid 3px"
        }else{
            document.getElementById("senha1").style.border=""
            document.getElementById("senha2").style.border=""
        }

        if(!condEndc){
            document.getElementById("endc").style.border="red solid 3px"
        }else{
            document.getElementById("endc").style.border=""
        }

    }else{
        banco.forEach(conta =>{
            if(conta.Obemail == email){
                document.getElementById("retorno").innerHTML= `<p style='margin:5px 10px;font-family:fonte_li'>Email já existente!</p>`
                barrador=true
            }
        })
        if(barrador==true){
            document.getElementById("email").style.border="red solid 3px"
        }
        if(barrador==false){
            if(senha1==senha2){
                obj = {
                    Obemail : email,
                    Obsenha : senha1,
                    Obcpf : cpf,
                    Obendc : endc
                }  
    
                let vetorbd = respGet()
                vetorbd.push(obj)
                respSet(vetorbd)
                limparcampos()
                document.getElementById("retorno").innerHTML= `<p style='margin:5px 10px;font-family:fonte_li'>Cadastro feito com sucesso</p>`
            }
        }
        
    }
}

const respGet = () => JSON.parse(localStorage.getItem('registro')) ?? []
const respSet = (obj) => localStorage.setItem('registro',JSON.stringify(obj))
//constante usada para ler o banco de dados 
const bdUsu = () => localStorage.length==0 ? [] : JSON.parse(localStorage.getItem("registro")) // bdUsu : banco de dados usúario

document.getElementById("meu-botaoD").addEventListener('click',event => {
    event.preventDefault()
    cadastro()
})

function limparcampos(){
    var campos = document.querySelectorAll(".inputs")
    campos.forEach(campo => {
        campo.value=""
        campo.style.border=""
    });
}