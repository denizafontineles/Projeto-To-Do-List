
const formulario = document.getElementById("container__form") 
const botaoAdiciona = document.getElementById("button-tarefas")
const boxTarefas = document.getElementById("container-tarefas__lista")
const buttonRiscarTarefa = document.getElementById("button__riscar-tarefa")
const buttonExcluir = document.getElementById("button__excluir")
let digitarTarefas = document.getElementById("formulario-input")
let dragging

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault()
    let guardarValorTaf = digitarTarefas.value.trim()
    
    if (guardarValorTaf === "") {
        digitarTarefas.setAttribute("placeholder", "Digite tarefa válida, senhora.")
        // digitarTarefas.classList.add("erro-vermelho")

    } else {

        digitarTarefas.setAttribute("placeholder", "Digite sua tarefa")

        let listarTarefas = document.createElement("div")
        listarTarefas.setAttribute("class", "lista__tarefa")
        boxTarefas.appendChild(listarTarefas)
        
        let mostrarTarefas = document.createElement("p")
        mostrarTarefas.setAttribute("id", "paragrafo")
        listarTarefas.appendChild(mostrarTarefas)
        mostrarTarefas.textContent = guardarValorTaf
        digitarTarefas.getAttribute("placeholder")
        
        let cancel = document.createElement("span")
        cancel.setAttribute("class", "botao_x")
        cancel.textContent = "x"
        listarTarefas.appendChild(cancel)
        
        mostrarTarefas.addEventListener("click", function (evento) {
            if (mostrarTarefas.classList.contains("riscar__tarefa")) {
                mostrarTarefas.classList.remove("riscar__tarefa")
                
            } else {
                mostrarTarefas.setAttribute("class", "riscar__tarefa")
            }
        })
        
        cancel.addEventListener("click", function (evento) {
            listarTarefas.remove()
        })
        
        buttonRiscarTarefa.addEventListener("click", function (evento) {
            if (mostrarTarefas) {
                mostrarTarefas.classList.add("riscar__tarefa")
            }
        })
        
        buttonExcluir.addEventListener("click", function () {
            listarTarefas.remove()
            
        })
        
        mostrarTarefas.setAttribute("draggable", "true")
        boxTarefas.setAttribute("draggable", "true")
        listarTarefas.setAttribute("draggable", "true")
    }
    
    boxTarefas.addEventListener("dragstart", function(ev) {
        dragging = ev.target.closest(".lista__tarefa")
    })
    
    boxTarefas.addEventListener("dragover", function(ev){
        ev.preventDefault()
        const posicao = ev.target.closest(".lista__tarefa")
        this.insertBefore(dragging, posicao )
    })
    
    boxTarefas.addEventListener("dragend", function (ev) { 
        
        dragging = null     
    })
    
    formulario.reset()
})


