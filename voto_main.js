let resposta = document.getElementById('resposta')
let verificar = document.getElementById('verificar')
let nome = document.getElementById('nome').value

verificar.addEventListener('click', ()=>{
    let nome = document.getElementById('nome').value
    let idade = Number (document.getElementById('idade').value)
    let titulo = Number (document.getElementById('titulo').value)

    console.log("dados do formulario: ", nome,idade,titulo)

    const cidadao = new eleitor

    cidadao.nome
    cidadao.idade
    cidadao.titulo

    console.log("instançia do objeto: ", cidadao)

    cidadao.verificaVoto
}

)