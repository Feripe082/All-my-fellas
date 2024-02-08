let resposta = document.getElementById('resposta')
let verificar = document.getElementById('verificar')
let nome = document.getElementById('nome').value

verificar.addEventListener('click', ()=>{
    let nome = document.getElementById('nome').value
    let idade = Number (document.getElementById('idade').value)
    let titulo = Number (document.getElementById('titulo').value)

    console.log("dados do formulario: ", nome,idade,titulo)

    const cidadao = new eleitor()

    cidadao.nome =nome
    cidadao.idade =idade
    cidadao.titulo =titulo

    console.log("instançia do objeto: ", cidadao)

    let mensagem = cidadao.verificaVoto()

        resposta.innerHTML =''
        resposta.innerHTML +=`O eleitor ${cidadao.nome} <br>   `
        resposta.innerHTML +=`tem ${cidadao.idade} anos de idade <br>   `
        resposta.innerHTML +=mensagem
        resposta.style.color ="firebrick"
        resposta.style.fontSize ="1.4rem"
})
