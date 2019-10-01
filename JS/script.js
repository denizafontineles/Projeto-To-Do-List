
// 1 pegar o id do input
const formulario = document.getElementById("container__form")
const botaoAdiciona = document.getElementById("button-tarefas")
const boxTarefas = document.getElementById("container-tarefas__lista")
const buttonRiscarTarefa = document.getElementById("button__riscar-tarefa")
const buttonExcluir = document.getElementById("button__excluir")

// const tarefas = document.getElementById("container-tarefas__lista")

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault()
    let digitarTarefas = document.getElementById("formulario-input")
    let guardarValorTaf = digitarTarefas.value.trim()

    if (guardarValorTaf === "") {
        digitarTarefas.setAttribute("placeholder", "Digite tarefa válida, senhora.")

    } else {
        let listarTarefas = document.createElement("div")
        listarTarefas.setAttribute("class", "lista__tarefa")
        boxTarefas.appendChild(listarTarefas)
        let mostrarTarefas = document.createElement("p")
        listarTarefas.appendChild(mostrarTarefas)
        let cancel = document.createElement("button")
        cancel.setAttribute("class", "botao_x")
        cancel.textContent = "x"
        listarTarefas.appendChild(cancel)

        mostrarTarefas.textContent = guardarValorTaf
        digitarTarefas.getAttribute("placeholder")
        
        mostrarTarefas.addEventListener("click", function (evento) {
            if (mostrarTarefas.classList.contains("riscar__tarefa")) {
                mostrarTarefas.classList.remove("riscar__tarefa")
                
            } else {
                mostrarTarefas.setAttribute("class", "riscar__tarefa")
            }
        })

        cancel.addEventListener("click", function(evento){
            listarTarefas.remove()
        })

        buttonRiscarTarefa.addEventListener("click", function(evento){
            if(mostrarTarefas){
                mostrarTarefas.classList.add("riscar__tarefa")}
        })

        buttonExcluir.addEventListener("click", function(){
                listarTarefas.remove()
            
        })
        



    }

    formulario.reset()
    
})

