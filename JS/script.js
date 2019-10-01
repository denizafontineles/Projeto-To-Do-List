 
// 1 pegar o id do input
const formulario = document.getElementById("container__form")
const botaoAdiciona = document.getElementById("button-tarefas")

// const tarefas = document.getElementById("container-tarefas__lista")

formulario.addEventListener("submit", function(evento){
    evento.preventDefault()
    let digitarTarefas = document.getElementById("formulario-input")
    let guardarValorTaf = digitarTarefas.value.trim()

    botaoAdiciona.addEventListener("")


    // let mensagem = document.createElement("p")
    // tarefas.appendChild(mensagem)
    // mensagem.textContent = mensagem

})


// 2 classe do botão ADD
// 3 container onde vai ficar as tarefas
// 4 colocar uma ação que manda o valor que o usuário digitou para o botão ADD

// 5 com a ação do botão ADD vai direcionar para as terefas
