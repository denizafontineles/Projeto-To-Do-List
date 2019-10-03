
const formulario = document.getElementById("container__form") 
const botaoAdiciona = document.getElementById("button-tarefas")
const boxTarefas = document.getElementById("container-tarefas__lista")
const buttonRiscarTarefa = document.getElementById("button__riscar-tarefa")
const buttonExcluir = document.getElementById("button__excluir")
let digitarTarefas = document.getElementById("formulario-input")
let buttonSelecionados = document.getElementById("button__selecionados")
let dragging

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault()
    let guardarValorTaf = digitarTarefas.value.trim()
    
    if (guardarValorTaf === "") {
        digitarTarefas.setAttribute("placeholder", "Digite tarefa válida, senhora.")
        // digitarTarefas.classList.add("erro-vermelho")

    } 
    
    else {
        let listarTarefas = document.createElement("div")
        let mostrarTarefas = document.createElement("p")
        let cancel = document.createElement("span")
        digitarTarefas.setAttribute("placeholder", "Digite sua tarefa")
        let buttonEditar = document.createElement("span")
        
        boxTarefas.appendChild(listarTarefas)
        listarTarefas.appendChild(mostrarTarefas)
        listarTarefas.appendChild(buttonEditar)
        listarTarefas.appendChild(cancel)
        
        listarTarefas.setAttribute("class", "lista__tarefa")
        mostrarTarefas.setAttribute("class", "paragrafo")
        cancel.setAttribute("class", "botao_x")
        digitarTarefas.getAttribute("placeholder")
        buttonEditar.setAttribute("class", "botao_editar")
       
        mostrarTarefas.textContent = guardarValorTaf
        
        cancel.textContent = "x"
        buttonEditar.textContent = "Editar"

        //         let inputEditar = document.createElement("input")
        //         buttonEditar.appendChild(inputEditar)
        //         inputEditar.setAttribute("type", "text")
        //         inputEditar.setAttribute("class", "input_editar")
        //         mostrarTarefas.remove()
        // })
        
        listarTarefas.addEventListener("dblclick", function(evento){
            listarTarefas.classList.remove("riscar_tarefa")
            listarTarefas.setAttribute("contentEditable", true)
        })
        
        
        
        
        
        
        
        
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
            
            buttonSelecionados.addEventListener("click", function(evento){
                
            })
        })

        // ============== DRAG DROP ============
        
        mostrarTarefas.setAttribute("draggable", "true")
        boxTarefas.setAttribute("draggable", "true")
        listarTarefas.setAttribute("draggable", "true")
    }
    
    boxTarefas.addEventListener("dragstart", function(ev) {
        dragging = ev.target.closest(".lista__tarefa")
    })
    
    boxTarefas.addEventListener("dragover", function(ev){
        ev.preventDefault()
        const node = ev.target.closest(".lista__tarefa")
        this.insertBefore(dragging, node )
    })
        boxTarefas.addEventListener("dragend", function (ev) { 
        dragging = null     
    })
    
    formulario.reset()
})


